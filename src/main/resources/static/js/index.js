// Imported Components
const entry = document.querySelector('#app')
const { AppWrapper } = require('./appWrapper')
const { Header } = require('./header')
const { Main } = require('./main')
const { Footer } = require('./footer')

// App Components
const header = new Header()
const main = new Main()
const footer = new Footer('&copy; WCCI 2018')

// Imported Tools
const { makeElement } = require('./helpers')

// Build App
AppWrapper.innerHTML += header.render()
AppWrapper.innerHTML += main.render()
AppWrapper.innerHTML += footer.render()

// Bootstrap Application
entry.appendChild(AppWrapper)