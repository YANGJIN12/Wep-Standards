
import 'bootstrap/dist/css/bootstrap.css';
import {Container, Row, Col} from 'react-bootstrap';
import Cc from './react/Cc';
import Fc from './react/Fc';
function Cp(){
  return(
    <Container>                                                                                                                              
      <Row>
        <Col>
        <h1>React Components</h1>
        <p>
        컴포넌트는 HTML요소를 리턴시키는 함수와 같습니다.<br/>
        독립적이고 재사용 가능한 코드 조각입니다.<br/>
        자바스크립트 함수와 동일한 목적을 수행하지만 독립적으로 작동하고 HTML값을 리턴합니다.<br/>
        컴포넌트는 클래스와 함수 2가지 구성됩니다.
        아래 예시에 각각 활용해 보겠습니다.
        </p>
        <Cc/>
        <Fc/>
        </Col>
      </Row>
    </Container>
  )
}
export default Cp;