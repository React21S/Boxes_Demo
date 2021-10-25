import React, { Component } from "react";
import Box from "./Box";


class MainC extends Component{
    state = {
      persons:[
        { name : "Maria", title: "CEO", age:29},
        {  name : "Kati", title: "Developer", age:25},
         {  name : "Kartin", title: "designer", age:45},
      ]


    }
    
    
    render(){
        return (
        <main>
            <Box  
            name={this.state.persons[0].name}
            age={this.state.persons[0].title}
            title={this.state.persons[0].age}
            />
           
           <Box  
            name={this.state.persons[1].name}
            age={this.state.persons[1].title}
            title={this.state.persons[1].age}
            />
              <Box  
            name={this.state.persons[2].name}
            age={this.state.persons[2].title}
            title={this.state.persons[2].age}
            />
        </main>
        );
    }
}


export default MainC;
