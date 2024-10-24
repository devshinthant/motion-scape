"use client"

import { useEffect } from "react"
import Cover from "@/app/assets/bg-2-hd.png"
import Star from "@/app/assets/star.svg"
import { cn } from "@/lib/utils"
import gsap from "gsap"
import ScrollTrigger from "gsap/dist/ScrollTrigger"
import Image from "next/image"
import { SyneFont } from "../fonts"

export default function HeroSection() {
  /* Mouse Hover */
  useEffect(() => {
    function parallax(e: MouseEvent) {
      const object = document.querySelector(".hero-image")
      const loader = document.querySelector(".loader-screen") as HTMLElement

      if (!object || (loader && loader.style.display !== "none")) return

      const moving_value: number =
        Number(object.getAttribute("data-value")) || 0
      const x = (e.clientX * moving_value) / 200

      const y = (e.clientY * moving_value) / 200

      gsap.set(object, {
        x,
        y,
      })
    }

    document.addEventListener("mousemove", parallax)

    return () => {
      document.removeEventListener("mousemove", parallax)
    }
  }, [])

  /* Hero Transition */
  useEffect(() => {
    const heroTimeline = gsap.timeline({
      defaults: {
        stagger: 0.15,
        delay: 2,
      },
    })

    heroTimeline.fromTo(
      ".hero-title",
      {
        scale: 0,
      },
      {
        scale: 1,
      }
    )

    heroTimeline.fromTo(
      ".awward-name",
      {
        x: 100,
      },
      {
        x: 0,
      },
      "-=2.5"
    )

    heroTimeline.fromTo(
      ".bar",
      {
        y: 100,
      },
      {
        y: 0,
      },
      "-=2.2"
    )
  }, [])

  /* Scroll Trigger */
  useEffect(() => {
    gsap.to("#hero-section", {
      scrollTrigger: {
        trigger: "#hero-section",
        start: "top top",
        end: "bottom top",
        scrub: true,
      },
      yPercent: 100,
      ease: "none",
    })

    gsap.to(".hero-image", {
      scrollTrigger: {
        trigger: "#hero-section",
        start: "30% top",
        end: "bottom top",
        scrub: true,
      },
      ease: "none",
      xPercent: -14,
    })

    gsap.to(".hero-title", {
      scrollTrigger: {
        trigger: "#hero-section",
        start: "30% bottom",
        end: "bottom top",
        scrub: true,
      },
      ease: "none",
      yPercent: -200,
    })

    gsap.to(".bar-section", {
      scrollTrigger: {
        trigger: "#hero-section",
        start: "20% top",
        end: "bottom top",
        scrub: true,
      },
      ease: "power1.inOut",
      xPercent: -100,
    })

    ScrollTrigger.create({
      trigger: "#hero-section",
      start: "60% center",
      end: () => "+=100",
      scrub: true,
      onEnter: () => {
        gsap.to(".header-icon", {
          scale: 0.3,
          rotate: 0,
          ease: "none",
          duration: 0.25,
        })
      },
      onLeave: () => {
        gsap.to(".header-icon", {
          scale: 0.3,
          rotate: 180,
          ease: "none",
          duration: 0.25,
        })
      },
      onEnterBack: () => {
        gsap.to(".header-icon", {
          scale: 0.5,
          rotate: 0,
          ease: "none",
          duration: 0.25,
        })
      },
    })
  }, [])

  return (
    <section id="hero-section" className="relative h-screen w-screen">
      <Image
        alt="cover-image"
        src={Cover}
        priority
        data-value={-4}
        className="hero-image absolute bottom-0 left-0 h-[600px] w-[500px] object-cover lg:-left-[30%] lg:h-full lg:w-full lg:object-contain"
      />

      <div className="absolute left-1/2 top-[48%] w-fit max-w-3xl -translate-x-1/2 -translate-y-1/2 px-10 mix-blend-difference md:top-[50%] lg:left-[30%] lg:top-[36%] lg:translate-x-0 lg:translate-y-0">
        <div className="hero-title text-[4.5rem] font-extrabold leading-[1] tracking-tighter text-white md:text-[5rem] lg:text-[7.2rem]">
          MOTION
        </div>
        <div className="hero-title ml-[25%] text-[4.5rem] font-extrabold leading-[1] tracking-tighter text-white md:ml-[35%] md:text-[5rem] lg:text-[7.2rem]">
          SC
          <span className="title-stroke">AP</span>E
        </div>
        <div className="hero-title ml-[10%] text-[4.5rem] font-extrabold leading-[1] tracking-tighter text-white md:ml-[20%] md:text-[5rem] lg:text-[7.2rem]">
          G<span className="title-stroke">SA</span>P
        </div>
      </div>

      <div className="bar absolute bottom-0 inline-flex h-auto w-full items-center overflow-hidden bg-gray-900 px-20 py-1">
        <div className="bar-section flex w-full shrink-0 items-center gap-14">
          <div
            className={cn(
              SyneFont.className,
              "flex-none text-[20px] font-extrabold text-white"
            )}
          >
            DISCUSS YOUR IDEA
          </div>

          <Image
            src={Star}
            className="h-7 w-7 object-contain"
            alt="star-icon"
          />

          <div
            className={cn(
              SyneFont.className,
              "flex-none text-[20px] font-extrabold text-white"
            )}
          >
            EXPEND VISION
          </div>

          <Image
            src={Star}
            className="h-7 w-7 object-contain"
            alt="star-icon"
          />

          <div
            className={cn(
              SyneFont.className,
              "flex-none text-[20px] font-extrabold text-white"
            )}
          >
            BE MOTIVATED
          </div>

          <Image
            src={Star}
            className="h-7 w-7 object-contain"
            alt="star-icon"
          />

          <div
            className={cn(
              SyneFont.className,
              "flex-none text-[20px] font-extrabold text-white"
            )}
          >
            ALIGN WITH PASSION
          </div>
        </div>
        <div className="bar-section flex w-full shrink-0 items-center gap-14">
          <div
            className={cn(
              SyneFont.className,
              "flex-none text-[20px] font-extrabold text-white"
            )}
          >
            DISCUSS YOUR IDEA
          </div>

          <Image
            src={Star}
            className="h-7 w-7 object-contain"
            alt="star-icon"
          />

          <div
            className={cn(
              SyneFont.className,
              "flex-none text-[20px] font-extrabold text-white"
            )}
          >
            EXPEND VISION
          </div>

          <Image
            src={Star}
            className="h-7 w-7 object-contain"
            alt="star-icon"
          />

          <div
            className={cn(
              SyneFont.className,
              "flex-none text-[20px] font-extrabold text-white"
            )}
          >
            BE MOTIVATED
          </div>

          <Image
            src={Star}
            className="h-7 w-7 object-contain"
            alt="star-icon"
          />

          <div
            className={cn(
              SyneFont.className,
              "flex-none text-[20px] font-extrabold text-white"
            )}
          >
            ALIGN WITH PASSION
          </div>
        </div>
      </div>
    </section>
  )
}
