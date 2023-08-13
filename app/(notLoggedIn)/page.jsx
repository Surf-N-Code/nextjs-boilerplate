'use client';
import { WaitlistForm } from '@/components/waitlistForm';
import tweet from '@/public/assets/tweet.jpg';
import { useState } from 'react';
import supabaseBrowser from '@/lib/supabaseBrowser';
// import video from '@/public/assets/one-day-day-one.mov';
const Home = () => {
  const [formValues, setFormValues] = useState({ email: '' });
  const [email, setEmail] = useState();
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const supabase = supabaseBrowser();
  const onSubmit = async (e) => {
    setLoading(true);
    e.preventDefault();
    console.log('submitted', formValues);
    const { error } = await supabase
      .from('waitlist')
      .insert({ created_at: new Date(), email: formValues.email });
    setLoading(false);
    //
    if (!error) {
      setSubmitted(true);
    }
  };

  const handleChange = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value });
  };

  return (
    <div>
      <div className="w-full container mx-auto">
        <div className="w-full flex items-center justify-between">
          <a
            className="flex items-center text-white no-underline hover:no-underline font-bold text-2xl lg:text-4xl"
            href="#"
          >
            Twideo
          </a>
          <div className="flex w-1/2 justify-end content-center">
            <a
              className="inline-block text-blue-300 no-underline hover:text-pink-500 hover:text-underline text-center h-10 p-2 md:h-auto md:p-4 transform hover:scale-125 duration-300 ease-in-out"
              href="https://twitter.com/_itsNorman"
            >
              <svg
                className="fill-current h-6"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 32 32"
              >
                <path d="M30.063 7.313c-.813 1.125-1.75 2.125-2.875 2.938v.75c0 1.563-.188 3.125-.688 4.625a15.088 15.088 0 0 1-2.063 4.438c-.875 1.438-2 2.688-3.25 3.813a15.015 15.015 0 0 1-4.625 2.563c-1.813.688-3.75 1-5.75 1-3.25 0-6.188-.875-8.875-2.625.438.063.875.125 1.375.125 2.688 0 5.063-.875 7.188-2.5-1.25 0-2.375-.375-3.375-1.125s-1.688-1.688-2.063-2.875c.438.063.813.125 1.125.125.5 0 1-.063 1.5-.25-1.313-.25-2.438-.938-3.313-1.938a5.673 5.673 0 0 1-1.313-3.688v-.063c.813.438 1.688.688 2.625.688a5.228 5.228 0 0 1-1.875-2c-.5-.875-.688-1.813-.688-2.75 0-1.063.25-2.063.75-2.938 1.438 1.75 3.188 3.188 5.25 4.25s4.313 1.688 6.688 1.813a5.579 5.579 0 0 1 1.5-5.438c1.125-1.125 2.5-1.688 4.125-1.688s3.063.625 4.188 1.813a11.48 11.48 0 0 0 3.688-1.375c-.438 1.375-1.313 2.438-2.563 3.188 1.125-.125 2.188-.438 3.313-.875z"></path>
              </svg>
            </a>
          </div>
        </div>
      </div>
      <div className="container pt-24 md:pt-36 mx-auto flex flex-wrap flex-col md:flex-row items-center">
        <div className="lg:w-7/12 flex flex-col justify-center lg:items-start overflow-y-hidden">
          <h1 className="my-4 text-3xl md:text-5xl text-white opacity-75 font-bold leading-tight text-center md:text-left">
            Turn your tweets into
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-400 via-pink-500 to-purple-500">
              {' '}
              shorts{' '}
            </span>
            instantly!
          </h1>
          <p className="leading-normal text-base md:text-2xl mb-8 text-center md:text-left">
            Create shorts from your tweets in seconds. No editing required.
          </p>
          <div className="block lg:hidden lg:w-5/12 p-12 overflow-hidden">
            <div className="relative transform -rotate-6 transition hover:scale-105 duration-700 ease-in-out hover:rotate-6">
              <img
                className="rounded-lg w-[230px] h-[230px] lg:w-[320px] lg:h-[320px]"
                src={tweet.src}
              />
              <video
                autoPlay
                loop
                muted
                playsInline
                className="mx-auto top-[30px] left-[35px] absolute h-[181px] w-[189px] lg:h-[256px] lg:w-[258px] lg:top-[36px] lg:left-[53px]"
              >
                <source
                  src="https://cdn.discordapp.com/attachments/1130853500901937163/1140202321209458708/one-day-day-one.mov"
                  type="video/mp4"
                />
              </video>
            </div>
          </div>
          <form
            className="bg-gray-900 opacity-75 w-full shadow-lg rounded-lg px-8 pt-6 pb-8"
            onSubmit={onSubmit}
          >
            {!submitted && (
              <>
                <div className="mb-4">
                  <label
                    className="block text-blue-300 py-2 font-bold mb-2"
                    htmlFor="emailaddress"
                  >
                    Signup for early access
                  </label>
                  <input
                    className="shadow appearance-none border rounded w-full p-3 text-gray-700 leading-tight focus:ring"
                    id="emailaddress"
                    name="email"
                    type="text"
                    placeholder="you@somewhere.com"
                    onChange={handleChange}
                    value={formValues.email}
                  />
                </div>
                <div className="flex items-center justify-between pt-4">
                  <button
                    className="bg-gradient-to-r from-purple-800 to-green-500 hover:from-pink-500 hover:to-green-500 text-white font-bold py-2 px-4 rounded focus:ring transform transition hover:scale-105 duration-300 ease-in-out"
                    type="button"
                    disabled={loading}
                    onClick={onSubmit}
                  >
                    {loading ? 'loading...' : 'Sign Up'}
                  </button>
                </div>
              </>
            )}
            {submitted && (
              <p className="text-white">
                Thank you for signing up! We'll let you know when we launch!
              </p>
            )}
          </form>
        </div>
        <div className="hidden lg:block lg:w-5/12 p-12 overflow-hidden">
          <div className="relative transform -rotate-6 transition hover:scale-105 duration-700 ease-in-out hover:rotate-6">
            <img
              className="rounded-lg w-[230px] h-[230px] lg:w-[320px] lg:h-[320px]"
              src={tweet.src}
            />
            <video
              autoPlay
              loop
              muted
              playsInline
              className="mx-auto top-[30px] left-[35px] absolute h-[181px] w-[189px] lg:h-[256px] lg:w-[258px] lg:top-[36px] lg:left-[53px]"
            >
              <source
                src="https://cdn.discordapp.com/attachments/1130853500901937163/1140202321209458708/one-day-day-one.mov"
                type="video/mp4"
              />
            </video>
          </div>
        </div>
        {/*<div className="w-full pt-16 pb-6 text-sm text-center md:text-left fade-in">*/}
        {/*  <a className="text-gray-500 no-underline hover:no-underline" href="#">*/}
        {/*    &copy; App 2020*/}
        {/*  </a>*/}
        {/*  - Template by*/}
        {/*  <a*/}
        {/*    className="text-gray-500 no-underline hover:no-underline"*/}
        {/*    href="https://www.tailwindtoolbox.com"*/}
        {/*  >*/}
        {/*    TailwindToolbox.com*/}
        {/*  </a>*/}
        {/*</div>*/}
      </div>
    </div>
  );
};

export default Home;
