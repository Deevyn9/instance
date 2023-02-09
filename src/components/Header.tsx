import React from "react";
import notification from "../assets/Notification.svg"
import Picture from "../assets/picture.svg"
import dwonArrow from "../assets/Arrow Down.svg"

interface Props {
  clickHandler: () => void;
  toggle: boolean;
}

const Header: React.FC<Props> = ({ toggle, clickHandler }) => {
  return (
    <header className="calc-width justify-between xl:justify-end w-screen xl:w-full h-20 items-center flex px-3 xl:px-10">
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

      {/* right part of the header */}
      <div className="flex justify-self-end gap-5 items-center">
        <img src={notification} alt="notiicaton" />
        <div className="flex gap-1 items-center">
            <img src={Picture} alt="profile pic" />
            <p className="font-bold">Timothy</p>
            <img src={dwonArrow} alt="down arrow" />
        </div>
      </div>
    </header>
  );
};

export default Header;
