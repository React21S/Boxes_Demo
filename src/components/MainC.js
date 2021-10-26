import React, { Component } from "react";
import Box from "./Box";


class MainC extends Component{
    state = {
      persons:[
        {id:1 , name : "Maria", title: "CEO", age:29},
        { id:2, name : "Kati", title: "Developer", age:25},
         { id:3, name : "Kartin", title: "designer", age:45},
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
          {this.state.persons.map((item)=><Box 
          key={item.id} 
          name = {item.name} 
          age ={item.age} 
          title={item.title}/>)}
            {/* <Box  
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
            /> */}

            <ul>

              {this.state.persons.map(item => <li key={item.id}> { item.name}is {item.age} old and is {item.title}</li>)}
            </ul>
  
        </main>
        <button onClick={this.changeHandler}>click me</button>

        </>
        );
    };
};


export default MainC;
