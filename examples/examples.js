var identicons = require('../')

;(function svgDOM() {
  var svg = identicons.generateSVGDOM('username@example.com', { width: 200, size: 5 })
  document.getElementById('identicon1').appendChild(svg)
})()

;(function svgDataURI() {
  var src = identicons.generateSVGDataURIString('username@example.com', { width: 200, size: 5 })
  document.getElementById('identicon2').setAttribute('src', src)
})()

;(function svgString() {
  var svg = identicons.generateSVGString('username@example.com', { width: 200, size: 5 })
  document.getElementById('identicon3').innerHTML = svg
})()
