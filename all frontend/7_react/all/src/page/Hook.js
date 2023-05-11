import {useState}from "react";
import 'bootstrap/dist/css/bootstrap.css';
import {Container, Row, Col} from 'react-bootstrap';
import '../css/mysass.scss';
import In from "./hook/In";
import UseState from "./hook/UseState";
import UseEffect from "./hook/UseEffect";
import UseContext from "./hook/UseContext";
import UseRef from "./hook/UseRef";
import UseReducer from "./hook/UseReducer";
import Callback from "./hook/Callback";





const Hook = () =>{
  const [color, setColor] = useState("no color"); // 색상을 바꿀건데 처음 상태가 노컬러임
 
  return(
    <>
    <Container>
      <Row>
        <Col md="12">
          <In/>
          <UseState/>
          <UseEffect/>
          <UseContext/>
          <UseRef/>
          <UseReducer/>
          <Callback/>
        </Col>
      </Row>
    </Container>
    </>
  )
}
export default Hook;