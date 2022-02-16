import { useContext } from 'react';
import { Link } from 'react-router-dom';
import './App.css';
import { ThemeContext } from './theme';
import ThemeButton from './ThemeButton';
;

const styles = {
    height : '30px',
    display : 'flex',
    justifyContent : 'center',
    width : "100%",
    textDecoration: 'none'
}

export default function Header() {
    const { theme } = useContext(ThemeContext)
    const linkstyle = {
        textDecoration: 'none',
        color: `header c-${theme} `
       
    }

    return (
       <div style={styles}>
        <div className={`header c-${theme} `}>
            <Link  className={`header c-${theme} `} to="/"       style={linkstyle}>Главная</Link>
            <Link  className={`header c-${theme} `} to="about"   style={linkstyle}>О нас</Link>
            <Link  className={`header c-${theme} `} to='game'    style={linkstyle}> Cats </Link>
            <Link  className={`header c-${theme} `} to='status'  style={linkstyle}> Status </Link>
            <Link  className={`header c-${theme} `} to='material'style={linkstyle}>Material </Link>
            <Link  className={`header c-${theme} `} to='album'   style={linkstyle}>Album </Link>
            <ThemeButton>Mode</ThemeButton>
        </div>
    </div> 
    )
}
