import React from 'react';
import ReactDOM from 'react-dom';



function Image(props) {
    return (
        <div className="name">
            <img className="name"
                src={props.url}
                alt={props.name}
            />
        </div>
    );
}

export default Image;

