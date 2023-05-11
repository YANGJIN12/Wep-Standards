import { useState, useCallback } from "react";
import Todo from "./Todo";


const Callback = () =>{

  const [count, setCount] = useState(0);
  const [todos, setTodos] = useState([]);
  const increment = () =>{
    setCount((c) => c + 1);
  }
  const addTodo = useCallback(() => {
    setTodos((t) => [...t, "New Todo"]);
  },[todos]);

  return(
    <>
    <h1>Callback</h1>
    <pre>
    다시 계산할 필요가 없도록 값을 캐싱하는 것임<br/>
    이렇게 하게되면 모든 렌더링에서 실행되지 않도록 리소스 집약적인 기능을 격리할 수 있음<br/>
    이렇게 하면 성능이 향상될 수 있음<br/>
    두 개가 있는 하나는 실행하지 않지만 렌더링은 같이 됨<br/>
    이것은 "참조 평등"이라는 것 때문임<br/>
    이 문제를 해결하기 위해 필요한 경우가 아니면 함수가 다시 생성되지 않도록 후크를 사용할 수 있음<br/>
    </pre>
    </>
  )
}
export default Callback;