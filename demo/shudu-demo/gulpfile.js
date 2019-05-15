let gulp = require('gulp');
let webpack = require('webpack-stream');
let config = require('./webpack.config.js');
let del = require('del');
let less = require('gulp-less')

gulp.task('pack',()=>{
    return gulp.src('./src/*')
    .pipe(webpack(config))
    .pipe(gulp.dest('dist'))
    
})

gulp.task('less', ()=>{
    return gulp.src('./src/less/main.less')
        .pipe(less())
        .pipe(gulp.dest('dist/css'))
})

// gulp.task('watch',['pack'],()=>{
//     let watcher =  gulp.watch(['./src/*.js','./gulpfile.js']);
//     watcher.on('change',()=>{
//         console.log('file changed , now rebuilding...')
//         del('./dist/bundle.js', ()=>{webpack(config); }); //
//     })
//     watcher.on('add',()=>{
//         console.log('file added , now rebuilding...')
//         webpack(config);
//     })
//     watcher.on('delete',()=>{
//         console.log('file deleted , now rebuilding...')
//         webpack(config);
//     });
    
// })


gulp.task('default',['pack', 'less']);