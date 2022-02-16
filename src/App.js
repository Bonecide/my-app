import { useContext, useState } from 'react';
import { BrowserRouter, Outlet, Route, Routes } from 'react-router-dom';

import Header from './Header';

import AboutDetailsPage from './pages/AboutDetailsPage';
import AboutPage from './pages/AboutPage';
import CatGame from './pages/CatGame';
import HomePage from './pages/HomePage';
import NotFoundPage from './pages/NotFoundPage';
import Status from './pages/Status';
import { ThemeContext } from './theme';
import MaterialPage from './pages/MaterialPage';
import MaterialDetailsPage from './pages/MaterialDetailsPage';
import AlbumPage from './pages/AlbumPage';
import AlbumDetailsPage from './pages/AlbumDetailsPage';

function MainLayout() {
  const { theme } = useContext(ThemeContext)
  return (
      <div className={theme}>
        <Header />
        <Outlet />
      </div>
  )
}

function App() {
  const [theme, setTheme] = useState('dark')


  const onChangeTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light')
  }

  return (
    <ThemeContext.Provider value={{ theme, setTheme: onChangeTheme }}>
      
        <div className={theme}>
          <Header />
          <Routes>
          <Route path="album/:albumId" element={<AlbumDetailsPage/>} />
          <Route path="material" element={<MaterialPage />} />
          <Route path="album" element={<AlbumPage />} />
          <Route path="material/:postId" element={<MaterialDetailsPage />} />
            <Route path="game"
            element={<CatGame/>} 
            />
            <Route path='status'
            element = {<Status/>}
            />
              <Route
                index
                element={<HomePage />}
              />
              <Route
                path="about"
                element={<AboutPage />} 
              />
              <Route path="about/:aboutId" element={<AboutDetailsPage />}>
                <Route index element={<div>Bla bla</div>} />
                <Route path="details" element={<div>About custom</div>} />
              </Route>
              <Route
                path="*" 
                element={<NotFoundPage />} 
              />
          </Routes>
          </div>
    </ThemeContext.Provider>
  );
}

export default App;