import React from 'react';
// We'll use a library for the typewriter effect
import { TypeAnimation } from 'react-type-animation';
// And a library for nice, clean icons
import { Github, Linkedin, Mail, User, Code, Palette, PenTool, Server } from 'lucide-react';


// --- Project Card Component ---
const ProjectCard = ({ image, title, description, tags, link }) => {
  return (
    <div className="bg-gray-800 rounded-lg overflow-hidden transform hover:-translate-y-2 transition-transform duration-300 shadow-lg">
      <img src={image} alt={title} className="w-full h-56 object-cover" onError={(e) => { e.target.onerror = null; e.target.src='https://placehold.co/600x400/1a202c/76e4f7?text=Project'; }} />
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2 text-cyan-400">{title}</h3>
        <p className="text-gray-300 mb-4">{description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {tags.map(tag => (
            <span key={tag} className="bg-gray-700 text-cyan-400 text-xs font-semibold px-2.5 py-1 rounded-full">
              {tag}
            </span>
          ))}
        </div>
        {link && (
          <a href={link} className="text-white font-bold hover:underline" target="_blank" rel="noopener noreferrer">
            View Project &rarr;
          </a>
        )}
      </div>
    </div>
  );
};


// Main App Component
function App() {

  // --- Project Data ---
  const projects = [
    {
      image: '/project-saas-movers.jpg',
      title: 'SaaS for House Mover Business',
      description: 'A complete UX/UI design for a Software as a Service platform tailored for house moving businesses in the UK.',
      tags: ['UX Design', 'UI Design', 'SaaS', 'Figma'],
      link: '#'
    },
    {
      image: '/project-dan-inventory.jpg',
      title: 'Dan Inventory Management',
      description: 'Led the UX/UI design process for an inventory management system, focusing on usability and efficiency for warehouse staff.',
      tags: ['UX Research', 'UI Design', 'Web App'],
      link: '#'
    },
    {
      image: '/project-arhibu.jpg',
      title: 'Arhibu - Roommate Finder App',
      description: 'Designed the user experience and interface for a mobile and web application to help people find compatible roommates.',
      tags: ['Mobile App', 'Web App', 'UX/UI', 'Prototyping'],
      link: '#'
    },
  ];

  // --- Skills Data with Icons ---
  // Storing skills in an array makes it easier to manage and render.
  const skills = [
    { name: 'User Research & Personas', icon: <User className="w-5 h-5 mr-2 text-cyan-400" /> },
    { name: 'Wireframing & Prototyping', icon: <PenTool className="w-5 h-5 mr-2 text-cyan-400" /> },
    { name: 'Figma, Adobe XD, Sketch', icon: <Palette className="w-5 h-5 mr-2 text-cyan-400" /> },
    { name: 'HTML, CSS & JavaScript', icon: <Code className="w-5 h-5 mr-2 text-cyan-400" /> },
    { name: 'React & Tailwind CSS', icon: <Server className="w-5 h-5 mr-2 text-cyan-400" /> },
  ];

  return (
    <div className="bg-gray-900 text-white min-h-screen font-sans flex flex-col">
      
      {/* --- Navigation Bar --- */}
      <header className="p-4 md:p-6 sticky top-0 bg-gray-900/80 backdrop-blur-sm z-10">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl md:text-3xl font-bold text-cyan-400">Henok Niguse</h1>
          <nav>
            <ul className="flex space-x-4 md:space-x-6">
              <li><a href="#about" className="hover:text-cyan-400 transition-colors">About</a></li>
              <li><a href="#projects" className="hover:text-cyan-400 transition-colors">Projects</a></li>
              <li><a href="#contact" className="hover:text-cyan-400 transition-colors">Contact</a></li>
            </ul>
          </nav>
        </div>
      </header>

      <main className="flex-grow">
        {/* --- Hero Section --- */}
        <section id="hero" className="container mx-auto px-6 py-20 md:py-24 flex flex-col-reverse md:flex-row items-center gap-8 md:gap-12">
          <div className="flex-1 text-center md:text-left">
            {/* The TypeAnimation component is now back! */}
            <TypeAnimation
              sequence={[
                'UX/UI Designer',
                2000,
                'Creative Developer',
                2000,
                'Problem Solver',
                2000,
              ]}
              wrapper="h2"
              speed={50}
              className="text-4xl md:text-6xl font-extrabold leading-tight mb-4"
              repeat={Infinity}
            />
            <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto md:mx-0 mb-8">
              I design and build beautiful, intuitive, and responsive web experiences.
            </p>
            <a href="#projects" className="bg-cyan-500 hover:bg-cyan-600 text-white font-bold py-3 px-8 rounded-full transition-transform transform hover:scale-105 inline-block">
              View My Work
            </a>
          </div>
          <div className="flex-shrink-0">
            <img 
              src="/myphoto.jpg"
              alt="A portrait of Henok Niguse"
              className="w-64 h-64 md:w-80 md:h-80 rounded-full object-cover border-4 border-cyan-400 shadow-lg"
              onError={(e) => { e.target.onerror = null; e.target.src='https://placehold.co/400x400/1a202c/76e4f7?text=Error'; }}
            />
          </div>
        </section>

        {/* --- About Section --- */}
        <section id="about" className="bg-gray-800 py-20 md:py-24">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">About Me</h2>
            <div className="flex flex-col md:flex-row items-start gap-10 md:gap-16">
              <div className="md:w-2/3 text-center md:text-left">
                <p className="text-lg text-gray-300 mb-4">
                  Hello! I'm Henok, a passionate UX/UI designer with a love for creating clean, user-centric designs. My journey into the world of design started with a fascination for how people interact with technology, and it has grown into a career dedicated to making those interactions seamless and enjoyable.
                </p>
                <p className="text-lg text-gray-300">
                  While my primary expertise is in design, I'm also expanding my skills into front-end development to better understand and contribute to the entire product lifecycle. I believe that the best user experiences are born from a deep understanding of both design principles and technical implementation.
                </p>
              </div>
              <div className="md:w-1/3">
                <h3 className="text-2xl font-bold text-cyan-400 mb-4 text-center md:text-left">My Skills</h3>
                <ul className="space-y-3">
                  {skills.map(skill => (
                    <li key={skill.name} className="bg-gray-700 p-3 rounded-md flex items-center">
                      {skill.icon}
                      <span>{skill.name}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* --- Projects Section --- */}
        <section id="projects" className="py-20 md:py-24">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">My Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map(project => (
                <ProjectCard 
                  key={project.title}
                  image={project.image}
                  title={project.title}
                  description={project.description}
                  tags={project.tags}
                  link={project.link}
                />
              ))}
            </div>
          </div>
        </section>

        {/* --- Contact Section --- */}
        <section id="contact" className="bg-gray-800 py-20 md:py-24">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Get In Touch</h2>
            <p className="text-lg text-gray-300 mb-8 max-w-xl mx-auto">
              I'm currently open to new opportunities and collaborations. If you have a project in mind or just want to say hello, feel free to reach out!
            </p>
            <a 
              href="mailto:your.email@example.com"
              className="bg-cyan-500 hover:bg-cyan-600 text-white font-bold py-3 px-8 rounded-full transition-transform transform hover:scale-105 inline-block"
            >
              Email Me
            </a>
          </div>
        </section>
      </main>

      {/* --- Footer --- */}
      <footer className="bg-gray-900 py-6">
        <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between text-gray-400">
          <div className="flex space-x-4 mb-4 md:mb-0">
            <a href="#" className="hover:text-cyan-400 transition-colors"><Github /></a>
            <a href="#" className="hover:text-cyan-400 transition-colors"><Linkedin /></a>
            <a href="mailto:your.email@example.com" className="hover:text-cyan-400 transition-colors"><Mail /></a>
          </div>
          <p>&copy; 2024 Henok Niguse. All Rights Reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
