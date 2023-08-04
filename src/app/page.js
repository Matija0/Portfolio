"use client";
import Link from "next/link";
import Image from "next/image";
import deved from "../../public/dev-ed-wave.png";
import design from "../../public/design.png";
import code from "../../public/code.png";
import consulting from "../../public/consulting.png";
import web1 from "../../public/web1.png";
import web2 from "../../public/web2.png";
import web3 from "../../public/web3.png";
import web4 from "../../public/web4.png";
import web5 from "../../public/web5.png";
import web6 from "../../public/web6.png";
import avatar from "../../public/animatedavatar.jpg";
import { useEffect, useState } from "react";

export default function Home() {
  const [darkMode, setDarkMode] = useState(false)
  const [showTopBtn, setShowTopBtn] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', () => {
        if (window.scrollY > 400) {
            setShowTopBtn(true);
        } else {
            setShowTopBtn(false);
        }
    });
}, []);

const goToTop = () => {
  window.scrollTo({
      top: 0,
      behavior: 'smooth',
  });
};

  return (
    <div className={darkMode? "dark" : ""}>
    <main className=" bg-gray-100 px-10 py-5 md:px-20 lg:px-40 dark:bg-gray-900">
      {showTopBtn && <div onClick={goToTop}  className=" fixed bottom-10 right-6 z-20 text-4xl w-fit h-fit mr-2 font-extrabold text-transparent cursor-pointer bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 md:text-6xl">
        <i class="bi bi-arrow-up-circle-fill"></i>
      </div>}
      <section className="  min-h-screen ">
        <nav className=" py-10 mb-12 flex justify-between items-center">
          <h1 className=" text-xl dark:text-gray-300">Matija0</h1>
          <ul className=" flex items-center">
            <li className=" cursor-pointer text-2xl" onClick={()=> setDarkMode(!darkMode)}> 
              { darkMode? (<i class="bi bi-brightness-high-fill"></i>) : (<i class="bi bi-moon-stars-fill"></i>)}
            </li>
            <li id="btn" className=" bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md ml-8 cursor-pointer">
              <Link
                href="/"
                
              >
                Resume
              </Link>
            </li>
          </ul>
        </nav>
        <div className=" text-center p-10">
          <h2 className=" text-5xl py-2 text-teal-600 font-medium md:text-6xl">Matija Bilić</h2>
          <h3 className=" text-2xl py-2 md:text-3xl dark:text-gray-300">Developer and designer</h3>
          <p className="text-md py-5 leading-8 text-gray-800 font-light md:text-xl max-w-xl mx-auto dark:text-gray-300">
            Hello I'm a developer and designer based in Croatia. I'm currently working on a few projects, including a new website for my company, a new app for my company, and a new app for my company. I'm also working on a few projects, including a new website for my company, a new app for my company, and a new app for my company.
            I work mainly with React, Next.js, and Tailwind CSS. I also have experience with Node.js, Express, and MongoDB. Join me and let's build something great together! 
          </p>
        </div>
        <div className=" text-5xl flex justify-center gap-16 py-3 text-gray-600">
          <Link id="btn" href={"/"}> <i class="bi bi-linkedin"></i></Link>
          <Link id="btn" href={"/"}> <i class="bi bi-facebook"></i></Link>
          <Link id="btn" href={"/"}><i class="bi bi-github"></i></Link>
        </div>
        <div className=" relative mx-auto bg-gradient-to-b from-teal-500 rounded-full w-96 h-96 mt-20 overflow-hidden md:h-96 md:w-96">
          <Image src={avatar} layout="fill" objectFit="cover"/>
        </div>
      </section>
      <section>
        <div>
          <h3 className=" text-3xl py-1 dark:text-gray-300">
            Services I offer
          </h3>
          <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-300">
              Since the beginning of my journey as a freelance designer and
              developer, I've done remote work for
              <span className="text-teal-500"> agencies </span>
              consulted for <span className="text-teal-500">startups </span>
              and collaborated with talanted people to create digital products
              for both business and consumer use.
            </p>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-300">
              I offer from a wide range of services, including brand design,
              programming and teaching.
            </p>
        </div>
        <div className=" lg:flex gap-10">
          <div className=" bg-white text-center flex flex-col items-center shadow-lg p-10 rounded-xl my-10 dark:bg-gray-200">
            <Image src={design} width={100} height={100}/>
            <h3 className=" text-lg font-medium pt-8 pb-2">Beautiful Designs</h3>
            <p className=" py-2">Creating elegant designs suited for your needs following core
                design theory. </p>
                <h4 className=" py-4 text-teal-600"> 
                  Design tools I use
                </h4>
                <p className=" text-gray-800 py-1">Photoshop</p>
                <p className=" text-gray-800 py-1">Illustrator</p>
                <p className=" text-gray-800 py-1">Figma</p>
          </div>
          <div className="bg-white text-center flex flex-col items-center shadow-lg p-10 rounded-xl my-10 dark:bg-gray-200">
            <Image src={consulting} width={100} height={100}/>
            <h3 className=" text-lg font-medium pt-8 pb-2">Beautiful Designs</h3>
            <p className=" py-2">Creating elegant designs suited for your needs following core
                design theory. </p>
                <h4 className=" py-4 text-teal-600"> 
                  Design tools I use
                </h4>
                <p className=" text-gray-800 py-1">Photoshop</p>
                <p className=" text-gray-800 py-1">Illustrator</p>
                <p className=" text-gray-800 py-1">Figma</p>
          </div>
          <div className="bg-white text-center flex flex-col items-center shadow-lg p-10 rounded-xl my-10 dark:bg-gray-200">
            <Image src={code} width={100} height={100}/>
            <h3 className=" text-lg font-medium pt-8 pb-2">Beautiful Designs</h3>
            <p className=" py-2">Creating elegant designs suited for your needs following core
                design theory. </p>
                <h4 className=" py-4 text-teal-600"> 
                  Design tools I use
                </h4>
                <p className=" text-gray-800 py-1">Photoshop</p>
                <p className=" text-gray-800 py-1">Illustrator</p>
                <p className=" text-gray-800 py-1">Figma</p>
          </div>
        </div>
      </section>
      <section>
        <div>
          <h3 className=" text-4xl mt-7 py-1 dark:text-gray-300 border-b border-blue-500">My Projects</h3>
          
        </div>
        <div className=" flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap">
          <h4 className=" text-xl my-4 dark:text-gray-300">Restaurant landing page</h4>
            <p className=" text-lg dark:text-gray-300">This is a simple but beatiful and responsive website built in Next js. It has navbar that becomes burger menu on mobile from where you can go intro different sections of the website. At the bottom there is a contact form which sends an email to owner with all the information that the client enters.</p>
          <div className=" basis-1/3 flex-1">
            <Image src={web1}  className=" rounded-lg object-cover" width={"100%"} height={"100%"} layout="responsive"/>
          </div>
          <div className=" basis-1/3 flex-1">
            <Image src={web2}  className=" rounded-lg object-cover" width={"100%"} height={"100%"} layout="responsive"/>
          </div>
          <div className=" basis-1/3 flex-1">
            <Image src={web3}  className=" rounded-lg object-cover" width={"100%"} height={"100%"} layout="responsive"/>
          </div>
          <div className=" basis-1/3 flex-1">
            <Image src={web4}  className=" rounded-lg object-cover" width={"100%"} height={"100%"} layout="responsive"/>
          </div>
          <div className=" basis-1/3 flex-1">
            <Image src={web5}  className=" rounded-lg object-cover" width={"100%"} height={"100%"} layout="responsive"/>
          </div>
          <div className=" basis-1/3 flex-1">
            <Image src={web6}  className=" rounded-lg object-cover" width={"100%"} height={"100%"} layout="responsive"/>
          </div>
        </div>
      </section>
    </main>
    </div>
  );
}
