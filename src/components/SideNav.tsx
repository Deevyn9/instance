import React from 'react';
import instanceLogo from "../assets/instance logo.svg";
import profile from "../assets/profile.svg";
import payment from "../assets/payment.svg";
import finance from "../assets/finance.svg";
import overview from "../assets/overwiew.svg"
import logout from "../assets/logout.svg"

type Props = {
  toggle: boolean;
  };

const Nav: React.FC<Props> = ({ toggle }) => {
  return (
    // used template literals to add the class that toggles the navbar
    // initial nav is the background overlay
    <nav
      className={`${
        toggle ? "flex" : "hidden"
      } xl:flex absolute xl:relative h-screen w-screen m-0 xl:w-96 bg-black bg-opacity-60 z-30`}
    >
      {/* The div directly below this is the main white background */}
      <div className="relative w-4/5 xl:w-full h-screen bg-white bg-opacity-100 flex flex-col items-center">
        {/* instance logo */}
        <div className="my-5">
          <img src={instanceLogo} alt="" />
        </div>

        {/* links */}
        <ul className="mt-14 w-full grid place-items-center">
          <li className="h-14 relative w-full grid place-items-center">
            <div className="absolute bg-main-blue h-full w-3 left-0 rounded-r-xl"></div>
            <p className="h-full w-48 rounded-xl bg-main-blue flex gap-2 items-center justify-center text-white">
              <img src={overview} alt="overwiew logo" /> Overview
            </p>
          </li>
          <li className="h-14 flex gap-2 items-center mt-3 text-dark-gray-text">
            <img src={finance} alt="finance logo" /> Finance
          </li>
          <li className="h-14 flex gap-2 items-center mt-3 text-dark-gray-text">
            <img src={payment} alt="payment logo" /> Payment
          </li>
          <li className="h-14  mt-3 flex gap-2 items-center text-dark-gray-text">
            <img src={profile} alt="profile logo" /> Profile
          </li>
        </ul>
        <div className="mt-52 flex text-logout-red text-base font-semibold items-center"><img src={logout} alt="" className='mr-2' /> Logout</div>
      </div>
    </nav>
  );
}

export default Nav;
