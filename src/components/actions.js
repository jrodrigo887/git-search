import React from 'react'
import PropTypes from 'prop-types'


const ActionsButton = ({getRepos, getStarred}) => (
    <div className="actions">
        <button type='button' value='favoritos' onClick={ getRepos }>Repositórios</button>
        <button type='button' value='repositorios' onClick={ getStarred }>Favoritos</button>
    </div>
)

// ActionsButton.propTypes = {
//     TitleButton: PropTypes.string.isRequired,
//     handleButton: PropTypes.func.isRequired
// }

export default ActionsButton