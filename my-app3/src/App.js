import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
 constructor(props) {
   super(props);
   this.state = {
     term: '',
     img: ''
   }
 }

 onChange = (event) => {
   this.setState({term: event.target.value});
 }

handleSubmit = (event) => {
  event.preventDefault();
  const api_key = 'dc6zaTOxFJmzC';
  const url = `http://api.giphy.com/v1/gifs/search?q=${this.state.term}&api_key=${api_key}`;
  fetch(url)
    .then(response => response.json())
    .then(data => this.setState({ term:'', img: data.data[0].images.fixed_height.url }))
    .catch(e => console.log('error', e));
}

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          This is the beginning....or maybe the middle....not the end.
        </p>
        <div>
          <form onSubmit={this.handleSubmit}>
            <input value={this.state.term} onChange={this.onChange} />
            <button>Search</button>
          </form>
          <div className="just-div">
            <img src={this.state.img} height="200" alt={this.state.term} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
