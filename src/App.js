import React, { Component } from 'react';
import AppContent from './components/app-content'
import './components/App.css'
import axios from 'axios'

class App extends Component {
  constructor() {
    super()
    this.state = {
      userInfo: null,
      repos: [],
      starred: [],
      reposite: [
        {
          name: "",
          html_url: ""
        }
      ],
      isLoader: false

    }
  }

  getApiGit(username, type) {
    console.log('Nome: ', username)
    const userApi = username ? `/${username}` : ''
    const typeApi = type ? `/${type}` : ''
    return `https://api.github.com/users${userApi}${typeApi}`
  }

  handleSearch(e) {
    const value = e.target.value
    const keyvalue = e.which || e.keyCode;
    const ENTER = 13
   

    if (keyvalue === ENTER) {
      this.setState({isLoader: true})

      axios.get(this.getApiGit(value)).then((res) => {
        var dat = res.data
        this.setState({
          userInfo: {
            username: dat.name,
            login: dat.login,
            photo: dat.avatar_url,
            repos: dat.public_repos,
            followers: dat.followers,
            following: dat.following

          },
          repos: [],
          starred: []
        })
      }).finally(() => {this.setState({isLoader: false})})
    }
  }

  getReponse(type) {
    return (e) => {
      const username = this.state.userInfo.login
      axios.get(this.getApiGit(username, type))
        .then((res) => {
          console.log("teste de requisição: ", res.data)
          this.setState({
            //pode-se usar o type neste caso pois representa a propriedade starred ou repos. uma feature do ecma06
            [type]: res.data.map((element) => {
              return {
                name: element.name,
                link: element.html_url
              }
            })
          })

        }).catch((e) => {
          console.log("Erro ---> ", e)
        })
    }



  }

  render() {
    return (
      <AppContent userInfo={this.state.userInfo}
        repos={this.state.repos}
        starred={this.state.starred}
        reposite={this.state.reposite}
        star={this.state.star}
        isLoader={this.state.isLoader}
        handleSearch={(e) => this.handleSearch(e)}
        getRepos={this.getReponse('repos')}
        getStarred={this.getReponse('starred')}
      />

    )

  }
}

export default App;
