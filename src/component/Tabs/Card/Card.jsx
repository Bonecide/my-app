import './Card.css'
import { Fragment } from 'react/cjs/react.production.min';

const PRIORITIES =[
    {
        label: 'Low',
        value: 'LOW'
    },
    {
        label: 'Medium',
        value: 'MEDIUM'
    },
    {
        label: 'High',
        value: 'HIGH'
    },
]

function defaultRenderPriories({label, value}){
    return (
        <label value = {value}> {label}</label>
    )
}

export default function Card({title, body,renderPriorities= defaultRenderPriories }){
    return (
        <div className='card'>
            {title}
            {body}
            {PRIORITIES.map(({label,value}) => 
            <Fragment key={label}>
                {renderPriorities({label,value})}
            </Fragment>
            )}
        </div>
    )
}