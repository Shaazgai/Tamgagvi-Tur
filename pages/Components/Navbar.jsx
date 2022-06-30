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
import Link from 'next/link';

const Navbar = ({setMutedVideo, mutedVideo}) => {
  const [showMe, setShowMe] = useState(false);
  function toggle() {
    setShowMe(!showMe);
  }
    const handleClick = () => {
    setMutedVideo(current => !current);
  }
  return (
    <>
      <section
        className="Menu"
        style={{
          display: showMe ? 'none' : 'flex',
        }}
      >
        <div className="Menu__left" onClick={toggle}>
          {!showMe && (
            <>
              <Link href="/">
                <a className="Menu__content">
                  <MenuIcon />
                </a>
              </Link>
              <span>Menu</span>
            </>
          )}
        </div>
        <div className="Menu__right">
          <Link href="/">
            <a className="right__img">
              <Image src={manImg} width={32} height={32} />
            </a>
          </Link>
          <Link href="/">
            <a className="right__img">
              <Image src={womanImg} alt="" width={32} height={32} />
            </a>
          </Link>
          <Link
            
            href="https://www.facebook.com/tamgagui"
          >
            <a className="right__center right__hover">
              <span>
                {' '}
                <FacebookIcon className="center__content" />{' '}
                <p>WATERLOO ON FACEBOOK</p>{' '}
              </span>
            </a>
          </Link>
          
          {mutedVideo && (
             <button className="right__right right__hover" onClick={handleClick}>
              <VolumeMuteIcon className="mute"/>
            </button>
          )}
             {!mutedVideo && (
             <button className="right__right right__hover" onClick={handleClick}>
<VolumeUpIcon className="up"/>
            </button>
           )}
          <Link  href="/">
            <a className="right__last right__hover">
              <span>EN</span>
            </a>
          </Link>
        </div>
      </section>

      <div
        style={{
          display: showMe ? 'block' : 'none',
        }}
      >
        <section id="click">
          <div className="primary">
            <div className="navIMG"></div>
            <ul className="first">
              <li>
                <Link href="/">
                  <a>Synoposys</a>
                </Link>
              </li>
              <li>
                <Link href="/">
                  <a>Trailers</a>
                </Link>
              </li>
              <li>
                <Link href="/">
                  <a>Cast and crew</a>
                </Link>
              </li>
              <li>
                <Link href="/">
                  <a>Experience</a>
                </Link>
              </li>
              <li>
                <Link href="/">
                  <a>Behind the scenes</a>
                </Link>
              </li>
              <li>
                <Link href="/">
                  <a>News</a>
                </Link>
              </li>
            </ul>
            <ul className="second">
              <li>
                <Link href="/">
                  <a>Agenda</a>
                </Link>
              </li>
              <li>
                <Link href="/">
                  <a>Press area</a>
                </Link>
              </li>
              <li>
                <Link href="/">
                  <a>Partners</a>
                </Link>
              </li>
            </ul>
            <div className="link">
              <Link href="https://www.youtube.com/watch?v=LGs_vGt0MY8">
                <a>Waterloo on facebook</a>
              </Link>
            </div>
            <Link  href="/">
              <a href="#" className="left_arrow" onClick={toggle}>
                <KeyboardArrowLeftIcon />
              </a>
            </Link>
          </div>
          <div className="nav_grid">
            <div className="nav_left need">
              <div className="categor">
                <Link href="/">
                  <a>
                    Waterloo <br /> 1815
                  </a>
                </Link>
                <strong>Experince</strong>
              </div>
            </div>
            <div className="nav_right need">
              <div className="nav_top need">
                <div className="categor">
                  <Link href="/">
                    <a>About</a>
                  </Link>
                  <strong>Synopsis</strong>
                </div>
              </div>
              <div className="nav_bottom">
                <div className="nav_photo">
                  <div className="categor">
                    <Link href="/">
                      <a>Official trailer</a>
                    </Link>
                    <strong>Trailers</strong>
                  </div>
                </div>
                <div className="nav_Photo">
                  <div className="categor">
                    <Link href="/">
                      <a>The making of</a>
                    </Link>
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
