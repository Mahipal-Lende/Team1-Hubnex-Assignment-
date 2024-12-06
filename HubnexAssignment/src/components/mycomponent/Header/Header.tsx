/* Written by  Rushikesh Bante */


import { FaArrowRightLong } from "react-icons/fa6";
import { IoIosArrowDown } from "react-icons/io";
import { RxArrowTopRight } from "react-icons/rx";
import "./Header.css";
const Header = () => {
  return (
    <>
      <header>
        <div className='header-top flex flex-wrap flex-grow-0 flex-shrink-0'>
          <button>
            Jobpreneur <RxArrowTopRight />
          </button>
          <button>
            Skillup <RxArrowTopRight />
          </button>
          <button>
            TechFund <RxArrowTopRight />
          </button>
        </div>
        <div className='horizontal-line flex flex-wrap flex-grow-0 flex-shrink-0'></div>
        <div className='header-bottom'>
          <div className='header-bottom-logo'>
            <img src="https://media.licdn.com/dms/image/v2/D560BAQFAoBAS0D_C_w/company-logo_200_200/company-logo_200_200/0/1721076622581/hubnex_logo?e=2147483647&v=beta&t=9_shkN_zBkXg_9Ru-LHWJCInWMQljGMmR007KRx9q9o" alt='' />
          </div>
          <div className='header-bottom-links flex flex-wrap flex-grow-0 flex-shrink-0'>
            <a href='#'>
              Explore Services
              <IoIosArrowDown />
            </a>
            <a href='#'>
              Resources
              <IoIosArrowDown />
            </a>
            <a href='#'>
              Community
              <IoIosArrowDown />
            </a>
            <a href='#'>About</a>
          </div>
          <div className='header-bottom-btns flex flex-wrap flex-grow-0 flex-shrink-0'>
            <button className='login flex flex-wrap flex-grow-0 flex-shrink-0'>Login</button>
            <button className='Blue flex flex-wrap flex-grow-0 flex-shrink-0'>
              Connect Sales
              <FaArrowRightLong />
            </button>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;