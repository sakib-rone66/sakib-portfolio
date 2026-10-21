import {
  Atom,
  ArrowDown,
  Bot,
  Braces,
  Boxes,
  Cable,
  Cloud,
  Code2,
  Database,
  GitBranch,
  GitFork,
  ListChecks,
  MonitorSmartphone,
  Network,
  Package,
  Paintbrush,
  PanelsTopLeft,
  Route,
  Send,
  Server,
  ShieldCheck,
  Smartphone,
  Workflow,
} from 'lucide-react'
import { motion, useReducedMotion } from 'framer-motion'

import './Skills.css'

const skillLabelVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.58, ease: [0.22, 1, 0.36, 1] },
  },
}

const skillIntroVariants = {
  hidden: { opacity: 0, y: 18 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.65,
      delay: 0.05,
      ease: [0.22, 1, 0.36, 1],
    },
  },
}

const skillRowVariants = {
  hidden: { opacity: 0, y: 16, scale: 0.99 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1],
    },
  },
}

const skillListVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.05,
    },
  },
}

const skillGroups = [
  {
    number: '01',
    title: 'Frontend',
    icon: Braces,
    className: 'skill-frontend',
    skills: [
      'React',
      'JavaScript',
      'HTML5',
      'CSS3',
      'Responsive UI',
    ],
  },
  {
    number: '02',
    title: 'Backend',
    icon: Server,
    className: 'skill-backend',
    skills: [
      'Node.js',
      'Express.js',
      'REST API',
      'Authentication',
      'API Design',
    ],
  },
  {
    number: '03',
    title: 'Database',
    icon: Database,
    className: 'skill-database',
    skills: [
      'MongoDB',
      'Mongoose',
      'Data Modeling',
      'CRUD Operations',
    ],
  },
  {
    number: '04',
    title: 'Mobile',
    icon: Smartphone,
    className: 'skill-mobile',
    skills: [
      'React Native',
      'Expo',
      'Android',
      'Mobile UI',
    ],
  },
  {
    number: '05',
    title: 'Tools',
    icon: GitBranch,
    className: 'skill-tools',
    skills: [
      'Git',
      'GitHub',
      'Render',
      'VS Code',
      'Postman',
    ],
  },
]

const skillIcons = {
  React: Atom,
  JavaScript: Braces,
  HTML5: Code2,
  CSS3: Paintbrush,
  'Responsive UI': MonitorSmartphone,
  'Node.js': Server,
  'Express.js': Route,
  'REST API': Network,
  Authentication: ShieldCheck,
  'API Design': Workflow,
  MongoDB: Database,
  Mongoose: Cable,
  'Data Modeling': Boxes,
  'CRUD Operations': ListChecks,
  'React Native': Smartphone,
  Expo: Package,
  Android: Bot,
  'Mobile UI': PanelsTopLeft,
  Git: GitBranch,
  GitHub: GitFork,
  Render: Cloud,
  'VS Code': Code2,
  Postman: Send,
}

function Skills() {
  const shouldReduceMotion = useReducedMotion()

  return (
    <section className="skills-section">
      <div className="skills-ambient skills-ambient-left" />
      <div className="skills-ambient skills-ambient-right" />

      <div className="container skills-container">

        {/* ================================
            SECTION LABEL
        ================================ */}

        <div id="skills" className="section-anchor">
          <motion.div
            className="skills-top-label"
            variants={skillLabelVariants}
            initial={shouldReduceMotion ? false : 'hidden'}
            whileInView={shouldReduceMotion ? undefined : 'visible'}
            viewport={{ once: true, amount: 0.8 }}
          >
            <div className="skills-top-line skills-top-line-left" />

            <div className="skills-label">
              TECHNICAL SKILLS
            </div>

            <div className="skills-top-line skills-top-line-right" />
          </motion.div>
        </div>


        {/* ================================
            HEADER
        ================================ */}

        <motion.div
          className="skills-header"
          variants={skillIntroVariants}
          initial={shouldReduceMotion ? false : 'hidden'}
          whileInView={shouldReduceMotion ? undefined : 'visible'}
          viewport={{ once: true, amount: 0.35 }}
        >

          <h2>
            Tools I use
            <span>to build things.</span>
          </h2>

          <p>
            A practical development stack built around modern
            JavaScript technologies, scalable backend systems,
            mobile applications and reliable development workflows.
          </p>

        </motion.div>


        {/* ================================
            SKILLS
        ================================ */}

        <motion.div
          className="skills-list"
          variants={skillListVariants}
          initial={shouldReduceMotion ? false : 'hidden'}
          whileInView={shouldReduceMotion ? undefined : 'visible'}
          viewport={{ once: true, amount: 0.12 }}
        >

          {skillGroups.map((group) => {
            const Icon = group.icon

            return (
              <motion.div
                className={`skill-row ${group.className}`}
                key={group.number}
                variants={skillRowVariants}
              >

                <div className="skill-number">
                  {group.number}
                </div>

                <div className="skill-category">

                  <span className="skill-category-icon">
                    <Icon
                      size={17}
                      strokeWidth={1.8}
                      aria-hidden="true"
                    />
                  </span>

                  <h3>
                    {group.title}
                  </h3>

                </div>

                <div className="skill-items">

                  {group.skills.map((skill) => {
                    const SkillIcon = skillIcons[skill]

                    return (
                      <span key={skill}>
                        <SkillIcon
                          size={13}
                          strokeWidth={1.8}
                          aria-hidden="true"
                        />
                        {skill}
                      </span>
                    )
                  })}

                </div>

              </motion.div>
            )
          })}

        </motion.div>

        <motion.a
          href="#resume"
          className="experience-scroll skills-scroll"
          aria-label="Scroll to resume"
          initial={shouldReduceMotion ? false : { opacity: 0, y: 12 }}
          whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.5,
            delay: 0.25,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          <span>SCROLL TO RESUME</span>

          <ArrowDown size={17} aria-hidden="true" />
        </motion.a>

      </div>
    </section>
  )
}

export default Skills