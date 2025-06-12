import React from 'react';
import { motion } from 'framer-motion';

const Experience = () => {
  const experiences = [
    {
      company: 'LogicHive Solutions',
      title: 'AI & ML Intern',
      period: 'Feb 2025 - May 2025',
      responsibilities: [
        'Developing and implementing machine learning models for predictive analytics',
        'Collaborating with cross-functional teams to integrate AI solutions',
        'Optimizing existing algorithms for better performance and accuracy',
        'Working on computer vision projects for real-time object detection',
      ],
    },
    {
      company: 'Google Developer Student Clubs',
      title: 'Machine Learning Lead',
      period: 'Jul 2023 - Jul 2024',
      responsibilities: [
        'Led a team of 15 students in machine learning projects and workshops',
        'Organized technical workshops on TensorFlow, PyTorch, and OpenCV',
        'Mentored junior students in AI/ML concepts and project development',
        'Collaborated with other leads to organize tech events and hackathons',
      ],
    },
  ];

  return (
    <section id="experience" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <p className="font-mono text-primary text-sm mb-4">02. Where I've Been</p>
          <h2 className="text-4xl sm:text-5xl font-bold text-slate-lightest">My Experience</h2>
        </motion.div>

        <div className="relative border-l border-slate/20">
          {experiences.map((experience, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="mb-12 ml-8 relative last:mb-0"
            >
              <div className="absolute w-4 h-4 bg-navy border-2 border-primary rounded-full -left-[41px] mt-1" />
              <div className="flex flex-col space-y-3">
                <span className="font-mono text-primary text-sm">{experience.period}</span>
                <h3 className="text-xl font-bold text-slate-lightest">
                  {experience.title}
                  <span className="text-primary"> @ {experience.company}</span>
                </h3>
                <ul className="space-y-3">
                  {experience.responsibilities.map((responsibility, j) => (
                    <li key={j} className="text-slate flex items-start">
                      <span className="text-primary mr-2">▹</span>
                      {responsibility}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience; 