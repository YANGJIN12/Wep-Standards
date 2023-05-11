import {useState}from "react";
import 'bootstrap/dist/css/bootstrap.css';
import {Container, Row, Col} from 'react-bootstrap';
import '../css/mysass.scss';
import Todos from "./hook/Todos";

const Memo = () =>{
  const [count, setCount] = useState(0);
  const [todos, setTodos] = useState(["todo 1", "todo 2"]);

  const increment = () =>{
    setCount((c) => c + 1);
  }
  return(
    <>
    <Container>
      <Row>
        <Col md="12">
          <Todos todos={todos}/>
          <hr/>
          <div>
            Count: {count}
            <button className="btn btn-success" onC lick={increment}>+</button>
          </div>
          <h1>메모는 무엇인가?</h1>
          <p>
          메모를 사용하면 변경되지않는 요소는  렌더링을 건너뜁니다.<br/>
          이렇게 하면 성능이 향상될 수 있습니다.<br/>
          메모는 Hook에 속합니다.<br/>
          </p>
        </Col>
      </Row>
    </Container>
    </>
  )
}
export default Memo;