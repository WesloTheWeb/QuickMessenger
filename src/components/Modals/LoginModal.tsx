'use client';

import Overlay from './Overlay';
import { useForm, SubmitHandler } from 'react-hook-form';
import classes from './LoginModal.module.scss';

const { modal, formGroup, submitButton, closeButton, errorMessage, modalButtonsController } = classes;

interface LoginModalProps {
  onClose: () => void;
}

interface FormValues {
  username: string;
  password: string;
}

const LoginModal = ({ onClose }: LoginModalProps) => {
  const { register, handleSubmit, formState: { errors } } = useForm<FormValues>();

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    console.log(data);
    // TODO: Handle the login logic here
  };

  return (
    <Overlay onClose={onClose}>
      <div className={modal} onClick={(e) => e.stopPropagation()}>
        <h2>Sign In</h2>
        <p>Use your credentials to sign in below</p>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className={formGroup}>
            <input
              {...register('username', { required: 'Username cannot be blank' })}
              placeholder="Username or email"
            />
            {errors.username && <p className={errorMessage}>{errors.username.message}</p>}
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