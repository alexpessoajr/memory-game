import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import MemoryGame from './MemoryGame';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<MemoryGame />, document.getElementById('root'));
registerServiceWorker();
