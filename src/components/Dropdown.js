import React from 'react'
import { useSession } from 'hooks/Session'

const Dropdown = (props) => {
    
    const session = useSession();
    const displayedText = session.sessionData || 'incognito'
    
    return (
        <div>
            <label style={{display: "inline"}}>{displayedText}</label>
            <button style={{border: 'none', height: '10px'}}/>        
        </div>
    )
    
}

export default Dropdown;