# PARAMS

This script parses the [Query String](https://en.wikipedia.org/wiki/Query_string) very simply.

## Install

Just add script file in html file.

<br/>

### Basic

```html
<html doctype>
    <head>
        <!-- load css -->

        <!-- load script -->
        <script src="params.js"></script>
    </head>
    <body>
    </body>
</html>
```


### CDN


```html
<script src="https://cdn.jsdelivr.net/gh/Tree-Some/params/params.js"></script>
```

<br/>


## Usage

Can access `location.params` JSON Object

```js
// http://localhost:3000/?hello=world
console.log(location.params);
// --> { hello: "world" }
```

And decoding URI automatically.

```js
// http://localhost:3000/?decode=%27%EC%95%88%EB%85%95%ED%95%98%EC%84%B8%EC%9A%94%27
console.log(location.params);
// --> { decode: "'안녕하세요'" }
