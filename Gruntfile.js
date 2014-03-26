module.exports = function(grunt){

	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),

		port: 9090,

		connect: {
			server: {
		      options: {
		        port: '<%= port%>'
		      }
    		}
		},

		open: {
			server: {
				path: 'http://localhost:<%= port%>/app'
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