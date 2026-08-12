import createMiddleware from "next-intl/middleware";
import { routing } from "./i18n/routing";

export default createMiddleware(routing);

export const config = {
  // Match all paths except static files, Next internals and API routes
  matcher: ["/((?!api|_next|_vercel|.*\\..*).*)"],
};
