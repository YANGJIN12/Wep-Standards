import React, {Component} from 'react';

// const x = 5;
// let text = "Goodbye";
// if (x < 10){
//   text = "Hello";
// }

// console.log(text);

class Jsx extends Component{
  render(){
    return(
      <>
      <h1>JSX</h1>
      <p>
      Jsx는 JavaScript XML에 약어입니다.<br/>
      jsx를 사용하면 자바스크립트로 HTML요소를 작성하고 메서드없이 DOM에 배치할 수 있습니다.
      </p>
      </>
    )
  }
}
export default Jsx;