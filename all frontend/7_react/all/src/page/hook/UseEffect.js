import {useState, useEffect} from "react";

const UseEffect = () =>{
  
  const [count, setCount] = useState(0);
  useEffect(() => {
    setTimeout(() => {
      setCount((count) => count + 1);
    }, 1000);
  },[]); // < add empty brackets here
  return(
    <>
    <h1>UseEffect</h1>
    <pre>
    UseEffect를 사용하면 구성 요소에서 부작용을 수행할 수 있음<br/>
    몇가지 예는 데이터 가져오기, DOM직접 업데이트 및 타이머<br/>
    UseEffect는 두 가지 인수를 받아들입니다. 두 번째 인수는 선택 사항임<br/>
    UseEffect<function/>, <dependency/><br/>
    </pre>
    <p>타이머 예시</p>
    <h1>I've rendered {count} times!</h1>
    </>
  )
}
export default UseEffect;