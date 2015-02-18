'use strict';

module.exports = function (grunt) {
	grunt.initConfig({
		stripShebang: {
			test: {
				files: {
					'test/tmp/fixture.sh': 'test/fixture.sh'
				}
			}
		},
		clean: {
			test: [
				'test/tmp/**'
			]
		}
	});

	grunt.loadTasks('tasks');
	grunt.loadNpmTasks('grunt-contrib-clean');

	grunt.registerTask('default', ['clean', 'stripShebang']);
};
