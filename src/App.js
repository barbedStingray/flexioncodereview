import { useState } from 'react';
import UnitConverter from './UnitConverter';
import './App.css';

import unitLibrary from './Scripts/unitLibrary';



function App() {


  const [display, setDisplay] = useState('Temperature');
  const [library, setLibrary] = useState(unitLibrary[display]);

  function changeLibrary(title) {
    // console.log('setting library');
    setDisplay(title);
    setLibrary(unitLibrary[title]);
  }

  
  return (
    <div className="flexionCodeReview">

      <div className='conversionSpace'>

        <div className='unitTabs'>
          {Object.keys(unitLibrary).map((title, i) => (
            <div
              key={i}
              onClick={() => changeLibrary(title)}
              className={title === display ? 'unitDiv highlight' : 'unitDiv'}
            >
              <h1>{title}</h1>
            </div>
          ))}
        </div>

          <UnitConverter
            library={library}
          />

      </div>
    </div >
  );
}

export default App;
