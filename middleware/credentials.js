const whitelist = [
  'https://www.mysite.com',
  'http://127.0.0.1:5000',
  'http://localhost:3600',
];

const credentials = (req, res, next) => {
  const origin = req.headers.origin;
  if (whitelist.includes(origin)) {
    res.header('Access-Control-Allow-Credentials', true);
  }
  next();
};

module.exports = credentials;
