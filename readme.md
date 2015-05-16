# node-markup-color-extractor

## Description
Extract colors from HTML and XML. This library can detect all of the color types supported by [TinyColor](https://github.com/bgrins/TinyColor).

## API
#### extractColors.from.buffer(```opt```)

Extract colors from a buffer

* object `opt` - An options object
  * buffer `buffer` - A [Buffer](https://nodejs.org/api/buffer.html) containing markup
  * function(null|object `err`, array `colors`) `cb` - A function to be executed after the colors are extracted
  * boolean `unique` - (Optional) If `true`, the color array will not contain duplicates (Default `true`)
  * boolean `text` - (Optional) If `true`, will search element inner text for colors
  * boolean|array `attributes` - (Optional) If `true`, will search all element attributes for colors, or if an array, will search only the attributes listed in the array

__Example__

```
fs.readFile(path.join(__dirname, 'colors.xml'), function(err, data) {
    if (err) { throw err; }

    extractColors.from.buffer({
        buffer: data,
        attributes: true,
        text: true,
        cb: function(err, colors) {
            if (err) { throw err; }
            console.log(colors);
        }
    });
});
```

#### extractColors.from.string(```opt```)

Extract colors from a string

* object `opt` - An options object
  * string `string` - A string containing markup
  * function(null|object `err`, array `colors`) `cb` - A function to be executed after the colors are extracted
  * boolean `unique` - (Optional) If `true`, the color array will not contain duplicates (Default `true`)
  * boolean `text` - (Optional) If `true`, will search element inner text for colors
  * boolean|array `attributes` - (Optional) If `true`, will search all element attributes for colors, or if an array, will search only the attributes listed in the array

__Example__

```
extractColors.from.string({
    string: '<color value="#E0162B">#0052A5</color>',
    text: true,
    attributes: ['value'],
    cb: function(err, colors) {
        if (err) { throw err; }
        console.log(colors);
    }
});
```

#### extractColors.from.file(```opt```)

Extract colors from a file

* object `opt` - An options object
  * string `file` - A path to a file containing markup
  * function(null|object `err`, array `colors`) `cb` - A function to be executed after the colors are extracted
  * boolean `unique` - (Optional) If `true`, the color array will not contain duplicates (Default `true`)
  * boolean `text` - (Optional) If `true`, will search element inner text for colors
  * boolean|array `attributes` - (Optional) If `true`, will search all element attributes for colors, or if an array, will search only the attributes listed in the array

__Example__

```
extractColors.from.file({
    file: path.join(__dirname, 'colors.xml'),
    attributes: true,
    text: true,
    cb: function(err, colors) {
        if (err) { throw err; }
        console.log(colors);
    }
});
```

#### extractColors.from.url(```opt```)

Extract colors from a url

* object `opt` - An options object
  * string `url` - A url to a file containing markup
  * function(null|object `err`, array `colors`) `cb` - A function to be executed after the colors are extracted
  * boolean `unique` - (Optional) If `true`, the color array will not contain duplicates (Default `true`)
  * boolean `text` - (Optional) If `true`, will search element inner text for colors
  * boolean|array `attributes` - (Optional) If `true`, will search all element attributes for colors, or if an array, will search only the attributes listed in the array

__Example__

```
extractColors.from.url({
    url: 'http://site.com/colors.html',
    attributes: true,
    text: true,
    cb: function(err, colors) {
        if (err) { throw err; }
        console.log(colors);
    }
});
```

#### Note

You may also supply any of the [htmlparser2 parser options](https://github.com/fb55/htmlparser2/wiki/Parser-options) in ```opt``` for all of the methods listed above.

## Installation
#### Npm
```
npm install markup-color-extractor
```

# Tests
Before running the tests, Mocha must be installed:
```
npm install -g mocha
```

To run the tests:
```
npm test
```