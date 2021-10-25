import { useState } from 'react';


const Display = props => <div>{props.value}</div>

const Button = (props) => (
  <button onClick={props.handleClick}>
    {props.text}
  </button>
);

const Test2 = () => {
 

  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);


  const setToGood = newValue => {
    setGood(newValue);
  };
  const setToNeutral = newValue => {
    setNeutral(newValue);
  };
  const setToBad = newValue => {
    setBad(newValue);
  };

 const All =(good + neutral +bad);

   const Average = (good - bad)/(good + neutral +bad);

  return (
    <div className="test">
      Give Feedback
      <Button handleClick={() => setToGood(good +1)} text="Good"/> 
      <Button handleClick={() => setToNeutral(neutral+ 1)} text="Neutral" /> 
      <Button handleClick={() => setToBad(bad +1)} text="Bad" /> 
  
      <table className="statictics">
        <tfoot>
        <tr>
          <td><Display value={`Good: ${good}`} /> </td>
          <td><Display value={`Neutral: ${neutral}`} /> </td>
          <td><Display value={`Bad: ${bad}`} /> </td>
          <td><Display value={`Total: ${All}`} /> </td>
          <td><Display value={`Average: ${Average}`} /> </td>
          <td> <strong> <Display value={`Positive: ${good/All *100}% `} /></strong></td>
        </tr>
        </tfoot>
      </table>
      
    </div>
  );
};
export default Test2; 