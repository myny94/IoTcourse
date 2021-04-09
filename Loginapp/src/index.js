
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
  case 'solution-to-review-1':
    module = await import('./reviews/solution-to-review-1/app')
    break
  case 'solution-to-review-2':
    module = await import('./reviews/solution-to-review-2/app')
    break
  case 'your-solution': default:
    module = await import('./your-solution/app')
  }

  const { App } = module

  ReactDOM.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
    document.getElementById('root')
  )

})()

