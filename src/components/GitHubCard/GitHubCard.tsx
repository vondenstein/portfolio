import React from "react"
import { useGitHubRepos } from "../../hooks/use-github-repositories"
import Block from "../Block"
import Button from "../Button"

import * as styles from "./GitHubCard.module.css"

const GitHubCard = ({}) => {
  const repositories = useGitHubRepos()

  return (
    <div>
      <div className={styles.cardContainer}>
        {repositories.map(({ node }: Queries.GitHub_PinnableItemEdge) => {
          return (
            <div
              style={{
                backgroundColor: `${node?.primaryLanguage.color}`,
              }}
              className={styles.card}
            >
              <a
                href={node?.url}
                title={`${node?.name} on GitHub`}
                className={styles.link}
              >
                <div className={styles.content}>
                  <div className={styles.top}>
                    <h3>{node?.name}</h3>
                    <div className={styles.badge}>
                      {node?.isArchived ? (
                        <>Archive</>
                      ) : (
                        <>
                          <object
                            type="image/svg+xml"
                            data={`icons/star.svg`}
                            className={styles.icon}
                          />
                          {node?.stargazerCount}
                        </>
                      )}
                    </div>
                  </div>
                  <p className={styles.description}>{node?.description}</p>
                </div>
              </a>
            </div>
          )
        })}
      </div>

      <Block>
        <h2>Want to see more?</h2>
        <p className={styles.blockText}>
          Most of my projects are available for viewing on GitHub. If you'd like
          to see all of my projects - some of which are not listed here - head
          over to GitHub to check them out!{" "}
        </p>
        <Button
          to="https://github.com/vondenstein"
          title="Vondenstein on GitHub"
        >
          GitHub
        </Button>
      </Block>
    </div>
  )
}

export default GitHubCard
