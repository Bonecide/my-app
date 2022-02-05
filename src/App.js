
import './App.css';
// import { Store } from './context/store';
// import ClassComponentik from './posts/ClassComponents';
// import Test from './test/Test';
import { ThemeContext } from './theme';
import { useState } from 'react';
import Header from './header';



function App() {
  const [theme, setTheme] = useState('light')
  const onChangeTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light')
  }
  return (
<ThemeContext.Provider value={{theme, setTheme: onChangeTheme}}>                
<div className={theme}>
  
  <Header/>
  {/* <ClassComponentik/> */}
  </div>                 

</ThemeContext.Provider>                       

  )
}


export default App;
