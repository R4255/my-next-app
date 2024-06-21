// pages/index.js
import Head from 'next/head';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Features from '../components/Features';
import About from '../components/About';
import TrustedBrands from '../components/TrustedBrands';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <>
      <Head>
        <title>Fintech Landing Page</title>
        <link href="https://cdnjs.cloudflare.com/ajax/libs/tailwindcss/2.2.19/tailwind.min.css" rel="stylesheet" />
        <link rel="stylesheet" href="/styles.css" />
      </Head>
      <Header />
      <Hero />
      <Features />
      <About />
      <TrustedBrands />
      <Contact />
      <Footer />
    </>
  );
}
