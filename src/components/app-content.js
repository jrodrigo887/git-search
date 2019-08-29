import React from 'react'
import PropTypes from 'prop-types'
import Perfil from './perfil'
import Search from './search'
import Content from './content'
import ActionsButton from './actions'

const AppContent = ({ userInfo, repos, starred, handleSearch, getStarred, getRepos}) => (
    <div className="app">
        <Search handleSearch={ handleSearch }/>
      
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
    starred: PropTypes.array.isRequired
}

export default AppContent