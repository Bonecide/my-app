import { useEffect, useState } from "react"
import { Outlet, useNavigate, useParams, useSearchParams } from "react-router-dom"

const STATUSES = {
    WARNING: 'WARNING',
    ERROR : 'ERROR',
    INFO: 'INFO',
    SUCCESS: "SUCCESS"
}

const STATUS_MESSAGES = {
    [STATUSES.INFO]: <h1>Info</h1>,
    [STATUSES.SUCCESS]: <h1>Success</h1>,
    [STATUSES.ERROR]: <h1>Error</h1>,
    [STATUSES.WARNING]: <h1>Warning</h1>,
}

export default function AboutDetailsPage() {
    const params = useParams()
    const navigate = useNavigate()
    const [searchParams, setSearchParams] = useSearchParams()
    const [status,setStatus] = useState(STATUSES.SUCCESS)

    const query = Object.fromEntries([...searchParams])

    useEffect(() => {
        if (query.isAuth === "false") {
            navigate('/about', { replace: true })
        }
        setSearchParams({
            ...query,
            isUser: false,
        })
    }, [])
    const onSelectStatus = (event) => {
        const [{ value: selectedStatus }] = event.target.selectedOptions
        setStatus(selectedStatus)
    }
    
    return (
        
        <div>Details Page {params.aboutId}
        <select value={status} onChange = {onSelectStatus}>
            <option value={STATUSES.SUCCESS}>{STATUSES.SUCCESS}</option>
            <option value={STATUSES.INFO}>{STATUSES.INFO}</option>
            <option value={STATUSES.ERROR}>{STATUSES.ERROR}</option>
            <option value={STATUSES.WARNING}>{STATUSES.WARNING}</option>
        </select>
        {STATUS_MESSAGES[status]}
        
            <Outlet />
        </div>
    )
}   