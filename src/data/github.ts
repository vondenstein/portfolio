const GITHUB_TOKEN = process.env.GITHUB_TOKEN
if (!GITHUB_TOKEN) {
  throw new Error("GITHUB_TOKEN environment variable is required")
}

const GITHUB_API = "https://api.github.com/graphql"

async function query<T>(graphql: string): Promise<T> {
  const res = await fetch(GITHUB_API, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${GITHUB_TOKEN}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ query: graphql }),
  })

  if (!res.ok) {
    throw new Error(`GitHub API error: ${res.status} ${res.statusText}`)
  }

  const json = await res.json()

  if (json.errors) {
    throw new Error(`GitHub GraphQL error: ${json.errors[0].message}`)
  }

  return json.data
}

export interface GitHubProfile {
  id: string
  url: string
}

export interface GitHubRepo {
  id: string
  name: string
  isArchived: boolean
  nameWithOwner: string
  description: string
  homepageUrl: string
  url: string
  stargazerCount: number
  primaryLanguage: {
    color: string
  } | null
}

export async function fetchGitHubProfile(): Promise<GitHubProfile> {
  const data = await query<{ viewer: GitHubProfile }>(`{
    viewer {
      id
      url
    }
  }`)
  return data.viewer
}

export async function fetchPinnedRepos(): Promise<GitHubRepo[]> {
  const data = await query<{
    viewer: {
      pinnedItems: {
        nodes: GitHubRepo[]
      }
    }
  }>(`{
    viewer {
      pinnedItems(first: 6) {
        nodes {
          ... on Repository {
            id
            name
            isArchived
            nameWithOwner
            description
            homepageUrl
            url
            stargazerCount
            primaryLanguage {
              color
            }
          }
        }
      }
    }
  }`)
  return data.viewer.pinnedItems.nodes
}
