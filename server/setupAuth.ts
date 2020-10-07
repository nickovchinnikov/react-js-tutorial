import session from "express-session";
import bodyParser from "body-parser";
import { Application, Request, Response } from "express";

function isValidName(name?: string) {
  return typeof name === "string" && name === name.split("").reverse().join("");
}

export const setupAuth = (app: Application) => {
  app.use(
    session({
      secret: process.env.SESSION_SECRET || "keyboard cat",
    })
  );

  app.use(bodyParser.json());

  app.get("/auth/current", (req: Request, res: Response) => {
    if (req.session?.userName) {
      return res.json({
        userName: req.session.userName,
      });
    }

    return res.status(403).json({
      error: "Not authorized",
    });
  });

  app.post("/auth/login", (req: Request, res: Response) => {
    const { name } = req.body;
    if (isValidName(name) && req.session) {
      req.session.userName = name;
      return res.redirect("/auth/current");
    }
    return res.status(404).json({
      error: `"${name}" is not a valid name`,
    });
  });

  app.post("/auth/logout", (req: Request, res: Response) => {
    if (req.session?.userName) {
      req.session.userName = undefined;
      return res.json({
        status: "ok",
      });
    }
    return res.status(404).json({
      error: "You are not authorized",
    });
  });
};
