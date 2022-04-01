module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '8cb79bbf197ee489b226fac5d484b633'),
  },
});
