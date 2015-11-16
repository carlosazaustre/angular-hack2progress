import gulp from 'gulp';
import gutil, { PluginError } from 'gulp-util';
import webserver from 'gulp-webserver';
import browserify from 'browserify';
import babelify from 'babelify';
import watchify from 'watchify';
import buffer from 'vinyl-buffer';
import source from 'vinyl-source-stream';
import httpServer from 'http-server';

const config = {
  scripts: {
    watch: './src/scripts/**/*.js',
    input: './src/scripts/app.js',
    output: './build'
  }
};

function bundleScript (browserifyFile) {
  return browserifyFile.bundle()
    .on('error', (err) => {
      const error = new PluginError('browserify', err);
      console.log(error.toString());
    })
    .pipe(source('app.js'))
    .pipe(buffer())
    .pipe(gulp.dest( config.scripts.output ));
}

// -- Tasks --------------------------------------------------------------------

gulp.task('serve', () => {
  gulp.src(config.scripts.output)
    .pipe(webserver({
      livereload: true,
      fallback: 'index.html',
      port: 8080,
      host: '0.0.0.0'
    }));
});

gulp.task('copy', () => {
  return gulp.src('./src/index.html')
    .pipe(gulp.dest('./build'));
});

gulp.task('build', ['copy'], () => {
  const browserifyFile = browserify(config.scripts.input)
    .transform(babelify);

  return bundleScript(browserifyFile);
});

gulp.task('watch', () => {
  const browserifyFile = browserify(config.scripts.input)
    .transform(babelify);

  const watchFile = watchify(browserifyFile)
    .on('update', () => bundleScript(watchFile))
    .on('log', gutil.log);

  return bundleScript(watchFile);
});

gulp.task('default', ['copy', 'build', 'watch', 'serve']);
