var gulp = require('gulp');
var ts = require('gulp-typescript')

var tsProject = ts.createProject('./tsconfig.json')

gulp.task('tsc', () => {
  console.log(tsProject.config.include);
  gulp.src(tsProject.config.include)
    .pipe(tsProject())
    .pipe(gulp.dest(tsProject.config.compilerOptions.outDir));
})

gulp.task('default',['tsc'],() => {
  gulp.watch('./ts/**/*.ts',['tsc']);
})