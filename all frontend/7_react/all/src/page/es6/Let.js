import React, {Component} from "react";


class Let extends Component{
  render(){
    return(
      <>
      <h1>variable</h1>
      <pre>
      let : 값을 재할당하지 않음<br/>
      const : 상수는 값을 정의하지 않음<br/>
      var : 값을 재할당함<br/>
      </pre>
      </>
    )
  }
}
export default Let;