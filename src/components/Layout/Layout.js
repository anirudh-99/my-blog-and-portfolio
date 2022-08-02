import React from 'react';
import Header from '../Header/Header';
import "./Layout.scss";

export default function Layout(props) {
  return (
    <div>
        <Header/>
        {props.children}
    </div>
  )
}
