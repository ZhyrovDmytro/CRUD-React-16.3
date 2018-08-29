const config = require('./gulp/config');
config.environment.check();
process.env.NODE_ENV = config.environment.type;

const gulp = require('gulp');
const requireDir = require('require-dir');
const nodemon = require('gulp-nodemon');
requireDir('./gulp/tasks');

/* API */
gulp.task('default', ['serve']);
gulp.task('build', ['prepare']);
const nodemonOptions = {
    script: config.MOCK_START,
    ext: 'js',
    env: { 'NODE_ENV': 'development' },
    verbose: false,
    ignore: [],
    watch: config.MOCK_BASE
};

gulp.task('start', function () {
    nodemon(nodemonOptions)
        .on('restart', function () {
            console.log('restarted!')
        });
});
