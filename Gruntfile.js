module.exports = function(grunt){

	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),

		connect: {
			server: {
		      options: {
		        port: 9090
		      }
    		}
		},

		open: {
			server: {
				path: 'http://localhost:9090/app'
			}
		},

		watch: {
			scripts: {
    			files: ['app/*']
			}
		}



	});

	grunt.loadNpmTasks('grunt-open');
	grunt.loadNpmTasks('grunt-contrib-connect');
	grunt.loadNpmTasks('grunt-contrib-watch');

	grunt.registerTask('server', ['connect', 'open', 'watch']);


}