'use client';

import { ChangeEvent, useState } from 'react';

export const RegisterForm = () => {
  let [loading, setLoading] = useState(false);
  let [formValues, setFormValues] = useState({
    name: '',
    email: '',
    accountType: '',
    password: '',
  });

  const onSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch('/auth/register', {
        method: 'POST',
        body: JSON.stringify(formValues),
        headers: {
          'Content-Type': 'application/json',
        },
      });

      setLoading(false);
      if (res.status > 200) {
        alert((await res.json()).message);
        return;
      }

      // signIn(undefined, { callbackUrl: '/' });
    } catch (error) {
      setLoading(false);
      console.error(error);
      alert(error.message);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormValues({ ...formValues, [name]: value });
  };

  return (
    <form
      onSubmit={onSubmit}
      style={{
        display: 'flex',
        flexDirection: 'column',
        width: 500,
        rowGap: 10,
      }}
    >
      <label htmlFor="name">Name</label>
      <input
        required
        type="text"
        name="name"
        value={formValues.name}
        onChange={handleChange}
        style={{ padding: '1rem' }}
      />
      <label htmlFor="name">Account Type</label>
      <input
        required
        type="text"
        name="accountType"
        value={formValues.accountType}
        onChange={handleChange}
        style={{ padding: '1rem' }}
      />
      <label htmlFor="email">Email</label>
      <input
        required
        type="email"
        name="email"
        value={formValues.email}
        onChange={handleChange}
        style={{ padding: '1rem' }}
      />
      <label htmlFor="password">Password</label>
      <input
        required
        type="password"
        name="password"
        value={formValues.password}
        onChange={handleChange}
        style={{ padding: '1rem' }}
      />
      <button
        style={{
          backgroundColor: `${loading ? '#ccc' : '#3446eb'}`,
          color: '#fff',
          padding: '1rem',
          cursor: 'pointer',
        }}
        disabled={loading}
      >
        {loading ? 'loading...' : 'Register'}
      </button>
    </form>
  );
};

export default RegisterForm;
