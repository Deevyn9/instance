import { useState } from "react";
import Nav from "./components/SideNav";
import Header from "./components/Header";
import Overview from "./components/Overview";

const App = () => {
  // State that handles the toggling of the sidebar for screensizes below 1024px
  const [toggle, setToggle] = useState<boolean>(false);
  // state that handles toggling between the On-going Tx and Authorize Tx in the overview component
  const [showCard, setShowCard] = useState<boolean>(false);

  // Function that handles toggling of sidebar for screens  below 1024px
  const clickHandler = () => {
    setToggle(!toggle);
    // getting rid of vertical scrolling when the navbar is open
    if (!toggle) {
      document.body.style.overflowY = "hidden";
    } else {
      document.body.style.overflowY = "visible";
    }
  };

  // setting the state of the showCard to True
  const setTrue = () => {
    setShowCard(true);
  };

  // setting the state of the showCard to false
  const setFalse = () => {
    setShowCard(false);
  };

  return (
    <div className="flex w-screen">
      <Nav toggle={toggle} />
      <div className="flex w-full flex-col">
        <Header clickHandler={clickHandler} toggle={toggle} />
        <Overview setFalse={setFalse} setTrue={setTrue} showCard={showCard} />
      </div>
    </div>
  );
}

export default App;
