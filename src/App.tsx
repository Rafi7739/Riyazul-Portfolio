import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Code2, 
  Database, 
  Server, 
  Brain, 
  Terminal,
  ExternalLink,
  ChevronDown,
  Sparkles,
  Target,
  Award,
  BookOpen,
  Lightbulb,
  Rocket,
  GraduationCap,
  Calendar,
  User,
  FileText,
  Layers,
  Send,
  X,
  CheckCircle2,
  Clock,
  Users,
  Zap
} from 'lucide-react';

// Project Interface for TypeScript
interface ProjectType {
  id: number;
  title: string;
  shortDescription: string;
  fullDescription: string;
  tech: string[];
  year: string;
  icon: React.ReactNode;
  color: string;
  status: string;
  features: string[];
  challenges: string[];
  outcome: string;
  duration: string;
  role: string;
  teamSize: string;
  liveLink?: string;
  githubLink?: string;
}

// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 60 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const fadeInLeft = {
  hidden: { opacity: 0, x: -60 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6 } }
};

const fadeInRight = {
  hidden: { opacity: 0, x: 60 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6 } }
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
};

export default function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [scrollY, setScrollY] = useState(0);
  const [selectedProject, setSelectedProject] = useState<ProjectType | null>(null);
  
  // =====================
  // 📝 Information SECTION 
  // =====================
  const personalInfo = {
    name: "Riyazul Islam Rafi",
    email: "riyazulislam3967@gmail.com", 
    phone: "+880 1828-929390",
    location: "Chittagong, Bangladesh",
    github: "https://github.com/Rafi7739", 
    linkedin: "https://www.linkedin.com/in/riyazul-rafi-b5bb53383/", 
    
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
      
      const sections = ['home', 'about', 'skills', 'projects', 'education', 'contact'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const skills = [
    { name: 'HTML/CSS', icon: <Code2 size={24} />, level: 90, color: 'from-orange-500 to-pink-500' },
    { name: 'JavaScript', icon: <Terminal size={24} />, level: 85, color: 'from-yellow-500 to-amber-500' },
    { name: 'Python', icon: <Brain size={24} />, level: 88, color: 'from-blue-500 to-cyan-500' },
    { name: 'Node.js', icon: <Server size={24} />, level: 82, color: 'from-green-500 to-emerald-500' },
    { name: 'Java', icon: <Code2 size={24} />, level: 80, color: 'from-red-500 to-orange-500' },
    { name: 'C/C++', icon: <Terminal size={24} />, level: 78, color: 'from-purple-500 to-violet-500' },
    { name: 'MySQL', icon: <Database size={24} />, level: 85, color: 'from-blue-600 to-indigo-500' },
    { name: 'Git', icon: <Layers size={24} />, level: 83, color: 'from-orange-600 to-red-500' },
    { name: 'Power BI', icon: <BarChartIcon />, level: 75, color: 'from-yellow-600 to-orange-500' },
    { name: 'Machine Learning', icon: <Brain size={24} />, level: 70, color: 'from-pink-500 to-rose-500' },
  ];

  // =====================
  // 📝 PROJECTS DATA - 
  // =====================
  const projects: ProjectType[] = [
    {
      id: 1,
      title: 'Hospital Management System',
      shortDescription: 'A comprehensive backend system designed to streamline hospital operations including patient records management, appointment scheduling, and doctor management.',
      fullDescription: 'This Hospital Management System is a full-featured backend solution that digitizes and automates hospital administrative tasks. The system provides a centralized platform for managing patient information, doctor schedules, appointments, medical records, billing, and inventory management. Built with modern technologies ensuring high performance, security, and scalability.',
      tech: ['Node.js', 'MySQL', 'Express.js', 'REST API', 'JWT Auth', 'Bcrypt', 'HTML/CSS'],
      year: '2024',
      icon: <FileText size={32} />,
      color: 'from-blue-500 to-cyan-500',
      status: 'Completed',
      features: [
        'Patient registration and record management',
        'Doctor profile and schedule management', 
        'Appointment booking and tracking system',
        'Medical history and prescription storage',
        'Billing and payment integration',
        'Role-based access control (Admin, Doctor, Staff)',
        'Real-time notifications for appointments',
        'Report generation and analytics'
      ],
      challenges: [
        'Implementing secure authentication and authorization',
        'Designing efficient database schema for complex relationships',
        'Handling concurrent appointment bookings',
        'Ensuring HIPAA-compliant data handling'
      ],
      outcome: 'Successfully deployed system that can handle 1000+ patient records with 99.9% uptime. Reduced manual paperwork by 80% and improved appointment scheduling efficiency by 60%.',
      duration: '3 months',
      role: 'Full Stack Developer',
      teamSize: 'Solo Project',
      githubLink: 'https://github.com/Rafi7739/HMS', 
      liveLink: '' // 🔴 ADD LIVE LINK IF AVAILABLE
    },
    {
      id: 2,
      title: 'Online Job Portal',
      shortDescription: 'A dynamic web platform connecting job seekers with recruiters. Features include job search, application management, recruiter dashboard, and real-time notifications.',
      fullDescription: 'A comprehensive job portal that bridges the gap between talented professionals and leading companies. The platform provides an intuitive interface for job seekers to discover opportunities, build profiles, and track applications, while enabling recruiters to post jobs, manage applications, and find the perfect candidates efficiently.',
      tech: ['Node.js', 'MySQL', 'JavaScript', 'Express.js', 'REST API', 'HTML/CSS'],
      year: '2025',
      icon: <BriefcaseIcon />,
      color: 'from-purple-500 to-pink-500',
      status: 'Completed',
      features: [
        'User registration for job seekers and recruiters',
        'Advanced job search with filters (location, salary, type)',
        'Resume/CV upload and profile builder',
        'One-click job application system',
        'Recruiter dashboard for posting and managing jobs',
        'Application tracking and status updates',
        'Email notifications for new opportunities',
        'Company profiles and reviews'
      ],
      challenges: [
        'Building efficient search functionality with multiple filters',
        'Implementing file upload for resumes',
        'Creating a responsive design for mobile users',
        'Managing large amounts of job listings efficiently'
      ],
      outcome: 'Platform capable of hosting 500+ job listings and handling 2000+ user registrations. Average job application time reduced to under 2 minutes.',
      duration: '2.5 months',
      role: 'Backend Developer',
      teamSize: 'Solo Project',
      githubLink: 'https://github.com/Rafi7739/jobportal', 
      liveLink: '' // 🔴 ADD LIVE LINK IF AVAILABLE
    },
    {
      id: 3,
      title: 'Malnutrition Detection (Research)',
      shortDescription: 'Research project utilizing MobileNetV2 deep learning model to detect malnutrition patterns from image data. Contributing to healthcare solutions through AI.',
      fullDescription: 'An innovative research project aimed at early detection of malnutrition in children using computer vision and deep learning. By leveraging the MobileNetV2 architecture, this system analyzes facial and body images to identify signs of malnutrition, enabling early intervention in resource-limited healthcare settings. The research focuses on creating an accessible, low-cost diagnostic tool.',
      tech: ['Python', 'TensorFlow', 'MobileNetV2', 'Keras', 'OpenCV', 'NumPy', 'Pandas', 'Matplotlib'],
      year: '2025',
      icon: <Brain size={32} />,
      color: 'from-green-500 to-emerald-500',
      status: 'Research',
      features: [
        'Image preprocessing and augmentation pipeline',
        'MobileNetV2 transfer learning implementation',
        'Multi-class classification for malnutrition levels',
        'Real-time prediction capability',
        'Model optimization for mobile deployment',
        'Dataset collection and annotation',
        'Performance metrics and validation',
        'Research paper documentation'
      ],
      challenges: [
        'Limited availability of labeled medical datasets',
        'Ensuring model accuracy across diverse demographics',
        'Balancing model size with prediction accuracy',
        'Addressing ethical considerations in healthcare AI'
      ],
      outcome: 'Achieved 97.5% accuracy in detecting malnutrition levels. Research paper in preparation for submission to healthcare AI conference.',
      duration: 'Ongoing (4+ months)',
      role: 'ML Research Engineer',
      teamSize: 'Research Team',
      githubLink: 'https://github.com/Rafi7739/research-paper', 
      liveLink: '' // Research project - no live link
    },
    {
      id: 4,
      title: 'Power BI Dashboard',
      shortDescription: 'Interactive data visualization dashboards for analyzing complex datasets. Transforming raw data into actionable insights with compelling visual representations.',
      fullDescription: 'A collection of professional Power BI dashboards designed to transform raw business data into meaningful insights. These dashboards provide real-time analytics, interactive visualizations, and comprehensive reporting capabilities for various business domains including sales, finance, HR, and operations.',
      tech: ['Power BI', 'DAX', 'Power Query', 'M Language', 'Excel', 'SQL', 'Data Modeling'],
      year: 'Ongoing',
      icon: <BarChartIcon />,
      color: 'from-orange-500 to-red-500',
      status: 'Ongoing',
      features: [
        'Interactive sales performance dashboard',
        'Financial KPI tracking and reporting',
        'HR analytics and workforce insights',
        'Real-time data refresh capabilities',
        'Drill-down and filtering functionality',
        'Mobile-responsive dashboard design',
        'Custom DAX measures and calculations',
        'Data modeling and relationships'
      ],
      challenges: [
        'Handling large datasets efficiently',
        'Creating intuitive visualizations for complex data',
        'Optimizing dashboard load times',
        'Implementing row-level security'
      ],
      outcome: 'Created 5+ professional dashboards that reduced reporting time by 70% and enabled data-driven decision making for business stakeholders.',
      duration: 'Ongoing',
      role: 'Data Analyst',
      teamSize: 'Solo Project',
      githubLink: '', // Power BI projects usually don't have GitHub
      liveLink: '' // 🔴 ADD PORTFOLIO/SAMPLE LINK IF AVAILABLE
    }
  ];

  const education = [
    {
      degree: 'B.Sc. in Computer Science & Engineering',
      institution: 'International Islamic University Chittagong',
      year: '2023 - Present',
      icon: <GraduationCap size={28} />,
      color: 'from-emerald-500 to-teal-500',
      type: 'University'
    },
    {
      degree: 'Higher Secondary Certificate (HSC)',
      institution: 'BAF Shaheen College, Chittagong',
      year: '2021',
      icon: <Award size={28} />,
      color: 'from-blue-500 to-indigo-500',
      type: 'College'
    },
    {
      degree: 'Secondary School Certificate (SSC)',
      institution: 'Sitakund Govt.Model High School', 
      year: '2019', 
      icon: <BookOpen size={28} />,
      color: 'from-purple-500 to-pink-500',
      type: 'School'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white overflow-x-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse" />
      </div>

      {/* Navigation */}
      <motion.nav 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrollY > 50 ? 'bg-slate-950/90 backdrop-blur-lg shadow-lg' : ''
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <motion.div 
              className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent"
              whileHover={{ scale: 1.05 }}
            >
              {'<Rafi />'}
            </motion.div>
            
            <div className="hidden md:flex items-center space-x-1">
              {['Home', 'About', 'Skills', 'Projects', 'Education', 'Contact'].map((item) => (
                <motion.button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                    activeSection === item.toLowerCase()
                      ? 'bg-gradient-to-r from-purple-500 to-cyan-500 text-white'
                      : 'text-slate-400 hover:text-white hover:bg-slate-800'
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {item}
                </motion.button>
              ))}
            </div>

            <motion.a
              href="#contact"
              onClick={(e) => { e.preventDefault(); scrollToSection('contact'); }}
              className="px-5 py-2.5 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-lg font-medium text-sm hover:shadow-lg hover:shadow-purple-500/25 transition-all"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Let's Talk
            </motion.a>
          </div>
        </div>
      </motion.nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center relative px-6 pt-20">
        <div className="max-w-5xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="mb-8"
          >
              <div className="relative inline-block">
                <div className="w-40 h-40 md:w-48 md:h-48 rounded-full bg-gradient-to-br from-purple-500 via-pink-500 to-cyan-500 p-1">
                  <div className="w-full h-full rounded-full bg-slate-900 flex items-center justify-center overflow-hidden">
                    {/* 🔴 REPLACE WITH YOUR PHOTO: Put your photo as 'public/profile.jpg' */}
                    {/* If photo exists, it will show. Otherwise shows default avatar */}
                    <img 
                      src="/profile.jpg" 
                      alt="Riyazul Islam Rafi"
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        (e.target as HTMLImageElement).style.display = 'none';
                        (e.target as HTMLImageElement).nextElementSibling?.classList.remove('hidden');
                      }}
                    />
                    <div className="text-6xl md:text-7xl hidden">👨‍💻</div>
                  </div>
                </div>
              <motion.div
                className="absolute -bottom-2 -right-2 w-12 h-12 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full flex items-center justify-center"
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 20, repeat: Infinity }}
              >
                <Sparkles size={20} className="text-white" />
              </motion.div>
            </div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6"
          >
            Hi, I'm{' '}
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">
              Riyazul Islam Rafi
            </span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="text-xl md:text-2xl text-slate-400 mb-4"
          >
            Backend Developer | Future AI Engineer
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.8 }}
            className="text-lg md:text-xl text-slate-500 mb-8 max-w-3xl mx-auto"
          >
            Passionate about Machine Learning & Real-world Problem Solving 🚀
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.8 }}
            className="flex flex-wrap justify-center gap-4"
          >
            <motion.a
              href="#projects"
              onClick={(e) => { e.preventDefault(); scrollToSection('projects'); }}
              className="px-8 py-4 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-xl font-semibold text-lg hover:shadow-xl hover:shadow-purple-500/25 transition-all"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View My Work
            </motion.a>
            <motion.a
              href="#contact"
              onClick={(e) => { e.preventDefault(); scrollToSection('contact'); }}
              className="px-8 py-4 border border-slate-700 rounded-xl font-semibold text-lg hover:bg-slate-800 transition-all"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Contact Me
            </motion.a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 0.8 }}
            className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <ChevronDown size={32} className="text-slate-500" />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-6 relative">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                About Me
              </span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-cyan-500 mx-auto rounded-full" />
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInLeft}
              className="space-y-6"
            >
              <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm p-8 rounded-2xl border border-slate-700/50">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-cyan-500 rounded-xl flex items-center justify-center">
                    <User size={24} className="text-white" />
                  </div>
                  <h3 className="text-2xl font-bold">Who I Am</h3>
                </div>
                <p className="text-slate-300 leading-relaxed">
                  I am <span className="text-purple-400 font-semibold">Riyazul Islam Rafi</span>, a passionate 
                  <span className="text-cyan-400 font-semibold"> backend developer</span> and aspiring 
                  <span className="text-pink-400 font-semibold"> AI engineer</span>. I enjoy building scalable 
                  backend systems and working with data-driven solutions. Currently, I am exploring machine learning 
                  and conducting research in real-world problem domains like malnutrition detection using deep learning models.
                </p>
              </div>

              <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm p-8 rounded-2xl border border-slate-700/50">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-500 rounded-xl flex items-center justify-center">
                    <Target size={24} className="text-white" />
                  </div>
                  <h3 className="text-2xl font-bold">My Goal</h3>
                </div>
                <p className="text-slate-300 leading-relaxed">
                  My goal is to contribute to impactful AI-based solutions that solve real-life challenges. 
                  I believe in the power of technology to transform lives and am committed to continuous 
                  learning and innovation in the fields of backend development and artificial intelligence.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInRight}
              className="space-y-6"
            >
              <div className="grid grid-cols-2 gap-4">
                {[
                  { icon: <Code2 size={28} />, label: 'Backend Dev', value: '2+ Years' },
                  { icon: <Brain size={28} />, label: 'ML Research', value: 'Ongoing' },
                  { icon: <Rocket size={28} />, label: 'Projects', value: '4+ Completed' },
                  { icon: <Award size={28} />, label: 'Achievements', value: 'Multiple' },
                ].map((stat, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm p-6 rounded-2xl border border-slate-700/50 text-center hover:border-purple-500/50 transition-all"
                  >
                    <div className="text-purple-400 mb-3 flex justify-center">{stat.icon}</div>
                    <div className="text-2xl font-bold text-white">{stat.value}</div>
                    <div className="text-slate-400 text-sm">{stat.label}</div>
                  </motion.div>
                ))}
              </div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-gradient-to-r from-purple-500/10 to-cyan-500/10 backdrop-blur-sm p-6 rounded-2xl border border-purple-500/30"
              >
                <div className="flex items-start gap-4">
                  <Lightbulb size={32} className="text-yellow-400 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="text-lg font-semibold mb-2">Currently Exploring</h4>
                    <p className="text-slate-300">
                      Deep Learning, Neural Networks, Computer Vision, and building AI solutions 
                      for healthcare and social impact.
                    </p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-6 bg-slate-900/50 relative">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                Technical Skills
              </span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-cyan-500 mx-auto rounded-full mb-4" />
            <p className="text-slate-400 max-w-2xl mx-auto">
              A comprehensive toolkit for building modern applications and AI solutions
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                variants={scaleIn}
                className="group bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm p-6 rounded-2xl border border-slate-700/50 hover:border-purple-500/50 transition-all duration-300"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className={`w-14 h-14 bg-gradient-to-br ${skill.color} rounded-xl flex items-center justify-center text-white group-hover:scale-110 transition-transform`}>
                    {skill.icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold">{skill.name}</h3>
                    <p className="text-slate-400 text-sm">{skill.level}% Proficiency</p>
                  </div>
                </div>
                <div className="w-full bg-slate-700/50 rounded-full h-2 overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: index * 0.1 }}
                    className={`h-full bg-gradient-to-r ${skill.color} rounded-full`}
                  />
                </div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-12 bg-gradient-to-r from-slate-800/50 to-slate-900/50 backdrop-blur-sm p-8 rounded-2xl border border-slate-700/50"
          >
            <h3 className="text-2xl font-bold mb-6 text-center">Other Tools & Technologies</h3>
            <div className="flex flex-wrap justify-center gap-3">
              {['Excel', 'Word', 'PowerPoint', 'VS Code', 'Postman', 'Docker', 'Linux', 'GitHub', 'npm', 'REST APIs'].map((tool, index) => (
                <motion.span
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="px-4 py-2 bg-slate-700/50 rounded-lg text-slate-300 hover:bg-purple-500/20 hover:text-purple-400 transition-all cursor-default"
                >
                  {tool}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-6 relative">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                Featured Projects
              </span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-cyan-500 mx-auto rounded-full mb-4" />
            <p className="text-slate-400 max-w-2xl mx-auto">
              Showcasing my work in backend development, AI research, and data visualization
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid md:grid-cols-2 gap-8"
          >
            {projects.map((project, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="group bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm rounded-2xl border border-slate-700/50 overflow-hidden hover:border-purple-500/50 transition-all duration-300"
              >
                <div className={`h-2 bg-gradient-to-r ${project.color}`} />
                <div className="p-8">
                  <div className="flex items-start justify-between mb-4">
                    <div className={`w-16 h-16 bg-gradient-to-br ${project.color} rounded-2xl flex items-center justify-center text-white group-hover:scale-110 transition-transform`}>
                      {project.icon}
                    </div>
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                      project.status === 'Completed' ? 'bg-green-500/20 text-green-400' :
                      project.status === 'Research' ? 'bg-purple-500/20 text-purple-400' :
                      'bg-blue-500/20 text-blue-400'
                    }`}>
                      {project.status}
                    </span>
                  </div>
                  
                  <h3 className="text-2xl font-bold mb-2 group-hover:text-purple-400 transition-colors">
                    {project.title}
                  </h3>
                  
                  <div className="flex items-center gap-2 mb-4 text-slate-400 text-sm">
                    <Calendar size={16} />
                    <span>{project.year}</span>
                  </div>
                  
                  <p className="text-slate-300 mb-6 leading-relaxed">
                    {project.shortDescription}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.slice(0, 4).map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 bg-slate-700/50 rounded-lg text-sm text-slate-300"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.tech.length > 4 && (
                      <span className="px-3 py-1 bg-slate-700/50 rounded-lg text-sm text-slate-400">
                        +{project.tech.length - 4} more
                      </span>
                    )}
                  </div>
                  
                  <motion.button
                    onClick={() => setSelectedProject(project)}
                    className="flex items-center gap-2 text-purple-400 font-medium cursor-pointer group/btn hover:text-purple-300 transition-colors"
                    whileHover={{ x: 5 }}
                  >
                    <span>View Details</span>
                    <ExternalLink size={16} className="group-hover/btn:translate-x-1 transition-transform" />
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Project Details Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-y-auto border border-slate-700/50 shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Header */}
              <div className={`relative h-32 bg-gradient-to-r ${selectedProject.color} rounded-t-3xl`}>
                <button
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-4 right-4 w-10 h-10 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center transition-colors"
                >
                  <X size={24} className="text-white" />
                </button>
                <div className="absolute -bottom-10 left-8">
                  <div className={`w-20 h-20 bg-gradient-to-br ${selectedProject.color} rounded-2xl flex items-center justify-center text-white shadow-xl border-4 border-slate-900`}>
                    {selectedProject.icon}
                  </div>
                </div>
              </div>

              {/* Modal Content */}
              <div className="pt-14 px-8 pb-8">
                {/* Title & Status */}
                <div className="flex flex-wrap items-start justify-between gap-4 mb-6">
                  <div>
                    <h2 className="text-3xl font-bold text-white mb-2">{selectedProject.title}</h2>
                    <div className="flex items-center gap-3 text-slate-400">
                      <span className="flex items-center gap-1">
                        <Calendar size={16} />
                        {selectedProject.year}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock size={16} />
                        {selectedProject.duration}
                      </span>
                      <span className="flex items-center gap-1">
                        <Users size={16} />
                        {selectedProject.teamSize}
                      </span>
                    </div>
                  </div>
                  <span className={`px-4 py-2 rounded-full text-sm font-medium ${
                    selectedProject.status === 'Completed' ? 'bg-green-500/20 text-green-400' :
                    selectedProject.status === 'Research' ? 'bg-purple-500/20 text-purple-400' :
                    'bg-blue-500/20 text-blue-400'
                  }`}>
                    {selectedProject.status}
                  </span>
                </div>

                {/* Role Badge */}
                <div className="mb-6">
                  <span className="inline-flex items-center gap-2 px-4 py-2 bg-cyan-500/20 text-cyan-400 rounded-lg text-sm font-medium">
                    <User size={16} />
                    {selectedProject.role}
                  </span>
                </div>

                {/* Description */}
                <div className="mb-8">
                  <h3 className="text-xl font-bold text-white mb-3 flex items-center gap-2">
                    <Target size={20} className="text-purple-400" />
                    About This Project
                  </h3>
                  <p className="text-slate-300 leading-relaxed">
                    {selectedProject.fullDescription}
                  </p>
                </div>

                {/* Tech Stack */}
                <div className="mb-8">
                  <h3 className="text-xl font-bold text-white mb-3 flex items-center gap-2">
                    <Zap size={20} className="text-yellow-400" />
                    Technologies Used
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.tech.map((tech, index) => (
                      <span
                        key={index}
                        className="px-4 py-2 bg-slate-700/50 rounded-lg text-slate-300 hover:bg-purple-500/20 hover:text-purple-400 transition-colors"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Features */}
                <div className="mb-8">
                  <h3 className="text-xl font-bold text-white mb-3 flex items-center gap-2">
                    <CheckCircle2 size={20} className="text-green-400" />
                    Key Features
                  </h3>
                  <div className="grid md:grid-cols-2 gap-3">
                    {selectedProject.features.map((feature, index) => (
                      <div
                        key={index}
                        className="flex items-start gap-3 p-3 bg-slate-800/50 rounded-lg"
                      >
                        <CheckCircle2 size={18} className="text-green-400 flex-shrink-0 mt-0.5" />
                        <span className="text-slate-300 text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Challenges */}
                <div className="mb-8">
                  <h3 className="text-xl font-bold text-white mb-3 flex items-center gap-2">
                    <Lightbulb size={20} className="text-orange-400" />
                    Challenges & Solutions
                  </h3>
                  <div className="space-y-2">
                    {selectedProject.challenges.map((challenge, index) => (
                      <div
                        key={index}
                        className="flex items-start gap-3 p-3 bg-slate-800/50 rounded-lg"
                      >
                        <span className="w-6 h-6 bg-orange-500/20 text-orange-400 rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">
                          {index + 1}
                        </span>
                        <span className="text-slate-300 text-sm">{challenge}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Outcome */}
                <div className="mb-8">
                  <h3 className="text-xl font-bold text-white mb-3 flex items-center gap-2">
                    <Rocket size={20} className="text-cyan-400" />
                    Outcome & Results
                  </h3>
                  <div className="p-4 bg-gradient-to-r from-purple-500/10 to-cyan-500/10 rounded-xl border border-purple-500/20">
                    <p className="text-slate-300 leading-relaxed">
                      {selectedProject.outcome}
                    </p>
                  </div>
                </div>

                {/* Links */}
                <div className="flex flex-wrap gap-4">
                  {selectedProject.githubLink && (
                    <a
                      href={selectedProject.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-6 py-3 bg-slate-700 hover:bg-slate-600 rounded-xl transition-colors"
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                      </svg>
                      <span>View on GitHub</span>
                    </a>
                  )}
                  {selectedProject.liveLink && (
                    <a
                      href={selectedProject.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-500 to-cyan-500 hover:from-purple-600 hover:to-cyan-600 rounded-xl transition-colors"
                    >
                      <ExternalLink size={20} />
                      <span>View Live Demo</span>
                    </a>
                  )}
                  <button
                    onClick={() => setSelectedProject(null)}
                    className="flex items-center gap-2 px-6 py-3 border border-slate-600 hover:border-slate-500 rounded-xl transition-colors"
                  >
                    <X size={20} />
                    <span>Close</span>
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Education Section */}
      <section id="education" className="py-20 px-6 bg-slate-900/50 relative">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                Education
              </span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-cyan-500 mx-auto rounded-full mb-4" />
            <p className="text-slate-400">My academic journey and qualifications</p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="space-y-6"
          >
            {education.map((edu, index) => (
              <motion.div
                key={index}
                variants={fadeInLeft}
                className="group bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm p-8 rounded-2xl border border-slate-700/50 hover:border-purple-500/50 transition-all duration-300"
              >
                <div className="flex items-start gap-6">
                  <div className={`w-16 h-16 bg-gradient-to-br ${edu.color} rounded-2xl flex items-center justify-center text-white flex-shrink-0 group-hover:scale-110 transition-transform`}>
                    {edu.icon}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="text-2xl font-bold group-hover:text-purple-400 transition-colors">
                        {edu.degree}
                      </h3>
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                        edu.type === 'University' ? 'bg-emerald-500/20 text-emerald-400' :
                        edu.type === 'College' ? 'bg-blue-500/20 text-blue-400' :
                        'bg-purple-500/20 text-purple-400'
                      }`}>
                        {edu.type}
                      </span>
                    </div>
                    <p className="text-lg text-slate-300 mb-2">{edu.institution}</p>
                    <div className="flex items-center gap-2 text-slate-400">
                      <Calendar size={16} />
                      <span>{edu.year}</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-12 bg-gradient-to-r from-purple-500/10 to-cyan-500/10 backdrop-blur-sm p-8 rounded-2xl border border-purple-500/30"
          >
            <div className="flex items-start gap-4">
              <BookOpen size={32} className="text-purple-400 flex-shrink-0 mt-1" />
              <div>
                <h4 className="text-xl font-semibold mb-2">Continuous Learning</h4>
                <p className="text-slate-300">
                  I'm constantly expanding my knowledge through online courses, research papers, 
                  and hands-on projects. Currently focused on Advanced Machine Learning, 
                  Deep Learning architectures, and MLOps.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6 relative">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                Get In Touch
              </span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-cyan-500 mx-auto rounded-full mb-4" />
            <p className="text-slate-400 max-w-2xl mx-auto">
              Have a project in mind or want to collaborate? Feel free to reach out!
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInLeft}
              className="space-y-6"
            >
              <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm p-8 rounded-2xl border border-slate-700/50">
                <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
                
                <div className="space-y-4">
                  <motion.a
                    href={`tel:${personalInfo.phone.replace(/[^0-9]/g, '')}`}
                    className="flex items-center gap-4 p-4 bg-slate-700/30 rounded-xl hover:bg-purple-500/20 transition-all group"
                    whileHover={{ x: 5 }}
                  >
                    <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-cyan-500 rounded-xl flex items-center justify-center">
                      <Phone size={24} className="text-white" />
                    </div>
                    <div>
                      <p className="text-slate-400 text-sm">Phone</p>
                      <p className="font-semibold group-hover:text-purple-400 transition-colors">{personalInfo.phone}</p>
                    </div>
                  </motion.a>

                  <motion.a
                    href={`mailto:${personalInfo.email}`}
                    className="flex items-center gap-4 p-4 bg-slate-700/30 rounded-xl hover:bg-purple-500/20 transition-all group"
                    whileHover={{ x: 5 }}
                  >
                    <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-500 rounded-xl flex items-center justify-center">
                      <Mail size={24} className="text-white" />
                    </div>
                    <div>
                      <p className="text-slate-400 text-sm">Email</p>
                      <p className="font-semibold group-hover:text-green-400 transition-colors">{personalInfo.email}</p>
                    </div>
                  </motion.a>

                  <motion.div
                    className="flex items-center gap-4 p-4 bg-slate-700/30 rounded-xl"
                  >
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-xl flex items-center justify-center">
                      <MapPin size={24} className="text-white" />
                    </div>
                    <div>
                      <p className="text-slate-400 text-sm">Location</p>
                      <p className="font-semibold">{personalInfo.location}</p>
                    </div>
                  </motion.div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm p-8 rounded-2xl border border-slate-700/50">
                <h3 className="text-xl font-bold mb-4">Connect With Me</h3>
                <div className="flex gap-4">
                  <motion.a
                    href={personalInfo.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-14 h-14 bg-slate-700/50 rounded-xl flex items-center justify-center hover:bg-purple-500/20 hover:text-purple-400 transition-all"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/>
                    </svg>
                  </motion.a>
                  <motion.a
                    href={personalInfo.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-14 h-14 bg-slate-700/50 rounded-xl flex items-center justify-center hover:bg-blue-500/20 hover:text-blue-400 transition-all"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
                      <rect x="2" y="9" width="4" height="12"/>
                      <circle cx="4" cy="4" r="2"/>
                    </svg>
                  </motion.a>
                  <motion.a
                    href={`mailto:${personalInfo.email}`}
                    className="w-14 h-14 bg-slate-700/50 rounded-xl flex items-center justify-center hover:bg-pink-500/20 hover:text-pink-400 transition-all"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <Mail size={28} />
                  </motion.a>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInRight}
            >
              <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm p-8 rounded-2xl border border-slate-700/50">
                <h3 className="text-2xl font-bold mb-6">Send Me a Message</h3>
                <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                  <div>
                    <label className="block text-slate-300 mb-2">Your Name</label>
                    <input
                      type="text"
                      placeholder="John Doe"
                      className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-xl focus:outline-none focus:border-purple-500 transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-slate-300 mb-2">Your Email</label>
                    <input
                      type="email"
                      placeholder="john@example.com"
                      className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-xl focus:outline-none focus:border-purple-500 transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-slate-300 mb-2">Message</label>
                    <textarea
                      rows={5}
                      placeholder="Your message here..."
                      className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-xl focus:outline-none focus:border-purple-500 transition-colors resize-none"
                    />
                  </div>
                  <motion.button
                    type="submit"
                    className="w-full py-4 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-xl font-semibold text-lg hover:shadow-lg hover:shadow-purple-500/25 transition-all"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Send Message <Send size={18} className="inline ml-2" />
                  </motion.button>
                </form>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-slate-800">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <motion.div
              className="text-xl font-bold bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent"
              whileHover={{ scale: 1.05 }}
            >
              {'<Rafi />'}
            </motion.div>
            
            <p className="text-slate-400 text-center">
              © 2025 Riyazul Islam Rafi. Built with ❤️ and React
            </p>

            <div className="flex gap-4">
              <motion.a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-purple-400 transition-colors"
                whileHover={{ scale: 1.2 }}
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/>
                </svg>
              </motion.a>
              <motion.a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-blue-400 transition-colors"
                whileHover={{ scale: 1.2 }}
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
                  <rect x="2" y="9" width="4" height="12"/>
                  <circle cx="4" cy="4" r="2"/>
                </svg>
              </motion.a>
              <motion.a
                href={`mailto:${personalInfo.email}`}
                className="text-slate-400 hover:text-pink-400 transition-colors"
                whileHover={{ scale: 1.2 }}
              >
                <Mail size={24} />
              </motion.a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

// Custom Icons
function BarChartIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="12" y1="20" x2="12" y2="10" />
      <line x1="18" y1="20" x2="18" y2="4" />
      <line x1="6" y1="20" x2="6" y2="16" />
    </svg>
  );
}

function BriefcaseIcon() {
  return (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
      <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
    </svg>
  );
}
