import { generateJwt } from '@/lib/services/jwt.service';
import { NextApiRequest, NextApiResponse } from 'next';
import { DefaultSession, NextAuthOptions, Session, User } from "next-auth";
import { JWT } from "next-auth/jwt";
import GithubProvider from "next-auth/providers/github";
import { setCookie, destroyCookie } from 'nookies';
import { CookieName, JWT_MAX_AGE } from './lib/utils/constants';

declare module 'next-auth' {
    interface Session {
        user: {
            id: string;
            name: string;
            email: string;
            image: string;
        } & DefaultSession['user'];
    }
}

const authConfig = (req: NextApiRequest, res: NextApiResponse) => {
    return {
        providers: [
            GithubProvider({
                clientId: process.env.GITHUB_CLIENT_ID as string,
                clientSecret: process.env.GITHUB_CLIENT_SECRET as string
            })
        ],
        callbacks: {
            async signIn({ user }) {
                generateJwt(user).then(token => {
                    setCookie({ res }, CookieName.JWT_TOKEN, token, {
                        secure: process.env.NODE_ENV === 'production',
                        maxAge: JWT_MAX_AGE,
                        path: '/',
                    });
                });
                return true;
            },
            async jwt({ token, profile }: { token: JWT, profile?: any }) {
                if (profile) {
                    token.user = {
                        id: profile.id,
                        name: profile.name,
                        email: profile.email,
                        image: profile.avatar_url
                    };
                }

                return token;
            },
            async session({ session, user }: { session: Session, user: User }) {
                session.user = user as any;
                return session;
            }
        },
        pages: {
            signIn: '/login',
        },
        events: {
            async signOut() {
                destroyCookie({ res }, CookieName.JWT_TOKEN, {
                    path: '/',
                });
            }
        },
        debug: process.env.NODE_ENV === 'development',
        jwt: {
            maxAge: JWT_MAX_AGE,
        },
    } as NextAuthOptions;
}

export default authConfig;
