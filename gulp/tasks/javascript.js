var gulp = require("gulp");
var sourcemaps = require("gulp-sourcemaps");
var gulpfilter = require("gulp-filter");
var jshint = require("gulp-jshint");
var concat = require("gulp-concat");

module.exports = function() {
	var filter = gulpfilter(["./assets/js/vendor/*.js", "./bower_components"]);
	return gulp.src([
		"./bower_components/underscore/underscore.js",
//		"./assets/js/vendor/something.js",
		"./assets/js/app/*.js"
	])
	.pipe(filter)
	.pipe(jshint({
		camelcase: true,
		curly: true,
		forin: true,
		immed: true,
		latedef: true,
		newcap: true,
		noarg: true,
		noempty: true,
		nonbsp: true,
		undef: true,
		unused: true,
		strict: true,
		eqeqeq: true,
		es3: true,
		quotmark: "double"
	}))
	.pipe(filter.restore())
	.pipe(sourcemaps.init())
	.pipe(concat("application.js"))
	.pipe(sourcemaps.write())
	.pipe(gulp.dest("./assets/js"));
};
