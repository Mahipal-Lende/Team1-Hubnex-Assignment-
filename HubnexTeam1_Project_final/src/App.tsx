import React from 'react'
import FirstPage from './pages/firstPage/FirstPage';
import SecondPage from './pages/secondPage/SecondPage';
import ThirdPage from './pages/thirdPage/ThirdPage';
import FourthPage from './pages/fourthPage/FourthPage';
import FifthPage from './pages/fifthPage/FifthPage';
import SixthPage from './pages/sixthPage/SixthPage';

const App : React.FC = () => {
  return (
    <div>
      <FirstPage/>
      <SecondPage/>
      <ThirdPage/>
      <FourthPage/>
      <FifthPage/>
      <SixthPage/>
    </div>
  )
}

export default App;
