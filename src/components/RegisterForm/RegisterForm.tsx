'use client';
import React, { useEffect, useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import Button, { ButtonTypes } from '../Button/Button';
import classes from './RegisterForm.module.scss';
import Link from 'next/link';

const { buttonContainer, form, header, registerInputFieldContainer, radioGroup } = classes

interface FormValues {
  firstName: string;
  lastName?: string;
  gender: string;
  country: string;
  email: string;
  userName: string;
  password: string;
};

const RegisterForm = () => {
  const { register, handleSubmit, control, formState: { errors } } = useForm<FormValues>();
  const onSubmit = handleSubmit((data) => console.log(data));

  const [countries, setCountries] = useState<string[]>([]);
  const COUNTRY_URL = `https://restcountries.com/v3.1/all`;

  // ? Fetch the countries with API
  const fetchCountries = async () => {
    try {
      const response = await fetch(COUNTRY_URL);
      const data = await response.json();
      const countryNames = data.map((country: any) => country.name.common);
      setCountries(countryNames);
    } catch (error) {
      console.error('Error fetching countries:', error);
    }
  };

  useEffect(() => {
    fetchCountries()
  }, []);

  return (
    <>
      <form onSubmit={onSubmit} className={form}>
        <section className={header}>
          <h2>Registration</h2>
          <p>To begin using the messenger, create an account.</p>
        </section>
        <section>
          <div className={registerInputFieldContainer}>
            <label>First Name</label>
            <input
              {...register('firstName', { required: '*First name is required' })}
              placeholder="First Name"
            />
            {errors?.firstName && <p className="errorMessage">{errors.firstName.message}</p>}
          </div>
          <div className={registerInputFieldContainer}>
            <label>Last Name (Optional)</label>
            <input
              {...register('lastName')}
              placeholder="Last Name (Optional)"
            />
            {errors?.lastName && <p className="errorMessage">{errors.lastName.message}</p>}
          </div>
          <div className={registerInputFieldContainer}>
            <label>Country</label>
            <Controller
              name="country"
              control={control}
              defaultValue=""
              rules={{ required: '*Country is required' }}
              render={({ field }) => (
                <select {...field}>
                  <option value="">Select a country</option>
                  {countries.map((country) => (
                    <option key={country} value={country}>
                      {country}
                    </option>
                  ))}
                </select>
              )}
            />
            {errors?.country && <p className="errorMessage">{errors.country.message}</p>}
          </div>
          <div className={radioGroup}>
            <label>Gender</label>
            <Controller
              name="gender"
              control={control}
              defaultValue=""
              rules={{ required: '*Gender is required' }}
              render={({ field }) => (
                <div>
                  <label>
                    <input
                      type="radio"
                      value="female"
                      checked={field.value === 'female'}
                      onChange={() => field.onChange('female')}
                    />
                    Female
                  </label>
                  <label>
                    <input
                      type="radio"
                      value="male"
                      checked={field.value === 'male'}
                      onChange={() => field.onChange('female')}
                    />
                    Male
                  </label>
                </div>
              )}
            />
            {errors?.gender && <p className="errorMessage">{errors.gender.message}</p>}
          </div>
        </section>

        <div className={registerInputFieldContainer}>
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
          {errors?.email && <p className="errorMessage">{errors.email.message}</p>}
        </div>
        <div className={registerInputFieldContainer}>
          <label>Username</label>
          <input
            {...register('userName', { required: '*Username is required' })}
            placeholder="Username"
          />
          {errors?.userName && <p className="errorMessage">{errors.userName.message}</p>}
        </div>
        <div className={registerInputFieldContainer}>
          <label>password</label>
          <input
            {...register('password', { required: '*Password is required' })}
            placeholder="Password"
            type="password"
          />
          {errors?.password && <p className="errorMessage">{errors.password.message}</p>}
        </div>
        <section className={buttonContainer}>
          <Button buttonType={ButtonTypes.REGISTER} handleClick={onSubmit} />
          <Link href="/">
            <Button buttonType={ButtonTypes.CANCEL} />
          </Link>
        </section>
      </form>
    </>
  );
};

export default RegisterForm;
