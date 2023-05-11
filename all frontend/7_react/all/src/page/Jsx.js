import 'bootstrap/dist/css/bootstrap.css';
import { Container, Row, Col } from 'react-bootstrap';
import '../css/mysass.scss';

const x = 5;
let text = "Goodbye";
if (x < 10) {
  text = "hello";
}
console.log(text);

const myElement = (
  <ul>
    <li>Apples</li>
    <li>banana</li>
  </ul>
)
console.log(myElement);

const Jsx = () => {
  return (
    <>
      <Container>
        <Row>
          <Col>
            <h1>Jsx란 무엇인가?</h1>
            <p>
              jsx = JavaScript xml을 나타낸다.<br />
              jsx를 사용하면 react에서 HTML을 작성할 수 있다.<br />
              jsx를 사용하면 react에서 HTML을 더 쉽게 작성할 수 있다.<br />
            </p>
          </Col>
        </Row>
      </Container>
    </>
  )
}
export default Jsx;