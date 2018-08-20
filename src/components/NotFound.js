import React from 'react';
import Header from './Header';
import Footer from './Footer';

const NotFound = () => {
    return (
        <div className="App">
            <Header />
                <div className="inner">       
                    <h2>Page Not Found</h2>
                </div>
            <Footer />
        </div>
    )
}

export default NotFound;