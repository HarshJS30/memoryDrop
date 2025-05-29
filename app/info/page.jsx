"use client"

import ReactLenis from "@studio-freight/react-lenis"
import Copy from "../components/copy"

export default function Info() {
    return (
        <ReactLenis>
            <div className="info">
                <Copy>
                    <h1>okay bro</h1>
                </Copy>
                <Copy delay={0.4}>
                    <h2>heyyy</h2>
                </Copy>
            </div>
        </ReactLenis>
    )
}
