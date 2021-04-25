
/*******************************
           DO NOT TOUCH
 *******************************/

import React from 'react'
import ReactDOM from 'react-dom'

(async () => {

  const { REACT_APP_SOLUTION } = process.env
  const solution = REACT_APP_SOLUTION || 'your-solution'

  let module

  switch (solution) {
  case 'your-solution': default:
    module = await import('./src/app')
  }

  const { App } = module

  ReactDOM.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
    document.getElementById('root')
  )

})()

