import { useState } from "react";
import "./App.css";
import Footer from "./components/include/Footer";
import Header from "./components/include/Header";
import MainPage from "./components/page/MainPage";

function App() {
 
  //초기값0인 변수 설정
  const [number,setNumber]=useState(0)
  const addNumber=()=>{
    setNumber(number+1)

  }
  return (
    <>
    <div className="container">
      {number}
      <Header number={number}/>
      <MainPage number={number} addNumber={addNumber}/>
      <Footer addNumber={addNumber}/>
      <button onClick={addNumber}>버튼</button>
    </div>

    </>
  )
}

export default App;

