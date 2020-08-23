module.exports = {
  apps: [{
    name: 'main-carousel',
    script: 'fec-main-carousel/server/server.js',
    cwd: 'fec-main-carousel',
  }],
  deploy: {
    // "production" is the environment name
    production: {
      user: 'ubuntu',
      host: ['192.168.0.13'],
      ref: 'origin/master',
      repo: 'https://github.com/Unfair-dot-com/fec-main-carousel.git',
      path: '/var/www/my-repository',
      'post-deploy': 'npm install; grunt dist',
    },
  },
};
