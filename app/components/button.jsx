"use client"
import { useRef, useEffect } from 'react';
import gsap from 'gsap';

export default function Button() {
  const buttonRef = useRef();
  const circleRef = useRef();
  const tl = useRef();

  useEffect(() => {
    tl.current = gsap.timeline({ paused: true })
      .to(circleRef.current, {
        scale: 80, 
        duration: 0.9,
        ease: "power2.inOut"
      })
      
      .to(".title p", {
        color: "#fff",
        duration: 0.3
      }, 0)
      .to(".button svg", {

        color:"#fff",
        x: 5,
        duration: 0.4,
        ease: "power2.out"
      }, 0.2);

    return () => tl.current.kill(); 
  }, []);

  return (
    <div 
      ref={buttonRef}
      className="button"
      onMouseEnter={() => tl.current.play()}
      onMouseLeave={() => tl.current.reverse()}
    >
      <div ref={circleRef} className="circle"></div>
      <div className="title">
        <p>DROP A MESSAGE</p>
      </div>
      <svg 
        width="24" 
        height="24" 
        className="sizze"
        xmlns="http://www.w3.org/2000/svg" 
        fill="none" 
        viewBox="0 0 24 24" 
        strokeWidth={1.5} 
        stroke="currentColor"
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
      </svg>
    </div>
  );
}