import React from 'react';
import './searchbox.css'
const searchbox = ({ OnPassFromParent }) => {
    return (
        <div className="searchBoxContainer">
            <input
                onChange={(trigger) => OnPassFromParent(trigger.target.value)}
                className="inputBox"
                placeholder="Your Keywords?"
            />
        </div>
    )
}
export default searchbox;