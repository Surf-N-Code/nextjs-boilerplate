import React from 'react';
import Expandible from './Expandible';
import LeoCta from '@/components/LeoCta';

const Faq = () => {
  return (
    <div className="w-full px-6 md:px-12 mb-[3rem] bg-white" id="faq">
      <div className="flex items-center pb-[3rem]">
        <p className="hidden md:block py-1 px-4 text-4xl font-medium">
          Frequently Asked Questions
        </p>
        <p className="md:hidden py-1 text-xm md:text-4xl font-medium self-start">
          FAQs
        </p>
        <div className="flex-grow h-0.5 rounded-sm bg-[#2d634e] mx-3 ml-8"></div>
      </div>

      <div className="flex flex-wrap lg:w-3/4 mx-auto">
        <div className="w-full lg:w-1/2 px-2 -mb-3">
          <Expandible title="What are the different ways I can use HomeHelper for my home improvement projects?">
            HomeHelper (HHAI) is a versatile platform with multiple features.
            Our website is a comprehensive knowledge base for home improvement
            information, constantly expanding and updating. The Home Journal, a
            tool developed by users and our AI, LEO, allows you to track and
            manage your home in innovative ways. LEO, the AI assistant, is the
            cohesive element that ties all these features together. To learn
            more about these features and other topics, click on LEO at the
            bottom right corner of your browser.
          </Expandible>
        </div>

        <div className="w-full lg:w-1/2 px-2 -mb-3">
          <Expandible title="What kind of problems can HomeHelper help me solve?">
            HomeHelper is designed to revolutionize how you manage and improve
            your home. Our AI-powered platform offers endless inspiration,
            guidance, and solutions. While LEO is primarily designed to assist
            with home projects, it can also engage in conversations on a wide
            range of topics. You can access all these features from the comfort
            of your home. In fact; It may be easier to tell you what problems
            that this platform can NOT help you solve. If you would like to see
            a list of things LEO can not help with, then visit LEO in the bottom
            right of your browser and ask for "LEOs Limitations"
          </Expandible>
        </div>

        <div className="w-full lg:w-1/2 px-2 -mb-3">
          <Expandible title="Can I get a quote for a project from a picture?">
            While HomeHelper doesn't directly provide quotes, our AI assistant,
            LEO, can guide you in handing off your project to a local
            professional. We are not a quote-providing company; instead, our aim
            is to help you transition from a single picture to making an
            informed decision about your project. We leverage Artificial
            Intelligence to understand your needs and provide expert advice.
          </Expandible>
        </div>

        <div className="w-full lg:w-1/2 px-2 -mb-3">
          <Expandible title="How can I create a job listing for a contractor?">
            To post jobs on our marketplace, you need a paid account. Once
            you've logged into your dashboard, you can ask LEO how to "create a
            job post".
          </Expandible>
        </div>

        <div className="w-full lg:w-1/2 px-2 -mb-3">
          <Expandible title="Is my data secure with HomeHelper?">
            Absolutely! At HomeHelper, we prioritize your privacy. Our systems
            employ advanced encryption protocols to ensure the security of our
            clients' data.
          </Expandible>
        </div>

        <div className="w-full lg:w-1/2 px-2 -mb-3">
          <Expandible title="Do you want to see more FAQs?">
            Then talk with LEO in the bottom right of your screen. Type "Show me
            FAQs" into the chat box be taken to a full list of our most FAQs
          </Expandible>
        </div>
      </div>
      <div className="flex justify-center">
        <LeoCta className="mt-4" text="You have more questions? Talk to Leo!" />
      </div>
    </div>
  );
};

export default Faq;
