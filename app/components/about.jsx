"use client";
import Image from "next/image";
import Copy from "./copy";
import img1 from "../../public/images/img1.webp";
import img2 from "../../public/images/img2.jpeg";
import img3 from "../../public/images/img3.webp";
import img4 from "../../public/images/img4.webp";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function About() {
  const imageContainersRef = useRef([]);

  useEffect(() => {
    imageContainersRef.current.forEach((container) => {
      gsap.from(container, {
        scale: 1.05,
        opacity: 0,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: container,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      });
    });
  }, []);

  return (
    <div className="about">
      <Copy>
        <h1>How It Works?</h1>
      </Copy>
      <div className="images">
        {[img1, img2, img3, img4].map((image, index) => (
          <div 
            className="image" 
            key={index}
            ref={(el) => (imageContainersRef.current[index] = el)}
          >
            <Image
              src={image}
              alt={`img${index + 1}`}
              className="img"
            />
          </div>
        ))}
      </div>
    </div>
  );
}