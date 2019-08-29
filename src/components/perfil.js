import React from 'react'
import PropTypes from 'prop-types'

const Perfil = ({ userinfo }) => (
    <div className="user-info">
        <img src={userinfo.photo} />

        <h2 className="username"><a href={`https://github.com/${userinfo.login}`} >{ userinfo.username }</a></h2>

        <ul className="repos-info">
            <li>Repositórios: { userinfo.repos }</li>
            <li>Seguidores: { userinfo.followers } </li>
            <li>Seguindo: { userinfo.following } </li>
        </ul>
    </div>
)

Perfil.propType = {
    userinfo: PropTypes.shape({
        username: PropTypes.string.isRequired,
        login: PropTypes.string.isRequired,
        photo: PropTypes.string.isRequired,
        repos: PropTypes.number.isRequired,
        followers: PropTypes.number.isRequired,
        following: PropTypes.number.isRequired
    }),
}

export default Perfil