import React from 'react';
import Navigation from './components/Navigation';
import BackgroundVideo from './components/BackgroundVideo';
import Section from './components/Section';
import TypeWriter from './components/TypeWriter';
import profileImage from './images/profile.png'; 
import workshopImage from './images/workshop.png'; 
import astroImage from './images/asro1.webp'; 
import airhopImage from './images/areoplane.jpeg'; 
import { 
  Github, 
  Linkedin, 
  Mail, 
  Code, 
  Briefcase, 
  Coffee, 
  ExternalLink,
  FileCode, // Java
  Terminal, // Python
  FileJson, // JavaScript
  Globe, // Django
  Atom, // React
  FileType2, // HTML
  Palette, // CSS
  Database, // MySQL
  CircleDot, // MongoDB
  GitBranch // Git
} from 'lucide-react';


function App() {
  return (
    <div className="min-h-screen text-white relative">
      {/* Background Video */}
      <BackgroundVideo />
      
      {/* Navigation */}
      <Navigation />
      
      {/* Hero Section */}
      <Section id="home" title="" className="flex items-center justify-center min-h-screen text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-6xl font-bold mb-4 animate-fade-in">
            <span className="text-gradient-im">I'm</span>
            <span className="text-gradient-name"> Sandeep Chinnaboina</span>
          </h1>
          <div className="text-xl text-gray-300 mb-6 h-8 animate-fade-in-delay">
            <TypeWriter
              words={[
                { text: "Full Stack Developer", colorClass: "text-red-500" },
                { text: "Data Science Enthusiast", colorClass: "text-green-500" },
                { text: "Problem Solver", colorClass: "text-yellow-500" },
                { text: "Tech Innovator", colorClass: "text-purple-500" },
              ]}
              typingSpeed={80}
              deletingSpeed={40}
              delayBetweenWords={2500}
            />
          </div>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto text-lg leading-relaxed tracking-wide">
            "Transforming ideas into impactful digital solutions. Passionate about building innovative web applications that inspire and drive change."
          </p>
          <div className="flex justify-center space-x-6 mb-12">
            <a href="https://github.com/Sandeepchinnaboina0208/" target="_blank" rel="noopener noreferrer"
              className="text-gray-300 hover:text-white transition-colors duration-300 transform hover:scale-125">
              <Github size={24} />
            </a>
            <a href="https://www.linkedin.com/in/sandeep-chinnaboina-505329286/" target="_blank" rel="noopener noreferrer"
              className="text-gray-300 hover:text-white transition-colors duration-300 transform hover:scale-125">
              <Linkedin size={24} />
            </a>
            <a href="mailto:2200031527cseh@gmail.com"
              className="text-gray-300 hover:text-white transition-colors duration-300 transform hover:scale-125">
              <Mail size={24} />
            </a>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto animate-fade-in-delay-3">
      <div className="bg-gray-800/30 backdrop-blur-sm p-6 rounded-lg hover:bg-gray-800/50 transition-all duration-300">
        <Code className="w-8 h-8 mb-3 mx-auto text-blue-400" />
        <h3 className="font-semibold mb-2 text-lg">Clean Code</h3>
        <p className="text-sm text-gray-400">Writing maintainable and scalable solutions</p>
      </div>
      <div className="bg-gray-800/30 backdrop-blur-sm p-6 rounded-lg hover:bg-gray-800/50 transition-all duration-300">
        <Briefcase className="w-8 h-8 mb-3 mx-auto text-blue-400" />
        <h3 className="font-semibold mb-2 text-lg">Professional</h3>
        <p className="text-sm text-gray-400">5+ years of industry experience</p>
      </div>
      <div className="bg-gray-800/30 backdrop-blur-sm p-6 rounded-lg hover:bg-gray-800/50 transition-all duration-300">
        <Coffee className="w-8 h-8 mb-3 mx-auto text-blue-400" />
        <h3 className="font-semibold mb-2 text-lg">Passionate</h3>
        <p className="text-sm text-gray-400">Committed to continuous learning</p>
      </div>
      </div>
        </div>
      </Section>

     {/* About Section */}
<Section id="about-me" title="About Me" className="py-16 bg-black-900">
<div className="flex justify-center">
  <div className="container mx-auto grid lg:grid-cols-2 gap-12 items-center px-6 md:px-12">
    {/* Image Section */}
    <div className="flex justify-center relative">
      <img
        src="/src/images/profile.png"
        alt="Profile"
        className="w-80 h-80 md:w-96 md:h-96 object-cover rounded-full shadow-lg border-4 border-yellow-500 transform hover:scale-105 transition-transform duration-300"
      />
      <div className="absolute -bottom-4 -right-4 bg-gradient-to-r from-pink-500 to-yellow-500 rounded-full w-20 h-20 flex items-center justify-center text-white font-semibold text-xl shadow-lg">
        Hello!
    </div>

    </div>
    
    {/* Text Section */}
    <div>
    <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-yellow-500 mb-4">
         Meet Sandeep Chinnaboina
    </h2>

      <p className="text-lg text-gray-300 mb-6 leading-relaxed">
        I'm a driven and enthusiastic full-stack developer with expertise in building dynamic and user-friendly web applications. With proficiency in technologies like React, Django, and cloud-based solutions, I love transforming complex ideas into seamless digital experiences.
      </p>
      <p className="text-lg text-gray-300 mb-6 leading-relaxed">
        Beyond coding, I enjoy exploring emerging technologies, mentoring aspiring developers, and contributing to open-source projects. I'm passionate about creating impactful solutions that make a difference in the tech community.
      </p>
      <div className="flex space-x-4">
       
      </div>
    </div>
  </div>
  </div>
</Section>


     {/* Projects Section */}
     <Section id="projects" title="Featured Projects">
  <div className="grid grid-cols-1 md:grid-cols-2 gap-8"> {/* Two cards per column */}
    {[
      {
        id: 1,
        title: "Astrology Prediction",
        description: "A web app to prevent proxy attendance using QR technology, built with Django.",
        image: "/src/images/asro1.webp",
        projectLink: "https://github.com/Sandeepchinnaboina0208/AstrologyPredictions",
        githubLink: "https://github.com/Sandeepchinnaboina0208/AstrologyPredictions",
      },
      {
        id: 2,
        title: "Airline Reservation System",
        description: "A React-based system for seamless flight booking and management.",
        image: "/src/images/areoplane.jpeg",
        projectLink: "https://github.com/Sandeepchinnaboina0208/Airline-Reservation-Frontend",
        githubLink: "https://github.com/Sandeepchinnaboina0208/Airline-Reservation-Frontend",
      },
      {
        id: 3,
        title: "Online Workshop Management",
        description: "A Java Full Stack solution for scheduling and managing workshops.",
        image: "/src/images/workshop.png",
        projectLink: "https://github.com/Sandeepchinnaboina0208/WMS_Frontend",
        githubLink: "https://github.com/Sandeepchinnaboina0208/WMS_Frontend",
      },
    ].map((project) => (
      <div
        key={project.id}
        className="bg-gray-800/50 backdrop-blur-md rounded-lg overflow-hidden hover:scale-105 transform transition-all duration-300 shadow-lg"
      >
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-56 object-cover" // Adjusted image size
        />
        <div className="p-6">
          <h3 className="text-2xl font-bold text-white mb-2">{project.title}</h3>
          <p className="text-gray-300 mb-4">{project.description}</p>
          <div className="flex justify-between items-center">
            <a
              href={project.projectLink}
              className="text-blue-400 hover:text-blue-300 flex items-center gap-2"
            >
              View Project <ExternalLink size={16} />
            </a>
            <a href={project.githubLink} className="text-gray-400 hover:text-white">
              <Github size={20} />
            </a>
          </div>
        </div>
      </div>
    ))}
  </div>
</Section>





{/* Skills Section */}
<Section id="skills" title="Skills">
  <div className="flex justify-center">
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
      {[
        { icon: FileCode, name: 'Java', color: 'text-red-400' },
        { icon: Terminal, name: 'Python', color: 'text-yellow-400' },
        { icon: FileJson, name: 'JavaScript', color: 'text-yellow-300' },
        { icon: Globe, name: 'Django', color: 'text-green-500' },
        { icon: Atom, name: 'React.js', color: 'text-blue-400' },
        { icon: FileType2, name: 'HTML', color: 'text-orange-500' },
        { icon: Palette, name: 'CSS', color: 'text-blue-500' },
        { icon: Database, name: 'MySQL', color: 'text-blue-300' },
        { icon: CircleDot, name: 'MongoDB', color: 'text-green-400' },
        { icon: GitBranch, name: 'Git', color: 'text-orange-400' },
      ].map((skill) => (
        <div
          key={skill.name}
          className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-6 text-center hover:bg-gray-700/50 transition-all duration-300 group"
        >
          <skill.icon
            className={`w-16 h-16 mx-auto mb-4 ${skill.color} group-hover:scale-110 transition-all duration-300`}
          />
          <h3 className="text-lg font-semibold">{skill.name}</h3>
        </div>
      ))}
    </div>
  </div>
</Section>

{/* Certifications Section */}
<Section id="certifications" title="Certifications">
  <div className="grid grid-cols-1 md:grid-cols-1 gap-8">
  <div className="relative bg-gray-800/50 backdrop-blur-md p-6 rounded-lg min-h-[200px] w-[60%] mx-auto transition-transform transform hover:scale-105 hover:shadow-lg animate__animated animate__fadeIn animate__delay-0.5s">
  <h3 className="text-xl font-semibold text-yellow-500 mb-4">Red Hat Certified Enterprise Application Developer</h3>
  <p className="text-gray-300">Issue Date : September 23, 2024</p>
  <p className="text-gray-300">Expired Date : September 23, 2027</p>
  <a 
    href="https://www.credly.com/badges/675b0c0e-651b-4022-a414-83835e99c0da/" 
    target="_blank" 
    rel="noopener noreferrer" 
    className="flex items-center text-sm text-yellow-400 hover:underline absolute bottom-4 right-4"
  >
    Certification link
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      className="w-4 h-4 ml-1 text-yellow-400" 
      fill="none" 
      viewBox="0 0 24 24" 
      stroke="currentColor"
    >
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h5m0 0v5m0-5L10 17m0 0H5m5 0v5" />
    </svg>
  </a>
</div>


<div className="relative bg-gray-800/50 backdrop-blur-md p-6 rounded-lg min-h-[200px] w-[60%] mx-auto transition-transform transform hover:scale-105 hover:shadow-lg animate__animated animate__fadeIn animate__delay-0.5s">
  <h3 className="text-xl font-semibold text-yellow-500 mb-4">Automation Anywhere Certified Essentials RPA Professional</h3>
  <p className="text-gray-300">Issued Date : September 27, 2024</p>
  <a 
    href="https://certificates.automationanywhere.com/5f394fa5-eeaf-4164-afcf-e055b0fa6caf##gs.fnkyiw" 
    target="_blank" 
    rel="noopener noreferrer" 
    className="flex items-center text-sm text-yellow-400 hover:underline absolute bottom-4 right-4"
  >
    Certification link
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      className="w-4 h-4 ml-1 text-yellow-400" 
      fill="none" 
      viewBox="0 0 24 24" 
      stroke="currentColor"
    >
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h5m0 0v5m0-5L10 17m0 0H5m5 0v5" />
    </svg>
  </a>
</div>


<div className="relative bg-gray-800/50 backdrop-blur-md p-6 rounded-lg min-h-[200px] w-[60%] mx-auto transition-transform transform hover:scale-105 hover:shadow-lg animate__animated animate__fadeIn animate__delay-0.5s">
  <h3 className="text-xl font-semibold text-yellow-500 mb-4">SQL(Basic) </h3>
  <p className="text-gray-300">Issued Date : May 17, 2024</p>
  <a 
    href="https://www.hackerrank.com/certificates/a76f39f2a4b5" 
    target="_blank" 
    rel="noopener noreferrer" 
    className="flex items-center text-sm text-yellow-400 hover:underline absolute bottom-4 right-4"
  >
    Certification link
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      className="w-4 h-4 ml-1 text-yellow-400" 
      fill="none" 
      viewBox="0 0 24 24" 
      stroke="currentColor"
    >
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h5m0 0v5m0-5L10 17m0 0H5m5 0v5" />
    </svg>
  </a>
</div>

    {/* Add more certifications in separate columns if needed */}
  </div>
</Section>





    </div>
  );
}

export default App;