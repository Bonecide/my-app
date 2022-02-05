import { useContext } from "react";
import { ThemeContext } from './theme';
import ThemeButton from "./ThemeButton";

export default function Header() {
    const { theme } = useContext (ThemeContext)

    return (
        <div className={`header c-${theme}`}>
        <h1>Главная</h1>
        <h1>Настройки</h1>
        <ThemeButton>Поменять Тему</ThemeButton>
        </div>
    )
}