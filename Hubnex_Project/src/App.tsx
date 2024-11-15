// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import { Link } from 'react-router-dom';
import './App.css'
import FirstPage from './pages/firstPage/FirstPage';
import SecondPage from './pages/secondPage/SecondPage';
import ThirdPage from './pages/thirdPage/ThirdPage';



function App() {

  return (
    <>
        {/* <HeroSection></HeroSection>
        <Hubnex></Hubnex> */}
        
        <FirstPage></FirstPage>

        <hr className="my-5 bg-slate-950"/>


        <div>Second Page Starts</div>

        <SecondPage></SecondPage>

        <hr className="my-5 bg-slate-950"/>


        <div>Third Page Starts</div>

          <ThirdPage></ThirdPage>

          <hr className="my-5 bg-slate-950"/>







        

        
    </>
  )
}

export default App



