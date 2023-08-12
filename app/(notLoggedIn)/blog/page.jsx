import React from 'react';
import 'tailwindcss/tailwind.css';
import { HiOutlineArrowRight } from 'react-icons/hi';

import { Client } from '@notionhq/client';
import ReactMarkdown from 'react-markdown';
import { NotionToMarkdown } from 'notion-to-md';
import Image from '@/components/Image';

const Page = async () => {
  const notion = new Client({ auth: process.env.NOTION_API_KEY });
  const databaseId = process.env.NOTION_DATABASE_ID;

  const queryOptions = {
    database_id: databaseId,
    sorts: [
      {
        property: 'Name',
        direction: 'descending',
      },
    ],
  };

  //If in production, filter to only published posts
  // queryOptions.filter = {
  //   property: 'Published',
  //   checkbox: {
  //     equals: true,
  //   },
  // };

  const posts = await notion.databases.query(queryOptions);

  console.log('posts', posts['results'][0]);
  // const n2m = new NotionToMarkdown({ notionClient: notion });
  // let mdString = [];
  // let blogsWithMeta = [];
  // await Promise.all(
  //   posts.results.map(async (post) => {
  //     const mdblocks = await n2m.pageToMarkdown(post.id);
  //     const metadata = {
  //       title: post?.properties?.Name?.title?.[0]?.plain_text,
  //       createdAt: post?.properties?.Created?.date?.start,
  //       published: post?.properties?.Featured?.checkbox,
  //       cover: post.cover?.file?.url,
  //       description: post?.properties?.Description?.rich_text?.[0]?.plain_text,
  //       mdString: n2m.toMarkdownString(mdblocks),
  //     };
  //
  //     blogsWithMeta.push(metadata);
  //   })
  // );
  // console.log('blogsWithMeta', blogsWithMeta[blogsWithMeta.length - 1]);
  // console.log('mdstring', mdString);
  //
  // const manual =
  //   "# From Meltdown to Cool Down: Beating the Heat with Pic2Quote\\n' +\n" +
  //   "### Ever felt the sting of a blazing summer sun, only to have your faithful air conditioner wave a white flag? \\n' +\n" +
  //   "![air conditioning sign on door](https://images.unsplash.com/photo-1545280405-f06710f1779d?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb)\\n' +\n" +
  //   "# **Beating the Broken AC Drama**\\n' +\n" +
  //   'If your response is a sweaty nod, you\'re not alone. \\n" +\n' +
  //   "Many of us have faced this sticky situation, trapped in an oven-like home, dreading the eye-watering cost of new HVAC systems.\\n' +\n" +
  //   "## **Broken AC vs. Soaring Heat**\\n' +\n" +
  //   "Caught between a sweltering heatwave and a faulty air conditioner? \\n' +\n" +
  //   "That's not an inconvenience, it's a survival test! \\n\" +\n" +
  //   'Imagine a scorching summer day, your AC decides to play hooky, and you\'re left pondering if melting is an option.\\n" +\n' +
  //   'I\'ve been there, and trust me, having a skilled technician on speed dial is a game-changer. \\n" +\n' +
  //   "### Next to knowing, is knowing who knows!\\n' +\n" +
  //   "and that is our specialty. We have two options for our customers who need professional help. First option is we can recommend local professionals for the job. Once they have quoted the job we will aide you with selecting the best quotation. \\n' +\n" +
  //   "Alternatively, we can just offer our review of your selected contractors. We have no affiliation with any companies. We aim to always be a neutral third party who is most interested in helping you with your goals. \\n' +\n" +
  //   "![Calculator rising prices bitcoin](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/ba2f14e1-eba4-4c71-b347-3eab7c704b6b/close-up-calculator-global-economy-money.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20230812%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20230812T074937Z&X-Amz-Expires=3600&X-Amz-Signature=e295897bbd1c6d5502e6185bc2024c867bf4e168c45d286b368e9c7eb9115db8&X-Amz-SignedHeaders=host&x-id=GetObject)\\n' +\n" +
  //   "## **The Pricey Chill: Unraveling the HVAC Price Tag**\\n' +\n" +
  //   "When your AC breaks, the price of a new HVAC system can make your sweat glands work overtime. Feels like purchasing a beachfront property, right? \\n' +\n" +
  //   'Yet, that\'s where our HVAC heroes come in, helping you to personally diagnose the issues, potentially carrying out repairs yourself. This would no doubt be rescuing both your day and your wallet.\\n" +\n' +
  //   'The cost of a new HVAC system can indeed spark anxiety, especially during the heat\'s peak when you need your AC the most. \\n" +\n' +
  //   'However, it\'s crucial to remember that an ounce of prevention is worth a pound of cure. \\n" +\n' +
  //   "That's why a trusted professional is your ace. They're your guide through these sticky decisions, ensuring your AC is up and running without you having to sell your soul. \\n\" +\n" +
  //   "So, before you auction off your prized possessions for a new HVAC system, remember, there are alternative solutions ready to help you retain your cool.\\n' +\n" +
  //   "## **Your AI-Powered Home Improvement Ally**\\n' +\n" +
  //   "Pic2Quote's unique AI chatbot, [LEO](/d5965b4b48dc40a1b5a6dc0541be6c05), turns your smartphone into a home maintenance toolbox. It's like having a seasoned HVAC technician right at your fingertips.\\n\" +\n" +
  //   'Here\'s how it works: snap a picture of your faulty AC, answer a few quick questions, and voila! \\n" +\n' +
  //   'LEO steps in, analyzing the issue, suggesting solutions, and even providing cost comparisons. It\'s like having a home improvement maestro, ready to conduct a symphony of fixes for your home. \\n" +\n' +
  //   "Better yet, if you need a professional's touch, LEO can help you generate a local job posting, connecting you with the best local contractors, and ensuring that you're never left in the heat.\\n\" +\n" +
  //   "## **Navigating HVAC with Pic2Quote: Beating the Heatwave Blues**\\n' +\n" +
  //   'So you see, we\'ve all been there - that moment of panic when the AC quits in the peak of summer. \\n" +\n' +
  //   "But with P2Q, you'll never have to fret about a broken air conditioner again. Offering a comprehensive platform that connects you with local, certified HVAC professionals, we're committed to helping you beat the heat.\\n\" +\n" +
  //   'In addition, Pic2Quote provides a wealth of resources to assist you with all your Home Renovation needs, from insightful blogs and articles on air conditioner maintenance and troubleshooting, to tips on how to select the best HVAC system for your home. By ensuring you\'re well-informed, we empower you to make the best decisions for your home.\\n" +\n' +
  //   "# **Time to Turn the Tables on the Heat**\\n' +\n" +
  //   "[Pic2Quote.com meet LEO ](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/81e4bc99-6412-46fa-aa57-f456fe618b2e/Purple_and_Blue_Futuristic_Neon_Technology_Facebook_Basic_Frame_Feed_Video_Ad_%281%29.mp4?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20230812%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20230812T074937Z&X-Amz-Expires=3600&X-Amz-Signature=c181e2208258b343b5f1c7f9bf345e4b0858557b7ef61754a0568579b67e76f5&X-Amz-SignedHeaders=host&x-id=GetObject)\\n' +\n" +
  //   'Isn\'t it time you stopped fretting over broken air conditioners and outrageous HVAC prices? With Our Technologies, you have the power to stay cool, comfortable, and in control, no matter what the thermometer says. \\n" +\n' +
  //   'Don\'t let a faulty AC ruin your summer. \\n" +\n' +
  //   "Visit [our website](http://pic2quote.com/) today and discover how we're helping homeowners navigate the highs and lows of home maintenance. Because when it comes to keeping your cool, we're in your corner.\\n\" +\n";
  // return <div></div>;
  return (
    <div>
      <div className="flex flex-col gap-2 text-center my-4">
        <h3 className="text-3xl md:text-5xl lg:text-7xl font-semibold md:font-bold">
          HomeHelpers's Blogs
        </h3>
        <span className="font-normal text-base md:text-2xl my-3 md:my-5">
          Last updated: Feb 4th, 2023
        </span>
      </div>
      <div className="flex gap-6 justify-center flex-wrap my-16 mx-4">
        {blogsWithMeta.map((blog) => (
          <div className="bg-white border-[#777] border-2 w-400 h-566 rounded-3xl max-w-sm">
            <Image src={blog.cover} publicId={blog.cover} />
            <img src={blog.cover} alt="" className="rounded-t-3xl" />
            <div className="text-left font-medium py-6 px-7 grid gap-2">
              <span className="text-gray-700">6 MIN READ</span>
              <p className="md:text-[16px] lg:text-[22px] font-semibold md:font-bold">
                {blog.title}
              </p>
              <p className="text-sm md:text-[18px] py-2 max-w-[320px] font-normal">
                {blog.description}
              </p>
              <div className="ml-auto py-0.5">
                <HiOutlineArrowRight className="text-[#777]" size={20} />
              </div>
            </div>
          </div>
        ))}
      </div>
      {/*{mdString.map((md) => (*/}
      {/*  <ReactMarkdown>{md.parent}</ReactMarkdown>*/}
      {/*))}*/}
      {/*<ReactMarkdown>{manual}</ReactMarkdown>*/}
    </div>
  );
  // return (
  //   <div>
  //     <div className="flex flex-col gap-2 text-center my-4">
  //       <h3 className="text-3xl md:text-5xl lg:text-7xl font-semibold md:font-bold">
  //         HomeHelpers's Blogs
  //       </h3>
  //       <span className="font-normal text-base md:text-2xl my-3 md:my-5">
  //         Last updated: Feb 4th, 2023
  //       </span>
  //     </div>
  //     <div className="flex gap-6 justify-center flex-wrap my-16 mx-4">
  //       <div className="bg-white border-[#777] border-2 w-400 h-566 rounded-3xl max-w-sm">
  //         <ReactMarkdown>{responseData.markdown}</ReactMarkdown>
  //         <img
  //           src="../assets/carp.jpg"
  //           alt="carpenter doing his work"
  //           className="rounded-t-3xl"
  //         />
  //         {/* text */}
  //         <div className="text-left font-medium py-6 px-7 grid gap-2">
  //           <span className="text-gray-700">6 MIN READ</span>
  //           <p className="md:text-[16px] lg:text-[22px] font-semibold md:font-bold">
  //             Intercom is Taking a Huge Bite Out of Your Budget? Check 5 Best
  //             Intercom Alternatives
  //           </p>
  //           <p className="text-sm md:text-[18px] py-2 max-w-[320px] font-normal">
  //             We've taken affordable Intercom alternatives to the 14-days test.
  //             Check out which 5 tools are the best.
  //           </p>
  //           <div className="ml-auto py-0.5">
  //             <HiOutlineArrowRight className="text-[#777]" size={20} />
  //           </div>
  //         </div>
  //       </div>
  //
  //       <div className="bg-white border-[#777] border-2 w-400 h-566 rounded-3xl max-w-sm">
  //         <img
  //           src="../assets/carp.jpg"
  //           alt="carpenter doing his work"
  //           className="rounded-t-3xl"
  //         />
  //         {/* text */}
  //         <div className="text-left font-medium py-6 px-7 grid gap-2">
  //           <span className="text-gray-700">6 MIN READ</span>
  //           <p className="md:text-[16px] lg:text-[22px] font-semibold md:font-bold">
  //             Intercom is Taking a Huge Bite Out of Your Budget? Check 5 Best
  //             Intercom Alternatives
  //           </p>
  //           <p className="text-sm md:text-[18px] py-2 max-w-[320px] font-normal">
  //             We've taken affordable Intercom alternatives to the 14-days test.
  //             Check out which 5 tools are the best.
  //           </p>
  //           <div className="ml-auto py-0.5">
  //             <HiOutlineArrowRight className="text-[#777]" size={20} />
  //           </div>
  //         </div>
  //       </div>
  //
  //       <div className="bg-white border-[#777] border-2 w-400 h-566 rounded-3xl max-w-sm">
  //         <img
  //           src="../assets/carp.jpg"
  //           alt="carpenter doing his work"
  //           className="rounded-t-3xl"
  //         />
  //         {/* text */}
  //         <div className="text-left font-medium py-6 px-7 grid gap-2">
  //           <span className="text-gray-700">6 MIN READ</span>
  //           <p className="md:text-[16px] lg:text-[22px] font-semibold md:font-bold">
  //             Intercom is Taking a Huge Bite Out of Your Budget? Check 5 Best
  //             Intercom Alternatives
  //           </p>
  //           <p className="text-sm md:text-[18px] py-2 max-w-[320px] font-normal">
  //             We've taken affordable Intercom alternatives to the 14-days test.
  //             Check out which 5 tools are the best.
  //           </p>
  //           <div className="ml-auto py-0.5">
  //             <HiOutlineArrowRight className="text-[#777]" size={20} />
  //           </div>
  //         </div>
  //       </div>
  //
  //       <div className="bg-white border-[#777] border-2 w-400 h-566 rounded-3xl max-w-sm">
  //         <img
  //           src="../assets/carp.jpg"
  //           alt="carpenter doing his work"
  //           className="rounded-t-3xl"
  //         />
  //         {/* text */}
  //         <div className="text-left font-medium py-6 px-7 grid gap-2">
  //           <span className="text-gray-700">6 MIN READ</span>
  //           <p className="md:text-[16px] lg:text-[22px] font-semibold md:font-bold">
  //             Intercom is Taking a Huge Bite Out of Your Budget? Check 5 Best
  //             Intercom Alternatives
  //           </p>
  //           <p className="text-sm md:text-[18px] py-2 max-w-[320px] font-normal">
  //             We've taken affordable Intercom alternatives to the 14-days test.
  //             Check out which 5 tools are the best.
  //           </p>
  //           <div className="ml-auto py-0.5">
  //             <HiOutlineArrowRight className="text-[#777]" size={20} />
  //           </div>
  //         </div>
  //       </div>
  //
  //       <div className="bg-white border-[#777] border-2 w-400 h-566 rounded-3xl max-w-sm">
  //         <img
  //           src="../assets/carp.jpg"
  //           alt="carpenter doing his work"
  //           className="rounded-t-3xl"
  //         />
  //         {/* text */}
  //         <div className="text-left font-medium py-6 px-7 grid gap-2">
  //           <span className="text-gray-700">6 MIN READ</span>
  //           <p className="md:text-[16px] lg:text-[22px] font-semibold md:font-bold">
  //             Intercom is Taking a Huge Bite Out of Your Budget? Check 5 Best
  //             Intercom Alternatives
  //           </p>
  //           <p className="text-sm md:text-[18px] py-2 max-w-[320px] font-normal">
  //             We've taken affordable Intercom alternatives to the 14-days test.
  //             Check out which 5 tools are the best.
  //           </p>
  //           <div className="ml-auto py-0.5">
  //             <HiOutlineArrowRight className="text-[#777]" size={20} />
  //           </div>
  //         </div>
  //       </div>
  //
  //       <div className="bg-white border-[#777] border-2 w-400 h-566 rounded-3xl max-w-sm">
  //         <img
  //           src="../assets/carp.jpg"
  //           alt="carpenter doing his work"
  //           className="rounded-t-3xl"
  //         />
  //         {/* text */}
  //         <div className="text-left font-medium py-6 px-7 grid gap-2">
  //           <span className="text-gray-700">6 MIN READ</span>
  //           <p className="md:text-[16px] lg:text-[22px] font-semibold md:font-bold">
  //             Intercom is Taking a Huge Bite Out of Your Budget? Check 5 Best
  //             Intercom Alternatives
  //           </p>
  //           <p className="text-sm md:text-[18px] py-2 max-w-[320px] font-normal">
  //             We've taken affordable Intercom alternatives to the 14-days test.
  //             Check out which 5 tools are the best.
  //           </p>
  //           <div className="ml-auto py-0.5">
  //             <HiOutlineArrowRight className="text-[#777]" size={20} />
  //           </div>
  //         </div>
  //       </div>
  //     </div>
  //   </div>
  // );
};

export default Page;
