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
              <span>Цэс</span>
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
                <p>Тамгагүй төр</p>{' '}
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
              <span>МОН</span>
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
                  <a>Бидний тухай</a>
                </Link>
              </li>
              <li>
                <Link href="/">
                  <a>Жүжгийн талаар</a>
                </Link>
              </li>
              <li>
                <Link href="/">
                  <a>Түүх</a>
                </Link>
              </li>
              <li>
                <Link href="/">
                  <a>Дүрүүд</a>
                </Link>
              </li>
              <li>
                <Link href="/">
                  <a>Тасалбар</a>
                </Link>
              </li>
              <li>
                <Link href="/">
                  <a>Тун удахгүй</a>
                </Link>
              </li>
            </ul>
            <ul className="second">
              <li>
                <Link href="/">
                  <a>Холбоо барих</a>
                </Link>
              </li>
              <li>
                <Link href="/">
                  <a>Тоглолтын хуваарь</a>
                </Link>
              </li>
              <li>
                <Link href="/">
                  <a>Хамтран байгууллагууд</a>
                </Link>
              </li>
            </ul>
            <div className="link">
              <Link href="https://www.youtube.com/watch?v=LGs_vGt0MY8">
                <a>Тамгагүй төр facebook</a>
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
                    Тамгагүй төр <br /> 1998      
                  </a>
                </Link>
                <strong>Туршлага</strong>
              </div>
            </div>
            <div className="nav_right need">
              <div className="nav_top need">
                <div className="categor">
                  <Link href="/">
                    <a>Бидний тухай </a>
                  </Link>
                  <strong>Гарал үүсэл</strong>
                </div>
              </div>
              <div className="nav_bottom">
                <div className="nav_photo">
                  <div className="categor">
                    <Link href="/">
                      <a>Жүжгийн хэсгээс</a>
                    </Link>
                    <strong>танилцуулга</strong>
                  </div>
                </div>
                <div className="nav_Photo">
                  <div className="categor">
                    <Link href="/">
                      <a>Тун удахгүй</a>
                    </Link>
                    <strong>Тайзны ард</strong>
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
