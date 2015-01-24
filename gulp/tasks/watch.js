var gulp = require("gulp");

module.exports = function() {
	gulp.watch(["assets/css/scss/**/*.scss"], ["sass"]);
	gulp.watch(["assets/js/src/**/*.js"], ["javascript"]);
};
