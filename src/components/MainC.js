import React, { Component } from "react";
import Box from "./Box";


class MainC extends Component{
    state = {
      persons:[
        { name : "Maria", title: "CEO", age:29},
        {  name : "Kati", title: "Developer", age:25},
         {  name : "Kartin", title: "designer", age:45},
      ]
    };

    changeHandler = ()=>{
      alert("WOW")
    };
    
    render(){
        return (
          <>
        <main>
            <Box  
            name={this.state.persons[0].name}
            title={this.state.persons[0].title}
            age={this.state.persons[0].age}
            />
  
           <Box  
            name={this.state.persons[1].name}
            title={this.state.persons[1].title}
            age={this.state.persons[1].age}
            />
              <Box  
            name={this.state.persons[2].name}
            title={this.state.persons[2].title}
            age={this.state.persons[2].age}
            />
  
        </main>
        <button onClick={this.changeHandler}>click me</button>

        </>
        );
    };
};


export default MainC;
