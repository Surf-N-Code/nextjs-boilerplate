'use client';
import { Auth } from '@supabase/auth-ui-react';
import { ThemeSupa } from '@supabase/auth-ui-shared';
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';

export default function AuthForm() {
  const supabase = createClientComponentClient();

  return (
    // <form
    //   onSubmit={onSubmit}
    //   style={{
    //     display: 'flex',
    //     flexDirection: 'column',
    //     width: 500,
    //     rowGap: 10,
    //   }}
    // >
    //   <label htmlFor="name">Name</label>
    //   <input
    //     required
    //     type="text"
    //     name="name"
    //     value={formValues.name}
    //     onChange={handleChange}
    //     style={{ padding: '1rem' }}
    //   />
    //   <label htmlFor="email">Email</label>
    //   <input
    //     required
    //     type="email"
    //     name="email"
    //     value={formValues.email}
    //     onChange={handleChange}
    //     style={{ padding: '1rem' }}
    //   />
    //   <label htmlFor="password">Password</label>
    //   <input
    //     required
    //     type="password"
    //     name="password"
    //     value={formValues.password}
    //     onChange={handleChange}
    //     style={{ padding: '1rem' }}
    //   />
    //   <button
    //     style={{
    //       backgroundColor: `${loading ? '#ccc' : '#3446eb'}`,
    //       color: '#fff',
    //       padding: '1rem',
    //       cursor: 'pointer',
    //     }}
    //     disabled={loading}
    //   >
    //     {loading ? 'loading...' : 'Register'}
    //   </button>
    // </form>
    <Auth
      supabaseClient={supabase}
      view="social"
      appearance={{ theme: ThemeSupa }}
      theme="dark"
      showLinks={true}
      providers={['email', 'google', 'facebook']}
      redirectTo="http://localhost:3000/auth/callback"
    />
  );
}
