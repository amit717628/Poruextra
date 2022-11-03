
# PoruExtra

These is a easy to use searcher plugin for [Poru](https://github.com/parasop/poru) lavalink client .




## Features

- Support 8 sources
- 3 Search Type
- Time & Id & Image Support
- Easy to use 
- Free to use in any client



## Installation


```bash
  npm install poruextra
```
or
```bash
npm install AAYAN717628/Poruextra.git
```
```js
const poruPlugin = require("poruextra");
const poruPlugins = new poruPlugin()
const search = poruPlugins.Search("mere safar","track").then(response => {
    console.log(response)
})
```

    
## Example

```js
// SEARCHING TRACK
const poruPlugin = require("poruextra");
 const poruPlugins = new poruPlugin()
  poruPlugins.Search("mere safar","track").then(response => {
    console.log(response)
 })
```

```js
const poruPlugin = require("poruextra");
 const poruPlugins = new poruPlugin()
  poruPlugins.Search("raftar","artist").then(response => {
    console.log(response)
 })
 ```

 ```js
 const poruPlugin = require("poruextra");
 const poruPlugins = new poruPlugin()
  poruPlugins.Search("love","album").then(response => {
    console.log(response)
 })
 ```


 



## Authors

- [@AAYAN](https://www.github.com/AAYAN717628)

