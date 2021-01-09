import React from 'react';
import ReactDOM from 'react-dom'
import {Provider} from './context/context'
import { SpeechProvider } from '@speechly/react-client'

import App from './App';
import './index.css'

ReactDOM.render(

    <SpeechProvider appId = "a6f5a756-cf63-4b80-8ccf-6354f7c68c43" language = "en-US">
    <Provider>
        <App />
    </Provider>
    </SpeechProvider>,
    document.getElementById('root')
);