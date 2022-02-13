import { useState } from 'react';
import Mouse from '../Mouse/Mouse';

export default function Cat() {
    
const styles = {
    position : 'absolute',
    width : '40px',
    height: '40px',
}

    return (
        <Mouse render={({ x, y }) =>   
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2b/Black_Cat_Vector.svg/1024px-Black_Cat_Vector.svg.png" style={{ ...styles, left: x, top: y }} />} />
    ) 
}