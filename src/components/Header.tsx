import React from "react";

type Props = {
    toggle: boolean;
    clickHandler: () => void;
};

const Header: React.FC<Props> = ({ toggle, clickHandler }) => {
  return (
    <header className="calc-width w-screen border-2 border-red-400 h-20 items-center flex px-3">
      {/* Creating a burger menu for mobile to toggle the side nav */}
      <div className="space-y-2 cursor-pointer" onClick={{clickHandler}}>
        <span className="block w-8 h-0.5 bg-gray-600"></span>
        <span className="block w-5 h-0.5 bg-gray-600"></span>
      </div>
    </header>
  );
}

export default Header;
