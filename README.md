# Kambria Lego

Each component will be like a piece of lego. Each has its own color, shape & function. But they're all tidy, well designed and can be easily connected to each other. It's all about our creativity to build stuff.

### Minimum knowledge requirement
* [How does a Component look like?] (https://gist.github.com/phongvh/258d07330c76dbefb9671301d1b9bd6e)
* [Function or Class] (https://gist.github.com/phongvh/721e72e808f6c14a5b03de576372d6e7)
* [Stateful or Stateless] ()
* [Container or Presentation] ()
* [Pure or Impure] ()
Read more about component types at this [article by the author of Redux] (https://medium.com/@dan_abramov/smart-and-dumb-components-7ca2f9a7c7d0)
* [React Router] (https://medium.com/@pshrmn/a-simple-react-router-v4-tutorial-7f23ff27adf)
* [Single-Page Applications] (https://medium.com/@pshrmn/demystifying-single-page-applications-3068d0555d46)
* [A little bit of 'history'] (https://medium.com/@pshrmn/a-little-bit-of-history-f245306f48dd)

---
### Preinstalled Packages
Lego is based on:
```
Create React App: 1.5.2
React Script: 1.1.4
Bootstrap: 4.0.0
```
npm packages installed: Redux, React Router, history, Redux thunk
dev packages: ESLint with eslint-config-react-app

---
### JS Linting
Lego use [ESLint] (https://eslint.org/) with config from [eslint-config-react-app] (https://www.npmjs.com/package/eslint-config-react-app) used by Create React App
[How and why to use ESLint] (https://medium.com/the-node-js-collection/why-and-how-to-use-eslint-in-your-project-742d0bc61ed7)
[Semicolons or not] (https://hackernoon.com/an-open-letter-to-javascript-leaders-regarding-no-semicolons-82cec422d67d)

---
### Git commit hook
This is to run eslint check before every commit. If it doesn't pass eslint check, it will fail to commit
`cp .git/hooks/pre-commit.sample .git/hooks/pre-commit`
Open .git/hooks/pre-commit, go to the end of the file and edit like this:

`set -e
npm run pretest
// If there are whitespace errors, print the offending file names and fail.
exec git diff-index --check --cached $against --`

Now it will run `eslint --ignore-path .eslintignore .` every time you commit
You can run that command manually anytime by this shortcut `npm run pretest`
Or ask eslint to run auto fix with `npm run pretest -- --fix`

---
### CSS Naming Convention
We use [BEM (Block__Element–Modifier)] (https://medium.freecodecamp.org/css-naming-conventions-that-will-save-you-hours-of-debugging-35cea737d849)

---
### Utility
**Lego command**: a utility to quickly create Page, Redux files from templates or count number lines of code.

Usage: `./lego <loc | page | component | redux> <name|path> [--class | --redux]`
  - `loc`: (no argument required) calculate the LOC (Lines Of Code) of all js file in src folder
  - `page`: (a name/path required) create a new page with provided name
    + (no option): create a functional page
    + --class: create a class page
    + --redux: create a page connecting to redux
  - `component`: (a name/path required) create a new component
  - `redux`: (require argument) create a new action & reducer with provided name
  - `-h`: display help text

---
### Folder structure
<img src='https://static.kambria.io/misc/folder_structure.png' width='600' alt='npm start'>

---
### Components
* [Button] (https://gist.github.com/phongvh/e049ba12457defdd1ce3b44c4d6f4a6c)