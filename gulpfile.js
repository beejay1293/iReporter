const gulp = require('gulp')

gulp.task('travis', ['build', 'test'], () => {
  process.exit(0);
}); 
