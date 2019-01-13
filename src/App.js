import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Grid from 'react-bootstrap/lib/Grid';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';

import styled from 'styled-components'

class App extends Component {
  render() {
    return (
      <div className="wrapper">
        <SayFullName name="Evgeniy" surname="Vashchuk" link="vk.com" />
        <SayFullName name="Ivan" surname="Kuzyaev" link="vk.com" />
        <SayFullName name="Petr" surname="Loho" link="#" />
        <My /> 
      </div>
    );
  }
}

function SayFullName(props) {
  return (
      <div>
      <h1> Моё имя {props.name}, фамилия - {props.surname}</h1>
      <a href={props.link} target="_blank">Ссыка на мой профиль</a>
      </div>
    )
}

function My() {
  return (
    <div>
      <p>loremru10</p>
    </div>
  );
}


export default App;
