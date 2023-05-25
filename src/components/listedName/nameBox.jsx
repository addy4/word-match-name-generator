import React from 'react';
import './StyleNameBox.css';

const nameBox = (props) => {
    return (
        <div className="name-card">
            <p className="name-style">{props.suggestedWord}</p>
        </div>
    )
}

export default nameBox;