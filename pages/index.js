import Head from "next/head";
import Header from "../components/Header/Header";
import HeroSection from "../components/HeroSection/HeroSection";
import AboutSection from "../components/AboutSection/AboutSection";
import Testimonials from "../components/Testimonials/Testimonials";
import JoinSection from "../components/JoinSection/JoinSection";
import Footer from "../components/Footer/Footer";

export default function Home() {
  return (
    <div>
      <Head>
        <title>The Book Hive</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header/>
      <HeroSection/>
      <AboutSection/>
      <Testimonials/>
      <JoinSection />
      <Footer/>

    </div>
  );
}
