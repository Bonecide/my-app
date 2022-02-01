import { useState } from 'react';
export default function Test() {
    const [state, setState] = useState('')
    return (
      <div>
        <input onChange={e => (setState (e.target.value))} type='text'  />
        <p>{state}</p>
      </div>
    )
  }