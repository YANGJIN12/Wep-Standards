import 'bootstrap/dist/css/bootstrap.css';
import {Container, Row, Col} from 'react-bootstrap';
import '../css/mysass.scss';

const Home = () => {
  return(
    <Container>
      <Row>
        <Col md="12">
        <h1>Home</h1>
        <pre>
        React는 사용자 인터페이스를 구축하기 위한 javascript라이브러리<br/>
        React는 단일 페이지 어플리케이션을 구축하는데 사용됨<br/>
        React를 사용하면 재사용 가능한 UI구성 요소를 만들 수 있음
        </pre>
        </Col>
      </Row>
    </Container>
  )
}

export default Home;