// import _ from 'lodash'
import './style.css'
// import Icon from './icon.png'
// import Data from './data.xml'
import printMe from './print.js'
import { cube } from './math.js'

if (process.env.NODE_ENV !== 'production') {
  console.log('Looks like we are in development mode')
}

function component() {
  const element = document.createElement('div')
  const btn = document.createElement('button')

  // Lodash, now imported by this script
  // element.innerHTML = _.join(['Hello', 'webpack'], ' ')
  // element.classList.add('hello')

  btn.innerHTML = 'Click me and check the console!'
  btn.onclick = printMe

  element.appendChild(btn)

  // Add the image to our existing div.
  // const myIcon = new Image()
  // myIcon.src = Icon

  // element.appendChild(myIcon)

  // console.log(Data)

  return element
}

function component2() {
  const element2 = document.createElement('pre')

  element2.innerHTML = ['hello webpack!', '5 cubed is equal to' + cube(5)].join(
    '\n\n'
  )
  return element2
}
let element = component()
let element2 = component2()
document.body.appendChild(element)
document.body.appendChild(element2)

if (module.hot) {
  module.hot.accept('./print.js', () => {
    console.log('Accepting the updated printMe module')
    document.body.removeChild(element)
    element = component() // Re-render the "component" to update the click handler
    document.body.appendChild(element)
  })
}
