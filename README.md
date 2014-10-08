# promiseUserMedia.js

Promisified access to getUserMedia & vendor prefixes.

### Install

Include the promiseUserMedia.js file and you will get a `promiseUserMedia` global. You can
fetch the library from bower (**promise-user-media**) or use npm (**promise-user-media**) & browserify.

### Usage

```html
<script src="http://getuser.media/promiseUserMedia.js"></script>
<script>
promiseUserMedia({
  video: true,
  audio: true,
}).then(function(localStream){
  document.querySelector('#gum').src = window.URL.createObjectURL(localStream);
}).catch(function(error){
  alert('getUserMedia: ' + error.name + "\n" + error.message);
});
</script>
```

### More getUserMedia wrappers

- [HenrikJoreteg/getUserMedia](https://github.com/HenrikJoreteg/getUserMedia)
- [juliangruber/get-user-media](https://github.com/juliangruber/get-user-media)
- [addyosmani/getUserMedia.js](https://github.com/addyosmani/getUserMedia.js)

### License

MIT. Copyright (c) 2014 [Jan Lelis.](https://twitter.com/janlelis)

