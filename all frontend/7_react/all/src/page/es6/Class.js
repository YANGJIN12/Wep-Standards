import React, {Component} from "react";


class Class extends Component{
  render(){
    return(
      <>
          <h1 className="mt-5 mb-5">Es6 [ECMAScript 6]</h1>
          <pre>
          React를 사용하려면 아래와 같은 몇가지 ES6에 새로운 기능에 익숙해야함
          - Classes<br/>
          - Arrow functions<br/>
          - Variables(let, const, var)<br/>
          - Array Methods like<br/> 
          - Destructuring<br/>
          - Modules<br/>
          - Ternary Operator<br/>
          - Spread Operator<br/>
          </pre>

          <h1>class</h1>
          <pre>
          es6에서 클래스를 도입함<br/>
          클래스는 함수의 한 유형이지만 키워드를 사용하여 시작되고<br/>
          속성은 constructor()메서드 내에서 할당됨<br/>
          </pre>
      </>
    )
  }
}
export default Class;