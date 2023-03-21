import React, {useEffect, useState} from 'react';
import { BrowserRouter , Route , Routes , Link, Navigate} from "react-router-dom";
import axios from "axios";
import "./Styles.css";
import Movies from './Movies';



function App() {
  
  
  return (
    <><Movies/>
    </>
    
  );
}

export default App;
