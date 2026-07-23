module.exports = {
  apps: [
    {
      name: "telegraph-guide",
      script: "npm",
      args: "start",
      cwd: __dirname,
      env: {
        NODE_ENV: "production",
        PORT: 3002,
      },
    },
  ],
};
