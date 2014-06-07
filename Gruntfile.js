module.exports = function(grunt){

	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),

		port: 9090,
		build: 'build',

		src: {
			lib: [
				'bower_components/jquery/dist/jquery.min.js',
				'bower_components/underscore/underscore.js',
				'bower_components/angular/angular.min.js',
				'bower_components/angular-route/angular-route.min.js',
				'bower_components/angular-unicorn-directive/unicorn.js',
				'bower_components/angular-sanitize/angular-sanitize.min.js',
				'bower_components/showdown/compressed/showdown.js',
				'bower_components/angular-markdown-directive/markdown.js',
				'bower_components/bootstrap/dist/js/bootstrap.js',

			],
			app: ['app/*/**-module.js', 'app/*/**.js', 'app/*.js'],
			templates: ['<%= build%>/templates.js']
		},

		ngtemplates:  {
		  options: {
		    module: 'ng-workshop',
		  },
		  app:        {
		    src:      'app/**/*.html',
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
			    src: ['<%= src.app%>','<%= src.templates%>'],
			    dest: '<%= build%>/app.js',
		    },
		    lib: {
		    	src: '<%= src.lib%>',
			    dest: '<%= build%>/lib.js',
		    }
		},

		connect: {
			server: {
		      options: {
		        port: '<%= port%>'
		      }
    		}
		},

		karma: {
		  options: {
			configFile: 'karma.conf.js'
		  },
		  unit: {},
		  cont: {
		    singleRun: false
		  },
		  live: {
		    browsers: ['Chrome'],
		    singleRun: false
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

	grunt.loadNpmTasks('grunt-angular-templates');
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-connect');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-karma');
	grunt.loadNpmTasks('grunt-open');

	grunt.registerTask('package', ['ngtemplates', 'concat']);

	grunt.registerTask('server', ['package', 'connect', 'open', 'watch']);
	
	grunt.registerTask('test', 'Custom testing task', function(target) {
  		grunt.task.run('package');
  		if(target){
  			grunt.task.run('karma:'+target);
  		} else {
  			grunt.task.run('karma:unit');
  		}

	});

}