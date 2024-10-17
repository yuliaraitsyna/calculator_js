# Calculator

### Task
[link](https://docs.google.com/document/d/1zpXXeSae-BlcxPKgw3DhxZA92cspVailrPYoaXSYrW8/edit?tab=t.0#heading=h.5dt3hghpa22f)

### How to run the app

```

  git clone https://github.com/yuliaraitsyna/calculator_js.git
  npm install
  npm run build

```

### Project structure
```

├── dist
├── eslint.config.mjs
├── package.json
├── src
│   ├── calculate
│   │   └── calculate.js
│   ├── img
│   │   └── night-mode.png
│   ├── index.html
│   ├── index.js
│   ├── model
│   │   ├── buttons.js
│   │   └── theme.js
│   └── style.css
└── webpack.config.js

```
`root`: keeps configurations and inner folders

`dist`: keeps bundles and assets for running the app (.html / .js / .png and etc.)

`src`: source folder, keeps the whole code including:

- `index.js` - entry point of the app
- `index.html` - html template of the app
- `model` - keeps "enums" and mocks (such as list of buttons)
- `calculate ` - keeps calculate fucntion as a module
- `img` - keeps icons and images
