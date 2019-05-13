const mix = require('laravel-mix');
var SVGSpritemapPlugin = require('svg-spritemap-webpack-plugin');

mix.js('resources/js/app.js', 'public/js')
    .sass('resources/sass/app.scss', 'public/css');

    
mix.browserSync({
    proxy: '127.0.0.1:8000',
    open: false,
    host: 'localhost',
    port: 8888
});

mix.webpackConfig({plugins: [

        new SVGSpritemapPlugin('resources/content-images/*.svg', {
            output: {
                filename: './sprite/sprite.svg'
            }
        })],
    externals: {
        jquery: 'jQuery'
    }});