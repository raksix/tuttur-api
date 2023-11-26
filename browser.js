
const { default: puppeteer } = require('puppeteer');


var browser;

const start_browser = async (options) => {
   const brs = await puppeteer.launch(options);
   browser = brs
   return;
}

const get_browser = () => {
   return browser
}

module.exports = {
   start_browser,
   get_browser
}