
const authenticateUser = (req, res, next) => {

    if (req.session && req.session.userId && req.session.userEmail) {
       
      next();
    } else {
    
      res.status(401).json({ error: "Unauthorized" });
    }
  };
  