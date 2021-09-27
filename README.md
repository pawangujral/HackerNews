# Hacker News Application

App to display Hacker News in list using hacker news API. User can read title &
click on it read further.

API Spec

- Whole spec https://github.com/HackerNews/API

- top stories api
  https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty
- fetch individual story
  https://hacker-news.firebaseio.com/v0/item/{itemId}.json?print=pretty
  https://hacker-news.firebaseio.com/v0/item/8863.json?print=pretty

Hosted on heroku: [woof](https://woof-pawangujral.herokuapp.com/)

## Getting Started

Clone app to a destination folder. The application is built on React framework.

### Git cloning

Open bash/terminal and type following lines in your prefered folder (Make sure
Git in installed locally).

```bash
git clone https://github.com/pawangujral/HackerNews.git

// check git current branch
git branch

// Change branch to main if required
git checkout main
```

### Install

To install project dependencies, you can run at root folder:

```bash
cd hackernews
npm install
```

#### Third-party utility libraries list

The project is using `styled-components` for dynamic class name handling.

### Start local Development

To start the project In the project directory, you can run:

```bash
npm run dev
```

Runs the app in the development mode.\
Open [http://localhost:8080](http://localhost:8080) to view it in the browser. The
page will reload if you make edits. You will also see any lint errors in the console.

### Build

```bash
npm run build
```

Builds the app for production to the `dist` folder. You can run prod build:

```bash
npm run start
```

Open [http://localhost:8080](http://localhost:8080) to view it in the browser.
It correctly bundles React in production mode and optimizes the build for the
best performance. The build is minified and the filenames include the hashes.
Your app is ready to be deployed!

### Project structure | Type - Typescript | Description

- assets - application assets e.g images
- components - Non-functional partial views that are reused in multiple screens
  across the application.
- hooks - custom react hooks
- theme - Contain Global style settings for app
- utils - helper functions
- views - Functional partial/whole views that are used to present UX on-screen.
- **tests** - Folder to place functional/unit test cases.

#### Folder structure

All component folders must follow below structure to keep consistancy in
project.

```bash
├── component-folderName
    ├── component-folderName.tsx
    ├── component-folderName.css
    ├── index.ts
    ├── __tests__
        ├── component-folderName.test.tsx
```

#### Project src folder

All project related assets are in `assets` folder.

```bash
order-tracking
├── README.md
├── node_modules
├── package.json
├── .gitignore
├── src
    ├── app.tsx
    ├── index.html
    ├── index.tsx
    ├── manifest.json
    ├── assets
    │    ├── images
    ├── components
        ├── list
        │    ├── list.style.ts
        │    ├── list.tsx
        │    ├── index.ts
        ├── loader
        │    ├── loader.style.ts
        │    ├── loader.tsx
        │    ├── index.ts
    ├── hooks
        ├── use-toasts
        │    ├── use-toasts.style.ts
        │    ├── use-toasts.tsx
        │    ├── index.ts
    ├── theme
        ├── global-styles.css
    ├── utils
        ├── constants.ts
        ├── types.ts
    ├── views
        ├── collections
        │    ├── collections.tsx
        │    ├── collections.style.ts
        │    ├── index.ts
        ├── stories
        │    ├── stories.style.ts
        │    ├── stories.tsx
        │    ├── index.ts

```

## Testing

Testing is done with jest & react testing library. all test cases are placed in
`__tests__` of each component's root folder.

_Note: this is currently in TODO list & not yet implemented._

e.g :

```bash
├── __tests__
    ├── app.test.tsx
```

For code coverage run:

```bash
npm run test
```

You can use testing method like `getByText`, `getByTestID`, `getByTitle`,
`getAllByLabelText` & more to interact with DOM elements to write test cases.

### Locale i18n support

For locale, you can use
[Format js](https://formatjs.io/docs/getting-started/installation/) library.
formatjs is a set of libraries that help you set up internationalization in any
project.

_Note: this is currently in TODO list & not yet implemented._

## Links

- [React](https://reactjs.org/)
- [styled-components](http://styled-components.com/)
- [React Testing Libary](https://testing-library.com/docs/react-testing-library/intro/)
- [webpack](https://webpack.js.org/)

## Next additional features/functionalites

- Unit test cases
- Usability implmentation (fully ADA compliance)
- Locale support for different languages
- Fix linting issues
