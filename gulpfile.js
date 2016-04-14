var gulp = require('gulp');
var jade = require('gulp-jade');
var clean = require('gulp-clean');
var sftp = require('gulp-sftp');

var paths = {
  pages: 'lib/pages/**/*.jade',
  public: 'public/**/*',
  build: 'build'
};

gulp.task('build', ['pages', 'public']);

gulp.task('pages', ['clean'], function() {
  var YOUR_LOCALS = {};

  gulp.src(paths.pages)
    .pipe(jade({
      locals: YOUR_LOCALS,
      pretty: true
    }))
    .pipe(gulp.dest(paths.build));
});
gulp.task('public', ['clean'], function() {
    gulp.src(paths.public, { dot: true })
      .pipe(gulp.dest(paths.build))
});

gulp.task('clean', function() {
  return gulp.src(paths.build + "/*")
    .pipe(clean());

});

gulp.task('deploy', ['build'], function () {
	return gulp.src(paths.build + "/*", { dot: true })
		.pipe(sftp({
			host: 'asinica.lt',
      remotePath: '/var/www/asinica.lt',
			auth: 'keyMain'
		}));
});

gulp.task('watch', function() {
  gulp.watch(paths.pages, ['build']);
  gulp.watch(paths.public, ['build']);
});

gulp.task('default', ['watch', 'build']);
