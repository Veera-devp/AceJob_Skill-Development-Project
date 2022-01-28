import React from "react";
import "./Services.css";
import img1 from "../React Images/CO_1.jpg";
import img2 from "../React Images/CO_2.jpg";
import img3 from "../React Images/CO_3.png";
import img4 from "../React Images/CO_4.png";
import img5 from "../React Images/CO_5.png";
import img6 from "../React Images/CO_6.jpg";
import img7 from "../React Images/CO_7.jpg";

const timelineData = [
    {
        text: 'Start working on the different coding Skills and participate in different coding competition ',
        date: 'December 04 2021',
        category: {
			tag: 'Resume builder',
			color: '#FFDB14'
		},
        link: {
            url: 'https://www.codechef.com/',
            text: 'Check it out on codechef'
        }
    },
    {
        text: 'Start the Weekly Coding Challenge program',
        date: 'December 07 2021',
        category: {
			tag: 'Skill Test',
			color: '#e17b77'
		},
        link: {
            url: 'https://www.hackerrank.com/dashboard',
            text: 'Check it out here'
        }
    },
    {
        text: 'You must have a minimum of 4 global certifications',
        date: 'December 09 2021',
        category: {
			tag: 'Certifications',
			color: '#1DA1F2'
		},
        link: {
            url: 'https://moodle.kluniversity.in/login/index.php',
            text: 'Check out here'
        }
    },
    {
        text:
            'The In-Person Interview, they will be checking the candidate is generally well-qualified for the role',
        date: 'December 21 2021',
        category: {
			tag: 'Final Call',
			color: '#018f69'
		},
        link: {
            url:
                'https://www.javatpoint.com/interview-questions-and-answers',
            text: 'Check it out here'
        }
    },
    {
        text: 'The Group Panel team members get a strong sense of the contribution the job seeker will make as an employee',
        date: 'December 25 2021',
        category: {
			tag: 'Group Interview',
			color: '#018f69'
		},
        link: {
            url: 'https://work.chron.com/group-panel-interview-17596.html',
            text: 'Check it out here'
        }
    }
]

const TimelineItem = ({ data }) => (
    <div className="timeline-item">
        <div className="timeline-item-content">
            <span className="tag" style={{ background: data.category.color }}>
                {data.category.tag}
            </span>
            <time>{data.date}</time>
            <p>{data.text}</p>
            {data.link && (
                <a
                    href={data.link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    {data.link.text}
                </a>
            )}
            <span className="circle" />
        </div>
    </div>
);

const Timeline = () =>
    timelineData.length > 0 && (
        <div className="timeline-container">
            {timelineData.map((data, idx) => (
                <TimelineItem data={data} key={idx} />
            ))}
        </div>
    );
const Services = () =>{
    return(
        
        <>
		<h3 class="text-center mt-4  fw-bold">Updated Timeline for Recruiters</h3>
	      <Timeline />
		 <div className="container">
		 <div class="row">
		 
                
                  <div class="col-sm-12 col-md-12">
                     <h3 class="text-center mt-4  fw-bold">Courses that we would like to provide:</h3>
                  </div>
               </div>
			   <div class="media mt-3">
      <a class="pr-3" href="https://www.coursera.org/learn/nosql-databases/home/welcome">
        <img src={img1} alt="Course 1"/>
      </a>
      <div class="media-body">
        <h5 class="mt-0">NoSQL systems</h5>
		This course will be completed on six weeks, it will be supported with videos and exercises that will allow you to identify the differences between the relational and NoSQL databases. 
As part of these alternative technologies the student will learn the main characteristics and how to implement the typical NoSQL databases, such as Key-value, columnar, document and graph. 
      </div>
    </div>
	<div class="media mt-3">
      <a class="pr-3" href="https://www.coursera.org/learn/relational-database/home/welcome">
        <img src={img2} alt="Course 2"/>
      </a>
      <div class="media-body">
        <h5 class="mt-0">Relational database systems</h5>
		This course will be completed on six weeks, it will be supported with videos and various documents that will allow you to learn in a very simple way how several types of information systems and databases are available to solve different problems and needs of the companies. 
      </div>
    </div>
	<div class="media mt-3">
      <a class="pr-3" href="https://www.coursera.org/learn/agile-software-development/home/welcome">
        <img src={img3} alt="Course 3"/>
      </a>
      <div class="media-body">
        <h5 class="mt-0">Agile Software Development</h5>
		Software industry is going crazy on agile methods.  It is rapidly becoming the choice for software development where requirements are unpredictable or is expected to change over time. This course will help you gain knowledge on what is agile? Why agile is better suited for these situations?  We will also cover some of the most common agile frameworks like scrum and XP in depth.  
      </div>
    </div>
	<div class="media mt-3">
      <a class="pr-3" href="https://www.coursera.org/learn/lean-software-development/home/welcome">
        <img src={img4} alt="Course 4"/>
      </a>
      <div class="media-body">
        <h5 class="mt-0">Lean Software Development</h5>
		While scrum and XP were transforming the software development industry, there were another set of ideas (derived from lean manufacturing and Six Sigma) that started to influence software development methods.  These ideas around Lean Software Development forms the foundation of number of agile methods. In this course, we will explore lean concepts and cover some of the common Lean methods and techniques like Kanban, Value Stream Mapping, etc.
      </div>
    </div>
	<div class="media mt-3">
      <a class="pr-3" href="https://www.coursera.org/learn/reactjs-css-animation/home/welcome">
        <img src={img5} alt="Course 5"/>
      </a>
      <div class="media-body">
        <h5 class="mt-0">CSS Animated Components with ReactJS</h5>
		In this 1-hour long project-based course, you will learn how to 

- Identify the basic ReactJS project structure, including TypeScript, Webpack, Storybook, and SASS configuration,
- Render a Hello World component, as well as identify the basic structure of a ReactJS component, including how to render the component in Storybook.
      </div>
    </div>
	<div class="media mt-3">
      <a class="pr-3" href="https://www.coursera.org/learn/java-database-connectivity/home/welcome">
        <img src={img6} alt="Course 6"/>
      </a>
      <div class="media-body">
        <h5 class="mt-0">Introduction To Java Database Connectivity - JDBC</h5>
		JDBC plays a major role in today's software development industries hence we will learn core components of JDBC and will connect java apps into a back-end database (MySQL) to store and retrieve our information permanently.

      </div>
    </div>
	<div class="media mt-3">
      <a class="pr-3" href="https://www.coursera.org/learn/engineering-practices-secure-software-quality/home/welcome">
        <img src={img7} alt="Course 6"/>
      </a>
      <div class="media-body">
        <h5 class="mt-0">Engineering Practices for Building Quality Software</h5>
		In this course, you will learn about engineering practices and processes that agile and traditional teams use to make sure the team is prepared for change. In additional, you will also learn about practices, techniques and processes that can help team build high quality software. You will also learn how to calculate a variety of quantitative metrics related to software quality.

      </div>
    </div><br/>
	<h5 class="text-info">***If You have more Quires you can contact to Contact page***</h5>
		 </div>
        </>
    )
}

export default Services;

