import 'bootstrap/dist/css/bootstrap.css';
import { Container, Row, Col } from 'react-bootstrap';
import '../css/mysass.scss';

const Intro = () => {
  return (
    <Container>
      <Row>
        <Col md="12">
          <h1>React Introduction</h1>
          <h2 className="my-4">What is React?</h2>
          <pre>
            frontend javascript framework라고도 하는 Reacts는 Facebook에서 만든 javascript라이브러리<br />
            React는 UI구성 요소를 빌드하기 위한 도구임<br />
          </pre>

          <h2 className="my-4">React는 어떻게 작동하는지?</h2>
          <p>React는 VIRTUAL DOM을 사용함</p>

          <h2 className="my-4">React의 역사</h2>
          <p>React의 현재 버전은 v18.0.0(2022년 4월)임<br />
            대중에게 최초공개(v0.3.0)는 2013년 7월임<br />
            2011년에 Facebook의 뉴스피드 기능에 처음 사용됨<br />
            Facebook의 소프트웨어 엔지니어인 jordan Walke가 만듬
          </p>
        </Col>
      </Row>
    </Container>
  )
}

export default Intro;