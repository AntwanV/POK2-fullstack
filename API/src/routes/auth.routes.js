import { signup, signin, signout } from "../controllers/auth.controller.js";
import verifySignUp from "../middlewares/verifySignUp.js";

export function authRoutes(app) {
  app.use(function(req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "Origin, Content-Type, Accept"
    );
    next();
  });

  app.post(
    "/api/auth/signup",
    [
      verifySignUp.checkDuplicateUsernameOrEmail,
      verifySignUp.checkRolesExisted
    ],
    signup
  );

  app.post("/api/auth/signin", signin);

  app.post("/api/auth/signout", signout);
};