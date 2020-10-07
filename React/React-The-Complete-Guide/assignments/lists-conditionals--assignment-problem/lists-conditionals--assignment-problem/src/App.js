import React, { Component } from 'react';
import './App.css';
import Validation from './components/ValidationComponent.js';
import Characters from './components/CharComponent.js';


class App extends Component {
  state = {
    validation: [
      {string: null},
      {stringArray: []},
      {stringLength: 0},
      {stringLengthText: 'The string is too short! Please make it more than 5 characters.'},
      {charactersVisibility: false}
    ]
  }



  countTextLengthHandler = (event) => {
    let inputString = event.target.value;
    let inputStringArray = event.target.value.split("");
    let inputStringLength = [...inputString].length;
    let validationString = null;
    if (inputStringLength < 5 || inputStringLength > 15){
      validationString = inputStringLength < 5 ? 'The string is too short! Please make it more than 5 characters.' : 'The string is too long! Please make it less and 15 characters.'
    } else {
      validationString = `Yay! The string is the right amount of characters.`
    }
    this.setState({
      validation: [
        {string: inputString},
        {stringArray: inputStringArray},
        {stringLength: inputStringLength},
        {stringLengthText: validationString},
        {charactersVisibility: true}
      ]
    })
  }

  deleteCharacterHandler = characterIndex => {
    let inputString = this.state.validation[0].string;
    let newStringLength = this.state.validation[2].stringLength;
    let newStringArray = [...inputString];
    let newInputString = null;

    newStringLength--;
    newStringArray.splice(characterIndex, 1);
    newInputString = newStringArray.join("");
    
    this.setState({
      validation: [
        {string: newInputString},
        {stringArray: newStringArray},
        {stringLength: newStringLength},
        {...this.state.validation[3]},
        {...this.state.validation[4]}
      ]
    })
    
  }

  render() {
    let characterBoxes = null;
    if (this.state.validation[4].charactersVisibility){
      characterBoxes = (
        <div>
          {this.state.validation[1].stringArray.map( (char, index) => {
            return <Characters 
            character={char} 
            ind={index}
            click={() => this.deleteCharacterHandler(index)}
            />
          })}
        </div>
      )
    };
  

    return (
      <div className="App">
        <div>
          <label htmlFor=""></label>
          <input id='inputField' type="text" value={this.state.validation[0].string} onChange={this.countTextLengthHandler}/>
        </div>
        <div>
          <p>String Length: {this.state.validation[2].stringLength}</p>
          <Validation stringLengthText={this.state.validation[3].stringLengthText}/>
          {characterBoxes}
        </div>
      </div>
    );
  }
}


export default App;








{/* <ol>
<li>Create an input field (in App component) with a change listener which outputs the length of the entered text below it (e.g. in a paragraph).</li>
<li>Create a new component (=> ValidationComponent) which receives the text length as a prop</li>
<li>Inside the ValidationComponent, either output "Text too short" or "Text long enough" depending on the text length (e.g. take 5 as a minimum length)</li>
<li>Create another component (=> CharComponent) and style it as an inline box (=> display: inline-block, padding: 16px, text-align: center, margin: 16px, border: 1px solid black).</li>
<li>Render a list of CharComponents where each CharComponent receives a different letter of the entered text (in the initial input field) as a prop.</li>
<li>When you click a CharComponent, it should be removed from the entered text.</li>
</ol>
<p>Hint: Keep in mind that JavaScript strings are basically arrays!</p>

<p>Start Of My Code:</p> */}