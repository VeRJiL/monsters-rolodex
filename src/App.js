import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { CardList } from './components/card-list/card-list.component';
import { SearchBox } from './components/search-box/search-box.component';

class App extends Component {

  constructor() {
    super();
    
    this.state = {
      monsters: [],
      searchedText: '',
    };
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => this.setState({monsters: users}))
  }

  handlechange = e => {
    this.setState({searchedText: e.target.value});
  }

  render() {

    const { monsters, searchedText } = this.state;
    const filteredMonsters = monsters.filter(monster => {
      return monster.name.toLowerCase().includes(searchedText.toLowerCase())
    });

    return (
      <div className="App">
        
        <h1>Monsters Rolodex</h1>

        <SearchBox
        placeHolder="search monsters"
        handlechange={this.handlechange}
        />

        <CardList monsters={filteredMonsters}>
          
        </CardList>

      </div>
    );
  }
  
}

export default App;
