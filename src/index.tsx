import {createRoot} from 'react-dom/client'
import './init'
import App from './components/App'

// rtk query
import {Provider} from 'react-redux'
import store from 'store'

import './styles/app.scss'

const root = createRoot(document.getElementById('app')!)

root.render(
  <Provider store={store}>
    <App/>
  </Provider>
)