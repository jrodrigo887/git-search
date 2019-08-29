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
      star: []

    }
  }

  componentDidMount() {
    if (this.state.userInfo != null) {
      axios.get(`https://api.github.com/users/users/${this.state.login}`)
        .then(res => {
          const person = res.data;
          console.log(person)
          this.setState({ userInfo: person });
        })
    }
  }

  handleSearch(e) {
    const value = e.target.value
    const keyvalue = e.which || e.keyCode;
    const ENTER = 13

    if (keyvalue === ENTER) {
      axios.get(`https://api.github.com/users/${value}`).then((res) => {
        console.log(res.name)
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
        })
      })

    }
  }

  getReponse(type) {
    return (e) => {
      console.log(type)
      
      axios.get(`https://api.github.com/users/${this.state.userInfo.login}/${type}`)
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
        handleSearch={(e) => this.handleSearch(e)}
        getRepos={this.getReponse('repos')}
        getStarred={this.getReponse('starred')}
      />

    )

  }
}

export default App;
