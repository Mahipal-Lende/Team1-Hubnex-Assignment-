// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import { Link } from 'react-router-dom';
import './App.css'
import FirstPage from './pages/firstPage/FirstPage';
import SecondPage from './pages/secondPage/SecondPage';
import ThirdPage from './pages/thirdPage/ThirdPage';
import FourthPage from './pages/fourthPage/FourthPage';
import FifthPage from './pages/fifthPage/FifthPage';
import SixthPage from './pages/sixthPage/SixthPage';


function App() {

  return (
    <>
        
        <FirstPage/>
        <hr className="my-5 bg-slate-950"/>
        <div>Second Page Starts</div>
        <SecondPage/>
        <hr className="my-5 bg-slate-950"/>
        <div>Third Page Starts</div>
        <ThirdPage/>
        <hr className="my-5 bg-slate-950"/>
        <div>Fourth Page Starts</div>
        <FourthPage/>
        <hr className="my-5 bg-slate-950"/>
        <div>Fifth Page Starts</div>
        <FifthPage/>
        <hr className="my-5 bg-slate-950"/>
        <div>Sixth Page started</div>
        <SixthPage/>











        

        
    </>
  )
}

export default App



