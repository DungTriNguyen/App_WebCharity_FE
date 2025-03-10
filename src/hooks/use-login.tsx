import { useMutation } from '@tanstack/react-query';
import { signIn } from 'next-auth/react';

const useLoginMutation = () => {
  return useMutation({
    mutationKey: ['login'],
    mutationFn: async ({
      email,
      password,
    }: {
      email: string;
      password: string;
    }) => {
      await signIn('credentials', {
        callbackUrl: '/',
        redirect: true,
        email,
        password,
      });
    },
  });
};

export { useLoginMutation };
