module.exports = (apiKey) => (req, res, next) => {
  if (apiKey !== req.headers['x-api-key']) {
    res.sendStatus(401);

    return;
  }

  next();
};
