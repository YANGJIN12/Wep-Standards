import { useState } from "react";
import 'bootstrap/dist/css/bootstrap.css';
import { Container, Row, Col } from 'react-bootstrap';
import '../css/mysass.scss';

function MyForm() {
  const [name, setName] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`Your name : ${name}`);
  }
  return (
    <Container>
      <Row>
        <Col>
          <form onSubmit={handleSubmit}>
            <div className="input-group">
              <label className="input-group-text">
                Enter your name :
              </label>
              <input
                classNmae="form-control"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <input type="submit" className="btn btn-success" />
            </div>
          </form>
        </Col>
      </Row>
    </Container>
  )
}
export default MyForm;