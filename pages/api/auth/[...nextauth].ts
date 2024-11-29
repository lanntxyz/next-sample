import authConfig from "@/auth.config";
import { NextApiRequest, NextApiResponse } from "next";
import NextAuth from "next-auth/next";

export default (req: NextApiRequest, res: NextApiResponse) => {
    return NextAuth(req, res, authConfig(req, res));
};
