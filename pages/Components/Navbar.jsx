import React, { useState } from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import { ClassNames } from '@emotion/react';
import Image from 'next/image';
import FacebookIcon from '@mui/icons-material/Facebook';
import VolumeUpIcon from '@mui/icons-material/VolumeUp';
import VolumeMuteIcon from '@mui/icons-material/VolumeMute';
import manImg from '../../public/img/man.jpg';
import womanImg from '../../public/img/woman.jpg';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
// import nav_logo from '..            /../public/img/nav_logo.png';
// import big from '../../public/img/big.jpg';
// import halfimg from '../../public/img/halfimg.jpg';
// import b1 from '../../public/img/b1.jpg';
// import b2 from '../../public/img/b2.jpg';
import Link from 'next/link';

const Navbar = () => {
  const [showMe, setShowMe] = useState(false);
  function toggle(){
    setShowMe(!showMe);
  }
  return (
    <>
    
      <section className="Menu" style={{
        display: showMe?"none":"flex"
      }}>
        <div className="Menu__left" onClick={toggle}>
          {!showMe && (
            <>
            <a className="Menu__content" href="#">
            <MenuIcon />
          </a>
          <span>Menu</span></>
          )}
        </div>
        <div className="Menu__right">
          <a className="right__img" href="/">
            <Image src={manImg} width={32} height={32} />
          </a>
          <a className="right__img" href="/">
            <Image src={womanImg} alt="" width={32} height={32} />
          </a>
          <a
            className="right__center right__hover"
            href="https://www.facebook.com/tamgagui"
          >
            <span>
              {' '}
              <FacebookIcon className="center__content" />{' '}
              <p>WATERLOO ON FACEBOOK</p>{' '}
            </span>
          </a>
          <a className="right__right right__hover" href="#">
            <VolumeUpIcon className="up" />
            <VolumeMuteIcon className="mute" />
          </a>
          <a className="right__last right__hover" href="/">
            <span>EN</span>
          </a>
        </div>
      </section>

      <div style={{
        display: showMe?"block":"none"
      }}>
        <section id="click">
        <div className="primary">
          <div className="navIMG"></div>
          <ul className="first">
            <li>
              <a href="/">Synoposys</a>
            </li>
            <li>
              <a href="/">Trailers</a>
            </li>
            <li>
              <a href="/">Cast and crew</a>
            </li>
            <li>
              <a href="/">Experience</a>
            </li>
            <li>
              <a href="/">Behind the scenes</a>
            </li>
            <li>
              <a href="/">News</a>
            </li>
          </ul>
          <ul className="second">
            <li>
              <a href="/">Agenda</a>
            </li>
            <li>
              <a href="/">Press area</a>
            </li>
            <li>
              <a href="/">Partners</a>
            </li>
          </ul>
          <div className="link" href="https://www.youtube.com/watch?v=LGs_vGt0MY8">
            <a>Waterloo on facebook</a>
          </div>
          <a className="left_arrow" href="/"> <KeyboardArrowLeftIcon/></a>

          </div>
        <div className="nav_grid">
          <div className="nav_left need">
            <div className="categor">
              <a href="/">
                Waterloo <br /> 1815
              </a>
              <strong>Experince</strong>
            </div>
          </div>
          <div className="nav_right need">
            <div className="nav_top need">
              <div className="categor">
                <a href="/">
                  About
                </a>
                <strong>Synopsis</strong>
              </div>
            </div>
            <div className="nav_bottom">
              <div className="nav_photo">
                <div className="categor">
                  <a href="/">
                    Official trailer
                  </a>
                  <strong>Trailers</strong>
                </div>
              </div>
              <div className="nav_Photo">
                <div className="categor">
                  <a href="/">
                    The making of
                  </a>
                  <strong>Behind the scenes</strong>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      </div>

      
      
    </>
  );
};

export default Navbar;
//  <img src={require("../../assets/Images/logo.png")} alt=""/>

//  <img src="fb.png" alt="" width={12} height={12} />
