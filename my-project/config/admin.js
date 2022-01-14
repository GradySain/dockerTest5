module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'b1ca6249aebe24582be9c297211d1490'),
  },
});
