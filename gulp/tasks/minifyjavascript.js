var gulp = require("gulp");
var uglify = require("gulp-uglify");

module.exports = function() {
	return gulp.src("./assets/js/application.js")
		.pipe(uglify())
		.pipe(gulp.dest("./assets/js/minified"));
};
