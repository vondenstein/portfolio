import React from "react"
import { useGitHubRepos } from "../../hooks/use-github-repositories"
import { isBright } from "../../utils/is-bright"
import Block from "../Block"
import Button from "../Button"

import * as styles from "./GitHubShowcase.module.css"

const GitHubShowcase: React.FC = () => {
  const repositories = useGitHubRepos()

  return (
    <div>
      <div className={styles.cardContainer}>
        {repositories.map(({ node }: { node: Queries.GitHub_Repository }) => {
          const background = node?.primaryLanguage?.color!

          return (
            <a
              href={node?.url}
              title={`${node?.name} on GitHub`}
              className={styles.card}
            >
              <div
                style={{
                  backgroundColor: `${background}`,
                }}
                className={styles.contentContainer}
              >
                <div className={styles.content}>
                  <div className={styles.top}>
                    <h3
                      style={{
                        color: `${
                          isBright(background) ? "#3f3f3f" : "#fdf9f2"
                        }`,
                      }}
                    >
                      {node?.name}
                    </h3>
                    <div
                      className={styles.badge}
                      style={{
                        color: `${
                          isBright(background) ? "#3f3f3f" : "#fdf9f2"
                        }`,
                        backgroundColor: `${
                          isBright(background)
                            ? "rgba(63, 63, 63, 0.1)"
                            : "rgba(253, 249, 242, 0.3)"
                        }`,
                      }}
                    >
                      {node?.isArchived ? (
                        <>Archive</>
                      ) : (
                        <>
                          <img
                            src={
                              isBright(background)
                                ? "/icons/star-dark.svg"
                                : "/icons/star.svg"
                            }
                            alt="Star"
                            className={styles.icon}
                          />
                          {node?.stargazerCount}
                        </>
                      )}
                    </div>
                  </div>
                  <p
                    style={{
                      color: `${isBright(background) ? "#3f3f3f" : "#fdf9f2"}`,
                    }}
                    className={styles.description}
                  >
                    {node?.description}
                  </p>
                </div>
              </div>
            </a>
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

export default GitHubShowcase
