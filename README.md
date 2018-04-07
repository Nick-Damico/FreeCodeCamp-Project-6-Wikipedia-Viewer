# FreeCodeCamp-Project-6-Wikipedia-Viewer

Project Number 6 is a Wikipedia Viewer Web App. It utilizes the Wikipedia API. The site provides the `User` a search field for typing in `keywords` and on submit will return matching
articles on Wikipedia.com. The returned articles will be displayed on a responsive site with
an attractive layout.

## Project Requirements
Build a Web App that fufills the below User Stories:
- [X] I can search Wikipedia entries in a search box and see the resulting Wikipedia entries.
- [X] I can click a button to see a random Wikipedia entry.

## About
Unit Testing implemented using Jasmine Testing Framework.
Gulp Task Runner for Development using dependencies:
- `gulp`
- `gulp-sass`
- `gulp-useref`
- `gulp-uglify-es`
- `gulp-if`
- `gulp-cssnano`
- `gulp-imagemin`
- `gulp-cache`
- `del`
- `run-sequence`
- `browser-sync`

## Usage
Gulp Tasks defined within `gulpfile.js`.

- `gulp build` for prepping project in `/dist` directory for deployment.

- `gulp default` for starting 'Live Reload' using Browser-sync and 'watch' on sass, js, and index.html changes.
