import React from 'react';
import reactDom from 'react-dom';
import Header from './components/common/Header';
import List from './components/list/list';
import './index.css';

const App = () => {
    const title = 'React Coin';
    return (
        <div>
            <Header />
            <List />
        </div>
    );
}

reactDom.render(
    <App />,
    document.getElementById('root')
);

