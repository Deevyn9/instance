import React, { useState } from "react";
import Nav from "./components/SideNav";
import Header from "./components/Header";

interface Props {
  clickHandler: () => void;
}

function App() {
  const [toggle, setToggle] = useState<boolean>(false);

  const clickHandler = () => {
    setToggle(!toggle);
  };

  return (
    <div className="flex">
      <Nav toggle={toggle} />
      <div className="flex flex-col">
        <Header clickHandler={clickHandler} toggle={toggle} />
      </div>
    </div>
  );
}

export default App;
