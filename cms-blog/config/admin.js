module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '7f2dfc73503241fbae961499a072dd91'),
  },
});
