import React from 'react'

const Filter = ({myString, handleStringChange}) => {
    return (
        <div>
            Filter shown with <input value={myString}
                onChange={handleStringChange}
            />
        </div>
    )
}

export default Filter