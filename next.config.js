const withplug = require('next-compose-plugins')
const withCss = require('@zeit/next-css')
const withreactSvg = require('next-react-svg')
const withImages = require('next-images');

const path = require('path');

module.exports = withplug([
    withCss({}),
    withImages({}),
    withreactSvg({
        include: path.resolve(__dirname, "./public/images"),
        webpack(config, options){
            return config;
        },
    }),
]);