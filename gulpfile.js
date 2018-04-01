//导入工具包 require('node_modules里对应模块')
var gulp = require('gulp'), //本地安装gulp所用到的地方
    less = require('gulp-less'),
    htmlmin = require('gulp-htmlmin'),
    uglify= require('gulp-uglify'),
    mincss=require('gulp-minify-css');


 //定义一个testLess任务（自定义任务名称）
gulp.task('css', function () {
    gulp.src('less/*.less') //该任务针对的文件
        .pipe(less()) //该任务调用的模块
        .pipe(mincss())
        .pipe(gulp.dest('dist/css')); //将会在dist/css下生成index.css
});

gulp.task('html',function(){
    var options = {
        removeComments: true,//清除HTML注释
        collapseWhitespace: true,//压缩HTML
        collapseBooleanAttributes: true,//省略布尔属性的值 <input checked="true"/> ==> <input />
        removeEmptyAttributes: true,//删除所有空格作属性值 <input id="" /> ==> <input />
        removeScriptTypeAttributes: true,//删除<script>的type="text/javascript"
        removeStyleLinkTypeAttributes: true,//删除<style>和<link>的type="text/css"
        minifyJS: true,//压缩页面JS
        minifyCSS: true//压缩页面CSS
    };
    gulp.src('html/*.html')
    .pipe(htmlmin(options))
    .pipe(gulp.dest('dist/html'))
});

gulp.task('js',function(){
    gulp.src('js/*.js')
     .pipe(uglify())
     .pipe(gulp.dest('dist/js'))

});



gulp.task('default',['css','js']);
//监听js和less文件变化，不执行优化处理
gulp.task('watch', function() {
    gulp.watch(['less/*.less'], ['css']);
    gulp.watch(['js/*.js']);
});