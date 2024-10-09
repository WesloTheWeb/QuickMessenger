'use client';
import { useEffect, useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import Button, { ButtonTypes } from '../Button/Button';
import classes from './RegisterForm.module.scss';
import Link from 'next/link';

const { registrationPersonalInformationContainer, registrationGenderAgeContainer, buttonContainer,
  registrationGenderAgeInnerContainer, form, header, registerInputFieldContainer, radioGroup } = classes

interface FormValues {
  firstName: string;
  lastName?: string;
  gender: string;
  age: number;
  country: string;
  email: string;
  userName: string;
  password: string;
};

const RegisterForm = () => {
  const { register, handleSubmit, control, formState: { errors }, reset } = useForm<FormValues>();
  const [registrationStatus, setRegistrationStatus] = useState<string | null>(null);

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (registrationStatus?.includes('successful')) {
      timer = setTimeout(() => {
        setRegistrationStatus(null);
      }, 5000); // Clear message after 5 seconds
    }
    return () => clearTimeout(timer);
  }, [registrationStatus]);

  const onSubmit = async (data: FormValues) => {
    try {
      // ? Making the POST req to database
      const response = await fetch('/api/register', {
        method: 'POST',
        headers: {
          'conttent-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (response.ok) {
        setRegistrationStatus('Registration successful!');
        reset();
      } else {
        setRegistrationStatus(`Registration failed: ${result.message}`);
      };

    } catch (err) {
      console.log('Error occured', err);
      setRegistrationStatus('Error occured on registration')
    }
  };

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
      {registrationStatus && (
        <p className={registrationStatus.includes('successful') ? 'successMessage' : 'errorMessage'}>
          {registrationStatus}
        </p>
      )}

      <form onSubmit={handleSubmit(onSubmit)} className={form}>
        <section className={header}>
          <h2>Registration</h2>
          <p>To begin using the messenger, create an account.</p>
        </section>
        <section className={registrationPersonalInformationContainer}>
          <div className={registerInputFieldContainer}>
            <label>
              <span className='requiredItem'>*</span>
              First Name
            </label>
            <input
              {...register('firstName', { required: '*First name is required' })}
              placeholder="First Name"
            />
            {errors?.firstName && <p className="errorMessage">{errors.firstName.message}</p>}
          </div>
          <div className={registerInputFieldContainer}>
            <label>
              Last Name (Optional)</label>
            <input
              {...register('lastName')}
              placeholder="Last Name (Optional)"
            />
            {errors?.lastName && <p className="errorMessage">{errors.lastName.message}</p>}
          </div>
          <section className={registrationGenderAgeContainer}>
            <div className={registerInputFieldContainer}>
              <label>
                <span className='requiredItem'>*</span>
                Age
              </label>
              <input
                {...register('age')}
                placeholder="Age"
              />
              {errors?.lastName && <p className="errorMessage">{errors.lastName.message}</p>}
            </div>
            <div className={[registerInputFieldContainer, radioGroup].join(' ')}>
              <label>
                <span className='requiredItem'>*</span>
                Gender
              </label>
              <Controller
                name="gender"
                control={control}
                defaultValue=""
                rules={{ required: '*Gender is required' }}
                render={({ field }) => (
                  <section className={registrationGenderAgeInnerContainer}>
                    <label>
                      <input
                        type="radio"
                        value="male"
                        checked={field.value === 'male'}
                        onChange={() => field.onChange('male')}
                      />
                      Male
                    </label>
                    <label>
                      <input
                        type="radio"
                        value="female"
                        checked={field.value === 'female'}
                        onChange={() => field.onChange('female')}
                      />
                      Female
                    </label>
                  </section>
                )}
              />
              {errors?.gender && <p className="errorMessage">{errors.gender.message}</p>}
            </div>

          </section>

          <div className={registerInputFieldContainer}>
            <label>
              <span className='requiredItem'>*</span>
              Country
            </label>
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
        </section>

        <div className={registerInputFieldContainer}>
          <label>
            <span className='requiredItem'>*</span>
            Email:
          </label>
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
          <label>
            <span className='requiredItem'>*</span>
            Username
          </label>
          <input
            {...register('userName', { required: '*Username is required' })}
            placeholder="Username"
          />
          {errors?.userName && <p className="errorMessage">{errors.userName.message}</p>}
        </div>
        <div className={registerInputFieldContainer}>
          <label>
            <span className='requiredItem'>*</span>
            Password
          </label>
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
