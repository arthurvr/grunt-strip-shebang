'use strict';
var stripShebang = require('strip-shebang');

module.exports = function (grunt) {
	grunt.registerMultiTask('stripShebang', 'Strips shebangs', function () {
		this.files.forEach(function (el) {
			var src = el.src[0];
			var out = stripShebang(grunt.file.read(src));
			grunt.file.write(el.dest, out);
		});
	});
};
