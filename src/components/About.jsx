import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  const skills = [
    'Python',
    'TensorFlow',
    'PyTorch',
    'OpenCV',
    'Scikit-learn',
    'NumPy',
    'Pandas',
    'YOLO',
    'Git',
    'Docker'
  ];

  return (
    <section id="about" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <p className="font-mono text-primary text-sm mb-4">01. About Me</p>
          <h2 className="text-4xl sm:text-5xl font-bold text-slate-lightest">Who I Am</h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="md:col-span-2 space-y-4 text-slate"
          >
            <p>
              Hello! I'm Rahul, an AI & ML enthusiast with a passion for building intelligent systems 
              that make a real impact. My journey in artificial intelligence began during my first year 
              of engineering, and I've been hooked ever since.
            </p>
            
            <p>
              I specialize in computer vision and machine learning, with experience in developing 
              solutions for real-world problems. From smart shopping systems to driver safety 
              applications, I love taking on challenges that push the boundaries of AI technology.
            </p>

            <p>
              When I'm not coding, you can find me exploring the latest developments in AI, 
              participating in hackathons, or mentoring other students in their tech journey. 
              I'm always excited to collaborate on innovative projects and learn new technologies.
            </p>

            <div className="pt-4">
              <p className="mb-3">Here are some technologies I work with:</p>
              <ul className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                {skills.map((skill, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: i * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-center space-x-2"
                  >
                    <span className="text-primary">▹</span>
                    <span className="font-mono text-sm">{skill}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="relative group"
          >
            <div className="relative w-full max-w-[300px] mx-auto">
              <img
                src="/profile.jpg"
                alt="Profile"
                className="w-full h-full object-cover rounded"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About; 