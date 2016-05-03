System.config({
  packages: {
    app: {
      format: 'register',
      defaultExtension: 'js'
    },
    'node_modules/d3': {
      format: 'cjs',
      defaultExtension: 'js'
    },
  },
});
System.import('executions.js')
      .then(null, console.error.bind(console));
