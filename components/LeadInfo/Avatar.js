import React from 'react';
import Image from 'next/image';

const Avatar = () => (
  <div className="avatar-wrapper">
    <div className="avatar-bg avatar-bg-animation">
      <Image
        src="/static/images/nedko.jpeg"
        alt="Picture of the author"
        width={150}
        height={150}
        className="avatar avatar-animation"
      />
      <div className="text-bg text-bg-animation" />
    </div>
  </div>
);

export default Avatar;
