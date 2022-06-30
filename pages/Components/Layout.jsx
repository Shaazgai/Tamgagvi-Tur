import React from 'react';
import Image from 'next/image';
import topLeft from '../../public/img/corner-top-left.png';

const Layout = ({ children }) => {
  return (
    <div className="layout">
      {/* <Image src={topLeft} width="80" height="80" alt=""   className='frame'/> */}
      <div className="corner-wrappper">
        <img src="/img/corner-top-left.png" alt="" className="corner" />
        <img src="/img/corner-top-right.png" alt="" className="corner" />
        <img src="/img/corner-bottom-right.png" alt="" className="corner" />
        <img src="/img/corner-bottom-left.png" alt="" className="corner" />
        <img src="/img/border-top.png" alt="" className="frameSide" />
        <img src="/img/border-right.png" alt="" className="frame" />
        <img src="/img/border-bottom.png" alt="" className="frameSide" />
        <img src="/img/border-left.png" alt="" className="frame" />
      </div>
      <div className="background-wrapper">
        <img src="/img/shadow.png" alt="" className="background-layer" />
        <img src="/img/dirty.png" alt="" className="background-layer" />
      </div>

      {children}
    </div>
  );
};

export default Layout;
