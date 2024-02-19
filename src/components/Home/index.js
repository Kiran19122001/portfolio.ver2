import React from "react";
import { Link } from "react-scroll";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { FaCalendarCheck } from "react-icons/fa";
import { BiDirections } from "react-icons/bi";
import {
  FaLinkedin,
  FaInstagramSquare,
  FaGithub,
  FaFacebook,
} from "react-icons/fa";
import Header from "../Header";
import myProfile from "../About/myProfile.jpeg";
import "./index.css";
import "../Projects/index.css";
import "../About/index.css";
import "../Contact/index.css";

const timelineItemsList = [
  {
    id: "c6aad2fb-7673-45cf-9606-a335acc0cf4b",
    categoryId: "COURSE",
    title: "10 DECEMBER 2020",
    courseTitle: "Static Website",
    description:
      "Build your own personal portfolio website and a website to host conferences and events.  Publish your website and share it with your friends, family and beyond.",
    duration: "10 days",
    tagsList: [
      {
        id: "c31b2ad8-f766-11eb-9a03-0242ac130003",
        name: "HTML Elements",
      },
      {
        id: "c31b2d08-f766-11eb-9a03-0242ac130003",
        name: "Class Attribute",
      },
      {
        id: "c31b2dee-f766-11eb-9a03-0242ac130003",
        name: "Text Properties",
      },
      {
        id: "c31b2eb6-f766-11eb-9a03-0242ac130003",
        name: "Bootstrap",
      },
      {
        id: "c31b2f6a-f766-11eb-9a03-0242ac130003",
        name: "Box Properties",
      },
      {
        id: "c31b347e-f766-11eb-9a03-0242ac130003",
        name: "Layout",
      },
      {
        id: "c31b358c-f766-11eb-9a03-0242ac130003",
        name: "Flexbox",
      },
    ],
  },
  {
    id: "a19d93d6-bdac-479e-b554-974ef9e6e66c",
    categoryId: "PROJECT",
    title: "21 DECEMBER 2020",
    projectTitle: "Tourism Website",
    description:
      "A tourism website enables the user to browse through the images of popular destinations.",
    imageUrl: "https://assets.ccbp.in/frontend/react-js/projects-s4-img.png",
    duration: "1 hr",
    projectUrl: "https://tourismapp.ccbp.tech/",
  },
  {
    id: "40b82899-fdf7-4a3e-a43a-41a9917b4582",
    categoryId: "COURSE",
    title: "5 JANUARY 2021",
    courseTitle: "Responsive Website",
    description:
      "Build a responsive website that appears beautifully on the screen of any size. Develop a personal portfolio website, an E-commerce product listing website and a website to host conferences and events.",
    duration: "12 days",
    tagsList: [
      {
        id: "551e2b7e-f767-11eb-9a03-0242ac130003",
        name: "Responsive Web Design",
      },
      {
        id: "551e2de0-f767-11eb-9a03-0242ac130003",
        name: "Multiple Layouts",
      },
      {
        id: "551e3114-f767-11eb-9a03-0242ac130003",
        name: "Column Wrapping",
      },
      {
        id: "551e31e6-f767-11eb-9a03-0242ac130003",
        name: "Navbar",
      },
      {
        id: "551e32a4-f767-11eb-9a03-0242ac130003",
        name: "Designing Layouts",
      },
      {
        id: "551e334e-f767-11eb-9a03-0242ac130003",
        name: "Inheritance",
      },
      {
        id: "551e3402-f767-11eb-9a03-0242ac130003",
        name: "CSS Gradients",
      },
    ],
  },
  {
    id: "ae2ede68-af77-427c-817c-0ce4beeb69c7",
    categoryId: "PROJECT",
    title: "7 JANUARY 2021",
    projectTitle: "Food Munch",
    description: "Food Much Website is a user-centric food tech website.",
    imageUrl: "https://assets.ccbp.in/frontend/react-js/projects-r2-img.png",
    duration: "2 hrs",
    projectUrl: "https://fm.ccbp.tech/",
  },
  {
    id: "4938c3d1-81cd-4729-9d2c-dcd50796aa4d",
    categoryId: "COURSE",
    title: "30 JANUARY 2021",
    courseTitle: "Dynamic Website",
    description:
      "Learn the fundamental concepts in JavaScript and apply them to build dynamic and interactive web applications like Counter, Guessing Game, Chat Web app, E-commerce web app, etc.",
    duration: "20 days",
    tagsList: [
      {
        id: "d4743c06-f767-11eb-9a03-0242ac130003",
        name: "Declaring Variables",
      },
      {
        id: "d4743ecc-f767-11eb-9a03-0242ac130003",
        name: "Comparison Operator",
      },
      {
        id: "d4743fe4-f767-11eb-9a03-0242ac130003",
        name: "Functions",
      },
      {
        id: "d47440d4-f767-11eb-9a03-0242ac130003",
        name: "Object",
      },
      {
        id: "d474434a-f767-11eb-9a03-0242ac130003",
        name: "DOM Manipulations",
      },
      {
        id: "d474443a-f767-11eb-9a03-0242ac130003",
        name: "Loops",
      },
      {
        id: "d4744516-f767-11eb-9a03-0242ac130003",
        name: "Local Storage",
      },
    ],
  },
  {
    id: "d6c4b3a5-7b1d-4906-aca8-823f44129004",
    categoryId: "PROJECT",
    title: "6 FEBRUARY 2021",
    projectTitle: "Todos Application",
    description:
      "This app helps users to track the day to day tasks. Users can create, edit, track the status of each todo item and able to persist them over page reloads.",
    imageUrl:
      "https://assets.ccbp.in/frontend/react-js/appointments-app/appointments-img.png",
    duration: "3 hrs",
    projectUrl: "https://todossapp.ccbp.tech/",
  },
  {
    id: "0a35abbe-22ca-40a1-81da-613f656b7702",
    categoryId: "PROJECT",
    title: "15 FEBRUARY 2021",
    projectTitle: "Wikipedia Search Application",
    description:
      "Using this Wikipedia Search Application users can search and view curated results and can see detailed explanations in Wikipedia by clicking on the specific result.",
    imageUrl: "https://assets.ccbp.in/frontend/react-js/wiki-logo-img.png",
    duration: "4 hrs",
    projectUrl: "https://wikiseaarch.ccbp.tech/",
  },
  {
    id: "d80781c3-980e-4ab9-96ca-9ad1a9cdf93d",
    categoryId: "COURSE",
    title: "15 MARCH 2021",
    courseTitle: "RWD using Flexbox",
    description:
      "Learn to develop responsive layouts using CSS Flexbox and CSS Media Queries.",
    duration: "7 days",
    tagsList: [
      {
        id: "34e6b208-f768-11eb-9a03-0242ac130003",
        name: "Sizing Elements",
      },
      {
        id: "34e6b460-f768-11eb-9a03-0242ac130003",
        name: "Flexbox Layout",
      },
      {
        id: "34e6b76c-f768-11eb-9a03-0242ac130003",
        name: "Min & Max sizes",
      },
      {
        id: "34e6b83e-f768-11eb-9a03-0242ac130003",
        name: "Media Query Syntax",
      },
      {
        id: "34e6b8fc-f768-11eb-9a03-0242ac130003",
        name: "Logical Operators",
      },
      {
        id: "34e6ba28-f768-11eb-9a03-0242ac130003",
        name: "CSS box-sizing property",
      },
      {
        id: "34e6baf0-f768-11eb-9a03-0242ac130003",
        name: "Media Features",
      },
    ],
  },
  {
    id: "7bc3f006-f0f1-4574-924b-17c480556727",
    categoryId: "PROJECT",
    title: "20 MARCH 2021",
    projectTitle: "Move Messenger",
    description:
      "The landing page of Move Messenger gives you a brief intro of Move Messenger. The landing page is responsive enabling to view it across various devices.",
    imageUrl:
      "https://assets.ccbp.in/frontend/intermediate-rwd/move-messenger-img.png",
    duration: "5 hr",
    projectUrl: "https://movemessengers.ccbp.tech/",
  },
  {
    id: "e681e826-260c-4540-9ee5-f53d0e6ecba0",
    categoryId: "COURSE",
    title: "30 APRIL 2021",
    courseTitle: "React JS - Getting Started",
    description:
      "Learn how to build dynamic web applications with the React JS library. When you finish this course, you will be comfortable in creating a modern, clean, and maintainable application in React JS, from scratch.",
    duration: "18 days",
    tagsList: [
      {
        id: "94947ad2-f768-11eb-9a03-0242ac130003",
        name: "Components",
      },
      {
        id: "94947d52-f768-11eb-9a03-0242ac130003",
        name: "Lists",
      },
      {
        id: "94947e4c-f768-11eb-9a03-0242ac130003",
        name: "Conditional Rendering",
      },
      {
        id: "94947f14-f768-11eb-9a03-0242ac130003",
        name: "setState()",
      },
      {
        id: "94948270-f768-11eb-9a03-0242ac130003",
        name: "Updating Phase",
      },
      {
        id: "94948342-f768-11eb-9a03-0242ac130003",
        name: "Routing",
      },
      {
        id: "94948400-f768-11eb-9a03-0242ac130003",
        name: "API Calls",
      },
    ],
  },
  {
    id: "e093c08a-a2ae-413a-814b-e7c83f5f2ac3",
    categoryId: "PROJECT",
    title: "26 MAY 2021",
    projectTitle: "Nxt Trendz",
    description:
      "Nxt Trendz application is an E-commerce application like Amazon, Flipkart where users can log in and see the list of products with search, filters, sort by, etc.",
    imageUrl: "https://assets.ccbp.in/frontend/react-js/nxt-trendz-img.png",
    duration: "6 hrs",
    projectUrl: "https://nxtz.ccbp.tech/",
  },
];
const skillsList = [
  { id: 2, name: "HTML", catgory: "prime" },
  { id: 4, name: "CSS", catgory: "even" },
  { id: 9, name: "BOOTSTRAP", catgory: "odd" },
  { id: 6, name: "JAVASCRIPT", catgory: "even" },
  { id: 5, name: "REACT JS", catgory: "prime" },
  { id: 1, name: "REDUX", catgory: "odd" },
  { id: 7, name: "NODE JS", catgory: "prime" },
  { id: 8, name: "EXPRESS JS", catgory: "even" },
  { id: 3, name: "JAVA", catgory: "prime" },
  { id: 10, name: "MONGODB", catgory: "even" },
  { id: 11, name: "MYSQL", catgory: "prime" },
  { id: 12, name: "SQLITE", catgory: "even" },
];

const Home = () => {
  const classNameSelect = (id) => {
    if (id <= 1) {
      return "neither even nor odd";
    } else if (id === 2) {
      return "prime";
    } else if (id % 2 === 0) {
      return "even";
    } else {
      for (let i = 3; i <= Math.sqrt(id); i += 2) {
        if (id % i === 0) {
          return "neither even nor odd";
        }
      }
      return "prime";
    }
  };

  const percentagePrinter = (cat) => {
    if (cat === "prime") {
      return "85%";
    } else if (cat === "even") {
      return "75%";
    } else {
      return "65%";
    }
  };
  const onFormSubmit = () => {
    const mailtoUrl = "mailto:kiranban0011@gmail.com";

    window.location.href = mailtoUrl;
  };

  return (
    <>
      <Header />
      <div className="entry-container">
        <div className="main-container" id="home">
          <div className="home-content">
            <h1 className="name">Hi, i'm Kiran Bandla</h1>
            <p className="sw-role">Web Developer</p>
            <p className="jd-desc">
              I am a dedicated and passionate aspiring web developer on a
              journey to transform my love for coding into a fulfilling career.
              With a solid foundation in programming languages and a keen eye
              for problem-solving, I'm committed to crafting efficient and
              innovative software solutions. My personal projects and coursework
              have equipped me with the skills and knowledge necessary to thrive
              in the dynamic field of software development.
            </p>
            <div className="buttons-rt">
              <Link
                to="projects"
                smooth={true}
                offset={-100}
                duration={1000}
                className="hire-btn link-btn"
              >
                Hire me
              </Link>

              <Link
                to="contact "
                smooth={true}
                offset={-100}
                duration={1000}
                className="talk-btn link-btn"
              >
                Let's talk
              </Link>
            </div>
          </div>
          <div className="image-container-cm">
            <img
              src="https://www.zdnet.com/a/img/resize/a4c8436e7e3adf6dfb14266ca1aa83b8157ad0c2/2021/07/19/8a337c80-5ed6-43a1-98fb-b981d420890f/programming-languages-shutterstock-1680857539.jpg?auto=webp&fit=crop&height=675&width=1200"
              alt="software"
              className="image-comp"
            />
          </div>
        </div>
        <div className="project-container" id="projects">
          <h1 className="projects-head" id="#proj">
            MY PROJECTS
          </h1>
          <VerticalTimeline>
            {timelineItemsList.map((item, index) => (
              <VerticalTimelineElement
                key={item.id}
                dateClassName="date"
                iconStyle={{
                  background: index % 2 === 0 ? "#db03fc" : "#3498db",
                  color: "#fff",
                }}
                icon={
                  <i className="fas fa-certificate">
                    <BiDirections />
                  </i>
                }
                className="virtical-timelinecmp"
              >
                {item.categoryId === "COURSE" ? (
                  <div>
                    <h3 className="card-title-cp">{item.courseTitle}</h3>
                    <p>{item.description}</p>
                    <p className="duration-in-days">
                      {item.duration}{" "}
                      <span>
                        <FaCalendarCheck className="days-icon" />
                      </span>
                    </p>
                    <ul className="list-techs-div">
                      {item.tagsList.map((tag) => (
                        <li key={tag.id} className="list-skills">
                          {tag.name}
                        </li>
                      ))}
                    </ul>
                  </div>
                ) : (
                  <div>
                    <img
                      src={item.imageUrl}
                      alt="project"
                      className="control-image"
                    />
                    <h3 className="card-title-cp">{item.projectTitle}</h3>
                    <p>{item.description}</p>

                    <button type="button" className="visit-button">
                      <a
                        href={item.projectUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Visit Project
                      </a>
                    </button>
                  </div>
                )}
              </VerticalTimelineElement>
            ))}
          </VerticalTimeline>
        </div>
        <div className="skills-container-nv" id="skills">
          <h1 className="head-skill-n">SKILLS</h1>
          <ul>
            {skillsList.map((skill) => (
              <li key={skill.id} className="skill-list">
                <p className="skills-names">{skill.name}</p>
                <div className="percentage">
                  <p className={`${classNameSelect(skill.id)}`}>{}</p>
                  <p className="numer-per">
                    {percentagePrinter(skill.catgory)}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>
        <div className="about-container" id="about">
          <h1 className="about-heading">
            About Me <span className="exclamation-mark-a">!</span>
          </h1>
          <div className="abut-cont-pos">
            <div className="image-container-profile">
              <img src={myProfile} alt="profile" className="profile-image" />
            </div>
            <p className="about-desc">
              I'm a software developer with a flair for problem-solving and a
              love for clean, efficient code. Experienced in multiple languages
              and passionate about staying up-to-date in the tech world. I
              thrive on challenges and collaboration to create impactful
              software solutions
            </p>
            <p className="wht-wht">Here's who i am and What id do</p>
            <div className="buttons-about">
              <button type="button" className="buttons-ab-n">
                <a
                  href="https://drive.google.com/file/d/1BJWhrUKT3ux8MbbhhQowfwJDwAZnt-kn/view?usp=drive_link"
                  target="__blank"
                >
                  RESUME/CV
                </a>
              </button>
              <button type="button" className="buttons-ab-n">
                <a href="https://github.com/Kiran19122001" target="__blank">
                  GIT HUB
                </a>
              </button>
            </div>
          </div>
        </div>
        <div className="contact-container-a" id="contact ">
          <h1 className="projects-head" id="cont">
            Contact Me
          </h1>
          <form method="post" className="contact-form" onSubmit={onFormSubmit}>
            <div className="form-group">
              <label htmlFor="name" className="labels-c-t">
                Name:
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className="inputs-c-t"
                placeholder="Enter name"
              />
            </div>
            <div className="form-group">
              <label htmlFor="email" className="labels-c-t">
                Email:
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="inputs-c-t"
                placeholder="Enter email address"
              />
            </div>
            <div className="form-group mes">
              <label htmlFor="message" className="labels-c-t">
                Message:
              </label>
              <textarea
                id="message"
                name="message"
                className="meassege-c-t"
              ></textarea>
            </div>
            <button type="submit" className="submit-c-t">
              Submit
            </button>
          </form>
        </div>
        <footer className="footer-div">
          <p
            style={{ color: "white" }}
          >{`Footer${"~"}Kiranban0011@gamil.com`}</p>
          <ul className="footer-ul">
            <li className="footer-list">
              <a
                href="https://www.linkedin.com/in/kiran-bandla-a1b16b241/"
                target="__blank"
              >
                <FaLinkedin />
              </a>
            </li>
            <li className="footer-list">
              <a
                href="https://www.instagram.com/kittu____2001/"
                target="__blank"
              >
                <FaInstagramSquare />
              </a>
            </li>
            <li className="footer-list">
              <a href="https://github.com/Kiran19122001" target="__blank">
                <FaGithub />
              </a>
            </li>
            <li className="footer-list">
              <a href="https://www.facebook.com/kittu.mahe.5/" target="__blank">
                <FaFacebook />
              </a>
            </li>
          </ul>
        </footer>
      </div>
    </>
  );
};

export default Home;
