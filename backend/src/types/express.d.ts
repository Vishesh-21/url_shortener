import { JwtPayload } from "../utils/helper"; 

declare global {
  namespace Express {
    interface Request {
      user?: JwtPayload;
    }
  }
}