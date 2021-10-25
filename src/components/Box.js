
 const Box = (props)=>{
   const addEventHandler=()=>{
     alert("WOW from box")
    
   }
    return (
      <div className="box">
       <div>
         <h2>{props.name}</h2> 
         <p>Title: {props.title}  </p>  
         <p>Age: {props.age} </p> 

         <button onClick={addEventHandler}>Click Me</button>
       </div>
      </div>
    );
  };

  export default Box;