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
    width : "100%"
}

export default function Header() {
    const { theme } = useContext(ThemeContext)

    return (
       <div style={styles}>
        <div className={`header c-${theme}`}>
            <Link to="/">Главная</Link>
            <Link to="about">О нас</Link>
            <Link to='game'> Cats </Link>
            <Link to='status'> Status </Link>
            <ThemeButton>Mode</ThemeButton>
        </div>
    </div> 
    )
}
