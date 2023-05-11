import React from "react";
import ReactDOM from "react-dom/client";
function MissedGoal(){
  return <h1>실책!ㅜㅜ</h1>
}

function MadeGoal(){
  return <h1>골!!</h1>
}

function Goal(props){
  const isGoal = props.isGoal;
  return(
    <>
    <h1>Conditional Rendering</h1>
    {isGoal ? <MadeGoal/> : <MissedGoal/>}
    </>
  )
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Goal isGoal={false}/>);