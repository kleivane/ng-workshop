module.exports = function(grunt){

	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),

		port: 9090,
		build: 'build',

		ngtemplates:  {
		  options: {
		    module: 'ng-workshop',
		  },
		  app:        {
		    src:      'app/*/**.html',
		    dest:     '<%= build%>/templates.js'
		  }
		},

		concat: {
			dist: {
			    options: {
				    process: function(src, filepath) {
				    	if(filepath.indexOf('test') > 0 ){
				    		grunt.log.ok("File not included in destination: "+filepath);
				    		return;
				    	} else {
				    		return src;
				    	};
			        },
			    },
			    src: ['app/*/**-module.js', 'app/*/**.js', 'app/*.js', '<%= build%>/templates.js'],
			    dest: '<%= build%>/app.js',
		    },
		},

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
    			files: ['app/**'],
    			tasks: 'package'
			}
		}



	});

	grunt.loadNpmTasks('grunt-open');
	grunt.loadNpmTasks('grunt-contrib-connect');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-angular-templates');
	grunt.loadNpmTasks('grunt-contrib-concat');

	grunt.registerTask('server', ['package', 'connect', 'open', 'watch']);
	grunt.registerTask('package', ['ngtemplates', 'concat']);


}