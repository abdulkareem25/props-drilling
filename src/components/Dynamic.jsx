import React from 'react'
import { useParams } from 'react-router-dom'

const Dynamic = () => {
    const { id } = useParams();
    const defaultId = id || 'default';
    return (
        <div>
            <h2>{defaultId}</h2>
        </div>
    )
}

export default Dynamic
