import React from 'react';
import { Helmet } from 'react-helmet-async';
import Layout from './components/Layout';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  return (
    <>
      <Helmet>
        <title>Rahul Bilki | AI & ML Engineer</title>
        <meta name="description" content="Rahul Bilki is an AI and Machine Learning Engineer specializing in computer vision, deep learning, and automation solutions." />
        <meta name="keywords" content="Rahul Bilki, AI Engineer, Machine Learning Engineer, Computer Vision, Deep Learning, Python Developer" />
        <meta property="og:title" content="Rahul Bilki | AI & ML Engineer" />
        <meta property="og:description" content="Rahul Bilki is an AI and Machine Learning Engineer specializing in computer vision, deep learning, and automation solutions." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://rahulbilki.dev" />
        <meta property="og:image" content="/og-image.jpg" />
        <link rel="icon" href="/favicon.ico" />
      </Helmet>

      <Layout>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Contact />
      </Layout>
    </>
  );
}

export default App;
