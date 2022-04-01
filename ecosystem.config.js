module.exports = {
  apps : [{
    name   : "blog-strapi-backend",
    script: 'yarn develop',
    cwd: "backend",
    watch: './backend'
  }, {
    name: "blog-strapi-frontend",
    cwd: "frontend",
    script: 'yarn dev',
    watch: './frontend'
  }],
};
