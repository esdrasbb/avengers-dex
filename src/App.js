import React, { Component } from 'react';

import Header from './Header';
import Footer from './Footer';
import Avengers from './Avengers';

class Marvel extends Component {
    render() {
        return (<div className="container">
            <Header />
            <Avengers />
            <Footer />
        </div>);
    }
}

export default Marvel;