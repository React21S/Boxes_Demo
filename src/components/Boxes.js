import React, { Component } from "react";
import Box from "./Box";


class Boxes extends Component{
    state = {
      persons:[
        {id:1 , name : "Maria", title: "CEO", age:29},
        { id:2, name : "Kati", title: "Developer", age:25},
         { id:3, name : "Kartin", title: "Designer", age:45},
         { id:4, name : "Margit", title: "Teacher", age:40},
      ]
    };

    changeHandler = ()=>{
      alert("WOW")
    };
    
    render(){
        return (
          <>
        <main>
          {/* list item in array  */}
          {this.state.persons.map((item)=>
          <Box 
          key={item.id} 
          name = {item.name} 
          age ={item.age} 
          title={item.title}/>
          )}
            
        </main>
        </>
        );
    };
};


export default Boxes;
