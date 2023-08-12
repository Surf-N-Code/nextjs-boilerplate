'use client';
import { useRouter } from 'next/navigation';
import { Fragment, useState } from 'react';
import Link from 'next/link';
import { Logo } from '@/components/Logo';
import FormInput from '@/components/formInput';
import { Listbox, Transition } from '@headlessui/react';
import { CheckIcon, ChevronUpDownIcon } from '@heroicons/react/20/solid';
import supabaseBrowser from '@/lib/supabaseBrowser';

const accountTypes = [{ name: 'Homeowner' }, { name: 'Contractor' }];

export const LoginForm = () => {
  const router = useRouter();
  const [error, setError] = useState(null);
  const [view, setView] = useState('login');
  const supabase = supabaseBrowser();
  let [loading, setLoading] = useState(false);
  const [accountType, setAccountType] = useState(accountTypes[0]);
  let [formValues, setFormValues] = useState({
    firstName: '',
    lastName: '',
    email: '',
    accountType: '',
    password: '',
  });

  const handleViewChange = (view) => {
    setView(view);
    setError(null);
  };

  const handleSignUp = async (e) => {
    e.preventDefault();
    const { data, error } = await supabase.auth.signUp({
      email: formValues.email,
      password: formValues.password,
      options: {
        emailRedirectTo: `${location.origin}/auth/callback`,
        data: {
          accountType: formValues.accountType,
          firstName: formValues.firstName,
          lastName: formValues.lastName,
        },
      },
      email_confirm: true,
    });
    const { user } = data;
    console.log('signe up user', user);
    if (user) {
      console.log('user created, redirecting');
      // router.push(`/verify-email?email=${user.email}`);
      router.push('/dashboard');
    }
    if (error) {
      setError(error.message);
    }
  };

  const handleSignIn = async (e) => {
    e.preventDefault();
    const { data, error } = await supabase.auth.signInWithPassword({
      email: formValues.email,
      password: formValues.password,
    });

    const { user } = data;
    console.log('login user', user);
    if (user) {
      console.log('user logged in , redirecting');
      router.push(`/dashboard`);
    }

    if (error) {
      setError(error.message);
    }
  };

  const handleChange = (event) => {
    setError(null);
    const { name, value } = event.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleAccountChange = (e) => {
    setAccountType(e);
    setFormValues({ ...formValues, accountType: e.name });
  };
  const [selected, setSelected] = useState(accountTypes[0]);

  const LoginForm = (
    <form onSubmit={handleSignIn} className="flex flex-col gap-4 text-black">
      <FormInput
        handleChange={handleChange}
        placeholder="E-mail"
        value={formValues.email}
        type="email"
        name="email"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="28"
          height="28"
          viewBox="0 0 28 28"
          fill="none"
          className="mx-4 n-10"
        >
          <g clipPath="url(#clip0_99_947)">
            <path
              d="M4.518 22.8678C4.518 23.3215 4.15024 23.6893 3.69652 23.6893C3.2428 23.6893 2.87504 23.3215 2.87504 22.8678C2.87504 21.7597 2.90515 20.6982 2.96554 19.696C2.58533 19.804 2.19759 19.8981 1.80398 19.9768C1.35911 20.0658 0.926371 19.7772 0.837365 19.3324C0.748415 18.8875 1.03691 18.4547 1.48178 18.3658C2.04094 18.2539 2.58594 18.1077 3.10974 17.9322C3.28664 16.251 3.56379 14.7911 3.94223 13.6288C4.84701 10.8499 6.4644 9.57397 8.58189 10.6327C10.6973 11.6904 10.7569 13.8976 9.11067 15.939C8.08859 17.2064 6.5151 18.3241 4.65306 19.1054C4.56344 20.2678 4.518 21.5311 4.518 22.8678ZM7.83182 14.9076C8.89491 13.5894 8.8685 12.6127 7.8472 12.1021C6.86387 11.6105 6.1417 12.1802 5.50448 14.1374C5.23066 14.9784 5.01246 16.0146 4.85161 17.2045C6.09808 16.5705 7.13549 15.7711 7.83182 14.9076ZM16.4996 11.3655L23.8927 3.9724C24.5343 3.33081 25.5746 3.33081 26.2162 3.9724L27.5188 5.27506C28.1604 5.91664 28.1604 6.95687 27.5188 7.59851L20.1257 14.9916C19.8176 15.2997 19.3997 15.4728 18.9639 15.4728H16.8398C16.3861 15.4728 16.0183 15.105 16.0183 14.6513V12.5272C16.0184 12.0915 16.1915 11.6736 16.4996 11.3655ZM18.9639 13.8299L23.8927 8.90117L22.59 7.59851L17.6612 12.5272V13.8299H18.9639ZM26.3571 6.43678L25.0544 5.13413L23.7518 6.43678L25.0544 7.73944L26.3571 6.43678ZM9.24352 20.1229C8.94478 20.4643 8.4258 20.4989 8.08439 20.2002C7.74298 19.9014 7.70833 19.3825 8.00712 19.0411L10.2792 16.4444C10.7273 15.9323 11.5057 15.8804 12.0179 16.3285C12.2453 16.5275 12.3917 16.8032 12.4291 17.103L12.5106 17.7549L13.0227 17.2144C13.4908 16.7204 14.2706 16.6993 14.7647 17.1674C14.8246 17.2241 14.8786 17.2868 14.926 17.3543L15.534 18.2212L18.2579 17.4459C18.6943 17.3217 19.1487 17.5747 19.2729 18.011C19.3971 18.4473 19.1441 18.9018 18.7077 19.026L15.7028 19.8814C15.1982 20.025 14.6579 19.8334 14.3567 19.4038L13.8696 18.7093L13.1053 19.5159C12.909 19.7231 12.6469 19.8557 12.3637 19.8911C11.6884 19.9755 11.0726 19.4965 10.9882 18.8213L10.9124 18.2155L9.24352 20.1229ZM23.8222 14.6513C23.8222 14.1976 24.19 13.8298 24.6437 13.8298C25.0975 13.8298 25.4652 14.1976 25.4652 14.6513V22.0444C25.4652 23.4055 24.3619 24.5088 23.0008 24.5088H6.98239C6.52872 24.5088 6.16091 24.141 6.16091 23.6873C6.16091 23.2336 6.52872 22.8658 6.98239 22.8658H23.0008C23.4544 22.8658 23.8222 22.4981 23.8222 22.0443V14.6513ZM17.6613 5.6153C18.115 5.6153 18.4828 5.98306 18.4828 6.43678C18.4828 6.89051 18.115 7.25826 17.6613 7.25826H2.46438C2.01072 7.25826 1.64291 7.62602 1.64291 8.07974V14.6514C1.64291 15.1051 1.27515 15.4729 0.821426 15.4729C0.367705 15.4729 0 15.105 0 14.6513V8.07969C0 6.71864 1.10333 5.6153 2.46438 5.6153H17.6613Z"
              fill="#C0C0C0"
            />
          </g>
          <defs>
            <clipPath id="clip0_99_947">
              <rect width="28" height="28" fill="white" />
            </clipPath>
          </defs>
        </svg>
      </FormInput>

      <FormInput
        handleChange={handleChange}
        placeholder="Password"
        value={formValues.password}
        type="password"
        name="password"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="28"
          height="28"
          viewBox="0 0 28 28"
          fill="none"
          className="mx-4"
        >
          <path
            d="M20.125 10.5H9.625V7.62125C9.625 6.52823 10.0592 5.47997 10.8321 4.70709C11.605 3.9342 12.6532 3.5 13.7463 3.5H14.2538C15.3468 3.5 16.395 3.9342 17.1679 4.70709C17.9408 5.47997 18.375 6.52823 18.375 7.62125C18.375 7.85331 18.4672 8.07587 18.6313 8.23997C18.7954 8.40406 19.0179 8.49625 19.25 8.49625C19.4821 8.49625 19.7046 8.40406 19.8687 8.23997C20.0328 8.07587 20.125 7.85331 20.125 7.62125C20.1227 6.06481 19.5034 4.57278 18.4028 3.47221C17.3022 2.37163 15.8102 1.75231 14.2538 1.75H13.7463C12.1898 1.75231 10.6978 2.37163 9.59721 3.47221C8.49663 4.57278 7.87731 6.06481 7.875 7.62125V10.5C7.17881 10.5 6.51113 10.7766 6.01884 11.2688C5.52656 11.7611 5.25 12.4288 5.25 13.125V21.2625C5.25231 22.5846 5.77852 23.8518 6.71336 24.7866C7.6482 25.7215 8.91544 26.2477 10.2375 26.25H17.7625C19.0846 26.2477 20.3518 25.7215 21.2866 24.7866C22.2215 23.8518 22.7477 22.5846 22.75 21.2625V13.125C22.75 12.4288 22.4734 11.7611 21.9812 11.2688C21.4889 10.7766 20.8212 10.5 20.125 10.5ZM21 21.2625C21 22.1211 20.6589 22.9446 20.0518 23.5518C19.4446 24.1589 18.6211 24.5 17.7625 24.5H10.2375C9.37886 24.5 8.55539 24.1589 7.94824 23.5518C7.34109 22.9446 7 22.1211 7 21.2625V13.125C7 12.8929 7.09219 12.6704 7.25628 12.5063C7.42038 12.3422 7.64294 12.25 7.875 12.25H20.125C20.3571 12.25 20.5796 12.3422 20.7437 12.5063C20.9078 12.6704 21 12.8929 21 13.125V21.2625ZM14.875 18.13V21C14.875 21.2321 14.7828 21.4546 14.6187 21.6187C14.4546 21.7828 14.2321 21.875 14 21.875C13.7679 21.875 13.5454 21.7828 13.3813 21.6187C13.2172 21.4546 13.125 21.2321 13.125 21V18.13C12.7914 17.9374 12.5306 17.6401 12.3832 17.2842C12.2358 16.9282 12.2099 16.5336 12.3096 16.1615C12.4093 15.7894 12.629 15.4606 12.9347 15.2261C13.2403 14.9916 13.6148 14.8645 14 14.8645C14.3852 14.8645 14.7597 14.9916 15.0653 15.2261C15.371 15.4606 15.5907 15.7894 15.6904 16.1615C15.7901 16.5336 15.7642 16.9282 15.6168 17.2842C15.4694 17.6401 15.2086 17.9374 14.875 18.13Z"
            fill="#C0C0C0"
          />
        </svg>
      </FormInput>
      <button
        className="bg-[#2D634E] rounded-2xl py-4 text-white"
        disabled={loading}
      >
        {loading ? 'loading...' : 'Login'}
      </button>
    </form>
  );

  const RegisterForm = (
    <form onSubmit={handleSignUp} className="flex flex-col gap-4 text-black">
      <FormInput
        handleChange={handleChange}
        placeholder="First Name"
        value={formValues.firstName}
        type="text"
        name="firstName"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="28"
          height="28"
          viewBox="0 0 28 28"
          fill="none"
          className="mx-4"
        >
          <g clipPath="url(#clip0_99_947)">
            <path
              d="M4.518 22.8678C4.518 23.3215 4.15024 23.6893 3.69652 23.6893C3.2428 23.6893 2.87504 23.3215 2.87504 22.8678C2.87504 21.7597 2.90515 20.6982 2.96554 19.696C2.58533 19.804 2.19759 19.8981 1.80398 19.9768C1.35911 20.0658 0.926371 19.7772 0.837365 19.3324C0.748415 18.8875 1.03691 18.4547 1.48178 18.3658C2.04094 18.2539 2.58594 18.1077 3.10974 17.9322C3.28664 16.251 3.56379 14.7911 3.94223 13.6288C4.84701 10.8499 6.4644 9.57397 8.58189 10.6327C10.6973 11.6904 10.7569 13.8976 9.11067 15.939C8.08859 17.2064 6.5151 18.3241 4.65306 19.1054C4.56344 20.2678 4.518 21.5311 4.518 22.8678ZM7.83182 14.9076C8.89491 13.5894 8.8685 12.6127 7.8472 12.1021C6.86387 11.6105 6.1417 12.1802 5.50448 14.1374C5.23066 14.9784 5.01246 16.0146 4.85161 17.2045C6.09808 16.5705 7.13549 15.7711 7.83182 14.9076ZM16.4996 11.3655L23.8927 3.9724C24.5343 3.33081 25.5746 3.33081 26.2162 3.9724L27.5188 5.27506C28.1604 5.91664 28.1604 6.95687 27.5188 7.59851L20.1257 14.9916C19.8176 15.2997 19.3997 15.4728 18.9639 15.4728H16.8398C16.3861 15.4728 16.0183 15.105 16.0183 14.6513V12.5272C16.0184 12.0915 16.1915 11.6736 16.4996 11.3655ZM18.9639 13.8299L23.8927 8.90117L22.59 7.59851L17.6612 12.5272V13.8299H18.9639ZM26.3571 6.43678L25.0544 5.13413L23.7518 6.43678L25.0544 7.73944L26.3571 6.43678ZM9.24352 20.1229C8.94478 20.4643 8.4258 20.4989 8.08439 20.2002C7.74298 19.9014 7.70833 19.3825 8.00712 19.0411L10.2792 16.4444C10.7273 15.9323 11.5057 15.8804 12.0179 16.3285C12.2453 16.5275 12.3917 16.8032 12.4291 17.103L12.5106 17.7549L13.0227 17.2144C13.4908 16.7204 14.2706 16.6993 14.7647 17.1674C14.8246 17.2241 14.8786 17.2868 14.926 17.3543L15.534 18.2212L18.2579 17.4459C18.6943 17.3217 19.1487 17.5747 19.2729 18.011C19.3971 18.4473 19.1441 18.9018 18.7077 19.026L15.7028 19.8814C15.1982 20.025 14.6579 19.8334 14.3567 19.4038L13.8696 18.7093L13.1053 19.5159C12.909 19.7231 12.6469 19.8557 12.3637 19.8911C11.6884 19.9755 11.0726 19.4965 10.9882 18.8213L10.9124 18.2155L9.24352 20.1229ZM23.8222 14.6513C23.8222 14.1976 24.19 13.8298 24.6437 13.8298C25.0975 13.8298 25.4652 14.1976 25.4652 14.6513V22.0444C25.4652 23.4055 24.3619 24.5088 23.0008 24.5088H6.98239C6.52872 24.5088 6.16091 24.141 6.16091 23.6873C6.16091 23.2336 6.52872 22.8658 6.98239 22.8658H23.0008C23.4544 22.8658 23.8222 22.4981 23.8222 22.0443V14.6513ZM17.6613 5.6153C18.115 5.6153 18.4828 5.98306 18.4828 6.43678C18.4828 6.89051 18.115 7.25826 17.6613 7.25826H2.46438C2.01072 7.25826 1.64291 7.62602 1.64291 8.07974V14.6514C1.64291 15.1051 1.27515 15.4729 0.821426 15.4729C0.367705 15.4729 0 15.105 0 14.6513V8.07969C0 6.71864 1.10333 5.6153 2.46438 5.6153H17.6613Z"
              fill="#C0C0C0"
            />
          </g>
          <defs>
            <clipPath id="clip0_99_947">
              <rect width="28" height="28" fill="white" />
            </clipPath>
          </defs>
        </svg>
      </FormInput>
      <FormInput
        handleChange={handleChange}
        placeholder="Last Name"
        value={formValues.lastName}
        type="text"
        name="lastName"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="28"
          height="28"
          viewBox="0 0 28 28"
          fill="none"
          className="mx-4"
        >
          <g clipPath="url(#clip0_99_947)">
            <path
              d="M4.518 22.8678C4.518 23.3215 4.15024 23.6893 3.69652 23.6893C3.2428 23.6893 2.87504 23.3215 2.87504 22.8678C2.87504 21.7597 2.90515 20.6982 2.96554 19.696C2.58533 19.804 2.19759 19.8981 1.80398 19.9768C1.35911 20.0658 0.926371 19.7772 0.837365 19.3324C0.748415 18.8875 1.03691 18.4547 1.48178 18.3658C2.04094 18.2539 2.58594 18.1077 3.10974 17.9322C3.28664 16.251 3.56379 14.7911 3.94223 13.6288C4.84701 10.8499 6.4644 9.57397 8.58189 10.6327C10.6973 11.6904 10.7569 13.8976 9.11067 15.939C8.08859 17.2064 6.5151 18.3241 4.65306 19.1054C4.56344 20.2678 4.518 21.5311 4.518 22.8678ZM7.83182 14.9076C8.89491 13.5894 8.8685 12.6127 7.8472 12.1021C6.86387 11.6105 6.1417 12.1802 5.50448 14.1374C5.23066 14.9784 5.01246 16.0146 4.85161 17.2045C6.09808 16.5705 7.13549 15.7711 7.83182 14.9076ZM16.4996 11.3655L23.8927 3.9724C24.5343 3.33081 25.5746 3.33081 26.2162 3.9724L27.5188 5.27506C28.1604 5.91664 28.1604 6.95687 27.5188 7.59851L20.1257 14.9916C19.8176 15.2997 19.3997 15.4728 18.9639 15.4728H16.8398C16.3861 15.4728 16.0183 15.105 16.0183 14.6513V12.5272C16.0184 12.0915 16.1915 11.6736 16.4996 11.3655ZM18.9639 13.8299L23.8927 8.90117L22.59 7.59851L17.6612 12.5272V13.8299H18.9639ZM26.3571 6.43678L25.0544 5.13413L23.7518 6.43678L25.0544 7.73944L26.3571 6.43678ZM9.24352 20.1229C8.94478 20.4643 8.4258 20.4989 8.08439 20.2002C7.74298 19.9014 7.70833 19.3825 8.00712 19.0411L10.2792 16.4444C10.7273 15.9323 11.5057 15.8804 12.0179 16.3285C12.2453 16.5275 12.3917 16.8032 12.4291 17.103L12.5106 17.7549L13.0227 17.2144C13.4908 16.7204 14.2706 16.6993 14.7647 17.1674C14.8246 17.2241 14.8786 17.2868 14.926 17.3543L15.534 18.2212L18.2579 17.4459C18.6943 17.3217 19.1487 17.5747 19.2729 18.011C19.3971 18.4473 19.1441 18.9018 18.7077 19.026L15.7028 19.8814C15.1982 20.025 14.6579 19.8334 14.3567 19.4038L13.8696 18.7093L13.1053 19.5159C12.909 19.7231 12.6469 19.8557 12.3637 19.8911C11.6884 19.9755 11.0726 19.4965 10.9882 18.8213L10.9124 18.2155L9.24352 20.1229ZM23.8222 14.6513C23.8222 14.1976 24.19 13.8298 24.6437 13.8298C25.0975 13.8298 25.4652 14.1976 25.4652 14.6513V22.0444C25.4652 23.4055 24.3619 24.5088 23.0008 24.5088H6.98239C6.52872 24.5088 6.16091 24.141 6.16091 23.6873C6.16091 23.2336 6.52872 22.8658 6.98239 22.8658H23.0008C23.4544 22.8658 23.8222 22.4981 23.8222 22.0443V14.6513ZM17.6613 5.6153C18.115 5.6153 18.4828 5.98306 18.4828 6.43678C18.4828 6.89051 18.115 7.25826 17.6613 7.25826H2.46438C2.01072 7.25826 1.64291 7.62602 1.64291 8.07974V14.6514C1.64291 15.1051 1.27515 15.4729 0.821426 15.4729C0.367705 15.4729 0 15.105 0 14.6513V8.07969C0 6.71864 1.10333 5.6153 2.46438 5.6153H17.6613Z"
              fill="#C0C0C0"
            />
          </g>
          <defs>
            <clipPath id="clip0_99_947">
              <rect width="28" height="28" fill="white" />
            </clipPath>
          </defs>
        </svg>
      </FormInput>
      <Listbox value={accountType} onChange={handleAccountChange}>
        <div className="relative z-30 mt-1 border-2 border-grey-200 rounded-2xl py-2 cursor-pointer">
          <Listbox.Button className="cursor-pointer relative w-full cursor-default rounded-lg bg-white py-2 pl-3 pr-10 text-left focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm">
            <span className="text-black block truncate">
              {accountType.name}
            </span>
            <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
              <ChevronUpDownIcon
                className="h-5 w-5 text-gray-400"
                aria-hidden="true"
              />
            </span>
          </Listbox.Button>
          <Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Listbox.Options className="cursor-pointer absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
              {accountTypes.map((type, accountTypeIdx) => (
                <Listbox.Option
                  key={accountTypeIdx}
                  className={({ active }) =>
                    `relative cursor-default select-none py-2 pl-10 pr-4 cursor-pointer ${
                      active ? 'bg-[#2D634E] text-white' : 'text-gray-900'
                    }`
                  }
                  value={type}
                >
                  {({ selected }) => (
                    <>
                      <span
                        className={`block truncate ${
                          selected ? 'font-medium' : 'font-normal'
                        }`}
                      >
                        {type.name}
                      </span>
                      {selected ? (
                        <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-green-600">
                          <CheckIcon className="h-5 w-5" aria-hidden="true" />
                        </span>
                      ) : null}
                    </>
                  )}
                </Listbox.Option>
              ))}
            </Listbox.Options>
          </Transition>
        </div>
      </Listbox>
      <FormInput
        handleChange={handleChange}
        placeholder="E-Mail"
        value={formValues.email}
        type="email"
        name="email"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="28"
          height="28"
          viewBox="0 0 28 28"
          fill="none"
          className="mx-4"
        >
          <path
            d="M23.625 6.5625H11.8125C11.3295 6.5625 10.9375 6.1705 10.9375 5.6875C10.9375 5.2045 11.3295 4.8125 11.8125 4.8125H23.625C24.108 4.8125 24.5 5.2045 24.5 5.6875C24.5 6.1705 24.108 6.5625 23.625 6.5625Z"
            fill="#C0C0C0"
          />
          <path
            d="M25.375 8.3125C24.892 8.3125 24.5 7.9205 24.5 7.4375C24.5 6.95494 24.1076 6.5625 23.625 6.5625C23.142 6.5625 22.75 6.1705 22.75 5.6875C22.75 5.2045 23.142 4.8125 23.625 4.8125C25.0727 4.8125 26.25 5.98981 26.25 7.4375C26.25 7.9205 25.858 8.3125 25.375 8.3125Z"
            fill="#C0C0C0"
          />
          <path
            d="M6.125 6.5625H4.375C3.892 6.5625 3.5 6.1705 3.5 5.6875C3.5 5.2045 3.892 4.8125 4.375 4.8125H6.125C6.608 4.8125 7 5.2045 7 5.6875C7 6.1705 6.608 6.5625 6.125 6.5625Z"
            fill="#C0C0C0"
          />
          <path
            d="M9.1875 6.5625H8.75C8.267 6.5625 7.875 6.1705 7.875 5.6875C7.875 5.2045 8.267 4.8125 8.75 4.8125H9.1875C9.6705 4.8125 10.0625 5.2045 10.0625 5.6875C10.0625 6.1705 9.6705 6.5625 9.1875 6.5625Z"
            fill="#C0C0C0"
          />
          <path
            d="M2.625 21.4375C2.142 21.4375 1.75 21.0455 1.75 20.5625V7.4375C1.75 6.9545 2.142 6.5625 2.625 6.5625C3.108 6.5625 3.5 6.9545 3.5 7.4375V20.5625C3.5 21.0455 3.108 21.4375 2.625 21.4375Z"
            fill="#C0C0C0"
          />
          <path
            d="M25.375 21.4375C24.892 21.4375 24.5 21.0455 24.5 20.5625V7.4375C24.5 6.9545 24.892 6.5625 25.375 6.5625C25.858 6.5625 26.25 6.9545 26.25 7.4375V20.5625C26.25 21.0455 25.858 21.4375 25.375 21.4375Z"
            fill="#C0C0C0"
          />
          <path
            d="M4.375 23.1875C2.92731 23.1875 1.75 22.0102 1.75 20.5625C1.75 20.0795 2.142 19.6875 2.625 19.6875C3.108 19.6875 3.5 20.0795 3.5 20.5625C3.5 21.0451 3.89244 21.4375 4.375 21.4375C4.858 21.4375 5.25 21.8295 5.25 22.3125C5.25 22.7955 4.858 23.1875 4.375 23.1875Z"
            fill="#C0C0C0"
          />
          <path
            d="M23.625 23.1875H4.375C3.892 23.1875 3.5 22.7955 3.5 22.3125C3.5 21.8295 3.892 21.4375 4.375 21.4375H23.625C24.108 21.4375 24.5 21.8295 24.5 22.3125C24.5 22.7955 24.108 23.1875 23.625 23.1875Z"
            fill="#C0C0C0"
          />
          <path
            d="M23.625 23.1875C23.142 23.1875 22.75 22.7955 22.75 22.3125C22.75 21.8295 23.142 21.4375 23.625 21.4375C24.1076 21.4375 24.5 21.0451 24.5 20.5625C24.5 20.0795 24.892 19.6875 25.375 19.6875C25.858 19.6875 26.25 20.0795 26.25 20.5625C26.25 22.0102 25.0727 23.1875 23.625 23.1875Z"
            fill="#C0C0C0"
          />
          <path
            d="M14.0005 16.1534C12.8906 16.1534 11.7806 15.8489 10.7906 15.2394C10.3789 14.9861 10.2507 14.4471 10.504 14.0359C10.7573 13.6246 11.2963 13.496 11.7076 13.7493C13.1224 14.6195 14.8786 14.6195 16.2934 13.7493C16.7038 13.4956 17.2437 13.6242 17.497 14.0359C17.7503 14.4476 17.6221 14.9866 17.2104 15.2394C16.2204 15.8489 15.1104 16.1534 14.0005 16.1534Z"
            fill="#C0C0C0"
          />
          <path
            d="M16.7519 15.3693C16.4579 15.3693 16.1713 15.2214 16.006 14.9528C15.7526 14.5411 15.8808 14.0021 16.2925 13.7493L24.9161 8.44239C25.3265 8.1882 25.8663 8.31726 26.1196 8.72895C26.373 9.14063 26.2448 9.67963 25.8331 9.93251L17.2095 15.2394C17.0669 15.3273 16.9081 15.3693 16.7519 15.3693Z"
            fill="#C0C0C0"
          />
          <path
            d="M11.2477 15.3693C11.0915 15.3693 10.9327 15.3273 10.7901 15.2393L2.16655 9.93246C1.75486 9.67914 1.62667 9.14014 1.87999 8.72889C2.13286 8.31764 2.67273 8.18858 3.08355 8.44233L11.7071 13.7492C12.1188 14.0025 12.247 14.5415 11.9937 14.9528C11.8283 15.2214 11.5417 15.3693 11.2477 15.3693Z"
            fill="#C0C0C0"
          />
          <path
            d="M2.625 8.3125C2.142 8.3125 1.75 7.9205 1.75 7.4375C1.75 5.98981 2.92731 4.8125 4.375 4.8125C4.858 4.8125 5.25 5.2045 5.25 5.6875C5.25 6.1705 4.858 6.5625 4.375 6.5625C3.89244 6.5625 3.5 6.95494 3.5 7.4375C3.5 7.9205 3.108 8.3125 2.625 8.3125Z"
            fill="#C0C0C0"
          />
        </svg>
      </FormInput>
      <FormInput
        handleChange={handleChange}
        placeholder="Password"
        value={formValues.password}
        type="password"
        name="password"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="28"
          height="28"
          viewBox="0 0 21 21"
          fill="none"
          className="mx-4"
        >
          <path
            d="M14.8455 7.85842H7.55934V5.8608C7.55934 5.10233 7.86064 4.37492 8.39696 3.8386C8.93328 3.30228 9.66069 3.00098 10.4192 3.00098H10.7713C11.5298 3.00098 12.2572 3.30228 12.7935 3.8386C13.3298 4.37492 13.6311 5.10233 13.6311 5.8608C13.6311 6.02184 13.6951 6.17627 13.809 6.29014C13.9228 6.40401 14.0773 6.46798 14.2383 6.46798C14.3994 6.46798 14.5538 6.40401 14.6677 6.29014C14.7815 6.17627 14.8455 6.02184 14.8455 5.8608C14.8439 4.78075 14.4141 3.7454 13.6504 2.98169C12.8867 2.21799 11.8514 1.78823 10.7713 1.78662H10.4192C9.33911 1.78823 8.30376 2.21799 7.54005 2.98169C6.77634 3.7454 6.34658 4.78075 6.34498 5.8608V7.85842C5.86188 7.85842 5.39856 8.05034 5.05695 8.39194C4.71535 8.73355 4.52344 9.19686 4.52344 9.67997V15.3267C4.52504 16.2441 4.89019 17.1235 5.53889 17.7722C6.1876 18.4209 7.06696 18.7861 7.98436 18.7877H13.2061C14.1235 18.7861 15.0029 18.4209 15.6516 17.7722C16.3003 17.1235 16.6654 16.2441 16.667 15.3267V9.67997C16.667 9.19686 16.4751 8.73355 16.1335 8.39194C15.7919 8.05034 15.3286 7.85842 14.8455 7.85842ZM15.4527 15.3267C15.4527 15.9226 15.216 16.494 14.7947 16.9153C14.3734 17.3366 13.8019 17.5733 13.2061 17.5733H7.98436C7.38854 17.5733 6.81712 17.3366 6.3958 16.9153C5.97449 16.494 5.7378 15.9226 5.7378 15.3267V9.67997C5.7378 9.51893 5.80177 9.36449 5.91564 9.25062C6.02951 9.13676 6.18394 9.07278 6.34498 9.07278H14.8455C15.0065 9.07278 15.161 9.13676 15.2748 9.25062C15.3887 9.36449 15.4527 9.51893 15.4527 9.67997V15.3267ZM11.2024 13.153V15.1446C11.2024 15.3056 11.1385 15.4601 11.0246 15.5739C10.9107 15.6878 10.7563 15.7518 10.5952 15.7518C10.4342 15.7518 10.2798 15.6878 10.1659 15.5739C10.052 15.4601 9.98806 15.3056 9.98806 15.1446V13.153C9.75655 13.0194 9.57562 12.8131 9.47332 12.5661C9.37102 12.3191 9.35307 12.0453 9.42226 11.7871C9.49145 11.5289 9.6439 11.3007 9.85598 11.138C10.0681 10.9752 10.3279 10.887 10.5952 10.887C10.8626 10.887 11.1224 10.9752 11.3345 11.138C11.5466 11.3007 11.699 11.5289 11.7682 11.7871C11.8374 12.0453 11.8195 12.3191 11.7172 12.5661C11.6149 12.8131 11.4339 13.0194 11.2024 13.153Z"
            fill="#C0C0C0"
          />
        </svg>
      </FormInput>
      <button
        className="bg-[#2D634E] rounded-2xl py-4 text-white"
        disabled={loading}
      >
        {loading ? 'loading...' : 'Get Started'}
      </button>
    </form>
  );

  return (
    <div className="flex h-screen">
      <div className="flex flex-col md:justify-center w-full md:w-1/2 p-[70px]">
        <div className="justify-self-start">
          <Link href="/">
            <Logo />
          </Link>
        </div>
        <div className="flex flex-col mt-8 md:m-auto">
          <h1 className="text-3xl font-semibold">
            {view === 'register' ? 'Create an Account' : 'Sign In'}
          </h1>
          {view === 'register' ? (
            <p className="mt-2">
              Register for an account with HomeHelper. Just provide your details
              below
            </p>
          ) : (
            <p className="mt-2">
              Use your login credentials, or pick a social login to get access
              to the full power of LEO!
            </p>
          )}
          <div className="mt-10">
            {view === 'register' ? RegisterForm : LoginForm}
          </div>
          {error && (
            <div className="p-4 bg-red-600 text-white flex justify-center rounded-2xl mt-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-6 h-6 mr-2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z"
                />
              </svg>
              {error}
            </div>
          )}
          <div className="text-[#C0C0C0] font-light flex justify-center mt-8 text-sm">
            {view === 'register' ? (
              <p>
                Already have an account?{' '}
                <button
                  onClick={() =>
                    handleViewChange(view === 'register' ? 'login' : 'register')
                  }
                >
                  <span className="text-[#1C2021] font-medium underline">
                    Sign In
                  </span>
                </button>
              </p>
            ) : (
              <p>
                Don't have an account?{' '}
                <button
                  onClick={() =>
                    handleViewChange(view === 'register' ? 'login' : 'register')
                  }
                >
                  <span className="text-[#1C2021] font-medium underline">
                    Sign Up
                  </span>
                </button>
              </p>
            )}
          </div>
        </div>
      </div>
      <div className="hidden md:flex flex-column bg-[#2D634E] w-1/2 p-[40px]">
        <img src="../assets/leo.png" alt="LEO" className="object-contain" />
      </div>
      {/*<div className="px-6 text-gray-500 md:px-12 xl:px-40">*/}
      {/*  <div className="m-auto md:w-8/12 lg:w-6/12 xl:w-6/12">*/}
      {/*    <div className="rounded-xl bg-white shadow-xl">*/}
      {/*      <div className="p-6 sm:p-16">*/}
      {/*        <div className="mt-16 grid space-y-4">*/}
      {/*          <button*/}
      {/*            className="group h-12 px-6 border-2 border-gray-300 rounded-full transition duration-300*/}
      {/*          hover:border-blue-400 focus:bg-blue-50 active:bg-blue-100"*/}
      {/*          >*/}
      {/*            <div className="relative flex items-center space-x-4 justify-center">*/}
      {/*              <img*/}
      {/*                src="https://tailus.io/sources/blocks/social/preview/images/google.svg"*/}
      {/*                className="absolute left-0 w-5"*/}
      {/*                alt="google logo"*/}
      {/*              />*/}
      {/*              <span className="block w-max font-semibold tracking-wide text-gray-700 text-sm transition duration-300 group-hover:text-blue-600 sm:text-base">*/}
      {/*                Continue with Google*/}
      {/*              </span>*/}
      {/*            </div>*/}
      {/*          </button>*/}
      {/*          <button*/}
      {/*            className="group h-12 px-6 border-2 border-gray-300 rounded-full transition duration-300*/}
      {/*                             hover:border-blue-400 focus:bg-blue-50 active:bg-blue-100"*/}
      {/*          >*/}
      {/*            <div className="relative flex items-center space-x-4 justify-center">*/}
      {/*              <img*/}
      {/*                src="https://upload.wikimedia.org/wikipedia/en/0/04/Facebook_f_logo_%282021%29.svg"*/}
      {/*                className="absolute left-0 w-5"*/}
      {/*                alt="Facebook logo"*/}
      {/*              />*/}
      {/*              <span className="block w-max font-semibold tracking-wide text-gray-700 text-sm transition duration-300 group-hover:text-blue-600 sm:text-base">*/}
      {/*                Continue with Facebook*/}
      {/*              </span>*/}
      {/*            </div>*/}
      {/*          </button>*/}
      {/*        </div>*/}

      {/*        <div className="mt-32 space-y-4 text-gray-600 text-center sm:-mb-8">*/}
      {/*          <p className="text-xs">*/}
      {/*            By proceeding, you agree to our{' '}*/}
      {/*            <Link href="/terms" className="underline">*/}
      {/*              Terms of Use*/}
      {/*            </Link>{' '}*/}
      {/*            ,{' '}*/}
      {/*            <Link href="/privacy" className="underline">*/}
      {/*              Privacy Policy*/}
      {/*            </Link>*/}
      {/*            , and{' '}*/}
      {/*            <Link href="/testing-policy" className="underline">*/}
      {/*              Testing Policy*/}
      {/*            </Link>*/}
      {/*            .*/}
      {/*          </p>*/}
      {/*        </div>*/}
      {/*      </div>*/}
      {/*    </div>*/}
      {/*  </div>*/}
      {/*</div>*/}
    </div>
  );
};

export default LoginForm;
