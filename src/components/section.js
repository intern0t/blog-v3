import * as React from "react"
import { Link } from "gatsby"

const Section = ({ location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  const isRootPath = location.pathname === rootPath
  let header

  if (isRootPath) {
    header = (
      <h1 className="main-heading">
        <Link to="/">{title}</Link>
      </h1>
    )
  } else {
    header = (
      <Link className="header-link-home" to="/">
        {title}
      </Link>
    )
  }

  return (
    <div className="front-section" data-is-root-path={isRootPath}>
      <SectionTitle title={title} />
      <main>{children}</main>
    </div>
  )
}

const SectionTitle = ({ title }) => {
  const LinkTo =
    title.toLowerCase() === "projects" ? "More Projects →" : "Read More →"
  const isProjectPage = title.toLowerCase() === "projects"

  return (
    <div className="section-title">
      <div className="section-title-wrapper">
        {title && title.length > 0 ? (
          <span className="section-title-text">{title}</span>
        ) : null}

        {title ? (
          <Link
            className="header-link-home"
            to={`/${isProjectPage ? 'projects' : 'blog'}`}
          >
            {LinkTo}
          </Link>
        ) : null}
      </div>
      <hr />
    </div>
  )
}

export default Section
