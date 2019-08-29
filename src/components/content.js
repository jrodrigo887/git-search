import React from 'react'
import PropTypes from 'prop-types'

const Content = ({className, title, repos}) => (
    <div className={className}>
        <h2> {title}: </h2>
        <ul>
          {repos.map((item, index) => (
              <li key={index}><a href={item.link}>{item.name}</a></li>
          ))}
        </ul>
    </div>
)

Content.propTypes = {
    className: PropTypes.string, 
    title: PropTypes.string.isRequired, 
    repos: PropTypes.array
}

export default Content