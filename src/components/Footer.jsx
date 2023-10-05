import React from "react"

const Footer = () => {
  return (
    <section className="flexCenter flex-col mt-72" id="contact">
      <div className="mb-52 w-[900px] pl-12 flex black">
        <h6 className="text-3xl font-bold w-3/6">
          "Want to get in touch? Whether for work or just chatting, don't
          hesitate to contact me through the links on the side. I'll try my best
          to get back to you!"
        </h6>
        <div className="w-3/6 flex flex-col gap-5 mt-3 pl-5">
          <div>
            <p className="text-sm">You may also email me here:</p>
            <div className="flex items-center gap-1 pl-3">
              <ion-icon name="mail"></ion-icon>
              <a
                href="mailto:krbycnts@gmail.com"
                className="font-bold hover:underline"
              >
                krby.cnts@gmail.com
              </a>
            </div>
          </div>
          <p className="text-sm text-dimBlack w-96 pFooter">
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
