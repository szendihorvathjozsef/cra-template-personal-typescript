# Basic documentation

## How to fix eslint error

The eslint plugin and config for prettier requires the current latest version 8.0, which is not used in the react-scripts package. So to fix this error you have to manually install for every dependency the lastest version of eslint.
To do so run the command `yarn upgrade eslint -R` in the terminal at your project root.
