# Setup Overview

## Installation

- The entire project codes are in `./AsthMapp`
- Run `npm install` at `./AsthMapp`
- Run the project with your IDEA on ./AsthMapp/html/index.html 

## Maintenance

### Navigation

- Adding new nav link to pages, please maintain the nav module at `AsthMapp/js/Nav.js`

### Script update/changes

- Any update/changes on the modules needs to be compiled with rollup command at `./AsthMapp` where the rollup.config.js resides - `npx rollup -c`.
- All the pages are using `../js/dist/index.js` as its entry point script upon page load. 

## Remark
- The rollup packages has been update to the latest.

## Troubleshoots
- I am looking at the auth issue with Firebase and hope I can provide an update by today.
