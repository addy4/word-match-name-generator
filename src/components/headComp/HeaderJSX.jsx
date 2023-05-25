import React from 'react';
import './header.css'

const headerComp = (props) => {
    return (
        <div className="headerContainer">
            <img
                src="https://raw.githubusercontent.com/addy4/Image-Processing/master/.github/images/undraw_Thought_process_re_om58.png"
                className={`${props.headExpanded ? 'header-minimized' : 'header-expanded'}`}
                alt="headerImageTag"
            />
            <h2 className="headerText">{props.headTitle}</h2>
        </div>
    );
};
export default headerComp;

//Line 10 : we can place different images