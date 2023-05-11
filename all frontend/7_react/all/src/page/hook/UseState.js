import { useState } from "react";

// 맨위에서 상태를 초기화함

const UseState = () =>{

  const [color, setColor] = useState("red");
  const [brand, setBrand] = useState("ford");
  const [model, setModel] = useState("Mustang");
  const [year, setYear] = useState("1964");
  const [Color, setcolor] = useState("red");

// 객체를 보유하는 단일 후트를 만들 수 있음
const [car, setCar] = useState({
  brand:"Ford",
  model:"Mustang",
  year:"1964",
  color:"Blue"
})
  return(
    <>
    <h1>UseState</h1>
    <pre>
    React UseStateHook를 사용하면 함수 구성 요소의 상태를 추적할 수 있음<br/>
    일반적으로 애플리케이션에서 추적해야 하는 데이터 또는 속성을 나타냄<br/>
    이름을 원하는대로 지정할 수 있는 변수이고<br/>
    초기상태를 빈 문자열로 지정함<br/>
    렌더링된 구성요소에 상태변수를 사용함<br/>
    상태를 업데이트하기위해 상태 업데이트 기능을 사용하지만 직접 업데이트만은 하면 안됨<br/>
    </pre>
    <h1>My favorite color is {color}!</h1>
    <button type="button" onClick={()=> setColor("blue")}>Blue</button>
    <h2>usestate 응용</h2>
    <h1>My {brand}</h1>
    <p>
      It is a {Color} {model} from {year}.
    </p>

    <h2>단일 후크</h2>
    <p>
    It is a {car.color}{car.model}from{car.year}.
    </p>
    </>
  )
}
export default UseState;