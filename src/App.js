import React, { Component } from 'react';
import './App.css';
import ReactDom from 'react-dom';
import Header from './components/Header/Header.jsx';
import ColorList from './components/List/ColorList/ColorList.jsx';
import Form from './components/FormColor/Form/Form.jsx';
import Footer from './components/Footer/Footer.jsx';

class App extends Component {
  state = {
    //déclaration background de départ
    objStyle : {backgroundColor: 'violet'},
    //déclaration propriété nom pour ajout couleur
    background: '#eee',
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

  //définit avec arrow function car permet de récupérer le this
  changeColor = (color) => {
    this.setState({
      objStyle : {backgroundColor: color},
    });
  }

  //récupère valeur de l'input
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

  //supprime dernier élément
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

        <Header
          objStyle={this.state.objStyle} />
          <ColorList
            colors={this.state.colors}
            changeColor={this.changeColor}
            />

        <div className="colorChoice">

          <Form
          background={this.state.background}
          handleChange={this.handleChange} handleChangePalette={this.handleChangePalette}
          handleSubmit={this.handleSubmit}
          handleDelete={this.handleDelete}
          />
        </div>

        <Footer
          objStyle={this.state.objStyle}
          text={"C'est un footer un peu triste"}
        />

      </div>
    );
  }
}

export default App;
