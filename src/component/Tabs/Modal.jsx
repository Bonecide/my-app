export default function Modal({ title, description }) {
import Modal from './Modal';

    function Modal({ title, description })
    return (
    <div>
        <h1>{title}</h1>
        <p>{description}</p>
    </div>
    )
}

export function Modal(){
    return ReactDOM.createPortal(<Modal/>, 'modal-rout')
}