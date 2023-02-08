import React, {useState} from 'react';
import Nav from './components/SideNav';
import Header from './components/Header';

function App() {
  const [ toggle, setToggle ] = useState(false);

  const clickHandler = () => {
    setToggle(!toggle)
  }

  return (
    <div className="flex">
      <Nav />
      <div className="flex flex-col">
        <Header />
      </div>
    </div>
  );
}

export default App;
