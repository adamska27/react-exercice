import React, { Component } from 'react';
import logo from './images/chuck-norris.jpg';
import './App.css';
import ReactDom from 'react-dom';
import { SketchPicker } from 'react-color';

class App extends Component {
  state = {
    //déclaration background de départ
    objStyle : {backgroundColor: 'violet'},
    //déclaration propriété nom pour ajout couleur
    background: '#fff',
    colors : [
      {id:1, name:'violet', color:'#f5aafb'},
      {id:2, name:'marin blue', color:'rgb(43, 77, 153)'},
      {id:3, name:'pale green', color:'#aafbde'},
      {id:4, name:'vermillon', color:'#fe532e'},
      {id:5, name:'sky blue', color:'#82c4fa'},
      {id:6, name:'salmon', color:'#fb8b8b'},
      {id:7, name:'rouge', color:'#FC0000'}
    ],
  };
  //change couleur de background
  changeColor(color) {
    this.setState({
      objStyle : {backgroundColor: color},
    });
  }
  //récupère valeur input
  handleChange = event =>
    {
    this.setState({
      [event.target.name]: event.target.value
    });
    console.log (event.target.name);
    console.log (event.target.value);
  }

  //lancé lors du click
  //ajout de la nouvelle couleur au tableau colors
  handleSubmit = event => {
    event.preventDefault();
    this.setState({
      // state.colors = state.colors.concat({id:this.state.colors.length+1,name:this.state.colorName, color:this.state.background});

      //utilisation spread operator
      colors : [...this.state.colors, {id:this.state.colors.length+1,name:this.state.colorName, color:this.state.background}]
    });
    console.log('color :', this.state.colors);
    console.log('background : ', this.state.background);
  }

  handleDelete = event => {
    event.preventDefault();
    this.setState( (state) => {
      state.colors = state.colors.slice(0, this.state.colors.length-1);
    });
    console.log(this.state.colors);
  }

  //récupère couleur de la palette
  handleChangePalette = (color) => {
    this.setState({background: color.hex});
  }

  render() {
    return (
      <div className="App" >
        <div className="App-header" style={this.state.objStyle}>
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to the world of color</h2>
        </div>
        <ul> {
            this.state.colors.map( item =>
              <li key={item.id}>
                <button style={{backgroundColor : item.color}} onClick={() => this.changeColor(item.color)}>{item.name}</button>
              </li>
            )
          }
        </ul>
        <div className="colorChoice">
          <form>
            <p>
              <label>Name : </label>
            </p>
            <p>
            <input type="text" name="colorName" maxLength="20"  required="true" placeHolder="dark blue" onChange={this.handleChange} />
            </p>
            <p>
              <label>Color hexadecimal ou rgb : </label>
            </p>

            <SketchPicker color={this.state.background} onChangeComplete={this.handleChangePalette}/>

            <button className="validate" onClick={this.handleSubmit}>Valider</button>
            <p>
              <button className="delete" onClick={this.handleDelete}>Supprimer dernier ajout</button>
            </p>
          </form>
        </div>
        <div className="footer" style={this.state.objStyle}>
          <p>I am the footer</p>
        </div>
      </div>
    );
  }
}

export default App;
