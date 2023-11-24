# mr-35843 pub dev files

Public files for the very first implementations and progress on game dev concepts and implementations.
Ever going work in progress, until it's not!

Current build: Build0002!
Features: 
5 layer map/2d game world

dynamic zoom based upon resolution

Responsive game client resizing

Upcoming: Build0003 - Sprites and animations!
2 Player sprites
Player sprites walking animations & controls
Player sprites casting animations
Player sprites tools animations
Player sprites combat animations

Further ahead: 	Build0004 - Player gameworld collisions and physics
		Build0005 - Expanding the gameworld and zone transfers
  		Build0006 - Signs of life! Adding the first NPC's
    		Build0007 - Basic pathfinding for enemies.

      		More too be announced soon!
  		
		




# Phaser 3 + Vite.js Template
> Make Phaser 3 games with modern frontend tooling.

![License](https://img.shields.io/badge/license-MIT-green)

## Prerequisites

You'll need [Node.js](https://nodejs.org/en/) and [npm](https://www.npmjs.com/) installed.

It is highly recommended to use [Node Version Manager](https://github.com/nvm-sh/nvm) (nvm) to install Node.js and npm.

For Windows users there is [Node Version Manager for Windows](https://github.com/coreybutler/nvm-windows).

Install Node.js and `npm` with `nvm`:

```bash
nvm install node

nvm use node
```

Replace 'node' with 'latest' for `nvm-windows`.

## Getting Started

You can clone this repository or use [degit](https://github.com/Rich-Harris/degit) to scaffold the project like this:

```bash
npx degit https://github.com/ourcade/phaser3-vite-template my-folder-name
cd my-folder-name

npm install
```

Start development server:

```
npm run start
```

To create a production build:

```
npm run build
```

Production files will be placed in the `dist` folder. Then upload those files to a web server. 🎉

## Project Structure

```
    .
    ├── dist
    ├── node_modules
    ├── public
    ├── src
    │   ├── HelloWorldScene.js
    │   ├── main.js
	├── index.html
    ├── package.json
```

JavaScript files are intended for the `src` folder. `main.js` is the entry point referenced by `index.html`.

Other than that there is no opinion on how you should structure your project.

There is an example `HelloWorldScene.js` file that can be placed inside a `scenes` folder to organize by type or elsewhere to organize by function. For example, you can keep all files specific to the HelloWorld scene in a `hello-world` folder.

It is all up to you!

## Static Assets

Any static assets like images or audio files should be placed in the `public` folder. It'll then be served from the root. For example: http://localhost:8000/images/my-image.png

Example `public` structure:

```
    public
    ├── images
    │   ├── my-image.png
    ├── music
    │   ├── ...
    ├── sfx
    │   ├── ...
```

They can then be loaded by Phaser with `this.image.load('my-image', 'images/my-image.png')`.

# ESLint

This template uses a basic `eslint` set up for code linting to help you find and fix common problems in your JavaScript code.

It does not aim to be opinionated.

[See here for rules to turn on or off](https://eslint.org/docs/rules/).

## Dev Server Port

You can change the dev server's port number by modifying the `vite.config.js` file. Look for the `server` section:

```js
{
	// ...
	server: { host: '0.0.0.0', port: 8000 },
}
```

Change 8000 to whatever you want.

## License

[MIT License](https://github.com/ourcade/phaser3-vite-template/blob/master/LICENSE)
