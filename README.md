# identicons

Simple module to create SVG identicons like the ones used by [GitHub](https://github.com/blog/1586-identicons).

![Identicon](https://raw.githubusercontent.com/gimenete/identicons/master/examples/identicon.png)

## Installing

```
npm install identicons --save
```

## Usage

### SVG DOM

```html
<div id="identicon"></div>
```

```javascript
var svg = identicons.generateSVGDOM('username@example.com', { width: 200, size: 5 })
document.getElementById('identicon').appendChild(svg)
```

### SVG Data URI

```html
<img id="identicon">
```

```javascript
var src = identicons.generateSVGDataURIString('username@example.com', { width: 200, size: 5 })
document.getElementById('identicon').setAttribute('src', src)
```

### SVG String

```html
<div id="identicon"></div>
```

```javascript
var svg = identicons.generateSVGString('username@example.com', { width: 200, size: 5 })
document.getElementById('identicon').innerHTML = svg
```
