const jwt = require("jsonwebtoken");

const verifying = (req, res, next) => {
  const authHeader = req.headers.token;
  if (authHeader) {
    const token = authHeader.split(" ")[1];
    jwt.verify(token, process.env.JWT_KEY, (err, user) => {
      if (err) {
        res.status(403).json("Token is not valid");
      }
      req.user = user;
      next();
    });
  } else {
    res.status(401).json("you are not authenticated for this task");
  }
};

const tokenAuthorization = (req, res, next) => {
  verifying(req, res, () => {
    if (req.user.id === req.params.id || req.user.isAdmin) {
      next();
    } else {
      res.status(403).json("Not Allowed");
    }
  });
};

const tokenAuthorizationandAdmin = (req, res, next) => {
  verifying(req, res, () => {
    if (req.user.isAdmin) {
      next();
    } else {
      res.status(403).json("Not Allowed");
    }
  });
};

module.exports = { verifying, tokenAuthorization, tokenAuthorizationandAdmin };
