import React, { useState } from 'react';
import Header from './Header';
import Movies from './Movie/Movies';

const App = () = {
    const [title, setTitle] = ('React Movie Cards');
    
    return (
        <div>
            <Header title=title />
            <div className="mt-5">
                <Movies />
            </div>
        </div>
    )
}

export default App;
