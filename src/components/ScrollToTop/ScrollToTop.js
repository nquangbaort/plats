import React, { useEffect, useState } from "react"

import ArrowUp from "../../images/icon-arrow-up.svg"

import "./ScrollToTop.scss"

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false)

  // Top: 0 takes us all the way back to the top of the page
  // Behavior: smooth keeps it smooth!
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }

  useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible(true)
      if (window.pageYOffset > 1000) {
      } else {
        setIsVisible(false)
      }
    }

    window.addEventListener("scroll", toggleVisibility)

    return () => window.removeEventListener("scroll", toggleVisibility)
  }, [])

  return (
    <>
      <div className={`scroll-to-top ${isVisible && "visible"}`} onClick={scrollToTop}>
        <ArrowUp />
      </div>
    </>
  )
}
