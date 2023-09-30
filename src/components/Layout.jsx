import React from "react"

const Layout = ({ children }) => {
  return (
    <>
      <div className="square bg-secondaryBg sticky top-0" />
      <main>{children}</main>
    </>
  )
}

export default Layout
