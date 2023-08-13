'use client';
import { useState } from 'react';
import supabaseBrowser from '@/lib/supabaseBrowser';

export const WaitlistForm = () => {
  const [formValues, setFormValues] = useState({ email: '' });
  const [email, setEmail] = useState();
  const [loading, setLoading] = useState(false);

  const supabase = supabaseBrowser();
  console.log('supabase', supabase);
  const onSubmit = async (e) => {
    setLoading((prev) => !prev);
    e.preventDefault();
    console.log('submitted');
    const { error } = await supabase
      .from('countries')
      .insert({ created_at: new Date(), email: formValues.email });
  };

  const handleChange = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value });
  };

  return (
    <form onSubmit={onSubmit}>
      <label htmlFor="name">Email</label>
      <input
        required
        type="email"
        name="email"
        value={formValues.email}
        placeholder="Email"
        onChange={handleChange}
      />
      <button disabled={loading}>{loading ? 'loading...' : 'Register'}</button>
    </form>
  );
};
