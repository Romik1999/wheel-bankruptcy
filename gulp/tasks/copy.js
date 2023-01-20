export const copy = () => {
	return app.gulp.src(app.path.src.scssFiles)
		.pipe(app.gulp.dest(app.path.build.scssFiles))
}
export const copy2 = () => {
	return app.gulp.src(app.path.src.js)
		.pipe(app.gulp.dest(app.path.build.js))
}