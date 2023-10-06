import React from "react"

const Timeline = () => {
  const experiences = {
    first: {
      duration: "January 2023 - April 2023",
      title: "Digital Payment System",
      work: "With a team, we work on a project for our thesis that attempts to create a payment system for the school using various technologies, such as VueJs, NestJs, Docker, PostgreSQL, Postman, etc. The objective of the project is to create a real-time payment system for the school that can be used online or through a kiosk device that we also created for within the school.",
    },
    second: {
      duration: "June 2022 - August 2022",
      title: "On-the-Job Training",
      work: "Working with two senior developers, I went through mini-tasks they gave me, such as reducing a complex code block to a brief one, and other front-end development-related work. Throughout the course of the job, I also get more knowledge about git version control. I also got a taste of what back-end development is all about and came across PHP, but I didn't stick around in that assignment for very long because of the intricate code used by the company. On the other hand, I now understand what developers do within a corporation, including but not limited to the necessary daily standup meetings.",
    },
    third: {
      duration: "August 2021 - October 2021",
      title: "Videographer & Video Editor",
      work: "During this time, I had firsthand experience working in a collaborative office setting on a team. Even though it has little to do with coding, I think it gave me insight into a company-related environment. It also in some way strengthened my perspective on creativity, which is important in front-end programming because it takes both to make stunning and user-friendly web content.",
    },
    fourth: {
      duration: "May 2021 - June 2021",
      title: "Basic Retail Inventory System",
      work: "Working on a retail inventory system for a store was assigned as a pair task. We use Visual Basic for coding using SQL and C#. The project’s objective is to teach us students how to build an inventory system for a specific store with CRUD functionality.",
    },
  }

  return (
    <section className="flexCenter flex-col mb-60 lg:mb-80">
      <ion-icon name="git-merge" size="large"></ion-icon>
      <h2 className="font-secondaryFont font-bold md:text-base lg:text-lg">
        Timeline
      </h2>

      {Object.keys(experiences).map((key, index) => (
        <div className="px-7 md:px-28 my-4">
          <div className="flex flex-col md:flex-row">
            <h4
              className="tl__duration text-xs font-bold opacity-40 flex pr-4"
              key={index}
            >
              {experiences[key].duration}
            </h4>
            <div className="md:w-6/12">
              <h3 className="font-bold text-sm lg:text-lg" key={index}>
                {experiences[key].title}
              </h3>
              <p className="text-sm lg:text-base lg:w-7/12" key={index}>
                {experiences[key].work}
              </p>
            </div>
          </div>
        </div>
      ))}
    </section>
  )
}

export default Timeline
