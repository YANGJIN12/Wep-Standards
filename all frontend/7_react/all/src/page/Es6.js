import 'bootstrap/dist/css/bootstrap.css';
import {Container, Row, Col} from 'react-bootstrap';
import React, {Component} from "react";
import '../css/mysass.scss';
import Class from './es6/Class';
import Arrow from './es6/Arrow';
import Let from './es6/Let';
// class Car{
//   constructor(name){
//     this.brand = name;
//   }
// }
// const mycar = new Car("Ford");
// console.log(mycar.brand);

// 화살표함수
const Es6 = () => {
  return(
    <>
    <Container>
      <Row>
        <Col>
        <Class/>
        <Arrow/>
        <Let/>
        </Col>
      </Row>
    </Container>
    </>
  )
}
export default Es6;