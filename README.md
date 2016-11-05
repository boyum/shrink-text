# shrink-text
Recursively shrinks text to fit its containing element with vanilla JS.
[Check out the demo.](https://boyum.github.io/shrink-text/demo/)

## Install
### From npm
```
npm install shrink-text --save
```

then

```javascript
var shrinkText = require('shrink-text');
```
### From CDN
```html
<script type="text/javascript" src="https://cdn.rawgit.com/boyum/shrink-text/master/dist/shrink-text.min.js"></script>
```

then `shrinkText` should be defined as a global variable!

## Usage

index.html:
```html
<h1 id="my-way-too-long-title" class="shrink">Caaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaats</h1>
<h2 id="my-way-too-long-subtitle" class="shrink">Mooooooooooooore caaaaaaaaaaaaaaaats</h2>
```

script.js:
```javascript
const elements = document.getElementsByClassName('shrink');
shrinkText(elements);
```

OR

script.js:
```javascript
const elements = [document.getElementById('my-way-too-long-title'), document.getElementById('my-way-too-long-subtitle')];
shrinkText(elements);
```

OR 

script.js:
```javascript 
const element = document.getElementById('my-way-too-long-title');
shrinkText(element);
```

## License
Apache 2.0
Copyright 2016 Sindre Bøyum
