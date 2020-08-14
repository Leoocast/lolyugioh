import React, { Component } from 'react'
import { CardList } from './components/card_list/card_list.component'
const champUrl = 'http://ddragon.leagueoflegends.com/cdn/10.16.1/data/es_MX/champion.json'

class App extends Component{

  constructor(){
    super()
    
    this.state = { 
      champs: []
    }
  }

  async componentDidMount(){
    const champs = await fetch(champUrl).then(r => r.json())

    console.log(champs.data)

    this.setState({champs: Object.values(champs.data)})
  }

  render() {
    return (
      <div className="App">
          <CardList champs={this.state.champs}/>
      </div>
    )
  }
}


export default App