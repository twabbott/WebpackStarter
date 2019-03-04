# VanillaJS Webpack Starter Kit

This is a basic repo that has the following:
1. Webpack 4
2. Babel 7

# 1. NPM Scripts
I've set up the following scripts.

## 1.1 Building the project
This project uses NPM.
```
npm install
npm start
```

## 1.1 Running in Dev mode
Dev mode uses `webpack-dev-server`, and will automatically launch the browser.  

To launch in dev mode, use this command:
```
npm start
```

Changes to HTML pages will be hot-loaded.

Dev mode does not minify your javascript, so you should be able to debug without having to do anything extra.


## 1.2 Production builds
To get a production build, use this command

```
npm run build
```

Everything will be copied to the `/dist` folder.

# 2. Webpack Configuration
Webpack has been configured with the following extensions:

1. **Babel 7:** For all that ES6+ goodness
2. **html-loader:** Now your HTML can get webpack-ified, too!  For more info, see the documentation [here](https://github.com/webpack-contrib/html-loader).
3. **html-webpack-plugin:** Does more good stuff.  Read about it [here](https://github.com/jantimon/html-webpack-plugin).
4. **style-loader and css-loader:** Allows you to import `.css` files instead of linking them into your your `.html`.
5. **file-loader:** bundling for images or for embedded fonts.

# 3. Development

## 3.1 Loading CSS
All CSS should be loaded in index.js.  I mean, you can load it elsewhere, but since we're talking vanilla CSS you'll want to keep things simple.

Just import it straight, and Webpack will know what to do.  Good times!

```javascript
import './styles/styles.css';
```

Assuming you got the path right, this should just work.


## 3.2 Loading Images
I've included an example of loading an image for you to follow,but here is the basic gist.

To start off with, add an `<img>` attribute with an id, like so:

```HTML
<img id="my-image" />
```

Now in the JavaScript file where you want to set the image you need to do two things.  First import the image at the top, like so:

```javascript
import myImage from './images/my-image.png';
```

You now have a variable you can use, which contains a reference to the image.  You can fetch the `<img>` element from the DOM, and set its src attrubute like so:

```javascript
const img = document.getElementById('my-image');
img.src = myImage;
```

## 3.3 Loading JSON files
You can straight-up load JSON files like with JavaScript.  Webpack doesn't even need a loader (not since version 2).

```javascript
import mockData from './mocks/my-mock-data.json';
```

You now have a variable that contains your parsed JSON as a plain-old JavaScript object.  Enjoy!

```javascript
const myName = mockData[0].customerName;
```


## 3.3 Loading fonts
If you're serious about this, you can read up [here](https://webpack.js.org/guides/asset-management#loading-fonts).  Knock yourself out.