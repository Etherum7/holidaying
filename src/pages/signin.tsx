import React from 'react'
import TechList from '@module/TechList/TechList.module'
const signup = () => {
    return (
        <>
        
        <div  style={{ display:'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column'}}>
        <h1 style={{ fontSize: '8rem'}}>Sign In</h1>
            <TechList inputFocused={false}/>
        </div>
        </>
    )
}

export default signup
