'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Overlay from './Overlay';
import { useForm, SubmitHandler } from 'react-hook-form';
import classes from './LoginModal.module.scss';

const { modal, formGroup, submitButton, closeButton, errorMessage, modalButtonsController } = classes;

interface LoginModalProps {
  onClose: () => void;
  onLoginSuccess: () => void;
}

interface FormValues {
  email: string;
  password: string;
}

const LoginModal = ({ onClose, onLoginSuccess }: LoginModalProps) => {
  const { register, handleSubmit, formState: { errors } } = useForm<FormValues>();
  const [loginError, setLoginError] = useState<string | null>(null);
  const router = useRouter();

  const onSubmit: SubmitHandler<FormValues> = async (data) => {
    try {
      const response = await fetch('/api/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (response.ok) {
        // Set the token in a cookie
        document.cookie = `token=${result.token}; path=/; max-age=3600; SameSite=Strict; Secure`;
        // onClose();
        onLoginSuccess();
        router.push('/dashboard');
      } else {
        setLoginError(result.message);
      };

    } catch (error) {
      console.error('Login error:', error);
      setLoginError('An unexpected error occurred. Please try again.');
    };
  };

  return (
    <Overlay onClose={onClose}>
      <div className={modal} onClick={(e) => e.stopPropagation()}>
        <h2>Sign In</h2>
        <p>Use your credentials to sign in below</p>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className={formGroup}>
            <input
              {...register('email', { required: 'Email cannot be blank' })}
              placeholder="Email"
            />
            {errors.email && <p className={errorMessage}>{errors.email.message}</p>}
          </div>
          <div className={formGroup}>
            <input
              type="password"
              {...register('password', { required: 'Password cannot be blank' })}
              placeholder="Password"
            />
            {errors.password && <p className={errorMessage}>{errors.password.message}</p>}
          </div>
          <section className={modalButtonsController}>
            <button type="button" onClick={onClose} className={closeButton}>Close</button>
            <button type="submit" className={submitButton}>Sign in</button>
          </section>
        </form>
      </div>
    </Overlay>
  );
};

export default LoginModal;