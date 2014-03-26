module.exports = function(grunt){

	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),

		open: {
			server: {
				path: 'http://localhost:9090/app'
			}
		}


	});

	grunt.loadNpmTasks('grunt-open');

	grunt.registerTask('server', ['open']);


}