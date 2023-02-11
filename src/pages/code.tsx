import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"

import Layout from "../components/Layout"
import ProjectCard from "../components/ProjectCard"
import { useProjects } from "../hooks/use-projects"
import GitHubCard from "../components/GitHubCard"

const CodePage: React.FC<PageProps> = () => {
  const projects = useProjects()

  return (
    <Layout>
      <h1>Software Projects</h1>
      <p>
        Here are a collection of projects I've worked on ~ for fun or to learn ~
        that I wanted to share.
      </p>
      {projects.edges.map(({ node }: Queries.ProjectsJsonEdge) => (
        <ProjectCard
          key={node.id}
          id={node.id}
          children={node.children}
          internal={node.internal}
          parent={node.parent}
          title={node.title}
          description={node.description}
          icon={node.icon}
          color={node.color}
          links={node.links}
        />
      ))}
      <h2>GitHub</h2>
      <GitHubCard />
    </Layout>
  )
}

export default CodePage

export const Head: HeadFC = () => <title>Code Page</title>
