var gulp        = require('gulp');
var express     = require('express');
var browsersync = require('browser-sync');
var gutil       = require('gulp-util');

var server;


function reload() {
    if (server){
	return browsersync.reload({stream: true});
    }
    return gutil.noop();
}

gulp.task('cp-html', function(){

    return gulp.src(['index.html',
		     '/html/**/*.html'])
	.pipe(gulp.dest('dist'))
	.pipe(reload());    
});

gulp.task('cp-bower', function(){
    gulp.src("./bower_components/**").pipe(gulp.dest('dist/bower_components/'))
});


gulp.task('cp-css', function(){
    return gulp
    .src(['./css/**/*.css'])
	.pipe(gulp.dest('dist/css'))
    	.pipe(reload());
});

gulp.task('cp-js', function(){
    return gulp
    .src(['./js/**/*.js'])
	.pipe(gulp.dest('dist/js'))
    	.pipe(reload());
});


gulp.task('cp-images', function(){
    return gulp
    .src(['./img/**/*.jpg','./img/**/*.jpeg','./img/**/*.png','./img/**/*.svg'])
	.pipe(gulp.dest('dist/img'))
    	.pipe(reload());
});

gulp.task('build', ['cp-html','cp-bower','cp-images','cp-css','cp-js']);

gulp.task('watch', function(){
    gulp.watch('./**/*.html',['cp-html'])
    gulp.watch('./img/**/*.jpeg',['cp-images'])
    gulp.watch('./img/**/*.jpg',['cp-images'])
    gulp.watch('./img/**/*.png',['cp-images'])        
    gulp.watch('./css/**/*.css',['cp-css'])
    gulp.watch('./js/**/*.js',['cp-js'])        
});
	  
gulp.task('server', function(){
    server = express();
    server.use(express.static('dist'));
    server.listen(8000);
    browsersync({proxy: 'localhost:8000',
		 open : false}
	       );
});


gulp.task('default', ['build','watch','server'])


