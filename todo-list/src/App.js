import React, { Component } from 'react';
import './App.css';


class InputBox extends Component {
  constructor(props) {
    super(props)
    this.state = {
      text:""
    };
    this.TakeInput = this.TakeInput.bind(this);
    this.addNote = this.addNote.bind(this);
    
  }
  TakeInput(value){
    this.setState({
      text:value
     
    })
  }
  addNote(){
    this.props.takeContext(this.state.text);
    this.setState({
      text: ''
    });
  }
  
  render() {
    return (
      <div className="body">
      <div className="App">
        <input type="text" value={this.state.text} onChange={(event) => this.setState({text:event.target.value})} className="text" name="name" maxlength = "240" placeholder="Add Task"/>
        <button type="submit" onClick={this.addNote} className="button">Add</button>
       <h2 className="char"> Remaining Char:{240-((this.state.text).length)}</h2>
      </div>


      </div>
      
     
    );
  }
}
class App extends Component {
  constructor() {
    super()
    this.state = {
      item:[],
      char:''
    };
    this.DisplayText=this.DisplayText.bind(this);
  }
  DisplayText(text){
    if (text !='')
    this.setState({
      char:text,
      item:[...this.state.item,text]
    });
  }

  
  
  render() {
    return (
      
      <div className="App2">
        <div className="main-input">
          <InputBox takeContext={this.DisplayText}/>
        </div>
        <div className="inputext">
          <ul>
            {this.state.item.map((item,index)=>(
            <li key={index} className="list">
            <input type="checkbox" className="check" />
            {item}
            </li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}

export default App;
