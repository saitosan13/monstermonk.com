// pages/index.js

import React from 'react';
import Head from 'next/head';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';
import AIArtGenerator from '../components/AIArtGenerator/AIArtGenerator';
import PersonalizedAssistant from '../components/PersonalizedAssistant/PersonalizedAssistant';
import DynamicStorytelling from '../components/DynamicStorytelling/DynamicStorytelling';

export default function Home() {
  return (
    <div>
      <Head>
        <title>SurrealAI - Unleashing Creativity</title>
        <meta name="description" content="SurrealAI combines AI, blockchain, and quantum computing to create innovative art and personalized experiences." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />

      <main>
        <AIArtGenerator />
        <PersonalizedAssistant />
        <DynamicStorytelling />
      </main>

      <Footer />
    </div>
  );
}
