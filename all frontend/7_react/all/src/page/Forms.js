import { useState } from "react";
import 'bootstrap/dist/css/bootstrap.css';
import { Container, Row, Col } from 'react-bootstrap';
import '../css/mysass.scss';

function Select() {
  const [myCar, setmyCar] = useState("Cu");

  const handleChange = (event) => {
    setmyCar(event.target.value)
  }
  return (
    <Container>
      <Row>
        <Col>
          <form>
            <select value={myCar} onchange={handleChange}>
              <option value="Ford">Ford</option>
              <option value="Cu">선택됨</option>
              <option value="Fiat">Fiat</option>
            </select>
          </form>
        </Col>
      </Row>
    </Container>
  )
}
export default Select;