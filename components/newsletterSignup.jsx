'use client';

import React from 'react';
import supabaseBrowser from '@/lib/supabaseBrowser';

const NewsletterSignup = ({ email }) => {
  const supabase = supabaseBrowser();
  const signup = async () => {
    console.log('signup', email);
    try {
      // setLoading(true);

      let { error } = await supabase.from('newsletter').upsert({
        email,
        updated_at: new Date().toISOString(),
      });
      if (error) throw error;
      alert('Thanks for signing up for the newsletter!');
    } catch (error) {
      console.log('error', error);
      alert(
        'Sorry, something went wrong signing you up for the newsletter. Please try again later.'
      );
    } finally {
      // setLoading(false);
    }
  };

  return (
    <div
      onClick={signup}
      className="cursor-pointer hover:bg-green-500 bg-[#2e654f] text-white py-2 px-8 rounded-full text-center min-w-max"
    >
      Join us!
    </div>
  );
};

export default NewsletterSignup;
