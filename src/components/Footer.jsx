import React from "react"

const Footer = () => {
  return (
    //
    <section className="pb-52 px-8 md:px-20" id="contact">
      <div className="flex flex-col gap-10 md:flex-row">
        <h6 className="text-xl font-bold md:w-6/12 lg:pl-96 lg:text-3xl">
          "Want to get in touch? Whether for work or just chatting, don't
          hesitate to contact me through the links on the side. I'll try my best
          to get back to you!"
        </h6>

        <div className="flex flex-col mt-3 md:w-6/12 lg:w-1/5">
          <p className="text-sm">You may also email me here:</p>
          <div className="flex items-center gap-1 md:pl-3 mb-5">
            <ion-icon name="mail"></ion-icon>
            <a
              href="mailto:krbycnts@gmail.com"
              className="font-bold hover:underline md:text-sm lg:text-base"
            >
              krby.cnts@gmail.com
            </a>
          </div>
          <p className="text-xs text-dimBlack pFooter pr-4 lg:text-sm">
            Designed in <a href="https://www.figma.com/">Figma</a>, coded in{" "}
            <a href="https://code.visualstudio.com/">Visual Studio Code</a>,
            built with <a href="https://www.gatsbyjs.com/">Gatsby</a>, styled
            using <a href="https://tailwindcss.com/">Tailwind CSS</a>, and
            deployed in <a href="https://www.netlify.com/">Netlify</a> by me, of
            course. ^^
          </p>
        </div>
      </div>
    </section>
  )
}

export default Footer
