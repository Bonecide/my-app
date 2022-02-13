import { useState } from "react"

export default function Mouse({render}) {
    const [mouse , setMouse] = useState({x : 0, y:0})

    const styles1 = {
        width : '100%',
        height : '100vh' 
    }
    return (
        <div style={styles1} onMouseMove={event => setMouse({x : event.clientX , y: event.clientY })}>
            {render && render(mouse)}
        </div>
    )
}