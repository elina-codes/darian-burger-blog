import React from "react"

const MethodSectionTips = ({ title, method, children }) => {
  return (
    <>
      <section className="method__tips">
        <div className="grid wrapper">
          <div className="grid__item grid__image">
            <h2 className="method__title">{title}</h2>
            {children}
          </div>
          <div className="grid__item work__text">
            <img src={method.images.tips.src} alt={method.images.tips.alt} />
          </div>
        </div>
      </section>
    </>
  )
}

export default MethodSectionTips
