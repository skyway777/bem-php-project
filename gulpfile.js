var gulp = require('gulp');
var prettify = require('gulp-prettify');
var shell = require('gulp-shell');
var rename = require('gulp-rename');
var clean = require('gulp-clean');
var argv = require('yargs').argv;

gulp.task('build', shell.task([
  'enb make'
]));

gulp.task('prettify',['build'],function() {
  gulp.src('**/*.html')
    .pipe(prettify({indent_with_tabs: true}))
    .pipe(rename(function(path){
    	path.extname = ".php"
    }))
    .pipe(gulp.dest('./'));

  gulp.src('desktop.bundles/**/*.{bemdecl.js,bemhtml.js,deps.js,bemtree.js,html}')
  	.pipe(clean({force: true}))
  	.pipe(gulp.dest('./'))
});

gulp.task('slush',['create-bem'],function(){

});

gulp.task('create-bem',function(){
	var els = argv.b.split(',');
	console.log(els);
	shell.task('echo 23');
	shell.task(['slush bem:block '+els[0]],{verbose:true});


	els.forEach(function(el){
		if (el.split('__')>1)
		{
			var arg = el.replace('__',' ');
			shell.task(['slush bem:elem '+arg]);
		}
		else
		{
			shell.task(['slush bem:block '+el]);
		}
		
	});
})

gulp.task('default',['prettify']);