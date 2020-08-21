# webpack-setup-for-React
webpack setup for react app, it handle jsx files, css, images, with build and dev config files

apply babel-loader for any js file

css-loader to handle thar allows webpack to handle .css imports 
style loader which extracts the css code from the CSS files and inject it at the top of html file. hence reducing the amount of file downloads
auto-prefixing plugin
post-css loader which allows us to transform CSS, Sass, etc files.

url-loader to transform images that under certain limit into data64 base urls which can be inlined into our documenis 
file-loader to copy files that exceeds the specifed limit into a defined directory

babel-plugin-syntax-dynamic-import to support dynamic import syntax (lazy-loading/ code splitting)

rimraf - command to delete the dist directory at the start of every build process 
