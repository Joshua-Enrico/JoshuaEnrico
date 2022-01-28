import React, { useRef } from 'react';
import { Link } from "react-scroll";
import {
  Atag, HeaderComp, LiAtag, LiItem,
  Menu, NavContainer, ThemeDiv, Ullist
} from './Style';
import { BiBookBookmark, BiBriefcase, BiHomeAlt, BiMessageDetail } from 'react-icons/bi';
import { AiOutlineUser } from 'react-icons/ai';
import { BsFillMoonFill, BsSunFill } from 'react-icons/bs';
import { useDispatch } from "react-redux";
import { SwitchTheme  } from '../../redux/ThemeRedux';


const Header = () => {
  
  const dispatch = useDispatch();

  const [theme, setTheme] = React.useState(true);


  const id = "a"
  const HandleActive = (e, elmid) => {
    e.preventDefault();
    if (elmid !== id) {
      const element = document.getElementById(id);
      element.classList.remove("active");
      const currentelm = document.getElementById(elmid);
      currentelm.classList.add("active");
      id = elmid;
    }


  }

  const ThemeHandler = (e) => {
    e.preventDefault();
    dispatch(SwitchTheme());
    if (theme) {
      setTheme(false);
    } else {
      setTheme(true);
    }


  }

  return (
    <HeaderComp>
      <NavContainer>
        <Atag hred="">Joshua</Atag>
        <Menu>
          <Ullist>
            <LiItem>
              <Link id="a" className='aref' onClick={(e) => HandleActive(e, "a")} activeClass="active" to="home" spy={true} smooth={true} offset={50} duration={500}>

                <BiHomeAlt />

              </Link>
            </LiItem>
            <LiItem>
              <Link id="b" className='aref' onClick={(e) => HandleActive(e, "b")} activeClass="active" to="about" spy={true} smooth={true} offset={50} duration={500}>

                <AiOutlineUser />

              </Link>
            </LiItem>
            <LiItem>
              <Link id="c" className='aref' onClick={(e) => HandleActive(e, "c")} activeClass="active" to="skills" spy={true} smooth={true} offset={50} duration={500}>

                <BiBookBookmark />

              </Link>
            </LiItem>
            <LiItem>
              <Link id="d" className='aref' onClick={(e) => HandleActive(e, "d")} activeClass="active" to="work" spy={true} smooth={true} offset={50} duration={500}>

                <BiBriefcase />

              </Link>
            </LiItem>
            <LiItem >
              <Link id="e" className='aref' onClick={(e) => HandleActive(e, "e")} activeClass="active" to="contact" spy={true} smooth={true} offset={50} duration={500}>
                <BiMessageDetail />
              </Link>
            </LiItem>
          </Ullist>
        </Menu>
        <ThemeDiv onClick={(e) => ThemeHandler(e)} >
            {theme ? <BsSunFill className='change-theme' /> : <BsFillMoonFill className='change-theme' />}

        </ThemeDiv>
      </NavContainer>
    </HeaderComp>
  )
};

export default Header;
