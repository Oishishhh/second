import { useState, useEffect } from 'react';
import './App.css';
import Card from "./components/Card";
import Modal from "./components/Modal";
import Tables from "./components/Tables";
import Dropdowns from "./components/Dropdowns"
import Progress from "./components/Progress";
import Image from "./components/Image";
import Navbar from "./components/Navbar";
import Navbarw from "./components/Navbarw";
import Button from "./components/Button"

// import Image from "./6c16475e-b415-4ad1-82c1-4205cd7968b3.webp";
function App() {
  return(
    <div> 
        <Modal/>
        <Tables/>
        {/* <Dropdowns/> */}
         <br></br>
        {/* <Progress/> */}
        <Button/>
        {/* <Image/> */}
        {/* <Navbar/> */}
    </div>
  );
}

export default App;
