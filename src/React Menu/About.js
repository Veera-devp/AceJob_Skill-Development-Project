import React from "react";
import tcs from './tcs.jpg'
import micro from './micro.jpg'
import ama from './amazon.jpg'
import ibm from './ibm.jpg'
import hp from './hp.jpg'
import apple from './apple.jpg'
import gal1 from './s4.jpg'
const About = () =>{
    return(
        <>
         <div class="container">
               <div class="row">
                  <div class="col-sm-12 col-md-12">
                     <h2 class="text-center mt-4 fw-bold">Know about us</h2>
                  </div>
               </div>
               <div class="row">
                  <p class="mt-4 mb-5 fs-6">AceJob is a job site. We at Acejob do not believe in showing jobs based on your Resumes. 
                  We also look to improve them with some structured courses that will help you to make your resumes one in a million. 
                  Everyday we look to connect you with companies where you can excel beyond your limits. 
                  We strive to put job seekers first to search for jobs and post resumes. 
                  So what are you waiting for click the SignIn button and let us help you find your dream job.</p>
                  <div class="container">
               <div class="row">
                  <div class="col-sm-12 col-md-12">
                     <h3 class="text-center mt-4 fw-bold">High criteria Jobs based on your resume</h3>
                  </div>
               </div>
               <div class="row">
                  <div class="col-sm-4 mb-5">
                     <div class="card mt-4">
                     
                        <div class="card">
                        <img class="card-img-top" src={tcs} alt=" "/>
                        <div class="card-body">
                           <h4 class="card-title text-secondary">TCS</h4>
                           <p class="card-text text-secondary">TCS is a top employer globally, and our 509,058 employees represent 155 nationalities across 46 countries. Our Tata Group heritage inspires our commitment to long-term partnerships, collaborative innovation, and corporate responsibility.TCS has been ranked as the Number One Top Employer in Asia</p>
                        </div>
                        <div class="card-footer">
                           <a href="https://www.tcs.com/" class="btn btn-primary">Find Out More!</a>
                        </div>
                        </div>
                     </div>
                  </div>
                  <div class="col-sm-4 mb-5">
                     <div class="card mt-4">
                        
                        <div class="card">
                        <img class="card-img-top" src={micro} alt=" "/>
                        <div class="card-body">
                           <h4 class="card-title text-secondary">Microsoft</h4>
                           <p class="card-text text-secondary">Through its marketing and products, Microsoft has done more than any other company to help users find ways to integrate computing into their daily lives. Microsoft regularly is ranked one of the best places to work. Programmers are respected, and creativity is encouraged. Plus, the company pays well to boot.</p>
                        </div>
                        <div class="card-footer">
                           <a href="https://www.microsoft.com/en-in" class="btn btn-primary">Find Out More!</a>
                        </div>
                        </div>
                     </div>
                  </div>
                  <div class="col-sm-4 mb-5">
                     <div class="card mt-4">
                        
                        <div class="card">
                        <img class="card-img-top" src={ama} alt=" "/>
                        <div class="card-body">
                           <h4 class="card-title text-secondary">Amazon</h4>
                           <p class="card-text text-secondary">Amazon is the world's largest online retailer and a prominent cloud services provider.Amazon is headquartered in Seattle, Washington. The company has individual websites, software development centers, customer service centers and fulfillment centers in many locations around the world. </p>
                        </div>
                        <div class="card-footer">
                           <a href="https://www.amazon.jobs/es/" class="btn btn-primary">Find Out More!</a>
                        </div>
                        </div>
                     </div>
                  </div>
                  <div class="col-sm-4 mb-5">
                     <div class="card mt-4">
                        
                        <div class="card">
                        <img class="card-img-top" src={ibm} alt=" "/>
                        <div class="card-body">
                           <h4 class="card-title text-secondary">IBM</h4>
                           <p class="card-text text-secondary">International Business Machines (IBM),is a global technology company that provides hardware, software, cloud-based services and cognitive computing.Founded in 1911 following the merger of four companies in New York State by Charles Ranlett Flint, it was originally called CTB Company. </p>
                        </div>
                        <div class="card-footer">
                           <a href="https://www.ibm.com/in-en" class="btn btn-primary">Find Out More!</a>
                        </div>
                        </div>
                     </div>
                  </div>
                  <div class="col-sm-4 mb-5">
                     <div class="card mt-4">
                        
                        <div class="card">
                        <img class="card-img-top" src={hp} alt=" "/>
                        <div class="card-body">
                           <h4 class="card-title text-secondary">Hewlett-Packard</h4>
                           <p class="card-text text-secondary">HP (Hewlett-Packard) is a multinational information technology (IT) company that sells hardware, software and related business services.  HP product lines include PCs and other computing devices, enterprise and industry standard servers, storage devices, and etc... </p>
                        </div>
                        <div class="card-footer">
                           <a href="https://www.hpe.com/us/en/home.html" class="btn btn-primary">Find Out More!</a>
                        </div>
                        </div>
                     </div>
                  </div>
                  <div class="col-sm-4 mb-5">
                     <div class="card mt-4">
                        
                        <div class="card">
                        <img class="card-img-top" src={apple} alt=" "/>
                        <div class="card-body">
                           <h4 class="card-title text-secondary">Apple INC</h4>
                           <p class="card-text text-secondary">Apple Inc was a footbed in 1976 and currently sells laptops, phones, software, and various online services. Apple Inc., an American Multinational Company was founded in the year 1976. The company is well-renowned for electronic consumers and some of their best-selling products. </p>
                        </div>
                        <div class="card-footer">
                           <a href="https://www.apple.com/in/" class="btn btn-primary">Find Out More!</a>
                        </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
            <h2 class="text-center mt-4 fw-bold">We need! We hire!</h2>
            <div class="container">
               <div class="accordion" id="accordionExample">
                  <div class="card">
                     <div class="card-header" id="headingOne">
                        
                        <h2 class="mb-0">
                           <p>
                           <button class="btn btn-link" type="button" data-ds-toggle="collapse" data-bs-target="#collapseWidthExample" aria-expanded="false" aria-controls="collapseWidthExample">
                              Thinkers
                           </button>
                           </p>
                        </h2>
                     </div>
                     
                     <div id="collapse collapse-horizontal" class="collapseWidthExample" >
                        <div class="card-body">
                           Corruption, bureaucracy, policy uncertainty and volatility, harassment by the taxman, inadequate protection for IP, poor infrastructure etc. are not unique to India alone; they are characteristics
                           of all emerging markets and MNCs can’t escape this chaos in Brazil, Indonesia or Nigeria as well. Companies that have done spectacularly well in India such as Suzuki, Unilever, JCB, Cummins, Nokia, Standard Chartered, Hyundai or Schneider Electric have learned to thrive in the midst of chaos and having succeeded in India, they find that they have developed the capabilities, mindset, talent and innovative products and business models that help them succeed elsewhere. This is why the subtitle of the book is “Win in India, win everywhere”. These companies are not waiting for India to get better or look like a more developed market; they are instead adapting themselves and their business model to the realities of India and being richly rewarded for this. I contrast their approach with that of companies like Apple or Caterpillar who hesitate to commit to India until things get better allowing competitors like Samsung or JCB to eat their lunch. While India is a very challenging market, the bigger challenge for many MNCs is their own headquarters mindset. Such companies will find the going to be tough not just in India but all emerging markets.
                        </div>
                     </div>
                  </div>
                  <div class="card">
                     <div class="card-header" id="headingTwo">
                        <h2 class="mb-0">
                           <button class="btn btn-link collapsed" type="button" data-ds-toggle="collapse" >
                              Improvers
                           </button>
                        </h2>
                     </div>
                     <div id="collapseTwo" class="collapse show" >
                        <div class="card-body">
                           They are also considering creating a manufacturing hub in India, recreating what they did in China in the past. India and China appear to have arrived in the global economic scene. For long, India was considered to be lagging behind China. But now, as the dust settles down, India is beginning to look the better off compared to China and more lucrative for the multinationals to come calling. In the FDI stake, China is still ahead of India but India is catching up slowly and for the MNCs, India is beginning to matter more than China. Boston Consulting Groups Janmejaya Sinha, after researching the performance of the MNCs in India, discovered that “ About half the MNCs earn higher returns in India than their global average. In banking, the bigger foreign banks, Citibank, Standard Chartered, ABN Amro and Bank of America (except HSBC) are all more profitable in India than their global average.
                        </div>
                     </div>
                  </div>
                  <div class="card">
                     <div class="card-header" id="headingThree">
                        <h2 class="mb-0">
                           <button class="btn btn-link collapsed" type="button" data-ds-toggle="collapse">
                              Builders
                           </button>
                        </h2>
                     </div>
                     <div id="collapseThree" class="collapse show">
                        <div class="card-body">
                           This plethora started with the machine language, which was merely a series of numbers directly telling the computer what to do. But it was hard for humans to understand that type of coding. So gradually various assembly languages appeared. These were considered low-level programming languages and were only able to run on the specific computer architecture or operating system they were initially created for.
                           The turning point for the IT industry was the appearance of Fortran — the first high-level programming language, which was commercially released in 1957. Fortran allowed a certain level of abstraction and portability, which opened new opportunities for engineers. It would become a base for dozens of other programming languages between 1960 and 1980.
                           Ten years after Fortran, what we now know as object-oriented programming (OOP) came into existence. One of the ideas is that the coiner of the term, Alan Kay, was inspired by the structure of biological cells while inventing some of the first OOP languages
                           The OOP approach gave rise to even more languages appearing. Some were developed for each platform (like C for Unix or Basic for Windows), while some were made for certain specific tasks (e.g., SQL for database management).
                           Web and mobile development triggered the creation of even more languages. Almost everyone has heard about HTML and CSS, the technologies behind the bright web browsing experience. Less known to the public are Kotlin and Swift — the languages that came into use with the rise of mobile development.
                           Out of hundreds of programming languages available, still there is a limited list of the most popular and demanded ones.
                        </div>
                     </div>
                  </div>
               </div>
            </div>

               </div>
            </div>
            <section class="bg-light mt-5" id="alumini">
            <div class="container">
               <div class="row text-center">
                  <div class="col-sm-12 col-md-12 mb-4">
                     <h3 class="text-center mt-4 fw-bold">Words From our Employee</h3>
                  </div>
                  <div class="col-md-4">
                     <div class="testimonial mb-5">
                        <div class="avatar mx-auto">
                           <img src={gal1} class="rounded-circle z-depth-1 img-fluid" />
                        </div>
                        <h4 class="font-weight-bold dark-grey-text mt-4">Rama Krishna</h4>
                        <h6 class="font-weight-bold blue-text my-3">Team manager</h6>
                        <p class="font-weight-normal dark-grey-text">
                           "A manager is a person who is responsible for a part of a company, i.e., they ‘manage‘ the company. Managers may be in charge of a department and the people who work in it. In some cases, the manager is in charge of the whole business."</p>
                     </div>
                  </div>

                  <div class="col-md-4">
                     <div class="testimonial mb-5">
                        <div class="avatar mx-auto">
                           <img src={gal1} class="rounded-circle z-depth-1 img-fluid" />
                        </div>
                        <h4 class="font-weight-bold dark-grey-text mt-4">Krishna Kumar</h4>
                        <h6 class="font-weight-bold blue-text my-3">Data Analyst</h6>
                        <p class="font-weight-normal dark-grey-text">"The company also said that the employees logged over 10 million learning hours in the first quarter and at least 4,78,000 employees have been trained in Agile methods and over 4,07,000 workers have been trained on multiple new technologies.
                           TCS said its IT Services attrition rate in the last 12 months was at 8.6 per cent, which is the lowest in the industry."</p>
                     </div>

                  </div>
                  <div class="col-md-4">
                     <div class="testimonial mb-5">
                        <div class="avatar mx-auto">
                           <img src={gal1} class="rounded-circle z-depth-1 img-fluid" />
                        </div>
                        <h4 class="font-weight-bold dark-grey-text mt-4">Supriya</h4>
                        <h6 class="font-weight-bold blue-text my-3">Software Modeller</h6>
                        <p class="font-weight-normal dark-grey-text">
                           An HR department is tasked with maximizing employee productivity and protecting the company from any issues that may arise within the workforce. HR responsibilities include compensation and benefits, recruitment, firing, and keeping up to date with any laws that may affect the company and its employees.</p>
                     </div>
                     
                  </div>
                  </div>
                  </div>
                  </section>
        </>
    )
}

export default About;

