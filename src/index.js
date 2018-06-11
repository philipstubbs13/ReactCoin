import React from 'react';
import reactDom from 'react-dom';
import Header from './components/common/Header';
import './index.css';

const App = () => {
    const title = 'React Coin';
    return (
        <div>
            <Header />
            <h1>{title}</h1>
            <p>Up to date crypto currencies financial data</p>
        </div>
    );
}

reactDom.render(
    <App />,
    document.getElementById('root')
);

