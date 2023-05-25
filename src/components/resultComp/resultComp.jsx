import React from 'react';
import './resultCompstyle.css';
import NameCard from '../listedName/nameBox';

const Names = (props) => {

    const wordsList = props.suggestions.map((word) => {
        return <NameCard key={word} suggestedWord={word} />
    });

    return (
        <div className="allwords">{wordsList}</div>
    );
};
export default Names;