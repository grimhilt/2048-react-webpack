import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import BoardView from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<BoardView />, document.getElementById('boardDiv'));
registerServiceWorker();
