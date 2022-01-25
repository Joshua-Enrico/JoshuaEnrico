import React from 'react';
import {
  Atag, HeaderComp, LiAtag, LiItem,
  Menu, NavContainer, Ullist
} from './Style';
import { BiBookBookmark, BiBriefcase, BiHomeAlt, BiMessageDetail } from 'react-icons/bi';
import { AiOutlineUser } from 'react-icons/ai';
import { BsFillMoonFill } from 'react-icons/bs';

const Header = () => {
  return (
    <HeaderComp>
      <NavContainer>
        <Atag hred="">Joshua</Atag>
        <Menu>
          <Ullist>
            <LiItem>
              <LiAtag hred="#home" className='active'>
                <BiHomeAlt />
              </LiAtag>
            </LiItem>
            <LiItem>
              <LiAtag hred="#about">
                <AiOutlineUser />
              </LiAtag>
            </LiItem>
            <LiItem>
              <LiAtag hred="#skills">
                <BiBookBookmark />
              </LiAtag>
            </LiItem>
            <LiItem>
              <LiAtag hred="#work">
                <BiBriefcase />
              </LiAtag>
            </LiItem>
            <LiItem>
              <LiAtag hred="#contact">
                <BiMessageDetail />
              </LiAtag>
            </LiItem>
          </Ullist>
        </Menu>
        <BsFillMoonFill className='change-theme' id="theme-button"/>
      </NavContainer>
    </HeaderComp>
  )
};

export default Header;
