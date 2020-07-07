import React from "react"

const MethodSectionSteps = ({ title, method, children }) => {
  return (
    <>
      <section className="method__steps">
        <div className="wrapper wrapper--narrow">
          <h2 className="method__title">{title}</h2>
          <img src={method.images.steps.src} alt={method.images.steps.alt} />
          {children}
        </div>
      </section>
    </>
  )
}

export default MethodSectionSteps
