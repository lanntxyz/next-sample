export { default } from "next-auth/middleware";

export const config = {
    matcher: [
        /**
         * Exclude the following paths from being processed by the middleware.
         * This is useful for excluding API routes, static assets, and images from being processed.
         * - /api/auth
         * - /login
         * - /_next/static
         * - /_next/image
         * - /.*\.png
         */
        '/((?!api/auth/.*|login|_next/static|_next/image|.*\\.png).*)'
    ]
};
