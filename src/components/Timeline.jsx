import React, { useEffect } from 'react';

import { observeHiddenElements } from './intersectionObserver';

const Timeline = () => {
  useEffect(() => {
    const hiddenElements = document.querySelectorAll('.hiddenElem');
    observeHiddenElements(hiddenElements);
  });

  const experiences = {
    first: {
      duration: 'January 2023 - April 2023',
      title: 'DIGITAL PAYMENT SYSTEM',
      work: 'With a team, we work on a project for our thesis that attempts to create a payment system for the school using various technologies, such as VueJs, NestJs, Docker, PostgreSQL, Postman, etc. The objective of the project is to create a real-time payment system for the school that can be used online or through a kiosk device that we also created for within the school.',
    },
    second: {
      duration: 'June 2022 - August 2022',
      title: 'ON-THE-JOB TRAINING',
      work: "Working with two senior developers, I went through mini-tasks they gave me, such as reducing a complex code block to a brief one, and other front-end development-related work. Throughout the course of the job, I also get more knowledge about git version control. I also got a taste of what back-end development is all about and came across PHP, but I didn't stick around in that assignment for very long because of the intricate code used by the company. On the other hand, I now understand what developers do within a corporation, including but not limited to the necessary daily standup meetings.",
    },
    fourth: {
      duration: 'May 2021 - June 2021',
      title: 'BASIC RETAIL INVENTORY SYSTEM',
      work: 'Working on a retail inventory system for a store was assigned as a pair task. We use Visual Basic for coding using SQL and C#. The project’s objective is to teach us students how to build an inventory system for a specific store with CRUD functionality.',
    },
  };

  return (
    <section className="mb-60 flex flex-col lg:mb-96">
      <h2 className="hiddenElem mb-5 flex justify-center font-secondaryFont text-lg font-bold lg:w-8/12 lg:text-2xl">
        My Timeline
      </h2>

      {Object.keys(experiences).map((key, index) => (
        <div className="hiddenElem mb-10 flex w-11/12 flex-col px-5 lg:flex-row lg:px-0">
          <h4
            className="flex text-xs font-bold italic text-[#10100e57] lg:w-5/12 lg:justify-end lg:pr-9 lg:pt-4 lg:text-sm"
            key={index}
          >
            {experiences[key].duration}
          </h4>
          <div className="flex flex-col border-t border-t-black lg:w-8/12 lg:border-l lg:border-t-0 lg:border-l-black lg:py-3 lg:pl-9">
            <h3 className="font-bold lg:text-lg">{experiences[key].title}</h3>
            <p className="text-sm lg:w-8/12 lg:text-base">
              {experiences[key].work}
            </p>
          </div>
        </div>
      ))}
    </section>
  );
};

export default Timeline;
