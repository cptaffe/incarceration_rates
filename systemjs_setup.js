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
System.import('app/main')
      .then(null, console.error.bind(console));
