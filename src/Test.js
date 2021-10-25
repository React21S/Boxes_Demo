import { useState } from 'react';


const Display = props => <div>{props.value}</div>

const Button = (props) => (
  <button onClick={props.handleClick}>
    {props.text}
  </button>
)

const Test = () => {
  const [value, setValue] = useState(10)
 

  const setToValue = newValue => {
    setValue(newValue)
  }

  return (
    <div className="test">
      Give Feedback
      <Display value={value} />
      <Button handleClick={() => setToValue(1000)} text="Thousand"/>
      <Button handleClick={() => setToValue(0)} text="Reset" />
      <Button handleClick={() => setToValue(value + 1)} text="Increment" />
      <Button handleClick={() => setToValue(value - 1)} text="Decrement" />
    </div>
  )
}
export default Test; 