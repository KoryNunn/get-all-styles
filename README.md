# get-all-styles

Get's all css imported in <link> tags, and inlined inside <style> tags, in a target Node.

# Usage

```
var getAllStyles = require('get-all-styles');

getAllStyles(document.querySelector('.someElement'), function(error, styles){
    ... do something with styles
});
```