import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

const Members = () => {
    return <div>Members</div>;
};

const edit = () => {
    return(
        <div>
            <BrowserRouter>
                <Route path='/Members' exact component={Members} />
            </BrowserRouter>
        </div>
    );
};

export default edit;