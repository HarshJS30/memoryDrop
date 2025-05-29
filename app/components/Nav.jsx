"use client"
import { useTransitionRouter } from "next-view-transitions"
import { useEffect, useState } from "react"
import Copy from "./copy"

export function Navbar() {
    const router = useTransitionRouter()
    const [isReady, setIsReady] = useState(false)

    useEffect(() => {
        setIsReady(true) 
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
        if (!isReady) return // Don't animate if not hydrated yet
        
        router.push(path, {
            onTransitionReady: curtainReveal
        })
    }

    return(
        <nav className="nav">
            <div className="logo">
                <div className="link"> 
                    <Copy>
                        <a onClick={(e) => handleNavigation(e, "/")} href="/">
                            M-D
                        </a>
                    </Copy>
                </div>
            </div>
            <div className="links">
                <Copy>
                    <a onClick={(e) => handleNavigation(e, "/projects")} href="/projects">
                        Blogs
                    </a>
                </Copy>
                <br />
                <Copy>
                    <a onClick={(e) => handleNavigation(e, "/info")} href="/info">
                        Contact
                    </a>
                </Copy>
            </div>
        </nav>
    )
}