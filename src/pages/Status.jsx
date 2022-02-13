import { useContext, useState } from "react"
import { Outlet } from 'react-router-dom';
import { ThemeContext } from '../theme'
import Alert from '@mui/material/Alert';

const STATUSES = {
    WARNING: 'WARNING',
    ERROR : 'ERROR',
    INFO: 'INFO',
    SUCCESS: "SUCCESS"
}


const STATUS_MESSAGES = {
    [STATUSES.INFO]:    <Alert  variant="filled" severity="info">Пришла информация</Alert>,
    [STATUSES.SUCCESS]: <Alert variant="filled" severity="success">Молодец!</Alert> ,
    [STATUSES.ERROR]:   <Alert variant="filled" severity="error">ОШИБКА!</Alert>,
    [STATUSES.WARNING]: <Alert variant="filled" severity="warning">ВНИМАНИЕ!!</Alert>,
}


export default function Status(){

    const { theme } = useContext(ThemeContext)
    const [status,setStatus] = useState(STATUSES.SUCCESS)
    const onSelectStatus = (event) => {
        const [{ value: selectedStatus }] = event.target.selectedOptions
        setStatus(selectedStatus)
    }
    const styles = {
        light: {
            color: 'white',
        },
        dark: {
            color: 'black',
        }
    }
    return (
        <div>
        <select value={status} onChange = {onSelectStatus}>
            <option value={STATUSES.SUCCESS}>{STATUSES.SUCCESS}</option>
            <option value={STATUSES.INFO}>{STATUSES.INFO}</option>
            <option value={STATUSES.ERROR}>{STATUSES.ERROR}</option>
            <option value={STATUSES.WARNING}>{STATUSES.WARNING}</option>
        </select>
          <div className={`header c-${theme}`}>{STATUS_MESSAGES[status]}</div>
        
            <Outlet />
        </div>
    )
    
}