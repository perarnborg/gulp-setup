var gulp = require('./gulp')([
	// Define a task: bower (code exported from /gulp/tasks/bower.js)
	'bower',
	// Define a task: javascript (code exported from /gulp/tasks/javascript.js)
	'javascript',
	// Define a task: minifyjavascript (code exported from /gulp/tasks/minifyjavascript.js) – wich will be prepended by the javascript task
	{
		requirements: ['javascript'],
		name: 'minifyjavascript'
	},
	// Define a task: watch (code exported from /gulp/tasks/watch.js)
	'watch'
]);

gulp.task("default", ["bower", "javascript"]);
gulp.task("build", ["bower", "minifyjavascript"]);
