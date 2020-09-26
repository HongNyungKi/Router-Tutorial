import React from 'react';
import {WidthRouter} from 'react-router-dom';

function WidthRouterFn({location, match, history}){
    return (
        <div>
            <h4>Location</h4>
            <textarea readOnly value={JSON.stringify(location, null, 2)}/>
        </div>
    )
}

export default WidthRouterFn;