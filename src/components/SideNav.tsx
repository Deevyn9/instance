import React from 'react';

type Props = {
  toggle: boolean;
  };

const Nav: React.FC<Props> = ({ toggle }) => {
  return (
    <nav className={`${toggle? "flex" : "hidden" } lg:flex absolute lg:relative h-screen bg-red-400 w-4/5 lg:w-96`}>
        
    </nav>
  );
}

export default Nav;
