import React, { Component } from 'react'
import { CardList } from './components/card_list/card_list.component'
import { SearchBox } from './components/search_box/search_box.component'
import { Champs } from './components/championJson'

class App extends Component{

  constructor(){
    super()
    
    this.state = { 
      champs: [],
      search: ''
    }
  }

  async componentDidMount(){
    const champs = Champs

    this.setState({champs: Object.values(champs.data)})
  }

  setSearch = value => this.setState({ search: value })

  getFilteredChamps = () => this.state.champs.filter(r => r.name.toLowerCase()
                                             .includes(this.state.search.toLowerCase()))

  render() {

    return (
      <div className="App">
          <div className="title">
            <h1>LOL-Cards</h1>
          </div>
          <SearchBox placeholder="Buscar campeón" handleChange={this.setSearch}/>
          <CardList champs={this.getFilteredChamps()}/>
      </div>
    )
  }
}

export default App