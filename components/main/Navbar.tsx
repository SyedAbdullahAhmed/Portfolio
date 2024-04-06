"use client"
import { Socials } from "@/constants";
import Image from "next/image";
import React from "react";

const Navbar = () => {
  return (
    <div className="w-full h-[65px] fixed top-0 shadow-lg shadow-[#2A0E61]/50 bg-[#03001417] backdrop-blur-md z-50 px-10">
      <div className="w-full h-full flex flex-row items-center justify-between m-auto px-[10px]">
        <a
          href="#about-me"
          className="h-auto w-auto flex flex-row items-center"
        >
          <Image
            src="/NavLogo.png"
            alt="logo"
            width={70}
            height={70}
            className="cursor-pointer hover:animate-slowspin"
          />

          <span className="font-bold ml-[10px] hidden md:block text-gray-300">
            ABDULLAH
          </span>
        </a>

        <div className="w-[500px] h-full flex flex-row items-center justify-between md:mr-20">
          <div className="flex items-center justify-between w-full h-auto border border-[#7042f861] bg-[#0300145e] mr-[15px] px-[20px] py-[10px] rounded-full text-gray-200">
            <a href="#about-me" className="cursor-pointer">
              About me
            </a>
            <a href="#skills" className="cursor-pointer">
              Skills
            </a>
            <a href="#projects" className="cursor-pointer">
              Projects
            </a>
            <a href="/resume/resume.pdf" className="cursor-pointer">
              Resume
            </a>
          </div>
        </div>

        <div className="flex flex-row gap-5 cursor-pointer">
          <Image className="h-10 w-10" src={Socials[0].src} alt={Socials[0].name} width={50} height={10} onClick={() => window.open("https://github.com/SyedAbdullahAhmed", '_blank')}/>
          <Image className="h-10 w-10" src={Socials[1].src} alt={Socials[1].name} width={50} height={30} onClick={() => window.open("https://www.linkedin.com/in/syed-abdullah-ahmed-baa155281/", '_blank')}/>
          <div>

          <Image className="h-8 w-12" src={Socials[2].src} alt={Socials[2].name} width={60} height={20} onClick={() => window.open("https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=abdullahahmedsyed65@gmail.com", '_blank')}/>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Navbar;
