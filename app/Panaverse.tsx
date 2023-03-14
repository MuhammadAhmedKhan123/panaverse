import React from 'react'
import Head from 'next/head'
function Panaverse() {
  return (
    <div className='relative    overflow-hidden md:overflow-visible w-60 md:w-full h-[7300px]   bg-slate-900'>

       <header className='  sticky   bg-slate-400  bottom-[575px] inset-0 bg-transparent  backdrop-blur-sm  z-20 w-60 md:w-full h-12 md:h-20 opacity-90'>
            <div className='mt-[-45px] w-24 md:w-52'>
            <img src='./pics/logo1.png' width={200}></img>
            </div>
            <nav className=' flex justify-end md:justify-center  '>
              <ul className=' mt-[-40px]  md:mt-[-80px] mr-[45px] bg-[0,#141e30, #243b55]'>
                <a href='#home' className=' invisible md:visible md:m-3  md:pt-2  md:pb-2   md:pr-3  md:pl-3  md:text-lg md:border-[2px] md:cursor-pointer md:rounded-full md:text-white  md:bg-gradient-to-tr  md:to-red-500 md:via-red-600 md:from-white  md:transition-all md:ease- in-out hover:md:bg-gradient-to-bl hover:md:to-gray-400 hover:md:via-red-600 hover:md:from-white   hover:md:text-xl  '>Home</a>
                <a href='#courses' className='invisible md:visible md:m-3  md:pt-2  md:pb-2   md:pr-3  md:pl-3   md:text-lg md:border-[2px] md:cursor-pointer md:rounded-full md:text-white  md:bg-gradient-to-tr  md:to-red-500 md:via-red-600 md:from-white  md:transition-all md:ease-in-out hover:md:bg-gradient-to-bl  hover:md:to-gray-400 hover:md:via-red-600 hover:md:from-white  hover:md:text-xl  '>Courses</a>
                <a href='https://portal.piaic.org/signup' className='  m-1 mr-3  md:m-3 pt-1 md:pt-2 pb-1 md:pb-2 pr-1  md:pr-3 pl-1 md:pl-3  text-xs md:text-lg md:border-[2px] cursor-pointer rounded-full text-white  bg-gradient-to-tr  to-red-500 via-red-600 from-white  transition-all ease-in-out hover:bg-gradient-to-bl  hover:to-gray-400 hover:via-red-600 hover:from-white hover:text-sm hover:md:text-xl  '>Apply</a>
              </ul>

            </nav>
            
      </header>
        
      <main  className=' mt-44 md:mt-0'>
        <section id='home'>
        <div className='flex-col md:flex-row'>
        <div className=' relative top-24 right-[-216px]'>
         <img src='./pics/pic1.png' width={800} ></img>
        </div>
        <div className=' relative top-[-230px] ml-3 '>
        <div>
            <h1 id='pana'  className=' text-xl text-red-600 font-bold '>
            Panaverse DAO
            </h1>
          </div>
          <div className='w-[350px] text-lg mt-1'>
            <h1 className=' text-purple-400'>
            Certified Web 3.0 and Metaverse Developer
            </h1>
          </div>
            <div className='w-[380px] mt-1  text-slate-300'>
            <p>A One and Quarter Years Panaverse DAO Earn as you Learn Program Getting Ready for the Next Generation of the Internet</p>
            </div>
            <div className='w-[400px] mt-2  text-slate-300'>
            <p>Consolidating Web 3.0, Metaverse, Artificial Intelligence (AI), Cloud, Edge, Ambient Computing/IoT, Network Automation, and Bioinformatics Technologies</p>
            </div>          
          </div>
        
        </div>
        </section>

        <section>
           <div className='flex ml-[-456px] transition-all  delay-75 ease-in translate-x-[700px] '>
              <img src='./pics/ar.png'></img>
           </div>
          

        </section>
         <div id='courses' className=' ml-[65px] mt-[300px] md:w-[860px] md:h-[150px] rounded-md bg-gray-600 shadow-2xl shadow-red-400'>
         <h1 className=' text-red-400 text-center' >Program of Studies</h1>
         <h1 className=' text-red-400 text-5xl text-center font-bold' >Core Courses</h1>
         <h1 className=' text-red-400 text-3xl text-center'>(Common in All Specializations)</h1>
         <p className=' text-gray-200 text-xl text-center'>Every participant of the program will start by completing the following three core courses.</p>
         </div>
        
        <section >
          <div className=' flex justify-center relative top-52'>
            
            
            <div className=' absolute md:w-[760px] md:h-[300px] rounded-md bg-gray-600 shadow-2xl shadow-gray-400'>
              <h1 className=' mt-[65px] ml-[65px] text-red-400 text-9xl font-bold'>1</h1>
              <h1 className=' mt-[-57px] ml-[120px] text-red-400 text-5xl font-semibold'>Quarter</h1>
              <p className='ml-[120px] text-xl text-red-400'>
              CS-101: Object-Oriented Programming using TypeScript
              </p>
            </div>
            <div className=' absolute top-[-75px] left-[65px] w-[150px] h-[150px] rounded-full  shadow-md shadow-red-400  transition-all ease-in-out hover:scale-[3] '>
              <img src='./pics/typescript.png' width={300}></img>
            </div>
          
          
            
          <div className=' absolute top-[480px] md:w-[760px] md:h-[300px] rounded-md bg-gray-600 shadow-2xl shadow-gray-400'>
              <h1 className=' mt-[65px] ml-[65px] text-red-400 text-9xl font-bold'>2</h1>
              <h1 className=' mt-[-57px] ml-[135px] text-red-400 text-5xl font-semibold'>Quarter</h1>
              <p className='w-[500px] ml-[140px] text-xl text-red-400'>
              W2-201: Developing Planet-Scale Web 2.0 Serverless Cloud Cloud Apps and APIs using Next.js 13 and Cloud Development Kit (CDK) for Terraform

2
              </p>
            </div>
            <div className=' absolute top-[395px] left-[65px] w-[150px] h-[150px] bg-slate-300 rounded-full  shadow-md shadow-red-400  transition-all ease-in-out hover:scale-[3] '>
              <img src='./pics/nextjs.png' width={300}></img>
            </div>
          
          
              
          <div className=' absolute top-[960px] md:w-[760px] md:h-[300px] rounded-md bg-gray-600 shadow-2xl shadow-gray-400'>
              <h1 className=' mt-[65px] ml-[65px] text-red-400 text-9xl font-bold'>3</h1>
              <h1 className=' mt-[-57px] ml-[135px] text-red-400 text-5xl font-semibold'>Quarter</h1>
              <p className='w-[500px] ml-[140px] text-xl text-red-400'>
              $-101: Dollar Making Bootcamp - Full-Stack Template and API Product Development
              </p>
            </div>
            <div className=' absolute top-[885px] left-[65px] w-[150px] h-[150px] rounded-full  shadow-md shadow-red-400  transition-all ease-in-out hover:scale-[3] '>
              <img src='./pics/dollar.png' width={300}></img>
            </div>
          
          
          </div>
        </section>


        <section  className='section-gap'>
          <div className='relative left-[55px] top-[1700px] mb-20 md:w-[860px] md:h-[150px] rounded-md bg-gray-600 shadow-2xl shadow-red-400 '>
           <h1 className=' text-red-400 text-5xl text-center font-bold pt-4'>Specialized Tracks</h1>
           <p className=' text-gray-200 text-xl text-center'>After completing the first three quarters the participants will select one or more specializations consisting of two courses each.</p>
          </div>
          <div className=' relative left-20 top-[1900px] w-[400px] h-[600px] rounded-xl bg-gray-600 shadow-2xl shadow-gray-400'>
            <div className=' bg-slate-200 rounded-full absolute left-32 top-[-75px] w-36 shadow-md shadow-red-400 transition-all ease-in-out hover:scale-[3] '><img src='./pics/metaverse.png' width={200}></img></div>
            <div className=' absolute top-20'>
              <h1 className=' text-center text-xl font-bold text-red-500' >
              Web 3.0 (Blockchain) and Metaverse Specialization
              </h1>
              <p className=' text-sm text-center pl-2 pr-2 pt-3 text-gray-300'>
              This Web 3.0 and Metaverse specialization focuses on developing full-stack Web 3.0 and Metaverse experiences for the next generation of the internet by specializing in building worlds that merge the best of cutting-edge decentralized distributed blockchains with 3D metaverse client experiences.
              </p>
              <h1 className=' ml-2 text-8xl font-semibold text-red-500'>
                4
              </h1>
              <h1 className='ml-[58px] mt-[-52px] text-5xl text-red-500'>
              Quarter
              </h1>
              <p className='ml-[60px]  text-xl text-red-500'>
              W3-351: Developing Smart Contracts and Planet-Scale Web 3.0 Dapps
              </p>
              <h1 className=' ml-2 text-8xl font-semibold text-red-500'>
                5
              </h1>
              <h1 className='ml-[57px] mt-[-52px] text-5xl text-red-500'>
              Quarter
              </h1>
              <p className='ml-[60px]  text-xl text-red-500'>
              MV-361: Developing Planet-Scale Open Virtual and Augmented Metaverse Experiences
              </p>
            </div>          
          </div>

          <div className=' relative left-[500px] top-[1800px] w-[400px] h-[600px]  rounded-xl bg-gray-600 shadow-2xl shadow-gray-400'>
          <div className=' bg-slate-200 rounded-full absolute left-32 top-[-75px] w-36 h-36 shadow-md shadow-red-400 transition-all ease-in-out hover:scale-[3]'><img className='pt-4 ' src='./pics/ai.png' width={200}></img></div>
          <div className=' absolute top-20'>
              <h1 className=' text-center text-xl font-bold text-red-500' >
              Artificial Intelligence (AI) and Deep Learning Specialization
              </h1>
              <p className=' text-sm text-center pl-2 pr-2 pt-3 text-gray-300'>
              The AI and Deep Learning specialization focuses on building and deploying intelligent APIs using OpenAI models and building custom Deep Learning Tensorflow models.
              </p>
              <h1 className=' ml-2 text-8xl font-semibold text-red-500'>
                4
              </h1>
              <h1 className='ml-[58px] mt-[-52px] text-5xl text-red-500'>
              Quarter
              </h1>
              <p className='ml-[60px]  text-xl text-red-500'>
              AI-351: Developing Planet-Scale Intelligent APIs and Python Programming
              </p>
              <h1 className=' ml-2 text-8xl font-semibold text-red-500'>
                5
              </h1>
              <h1 className='ml-[57px] mt-[-52px] text-5xl text-red-500'>
              Quarter
              </h1>
              <p className='ml-[60px]  text-xl text-red-500'>
              AI-361: Deep Learning and MLOps
              </p>
            </div>          
          </div>

          <div className=' relative left-20 top-[1700px] w-[400px] h-[600px] rounded-xl bg-gray-600 shadow-2xl shadow-gray-400'>
          <div className=' bg-slate-200 rounded-full absolute left-32 top-[-75px] w-36 h-36 shadow-md shadow-red-400 transition-all ease-in-out hover:scale-[3]'><img src='./pics/iot.png' width={200}></img></div>
          <div className=' absolute top-20'>
              <h1 className=' text-center text-xl font-bold text-red-500' >
              Ambient Computing and IoT Specialization
              </h1>
              <p className=' text-sm text-center pl-2 pr-2 pt-3 text-gray-300'>
              The Ambient Computing and IoT Specialization focuses on building Smart Homes, Offices, Factories, and Cities using Voice computing, Matter Protocol, and Embedded Devices.
              </p>
              <h1 className=' ml-2 text-8xl font-semibold text-red-500'>
                4
              </h1>
              <h1 className='ml-[58px] mt-[-52px] text-5xl text-red-500'>
              Quarter
              </h1>
              <p className='ml-[60px]  text-xl text-red-500'>
              AC-351: Ambient Computing with Voice Assistants and Matter Devices
              </p>
              <h1 className=' ml-2 text-8xl font-semibold text-red-500'>
                5
              </h1>
              <h1 className='ml-[57px] mt-[-52px] text-5xl text-red-500'>
              Quarter
              </h1>
              <p className='ml-[60px]  text-xl text-red-500'>
              AC-361: Embedded Programming using C and Rust
              </p>
            </div>          
          </div>
 
          <div className=' relative left-[500px] top-[1600px] w-[400px] h-[600px]  rounded-xl bg-gray-600 shadow-2xl shadow-gray-400'>
          <div className=' bg-slate-200 rounded-full absolute left-32 top-[-75px] w-36 h-36 shadow-md shadow-red-400 transition-all ease-in-out hover:scale-[3]'><img src='./pics/cloud.png' width={400}></img></div>
          <div className=' absolute top-20'>
              <h1 className=' text-center text-xl font-bold text-red-500' >
              Cloud-Native Computing Specialization
              </h1>
              <p className=' text-sm text-center pl-2 pr-2 pt-3 text-gray-300'>
              The Cloud-Native Computing Specialization focuses on Containers, Kubernetes, and CDK for Kubernetes.
              </p>
              <h1 className=' ml-2 text-8xl font-semibold text-red-500'>
                4
              </h1>
              <h1 className='ml-[58px] mt-[-52px] text-5xl text-red-500'>
              Quarter
              </h1>
              <p className='ml-[60px]  text-xl text-red-500'>
              CN-351: Certified Kubernetes Application Developer (CKAD)
              </p>
              <h1 className=' ml-2 text-8xl font-semibold text-red-500'>
                5
              </h1>
              <h1 className='ml-[57px] mt-[-52px] text-5xl text-red-500'>
              Quarter
              </h1>
              <p className='ml-[60px]  text-xl text-red-500'>
              CN-361: Developing Multi-Cloud Apps using CDK for Terraform
              </p>
            </div>          
          </div>

          <div className=' relative left-20 top-[1500px] w-[400px] h-[600px] rounded-xl bg-gray-600 shadow-2xl shadow-gray-400'>
          <div className=' bg-slate-200 rounded-full absolute left-32 top-[-75px] w-36 h-36 shadow-md shadow-red-400 transition-all ease-in-out hover:scale-[3]'><img src='./pics/bio.png' width={200}></img></div>
          <div className=' absolute top-20'>
              <h1 className=' text-center text-xl font-bold text-red-500' >
              Genomics and Bioinformatics Specialization
              </h1>
              <p className=' text-sm text-center pl-2 pr-2 pt-3 text-gray-300'>
              Genomics is the study of the total genetic makeup of individual organisms, and how this genetic information is structured, functions, and has evolved; bioinformatics encompasses a diverse range of analytical methods and tools applied to genomic data. This Specialization focuses on performing complex bioinformatics analysis using the most essential Python libraries and applications.
              </p>
              <h1 className=' ml-2 text-8xl font-semibold text-red-500'>
                4
              </h1>
              <h1 className='ml-[58px] mt-[-52px] text-5xl text-red-500'>
              Quarter
              </h1>
              <p className='ml-[60px]  text-xl text-red-500'>
              Bio-351: Python for Biologists
              </p>
              <h1 className=' ml-2 text-8xl font-semibold text-red-500'>
                5
              </h1>
              <h1 className='ml-[57px] mt-[-52px] text-5xl text-red-500'>
              Quarter
              </h1>
              <p className='ml-[60px]  text-xl text-red-500'>
              Bio-361: Bioinformatics with Python
              </p>
            </div>          
           </div>

          <div className=' relative left-[500px] top-[1400px] w-[400px] h-[600px]  rounded-xl bg-gray-600 shadow-2xl shadow-gray-400'>
          <div className=' bg-slate-200 rounded-full absolute left-32 top-[-75px] w-36 h-36 shadow-md shadow-red-400 transition-all ease-in-out hover:scale-[3]'><img src='./pics/networking.png' width={200}></img></div>
          <div className=' absolute top-20'>
              <h1 className=' text-center text-xl font-bold text-red-500' >
              Network Programmability and Automation Specialization
              </h1>
              <p className=' text-sm text-center pl-2 pr-2 pt-3 text-gray-300'>
              More than ever, network engineers are finding it challenging to complete their duties entirely manually. Network automation is now crucial due to new protocols, technologies, delivery models, and the requirement for enterprises to become more adaptable and agile. This course teaches network engineers how to automate systems with code using a variety of technologies and tools, including Linux, Python, APIs, and Git.
              </p>
              <h1 className=' ml-2 text-8xl font-semibold text-red-500'>
                4
              </h1>
              <h1 className='ml-[58px] mt-[-52px] text-5xl text-red-500'>
              Quarter
              </h1>
              <p className='ml-[60px]  text-xl text-red-500'>
              NPA-351: CCNA 200-301 Certification
              </p>
              <h1 className=' ml-2 text-8xl font-semibold text-red-500'>
                5
              </h1>
              <h1 className='ml-[57px] mt-[-52px] text-5xl text-red-500'>
              Quarter
              </h1>
              <p className='ml-[60px]  text-xl text-red-500'>
              NPA-361: Network Programmability and Automation
              </p>
            </div>          
          </div>

          
          
        </section>
      </main> 
      
      
      <footer className='flex relative  top-[1600px] w-full h-[350px]   bg-gray-600  shadow-inner shadow-red-400'>
      <div className=' w-[450px]'>
      <div className='pt-[25px] pl-[65px]' >
        <img src='./pics/f-pic.png' width={150}></img>
      </div>
      <p className='pl-[65px] text-xl text-red-500'>
      Certified Web 3.0 and Metaverse Developer A One and Quarter Years Panaverse DAO Earn as you Learn Program Getting Ready for the Next Generation of the Internet
      </p>
      <div className=' flex pt-4 pl-16'>
      <a className="pr-3 hover:scale-105 duration-300" target="___blank" href="https://www.facebook.com/groups/panaverse"><div className="p-2 rounded-full bg-red-500"><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 320 512" className="text-white h-4 w-4" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"></path></svg></div></a>
      <a className="pr-3 hover:scale-105 duration-300" target="___blank" href="https://www.youtube.com/@panaverse/streams "><div className="p-2 rounded-full  bg-red-500"><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 576 512" className="text-white h-4 w-4" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z"></path></svg></div></a>
      <a className="pr-3 hover:scale-105 duration-300" target="___blank" href=" https://github.com/panaverse"><div className="p-2 rounded-full bg-red-500"><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 496 512" className="text-white h-4 w-4" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"></path></svg></div></a>
      <a className="pr-3 hover:scale-105 duration-300" target="___blank" href="https://twitter.com/Panaverse_edu"><div className="p-2 rounded-full bg-red-500"><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" className="text-white h-4 w-4" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"></path></svg></div></a>
      </div>
      </div>

      <div className='pt-[40px] pl-[45px]'>
        <h1 className=' font-semibold text-lg text-gray-900'>Programs</h1>
        <h1 className="text-red-500 pt-2">Web 3.0 and Metaverse Developer</h1>
        <h1 className="text-red-500 pt-2">Artificial Intelligence</h1>
        <h1 className="text-red-500 pt-2">Cloud-Native Computing</h1>
        <h1 className="text-red-500 pt-2">Ambient Computing and IoT</h1>
        <h1 className="text-red-500 pt-2">Genomics and Bioinformatics</h1>
        <h1 className="text-red-500 pt-2">Network Programmability and Automation</h1>
      </div>

      <div className='pt-[40px] pl-[45px]'>
        <h1 className=' font-semibold text-lg text-gray-900'>Pages</h1>
        <div>
        <a href='#home' className="text-red-500 pt-2">Home</a>
        </div>
        <div>
        <a href='#courses' className="text-red-500 pt-2">Courses</a>
        </div>
        <div>        
        <a href='https://portal.piaic.org/signup' className="text-red-500 pt-2">Apply</a>
        </div>
        <div className='pt-28  text-blue-200 '>This website is made by <a href='https://github.com/MuhammadAhmedKhan123'>MuhammadAhmedKhan123</a></div>
      </div>
      
      </footer>    
    
    
       
    </div>
  )
}

export default Panaverse

