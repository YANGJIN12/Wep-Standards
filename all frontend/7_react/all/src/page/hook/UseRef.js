import {useState, useEffect, useRef } from "react";


const UseRef = () =>{

  const [inputValue, setInputvalue] = useState("");
  const previousInputValue = useRef("");

  useEffect(() => {
    previousInputValue.current = inputValue;
  })
  return(
    <>
    <h1>UseRef</h1>
    <p>
    렌더링간에 값을 유지할 수 있음<br/>
    업데이트시 다시 렌더링 되지 않는 변경 가능한 값을 저장하는데 사용할 수 있음<br/>
    DOM요소에 직접 엑세스하는데 사용할 수 있음<br/>
    useRef는 하나의 항목만 리턴함<br/>
    useRef는 초기값을 설정함<br/> 
    </p>

    <input type="text" 
    value={inputValue} 
    onChange={(e) => setInputvalue(e.target.value)}
    className="form-control"
    />
    <h2>Current Value: {inputValue}</h2>
    <h2>Previous Value: {previousInputValue.current}</h2>

    </>
  )
}
export default UseRef;