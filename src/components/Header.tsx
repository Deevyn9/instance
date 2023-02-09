import React from "react";

interface Props {
  clickHandler: () => void;
  toggle: boolean;
}

const Header: React.FC<Props> = ({ toggle, clickHandler }) => {
  return (
    <header className="calc-width w-screen h-20 items-center flex px-3">
      {/* Creating a burger menu for mobile to toggle the side nav */}
      <div onClick={clickHandler} className="z-50 xl:hidden">
        {toggle ? (
          <div className="cursor-pointer relative h-10 w-10 flex items-center justify-center">
            <span className="block w-8 h-1 bg-main-blue absolute -rotate-45"></span>
            <span className="block w-8 h-1 bg-main-blue absolute rotate-45"></span>
          </div>
        ) : (
          <div className="space-y-1.5 cursor-pointer h-10 w-10 flex items-center flex-col justify-center">
            <span className="block w-8 h-1 bg-main-blue"></span>
            <span className="block w-8 h-1 bg-main-blue"></span>
            <span className="block w-8 h-1 bg-main-blue"></span>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
