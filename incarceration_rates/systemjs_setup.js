System.config({
  packages: {
    app: {format: 'register', defaultExtension: 'js'},
    'node_modules/d3': {main: 'd3.js', format: 'cjs', defaultExtension: 'js'},
  },
  paths: {'d3': 'node_modules/d3'}
});
System.import('executions.js').then(null, console.error.bind(console));
