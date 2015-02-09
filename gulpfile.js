var gulp = require('gulp'), uglify = require('gulp-uglify'), imagemin= require('gulp-imagemin');


//Script tasks
gulp.task('scripts1', function(){
	gulp.src('views/js/*.js')
	.pipe(uglify())
	.pipe(gulp.dest('production/views/js'));
});

gulp.task('scripts2', function(){
	gulp.src('js/*.js')
	.pipe(uglify())
	.pipe(gulp.dest('production/js'))
});

//Image task

gulp.task('images1', function(){
	gulp.src('views/images/*')
	.pipe(imagemin())
	.pipe(gulp.dest('production/views/images'))
});



//default Tasks
gulp.task('default', ['scripts1','scripts2','images1','images2']);