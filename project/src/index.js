import React from 'react';
import ReactDOM from 'react-dom';


import { BrowserRouter as Router} from 'react-router-dom';
import  {RoomProvider}  from './hotel Project/context';

import App from "./hotel Project/app"
import "./styles.css";







ReactDOM.render(
  <RoomProvider>
<Router>
<App/>
</Router>
  </RoomProvider>



 ,
  document.getElementById("root")
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

