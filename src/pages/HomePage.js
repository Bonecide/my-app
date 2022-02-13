import { useContext, useEffect, useRef, useState } from 'react';
import ReactSelect from 'react-select';
import ClassComponent from '../ClassComponent';

import { ThemeContext } from '../theme';
import HelloWorld from './../HelloWorld';

export default function HomePage() {
  const [isActive, setActive] = useState([]);
  const activate = () => {
    setActive([]);
  }

  const options = [{ label: 'Tab 1', value: '1' }, { label: 'Tab 2', value: '2' }]

  const selectRef = useRef(null)
  
  useEffect(() => {
    selectRef.current.controlRef.childNodes[1].className = 'custom-arrow'
  }, [])

  return (
      <div>
        <ReactSelect ref={selectRef} />
        <div id="app" className={isActive.length && 'active'}>
          <HelloWorld/>
            
          
          
          
        </div>
      </div>
  );
}