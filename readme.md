# grunt-strip-shebang [![Build Status](https://travis-ci.org/arthurvr/grunt-strip-shebang.svg?branch=master)](https://travis-ci.org/arthurvr/grunt-strip-shebang)

> Grunt plugin to remove the shebang from your files.

## Installation

```
$ npm install --save-dev grunt-strip-shebang
```

## Usage

```javascript
require('load-grunt-tasks')(grunt);

grunt.initConfig({
	stripShebang: {
		dist: {
			files: {
				'dist/main.sh': 'src/main.sh'
			}
		}
	}
});

grunt.registerTask('default', ['stripShebang']);
```

## License

MIT © [Arthur Verschaeve](https://github.com/arthurvr)
