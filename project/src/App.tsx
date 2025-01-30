import React, { useState } from 'react';
import { Github, Linkedin, Mail, GraduationCap, Briefcase, Brain, ChevronRight, Award, MessageSquare, Code, Users, LineChart, Lightbulb } from 'lucide-react';

function App() {
  const [activeTab, setActiveTab] = useState('medical');

  const workCategories = {
    medical: {
      title: "Medical Devices",
      projects: [
        {
          title: "Epidural Guidance System",
          period: "UBC, 2009–2014",
          description: "Developed a real-time needle tracking system for ultrasound-guided procedures, achieving sub-millimeter accuracy."
        },
        {
          title: "Radiation Therapy for Prostate Cancer",
          period: "Stanford, 2015–2016",
          description: "Designed motion-tracking systems using ultrasound, achieving 0.1 ± 0.6 mm alignment accuracy to protect healthy tissues."
        },
        {
          title: "Robotic Surgery",
          period: "Think Surgical, 2016–2017",
          description: "Built 3D segmentation algorithms for robotic-assisted hip and knee replacements, improving precision and alignment."
        },
        {
          title: "AI Radiology Co-Pilot",
          period: "Google, 2019–2023",
          description: "Created AI tools for lung and breast cancer detection, improving diagnostic sensitivity by +7.6%. Published in Radiology Advances' Best of 2024."
        }
      ]
    },
    robotics: {
      title: "Robotics",
      projects: [
        {
          title: "Industrial Robotics",
          period: "Behsaman Co., 2007–2009",
          description: "Led multidisciplinary teams to design high-precision industrial robots using embedded systems."
        },
        {
          title: "Autonomous Surgical Robots",
          period: "Think Surgical, 2016–2017",
          description: "Built QNX-based software to enable sub-millimeter precision in robotic surgeries."
        }
      ]
    },
    vision: {
      title: "Computer Vision",
      projects: [
        {
          title: "Nodule Detection in CT",
          period: "Google, 2019–2023",
          description: "Achieved AUCs of 0.754 and 0.885, enhancing workflows for lung cancer diagnosis."
        },
        {
          title: "Eye Gaze Tracking",
          period: "UBC/NMotive, 2012–2013",
          description: "Invented a system for Alzheimer's detection, securing a $15,000 grant and recognition as a Johnson & Johnson finalist."
        },
        {
          title: "Air Quality Modeling",
          period: "Google, 2022",
          description: "Led a team of 6+ to build U-Net models for NO2 prediction using satellite and traffic data."
        }
      ]
    },
    nlp: {
      title: "NLP",
      projects: [
        {
          title: "Pathology BERT",
          period: "Google, 2019–2023",
          description: "Fine-tuned BioBERT models, cutting labeling costs by 50% for healthcare applications."
        },
        {
          title: "RAG for Yora AI",
          period: "Yora AI Corp., 2023–2024",
          description: "Built retrieval-augmented systems for on-device personalized NLP applications."
        }
      ]
    },
    ranking: {
      title: "Ranking Systems",
      projects: [
        {
          title: "Music Retrieval and Ranking",
          period: "Amazon, 2017–2019",
          description: "Designed deep learning rankers for Amazon Music Search, handling 10,000+ requests/second."
        },
        {
          title: "Ads Ranking",
          period: "Meta, 2024–Present",
          description: "Built privacy-preserving ML models for large-scale ad personalization and relevance."
        }
      ]
    },
    humanai: {
      title: "Human-AI Interaction",
      projects: [
        {
          title: "Eye Gaze Tracking",
          period: "UBC/NMotive, 2012–2013",
          description: "Invented an eye-gaze tracking system, a key enabler for human-AI interaction."
        },
        {
          title: "Radiology Co-Pilot",
          period: "Google, 2019–2023",
          description: "Built explainable AI tools that improve cancer diagnosis workflows and integrate seamlessly into radiology settings."
        }
      ]
    },
    business: {
      title: "Business and Entrepreneurship",
      projects: [
        {
          title: "University of British Columbia",
          period: "2013",
          description: "Minor in Business & Engineering Management: Acquired foundational knowledge in business strategy and innovation, complementing technical expertise."
        },
        {
          title: "NMotive Research",
          period: "2012–2013",
          description: "Co-founded a company developing eye-gaze tracking systems, securing funding and global recognition."
        },
        {
          title: "Yora AI",
          period: "2023–2024",
          description: "Founded a company focused on ranking AI solutions, delivering secure, personalized solutions to users globally."
        }
      ]
    },
    math: {
      title: "Mathematics",
      projects: [
        {
          title: "Inverse Problem Solving",
          period: "K.N. Toosi University, 2007–2009",
          description: "Created a semi-wavelet-based inverse problem solution for diffuse optical tomography."
        },
        {
          title: "3D Calibration Techniques",
          period: "UBC, 2009–2014",
          description: "Designed closed-form solutions for ultrasound calibration, achieving sub-millimeter accuracy and earning international recognition."
        }
      ]
    }
  };

  const testimonials = [
    {
      category: "Leadership and Mentorship",
      quotes: [
        {
          text: "Ryan is an exceptional technical leader who combines deep expertise in machine learning and healthcare with a collaborative, team-focused approach. His ability to deliver impactful results while mentoring others sets him apart.",
          author: "Gautam Prasad",
          role: "Manager at Google"
        },
        {
          text: "Ryan was my mentor at Google for two years. He came to work every day with a positive attitude and truly cared about the well-being of his teammates. It was an honor to work with Ryan, not only for his technical skills but also for the supportive presence he provided to the team.",
          author: "Kendall Park",
          role: "Google"
        },
        {
          text: "Ryan is kind, caring, and thoughtful as a mentor. He provides guidance, connects you to the right resources, and stays engaged to ensure success. Working under his direction was one of the highlights of my career.",
          author: "Ryan Neph",
          role: "Researcher"
        }
      ]
    },
    {
      category: "Cross-Functional Collaboration",
      quotes: [
        {
          text: "Ryan effectively brought all stakeholders to the table to identify the required changes to an existing ML stack. His strong focus on timely outcomes, technical understanding, and outstanding team-player spirit were critical to the success of the project.",
          author: "Timo Kohlberger",
          role: "Collaborator"
        },
        {
          text: "Ryan's ability to coordinate multi-stakeholder efforts is remarkable. He led a team of engineers and scientists across Google to achieve milestones in air quality modeling, showcasing not just his technical expertise but his ability to communicate and influence effectively.",
          author: "Gautam Prasad",
          role: "Manager at Google"
        }
      ]
    },
    {
      category: "Technical Expertise and Innovation",
      quotes: [
        {
          text: "Ryan is one of the best scientists, engineers, and team players I've worked with. He combines deep technical expertise with a practical approach to solving real-world problems. His work in geospatial modeling and medical imaging was exceptional.",
          author: "An Zheng",
          role: "Google Health AI"
        },
        {
          text: "Ryan demonstrated exceptional technical skills and leadership abilities as the tech lead for lung cancer AI models. His contributions to NLP and multimodal modeling for clinical applications showcased his deep understanding of the healthcare domain.",
          author: "Marcin Sieniek",
          role: "Google Health AI"
        },
        {
          text: "Ryan is an extremely strong ML research engineer with expertise in building and fine-tuning complex ML models for healthcare applications. His drive, enthusiasm, and collegiate style make him an asset to any team.",
          author: "Shruthi Prabhakara",
          role: "Google"
        }
      ]
    },
    {
      category: "Work Ethic and Team Spirit",
      quotes: [
        {
          text: "Ryan consistently brought innovative ideas to the table and demonstrated impressive technical skills. He worked hard to create a welcoming environment and supported his teammates in achieving success.",
          author: "Daniel Golden",
          role: "Manager at Google"
        },
        {
          text: "Ryan was always positive and a real team player. He looked out for his teammates, especially junior engineers, and fostered a culture of collaboration and inclusivity.",
          author: "Varun Godbole",
          role: "Google"
        },
        {
          text: "Ryan has a rare combination of humility, work ethic, and quick learning ability. He's incredibly approachable and always willing to lend a helping hand. He's a brilliant engineer and a fantastic collaborator.",
          author: "Charles Lau",
          role: "MD, MBA, Google"
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800">
      {/* Navigation */}
      <nav className="fixed w-full bg-transparent backdrop-blur-sm z-10 p-6">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <h1 className="text-white text-xl font-light">Ryan Arman, PhD</h1>
          <div className="space-x-8">
            <a href="#home" className="text-gray-300 hover:text-white transition">Home</a>
            <a href="#about" className="text-gray-300 hover:text-white transition">About</a>
            <a href="#work" className="text-gray-300 hover:text-white transition">Work</a>
            <a href="#testimonials" className="text-gray-300 hover:text-white transition">Testimonials</a>
            <a href="#contact" className="text-gray-300 hover:text-white transition">Contact</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center justify-center px-4">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2072&q=80')] bg-cover bg-center opacity-20"></div>
        </div>
        
        <div className="relative max-w-4xl mx-auto text-center">
          <h2 className="text-6xl font-bold text-white mb-6">Ryan Arman</h2>
          <p className="text-2xl text-blue-400 mb-8">Transforming Healthcare, Robotics, AI, and Ranking Systems with Two Decades of Innovation and Leadership</p>
          <p className="text-xl text-gray-300 mb-12 leading-relaxed">
            Hi, I'm Ryan Arman (formerly Mohammad/Mohi/Ryan Najafi), a technical leader, innovator, and entrepreneur with over two decades of experience in machine learning, medical devices, human-AI interaction, robotics, and ranking systems. 
          </p>
          <p className="text-xl text-gray-300 mb-12 leading-relaxed">
            My journey spans groundbreaking contributions in healthcare AI, robotics, and ads ranking systems. I've built solutions that directly impact lives, from improving cancer diagnosis workflows to enabling precision in robotic surgery and optimizing large-scale ranking systems. 
            </p>     

          <div className="flex justify-center space-x-6 mb-12">
            <a href="#about" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg transition">
              Learn More About Me
            </a>
            <a href="#work" className="bg-gray-700 hover:bg-gray-600 text-white px-8 py-3 rounded-lg transition">
              Explore My Work
            </a>
            <a href="#contact" className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-lg transition">
              Get in Touch
            </a>
          </div>
          <div className="flex justify-center space-x-6">
            <a href="https://www.linkedin.com/in/rmnajafi/" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300">
              <Linkedin size={32} />
            </a>
            <a href="https://github.com/ryan-najafi" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-gray-300">
              <Github size={32} />
            </a>
            <a href="https://scholar.google.com/citations?user=8Ypm7kQAAAAJ&hl=en" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300">
              <GraduationCap size={32} />
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">About Me</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start mb-16">
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-gray-900 flex items-center">
                <GraduationCap className="mr-2" /> Personal Background
              </h3>

              <p className="text-gray-600 leading-relaxed">
                Born as Mohammad Najafi in Tehran, Iran, I later chose the name Ryan Arman to align with my personal and professional journey. This name reflects my Persian heritage and carries a meaning of strength and aspiration. It symbolizes my commitment to authenticity, embracing cultural roots while forging a new path.
              </p>
              <p className="text-gray-600 leading-relaxed">
                I combined my passion for real-world systems with technical expertise, working in computer hardware and electronics while pursuing my B.Sc. in Electrical Engineering. Motivated to create impactful innovations, I earned a Master's in Biomedical Engineering and, in 2009, moved to Canada for a Ph.D. at the University of British Columbia. There, I pivoted to medical imaging and robotics, inventing new ultrasound calibration methods that won the Best Paper Award at IPCAI (2012) and developing systems like an eye-gaze tracker for dementia detection, which became a Johnson & Johnson Cognition Challenge finalist (2013).
              </p>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1639815188546-c43c240ff4df?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2832&q=80"
                alt="Lake Bled with mountains and church"
                className="rounded-lg shadow-xl w-full h-[400px] object-cover"
              />
            </div>
          </div>

          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-gray-900 flex items-center">
              <Briefcase className="mr-2" /> Global Career Journey
            </h3>
            <ul className="space-y-4 text-gray-600">
              <li className="flex items-start">
                <ChevronRight className="mr-2 mt-1 text-blue-600 flex-shrink-0" />
                <span><strong>Stanford University:</strong> Postdoctoral researcher in Radiation Oncology, using ultrasound to track internal prostate motion during radiation therapy.</span>
              </li>
              <li className="flex items-start">
                <ChevronRight className="mr-2 mt-1 text-blue-600 flex-shrink-0" />
                <span><strong>Think Surgical:</strong> Proposed and developed a robot calibration system ensuring sub-millimeter precision for robotic surgeries.</span>
              </li>
              <li className="flex items-start">
                <ChevronRight className="mr-2 mt-1 text-blue-600 flex-shrink-0" />
                <span><strong>Amazon:</strong> Implemented a Deep Learning Ranker for Amazon Music Search and TA'd for Amazon ML University.</span>
              </li>
              <li className="flex items-start">
                <ChevronRight className="mr-2 mt-1 text-blue-600 flex-shrink-0" />
                <span><strong>Google:</strong> Developed a Radiology Co-Pilot for lung cancer diagnosis and led an Air Quality Modeling project for geospatial environmental health.</span>
              </li>
              <li className="flex items-start">
                <ChevronRight className="mr-2 mt-1 text-blue-600 flex-shrink-0" />
                <span><strong>Entrepreneurship:</strong> Founded Yora AI to bring ranking AI solutions to more people and use cases.</span>
              </li>
              <li className="flex items-start">
                <ChevronRight className="mr-2 mt-1 text-blue-600 flex-shrink-0" />
                <span><strong>Meta:</strong> Joined in May 2024 to develop ads ranking systems, building scalable and privacy-preserving ML models.</span>
              </li>
            </ul>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start mt-16">
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-gray-900 flex items-center">
                <Brain className="mr-2" /> Skills & Expertise
              </h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <h4 className="font-semibold text-gray-900">Machine Learning</h4>
                  <ul className="text-gray-600 space-y-1">
                    <li>Computer Vision</li>
                    <li>NLP</li>
                    <li>Robotics</li>
                    <li>Ranking Systems</li>
                  </ul>
                </div>
                <div className="space-y-2">
                  <h4 className="font-semibold text-gray-900">Programming</h4>
                  <ul className="text-gray-600 space-y-1">
                    <li>Python</li>
                    <li>C++</li>
                    <li>Java</li>
                    <li>SQL</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-gray-900 flex items-center">
                <Award className="mr-2" /> Recognition
              </h3>
              <ul className="space-y-4 text-gray-600">
                <li className="flex items-start">
                  <Award className="mr-2 mt-1 text-yellow-600 flex-shrink-0" />
                  <span>Best Paper Award: IPCAI (2012) for novel ultrasound calibration</span>
                </li>
                <li className="flex items-start">
                  <Award className="mr-2 mt-1 text-yellow-600 flex-shrink-0" />
                  <span>Best of Radiology Advances 2024: Recognized for breast cancer detection work</span>
                </li>
                <li className="flex items-start">
                  <Award className="mr-2 mt-1 text-yellow-600 flex-shrink-0" />
                  <span>$15,000 GRAND-NCE Commercialization Grant for NMotive Research</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Work Section */}
      <section id="work" className="py-20 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">Work & Projects</h2>
          
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {Object.entries(workCategories).map(([key, category]) => (
              <button
                key={key}
                onClick={() => setActiveTab(key)}
                className={`px-6 py-2 rounded-full transition ${
                  activeTab === key
                    ? 'bg-blue-600 text-white'
                    : 'bg-white text-gray-600 hover:bg-gray-50'
                }`}
              >
                {category.title}
              </button>
            ))}
          </div>

          <div className="bg-white rounded-lg shadow-xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-8">{workCategories[activeTab].title}</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {workCategories[activeTab].projects.map((project, index) => (
                <div key={index} className="border rounded-lg p-6 hover:shadow-lg transition">
                  <h4 className="text-xl font-semibold text-gray-900 mb-2">{project.title}</h4>
                  <p className="text-blue-600 mb-4">{project.period}</p>
                  <p className="text-gray-600">{project.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">What People Say</h2>
          
          {testimonials.map((category, index) => (
            <div key={index} className="mb-16 last:mb-0">
              <h3 className="text-2xl font-bold text-gray-900 mb-8">{category.category}</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {category.quotes.map((quote, qIndex) => (
                  <div key={qIndex} className="bg-gray-50 rounded-lg p-6 shadow-lg">
                    <p className="text-gray-600 mb-4 italic">"{quote.text}"</p>
                    <div className="text-gray-900 font-semibold">{quote.author}</div>
                    <div className="text-gray-500">{quote.role}</div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">Get in Touch</h2>
          
          <div className="max-w-2xl mx-auto">
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-gray-900">Let's Connect</h3>
              <p className="text-gray-600">
                I'm always interested in hearing about new opportunities, collaborations, 
                or just connecting with fellow innovators in the field.
              </p>
              <div className="flex space-x-8 justify-center mt-8">
                <a href="https://www.linkedin.com/in/rmnajafi/" target="_blank" rel="noopener noreferrer" className="flex items-center text-gray-600 hover:text-blue-600 group">
                  <Linkedin className="mr-2 group-hover:scale-110 transition-transform" size={24} /> 
                  <span>LinkedIn</span>
                </a>
                <a href="https://github.com/ryan-najafi" target="_blank" rel="noopener noreferrer" className="flex items-center text-gray-600 hover:text-blue-600 group">
                  <Github className="mr-2 group-hover:scale-110 transition-transform" size={24} /> 
                  <span>GitHub</span>
                </a>
                <a href="https://scholar.google.com/citations?user=8Ypm7kQAAAAJ&hl=en" target="_blank" rel="noopener noreferrer" className="flex items-center text-gray-600 hover:text-blue-600 group">
                  <GraduationCap className="mr-2 group-hover:scale-110 transition-transform" size={24} /> 
                  <span>Google Scholar</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;