import React, { memo } from 'react'

const ComponentOne = ({user}) => {
    console.log('I am running')
    return (
        <div>
            <ComponentOne user ={user}/>
        </div>
    )
}

export default memo(ComponentOne) 
