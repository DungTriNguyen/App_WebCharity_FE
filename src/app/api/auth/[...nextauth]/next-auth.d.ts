import { type DefaultSession, type DefaultUser, type User } from 'next-auth';
import { type DefaultJWT } from 'next-auth/jwt';

declare module 'next-auth' {
  interface User extends DefaultUser {
    accessToken: string;
    detail: {
      address: string | null;
      birth_of_date: string | null;
      email: string;
      gender: string;
      id: number;
      name: string;
      phone_number: string | null;
      status_badge: string;
      status_label: string;
      username: string;
    };
  }

  interface Session extends DefaultSession {
    user: User;
    accessToken: string;
  }
}

declare module 'next-auth/jwt' {
  interface JWT extends DefaultJWT, User {
    expired: number;
  }
}
