import React from 'react';
import './header.scss'

const HeaderComponent = (props) => {
    return (
        <div className="header-container">
            <span className="title">{props.title}</span>
            <button className="btn btn-primary button-right" onClick={props.addclick}>Add user</button>
        </div>
    );
};

export default HeaderComponent;