const metalsmith = require('metalsmith');
const discoverPartials = require('metalsmith-discover-partials');
const templates = require('metalsmith-templates');

metalsmith(__dirname)
  .source('./src')
  .destination('./build')
  .clean(true)
  .use(discoverPartials({
    directory: 'partials',
    pattern: /\.html$/
  }))
  .use(templates({
    engine: 'handlebars',
    inPlace: true,
  }))
  .build(err => {
    if (err) throw err;
  });
