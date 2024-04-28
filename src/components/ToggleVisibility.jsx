import React, {useState} from 'react'

export const ToggleVisibility = ({children}) => {

    const [show, setShow] = useState(true)

  return (
    <React.Fragment>
        {show && children}
        <button onClick={() => setShow(!show)}>
            {show ? '+' : 'Show'}
        </button>
    </React.Fragment>
  )
}
