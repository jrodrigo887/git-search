import React from 'react'
import PropTypes from 'prop-types'
import Perfil from './perfil'
import Search from './search'
import Content from './content'
import ActionsButton from './actions'

const AppContent = ({ userInfo, repos, starred, handleSearch, isLoader ,getStarred, getRepos}) => (
    <div className="app">
        <Search  isDisabled={ isLoader } handleSearch={ handleSearch }/>
        {isLoader && <div>carregando...</div> }
        {!!userInfo && <Perfil userinfo={ userInfo }/>}
        {!!userInfo && <ActionsButton getRepos={ getRepos } getStarred={getStarred} />}

       
        {!!repos.length && <Content
            className='repos'
            title='Repositórios'
            repos={repos} />
        }

        {!!starred.length && <Content
            className='starred'
            title='Favoritos'
            repos={starred} />
        }

    </div>
)

AppContent.propTypes = {
    userInfo: PropTypes.object, 
    repos: PropTypes.array.isRequired, 
    starred: PropTypes.array.isRequired,
    isLoader: PropTypes.bool.isRequired,
    getRepos: PropTypes.func.isRequired,
    getStarred: PropTypes.func.isRequired,
    handleSearch: PropTypes.func.isRequired
}

export default AppContent