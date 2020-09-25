import React from 'react'

const DropdownItem = (props) => {
    return (
        <option>
            {props.children}
        </option>
    )
}

export default DropdownItem;