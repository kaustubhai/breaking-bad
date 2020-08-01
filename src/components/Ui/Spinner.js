import React from 'react'
import spinner from '../../img/spinner.gif';

const Spinner = () => {
    return (
        <img src={spinner} width="200px" style={{margin: 'auto', display: 'block'}} alt="Loading..."></img>
    )
}

export default Spinner
