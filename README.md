# WordPress React Boilerplate
React boilerplate for development of WordPress websites through the REST api. Utilising Hot Module Replacement, CSS Auto prefixing, CSS Modules, Code Splitting and Bundle Analyser.

### Prerequisites

* Node [https://nodejs.org/en/download/]
* NPM [https://www.npmjs.com/get-npm]

### Setup

1. Download or clone to your machine.
2. Run `npm install` to install required packages
2. Run `npm dev` to start local environment
3. Open localhost:3000 and start coding

### NPM commands
Command  | Usage
------------- | -------------
npm run dev | Start the local development environments
npm run dev:bundleanalyzer | start the local development environment and load a analysis of the current development bundle
npm run prebuild | Cleans out previous production build files
npm run build | Bundle the application for distribution
npm run build:bundleanalyzer | Bundle the application for distribution and load a analysis of the distribution bundle
npm run lint:js | Run eslint on project
npm run lint:css | Run scss-lint on project

### Folder structure

```shell
/                             #
├── build-utils/              # → Webpack utility files
│   ├── build-validations.js  # → Webpack validation
│   ├── common-paths.js       # → Webpack common path definitions
│   ├── webpack.common.js     # → Webpack configs for both development and production
│   ├── webpack.dev.js        # → Webpack configuration for development only
│   └── webpack.prod.js       # → Webpack configuration for production only
├── dist/                     # → Built application (never edit)
├── node_modules/             # → Node.js packages (never edit)
├── public/                   # →
│   ├── favicon.ico           # → Application favicon
│   └── index.html            # → Base application HTML template
├── src/                      # →
│   ├── actions/              # → Application payload actions
│   ├── components/           # → Component Library
│   │   ├── blocks/           # → Block level components (reusable arrangements of element level components)
│   │   ├── elements/         # → Element level components (buttons, icons, form fields, loading spinners)
│   │   └── layouts/          # → Layout level components (page templates, archive templates)
│   ├── reducers/             # → Reducers to handle state changes
│   ├── styles/               # →
│   │   ├── helpers/          # → Helper mixins
│   │   ├── misc/             # → Miscellaneous style sheets
│   │   ├── objects/          # → Global object level SCSS
│   │   ├── pages/            # → Global page level SCSS
│   │   ├── placeholders/     # → Placeholder definitions
│   │   ├── variables/        # → Site variable and map definitions
│   │   └── main.scss         # → Global SCSS imports
│   │   └── shell.scss        # → Index SCSS file for including into component SCSS files
│   ├── utils/                # → Miscellaneous utility functions (mathematic computation etc)
│   └── index.js              # → Application entry point
├── .babelrc                  # → Babel configuration
└── webpack.config.js         # → Handles webpack validation and compilation of build or prod webpack config based on environment
```

### Optimisation

react-imported-component has been included to ease asynchronous loading of components with code splitting. This also allows for the use of loading and error components to be assigned at the same time. The use of webpackChunkName will assist in debugging and assign the name to the split js file.
```javaScript
const AsyncComponent = importedComponent(
    () => import(/* webpackChunkName:'NamedComponent' */ './NamedComponent'), {
        LoadingComponent: Loading
    }
);
...
<AsyncComponent />
```

Vendor splitting has been setup in build-utils/webpack.common.js for splitting out the global vendor packages.

### TODO

* Setup Redux
* Add Helmet to manage SEO meta
* Setup for SSR
* Configure matching CSS and Babel supported browser targets
* Setup development tools required for remote content crawling
* Setup and test localisation
* Look into TDD with mocha
* Map WP default routes into App

### History

### 0.1.0
Creation of basic framework

### Credits

Chris Morris [http://codecomposer.co.uk]
