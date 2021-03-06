// Include gulp.
var gulp = require('gulp');
var config = require('./config.json');

// Include plugins.
var sass = require('gulp-sass');
var imagemin = require('gulp-imagemin');
var pngcrush = require('imagemin-pngcrush');
var shell = require('gulp-shell');
var plumber = require('gulp-plumber');
var notify = require('gulp-notify');
var autoprefix = require('gulp-autoprefixer');
var glob = require('gulp-sass-glob');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');
var rename = require('gulp-rename');
var sourcemaps = require('gulp-sourcemaps');
var scssLint = require('gulp-scss-lint');
var jshint = require('gulp-jshint');
var unretina = require('gulp-unretina');

// CSS.
gulp.task('css', function() {
  return gulp.src(config.css.src)
    .pipe(glob())
    .pipe(plumber({
      errorHandler: function (error) {
        notify.onError({
          title:    "Gulp",
          subtitle: "Failure!",
          message:  "Error: <%= error.message %>",
          sound:    "Beep"
        }) (error);
        this.emit('end');
      }}))
    .pipe(sourcemaps.init())
    .pipe(sass({
      outputStyle: 'compressed',
      errLogToConsole: true,
      includePaths: config.css.includePaths
    }))
    .pipe(autoprefix('last 2 versions', '> 1%', 'ie 9', 'ie 10'))
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest(config.css.dest))
});
//unretinize icons and images
gulp.task("icons", function () {
    gulp.src(config.icons.src)
        .pipe(unretina())
        .pipe(gulp.dest(config.icons.dest));
});

// Compress images.
//gulp.task('images', function () {
//  return gulp.src(config.images.src)
//    .pipe(imagemin({
//      progressive: true,
//      svgoPlugins: [{ removeViewBox: false }],
//      use: [pngcrush()]
//    }))
//    .pipe(gulp.dest(config.images.dest));
//});

// Fonts.
gulp.task('fonts', function() {
  return gulp.src(config.fonts.src)
    .pipe(gulp.dest(config.fonts.dest));
});

// Watch task.
gulp.task('watch', function() {
  gulp.watch(config.css.src, ['css']);
  //gulp.watch(config.images.src, ['images']);
});


// Run drush to clear the theme registry.
gulp.task('drush', shell.task([
  'drush cache-clear theme-registry'
]));

// SCSS Linting.
gulp.task('scss-lint', function() {
  return gulp.src(config.css.src)
    .pipe(scssLint())
      .pipe(scssLint.failReporter())
});

// JS Linting.
gulp.task('js-lint', function() {
  return gulp.src(config.js.src)
    .pipe(jshint())
    .pipe(jshint.reporter('default'));
});

// Default Task
gulp.task('default', ['css', 'fonts','icons', 'watch']);
