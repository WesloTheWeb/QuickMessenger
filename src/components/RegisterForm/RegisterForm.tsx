'use client';
import { useForm } from 'react-hook-form';
import classes from './RegisterForm.module.scss';

const { form, header, inputField } = classes

type FormValues = {
  firstName: string;
  email: string;
  userName: string;
  password: string;
};

const RegisterForm = () => {
  const { register, handleSubmit, formState: { errors } } = useForm<FormValues>();
  const onSubmit = handleSubmit((data) => console.log(data));

  return (
    <>

      <form onSubmit={onSubmit} className={form}>
        <section className={header}>
          <h2>Registration</h2>
          <p>To begin using the messenger, create an account.</p>
        </section>
        <div className={inputField}>
          <label>First Name</label>
          <input
            {...register('firstName', { required: '*First name is required' })}
            placeholder="First Name"
          />
          {errors?.firstName && <p className="error">{errors.firstName.message}</p>}
        </div>
        <div>
          <label>Email:</label>
          <input
            {...register('email', {
              required: '*Email is required',
              pattern: {
                value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                message: 'Invalid email address',
              },
            })}
            placeholder="Email"
          />
          {errors?.email && <p className="error">{errors.email.message}</p>}
        </div>
        <div>
          <label>Username</label>
          <input
            {...register('userName', { required: '*Username is required' })}
            placeholder="Username"
          />
          {errors?.userName && <p className="error">{errors.userName.message}</p>}
        </div>
        <div>
          <label>password</label>
          <input
            {...register('password', { required: '*Password is required' })}
            placeholder="Password"
            type="password"
          />
          {errors?.password && <p className="error">{errors.password.message}</p>}
        </div>
        <input type="submit" />
      </form>
    </>
  );
};

export default RegisterForm;
