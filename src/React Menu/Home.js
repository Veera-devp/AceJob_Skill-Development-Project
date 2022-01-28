
import React from 'react';
import { Link } from 'react-router-dom';
import img1 from "../React Images/3.jpg"
const Home = () =>{
    return(
        <>
        
        <div class="container">
        <div className="row">
        
            <div className="col-12 col-lg-6 header-left-side d-flex justify-content-center flex-column align-items-start ">
              <h1 className="display-4">
                Online Recruitment Made <br /> Easy For You.
              </h1>
              <p className="main-hero-para">
                An efficient and effective hiring process is a step-by-step process for hiring a new employee, whereby an organization identifies its talent needs, recruits from its talent pool and eventually hires the most qualified candidates. Most companies have their own hiring processes.
              </p>
              <h3>Get early access for you</h3>
              <div className="input-group mt-3">
                <input
                  type="text"
                  className="rounded-pill w-50  w-lg-75 me-3 p-2 form-control-text"
                  placeholder="Enter Your Email"
                />
                <Link to='Register'>
                <button type="button" class=" rounded-pill btn btn-outline-success">Get it now</button>
                </Link>
                </div>
                </div>
                <div className="col-12 col-lg-6 header-right-side d-flex justify-content-center align-items-center main-herosection-images">
                <img src={img1} height={500} width={500} />
              
            </div>
            
                
               <div class="row">
                  <div class="col-sm-12 col-md-12">
                     <h2 class="text-center mt-4  fw-bold">Recruitment on way</h2>
                  </div>
               </div>
             
                <div class="row">
                  <p class="mt-4 mb-5 fs-6">Recruitment is a core function of the Human Resource department. It is a process that involves everything from identifying, attracting, screening, shortlisting, interviewing, selecting, hiring, and onboarding employees.
                   The recruitment teams can be large or small depending on the size of an organization. However, in smaller organizations, recruitment is typically the responsibility of a recruiting manager.Many organizations outsource their recruiting needs, while some companies rely exclusively on advertisements, job boards, and social media channels to recruit talent for new positions. Many companies of today, use recruitment software to make their recruitment process more effective and efficient.</p>
               </div>
               <div class="section-container">
               <div class="section-content">
               <div class="row display-flex">
               <div class="col-md-4 col-sm-8">
               <div> 
               <a href="#step1" class="scroll"> 
               <img class=" lazyloaded" src="https://www.jobsoid.com/wp-content/uploads/2019/01/Identifying-the-Hiring-Needs.png" data-src="https://www.jobsoid.com/wp-content/uploads/2019/01/Identifying-the-Hiring-Needs.png" onerror="this.src = ''" alt="Identifying the Hiring Needs" title="Identifying the Hiring Needs"/>
               <h5>Identifying the Hiring Needs</h5> </a></div></div><div class="col-md-4 col-sm-8">
               <div> <a href="#step2" class="scroll"> 
               <img class=" lazyloaded" src="https://www.jobsoid.com/wp-content/uploads/2019/01/Preparing-the-Job-Description.png" data-src="https://www.jobsoid.com/wp-content/uploads/2019/01/Preparing-the-Job-Description.png" onerror="this.src = ''" alt="Preparing the Job Description" title="Preparing the Job Description"/>
               <h5>Preparing the Job Description</h5> </a></div></div>
               <div class="col-md-4 col-sm-8">
                 <div> <a href="#step3" class="scroll"> 
                 <img class=" lazyloaded" src="https://www.jobsoid.com/wp-content/uploads/2019/01/Talent-Search.png" data-src="https://www.jobsoid.com/wp-content/uploads/2019/01/Talent-Search.png" onerror="this.src = ''" alt="Talent Search" title="Talent Search"/>
                 <h5>Talent Search</h5> </a></div></div>
                 <div class="col-md-4 col-sm-8"><div> <a href="#step4" class="scroll"> 
                 <img class=" lazyloaded" src="https://www.jobsoid.com/wp-content/uploads/2019/01/Screening-and-shortlisitng.png" data-src="https://www.jobsoid.com/wp-content/uploads/2019/01/Screening-and-shortlisitng.png" onerror="this.src = ''" alt="Screening and shortlisting" title="Screening and shortlisting"/>
                 <h5>Screening and Shortlisting</h5> </a></div></div>
                 <div class="col-md-4 col-sm-8"><div> <a href="#step5" class="scroll"> 
                 <img class=" lazyloaded" src="https://www.jobsoid.com/wp-content/uploads/2019/01/Interviewing.png" data-src="https://www.jobsoid.com/wp-content/uploads/2019/01/Interviewing.png" onerror="this.src = ''" alt="Interviewing" title="Interviewing"/>
                 <h5>Interviewing</h5> </a></div></div><div class="col-md-4 col-sm-8"><div> <a href="#step6" class="scroll"> 
                 <img class=" lazyloaded" src="https://www.jobsoid.com/wp-content/uploads/2019/01/Evaluation-and-employment-offer.png" data-src="https://www.jobsoid.com/wp-content/uploads/2019/01/Evaluation-and-employment-offer.png" onerror="this.src = ''" alt="Evaluation and employment offer" title="Evaluation and employment offer"/>
                 <h5>Evaluation and Offer of Employment</h5> </a></div></div>
                 <div class="col-md-4 col-sm-8"><div> <a href="#step7" class="scroll"> 
                 <img class=" lazyloaded" src="https://www.jobsoid.com/wp-content/uploads/2020/03/Introduction-and-induction-of-the-New-employee-1.png" data-src="https://www.jobsoid.com/wp-content/uploads/2020/03/Introduction-and-induction-of-the-New-employee-1.png" onerror="this.src = ''" alt="Introduction and induction of the New employee" title="Introduction and induction of the New employee"/>
                 <h5>Introduction and Induction of the New Employee</h5> </a></div></div></div></div></div>
                     <h3 class="text-center mt-4  fw-bold">7 Important features of recruitment</h3>
                     <div class="mt-4 mb-5 fs-6">
                     <ul class="list-group">
  <li class="list-group-item">1. Identifying the Hiring Needs</li>
  <li class="list-group-item">2. Preparing the Job Description</li>
  <li class="list-group-item">3. Talent Search</li>
  <li class="list-group-item">4. Screening and Shortlisting</li>
  <li class="list-group-item">5. Interviewing</li>
  <li class="list-group-item">6. Evaluation and Offer of Employment</li>
  <li class="list-group-item">7. Introduction and Induction of the New Employee</li>
</ul>
</div>
<h4 class=" mt-4  fw-bold">A brief on each and every step</h4>
<p class="mt-4 mb-5 fs-6">1. Figure out where the gaps are in your current team. Check if you have new needs in terms of ability, performance or personality. Ask yourself if you need someone to take care of something that is not being addressed currently. This will tell you that there is a hiring need.</p>
<p class="mt-4 mb-5 fs-6">2. Once you know exactly what you need in terms of knowledge, skills and experience, it is time to determine the duties and responsibilities of the job. Preparing a comprehensive job description (JD) will help you know what your potential employees must have in order to meet the demands of the role. More importantly, it provides your prospects with a checklist or a list that they can compare themselves to before applying. It is a tool to ensure that you get applications from the right candidates (hopefully).</p>
<p class="mt-4 mb-5 fs-6">3. Identifying the right talent, attracting them and motivating them to apply are the most important aspects of the recruitment process. The job listing should be advertised internally to generate referrals as well as externally on popular social networking sites and preferred job boards. Recruiters can also conduct job fairs and promote openings in leading industry publications to cast a wider net</p>
<p class="mt-4 mb-5 fs-6">4. In order to move forward with the recruitment process, you need to screen and shortlist applicants efficiently and accurately.</p>
<p class="mt-4 mb-5 fs-6">5. The shortlisted applications will now move through the interview process prior to receiving an offer letter or a rejection note. Depending on the size of the hiring team and their unique recruitment needs, several interviews may be scheduled for every candidate.</p>
<p class="mt-4 mb-5 fs-6">6. This is the final stage of the recruitment process. You should never take it for granted that the candidate will accept your offer. However, if your candidate has patiently completed all the paperwork and waited through the selection process, the odds of accepting the offer are high.</p>
<p class="mt-4 mb-5 fs-6">7. When applicants accept the job offer, they officially become the employees of the company. The joining date and time is communicated to the employee. Once that’s done, pre-employment screening that includes reference and background checks are conducted. </p>
               </div>
               
            
            </div>
            
        </>
    )
}

export default Home;

