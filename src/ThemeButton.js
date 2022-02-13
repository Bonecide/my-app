import { useContext } from "react"
import { ThemeContext } from './theme';


export default function ThemeButton({ children }) {

    const { theme, setTheme } = useContext(ThemeContext)

    const styles = {
        light: {
            background: 'white',
            color: 'black',
            border : 'none',
            width : '50px',
            borderRadius : '2px',
            cursor : 'pointer'
        },
        dark: {
            background: 'black',
            width : '50px',
            color: 'white',
            border : 'none',
            borderRadius : '2px',
            cursor : 'pointer'
        }
    }

    return (
        <button 
            style={styles[theme]} 
            onClick={setTheme}
        >
            {children}
        </button>
    )
}