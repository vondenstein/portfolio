import React from "react"
import { useGitHubRepos } from "../../hooks/use-github-repositories"
import Button from "../Button"

import * as styles from "./GitHubCard.module.css"

const GitHubCard = ({}) => {
  const repositories = useGitHubRepos()

  return (
    <div>
      <div className={styles.cardContainer}>
        <div
          style={{
            backgroundColor: `${repositories[0].node.primaryLanguage.color}`,
          }}
          className={styles.left}
        >
          <div className={styles.content}>
            <div className={styles.top}>
              <h3>
                <a href={repositories[0].node.url}>
                  {repositories[0].node.name}
                </a>
              </h3>
              <div className={styles.badge}>
                <object
                  type="image/svg+xml"
                  data={`icons/star.svg`}
                  className={styles.icon}
                />
                {repositories[0].node.stargazerCount}
              </div>
            </div>
            <p className={styles.description}>
              {repositories[0].node.description}
            </p>
          </div>
        </div>
        <div
          style={{
            backgroundColor: `${repositories[1].node.primaryLanguage.color}`,
          }}
          className={styles.right}
        >
          <div className={styles.content}>
            <div className={styles.top}>
              <h3>
                <a href={repositories[1].node.url}>
                  {repositories[1].node.name}
                </a>
              </h3>
              <div className={styles.badge}>
                <object
                  type="image/svg+xml"
                  data={`icons/star.svg`}
                  className={styles.icon}
                />
                {repositories[1].node.stargazerCount}
              </div>
            </div>
            <p className={styles.description}>
              {repositories[1].node.description}
            </p>
          </div>
        </div>
      </div>
      <div className={styles.links}>
        {repositories
          .slice(2)
          .map(({ node }: Queries.GitHub_PinnableItemEdge) => {
            return (
              <a href={node?.url} className={styles.link}>
                <Button dark>{node?.name}</Button>
              </a>
            )
          })}
      </div>
    </div>
  )
}

export default GitHubCard
