import './style.css'
import data from './mydata.json'
import data_url from './mydata.json?url'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    This page is /. <a href="/main2/">Go to /main2/</a>
  </div>
  <div>
    The frog data is: ${data.frogs.join(', ')}
  </div>
  <div>
    The JSON URL is: ${data_url}
  </div>
`
