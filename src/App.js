import React, {useState} from "react";

function Button(props) {

  return (
      <button onClick={() => props.onClickFunction(props.counterNumber)}>
        +{props.counterNumber}
      </button>
  );
}

function Display(props){
    return (
        <div>
            <h2>Der er klikket: {props.msg}</h2>
            <p>Test</p>
        </div>
    );
}

function App(){
    const [counter, setCounter] = useState(0);
    const incrementCount = (counterValue) => setCounter(counter+counterValue);
    return(
        <div>
            <Button onClickFunction={incrementCount} counterNumber={1}/>
            <Button onClickFunction={incrementCount} counterNumber={5}/>
            <Button onClickFunction={incrementCount} counterNumber={10}/>
            <Display msg={counter}/>
        </div>
    );
}


export default App;
