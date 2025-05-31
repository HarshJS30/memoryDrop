"use client"
import { useTransitionRouter } from "next-view-transitions"
import { useEffect, useState } from "react"
import Copy from "./copy"

export function Navbar() {
  const router = useTransitionRouter()
  const [isReady, setIsReady] = useState(false)

  useEffect(() => {
    setIsReady(true)

    const elements = document.querySelectorAll(".text")

    elements.forEach((element) => {
      const textContent = element.textContent
      element.innerHTML = ''

      // Split into words while preserving spaces
      const wordsAndSpaces = textContent.split(/( )/).filter(item => item.length > 0)

      wordsAndSpaces.forEach(item => {
        if (item === ' ') {
          // Add space directly
          element.appendChild(document.createTextNode(' '))
        } else {
          const wordContainer = document.createElement('span')
          wordContainer.classList.add('word')

          const textContainer = document.createElement("span")
          textContainer.classList.add("block")

          for (let letter of item) {
            const span = document.createElement("span")
            span.innerText = letter
            span.classList.add("letter")
            textContainer.appendChild(span)
          }

          wordContainer.appendChild(textContainer)
          wordContainer.appendChild(textContainer.cloneNode(true))
          element.appendChild(wordContainer)
        }
      })

      element.addEventListener("mouseenter", () => {
        element.classList.add("play")
      })

      element.addEventListener("mouseleave", () => {
        element.classList.remove("play")
      })
    })
  }, [])

  function curtainReveal() {
    document.documentElement.animate(
      [
        { transform: "translateY(0)", opacity: 1 },
        { transform: "translateY(-100%)", opacity: 0.9 }
      ],
      {
        duration: 400,
        easing: "cubic-bezier(0.42, 0, 1, 1)",
        fill: "forwards",
        pseudoElement: "::view-transition-old(root)"
      }
    )

    document.documentElement.animate(
      [{ transform: "translateY(0)" }],
      {
        duration: 1,
        fill: "forwards",
        pseudoElement: "::view-transition-new(root)"
      }
    )
  }

  const handleNavigation = (e, path) => {
    e.preventDefault()
    if (!isReady) return
    router.push(path, {
      onTransitionReady: curtainReveal
    })
  }

  return (
    <nav className="nav">
      <div className="logo">
        <div className="link">
          <Copy>
            <a onClick={(e) => handleNavigation(e, "/")} href="/" className="text">
              M-D
            </a>
          </Copy>
        </div>
      </div>
      <div className="links">
        <Copy>
          <a onClick={(e) => handleNavigation(e, "/projects")} href="/projects" className="text">
            Blogs
          </a>
        </Copy>
        <br />
        <Copy>
          <a onClick={(e) => handleNavigation(e, "/info")} href="/info" className="text">
            Contact
          </a>
        </Copy>
      </div>
    </nav>
  )
}