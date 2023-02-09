import React from 'react';

type Props = {
  toggle: boolean;
  };

const Nav: React.FC<Props> = ({ toggle }) => {
  return (
    // used template literals to add the class that toggles the navbar
    // initial nav is the background overlay
    <nav className={`${toggle? "flex" : "hidden" } xl:flex absolute xl:relative h-screen w-screen m-0 xl:w-96 bg-black bg-opacity-60 z-30`}>
        {/* The div directly below this is the main white background */}
        <div className='w-4/5 lg:w-full h-screen bg-white bg-opacity-100'>
            
        </div>
    </nav>
  );
}

export default Nav;
