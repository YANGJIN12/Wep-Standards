import 'bootstrap/dist/css/bootstrap.css';
import {Container, Row, Col}from 'react-bootstrap';
import React, {Component} from 'react';
import Root from './react/Root';
import Jsx from './react/Jsx';

class Rd extends Component {
    render(){
        return(
            <Container>
                <Row>
                    <Col>
                    <h1>React Render HTML</h1>
                    <pre>
                    react의 목표는 여러가지 방법으로 웹페이지를 HTML에 렌더링하는 것 입니다<br/>
                    react는 렌더함수를 사용하여 HTML을 웹페이지에 렌더링 합니다
                    </pre>

                    <h1>Render Function</h1>
                    <p>
                    ReactDOM.render()함수는 HTML코드와 HTML요소라는 두개의 인수를 사용합니다<br/>
                    이함수의 목적은 지정된 HTML요소 내에 지정된 HTML코드를 표시하는것 입니다<br/>
                    그런데 어디서 렌더링 하나요?<br/>
                    react프로젝트 안에는 "public" 이라는 폴더가 있습니다<br/>
                    이폴더에 html파일이 하나 있습니다<br/>
                    여기에 div가 있는데 여기에서 react어플리케이션이 렌더링 됩니다
                    </p>
                    <Root/>
                    <Jsx/>
                    </Col>
                </Row>
            </Container>
        )
    }
}
export default Rd;