import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"

import Layout from "../components/Layout"
import ProjectCard from "../components/ProjectCard"
import { useProjects } from "../hooks/use-projects"
import GitHubShowcase from "../components/GitHubShowcase"
import SEO from "../components/SEO"
import Section from "../components/Section"

const CodePage: React.FC<PageProps> = () => {
  const projects = useProjects()

  return (
    <Layout>
      <Section
        title="Software Projects"
        subtitle="Here are a collection of projects I've worked on ~ for fun or to learn ~
        that I wanted to share."
        first
      >
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
      </Section>
      <Section title="Github">
        <GitHubShowcase />
      </Section>
    </Layout>
  )
}

export default CodePage

export const Head: HeadFC = () => (
  <SEO
    title="Software Projects"
    description="A collection of software projects Stephen has worked on ~ for fun or to learn ~
that he wanted to share."
  />
)
