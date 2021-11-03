import React from "react";
import ProgressBar from 'react-bootstrap/ProgressBar';

function Collection(collection, name) {
    return (
        <div className="corner skills py-2">
            <h5 className="ps-3 pb-3 pt-2">{name}</h5>
            {Object.keys(collection).map((key, index) => {
                return (
                    <div className="ps-3">
                        <ProgressBar key={index} now={collection[key]} />
                        <p>{key}</p>
                    </div>
                );
            })}
        </div>
    );
}

export default Collection;
