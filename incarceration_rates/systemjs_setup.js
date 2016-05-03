System.config({
  packages: {
    app: {
      format: 'register',
      defaultExtension: 'js'
    },
    '@d3/d3': {
      format: 'cjs',
      defaultExtension: 'js'
    },
  },
  map: {
      'd3': 'node_modules/d3'
  }
});
System.import('executions.js')
      .then(null, console.error.bind(console));
