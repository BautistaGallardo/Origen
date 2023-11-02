import Intro from '../(web)/landing/intro';
import AboutUs from '../(web)/aboutUs/aboutUs';
import ContactPage from '../(web)/contactUs/contactUs';

export default function Home() {
  return (
    <main>
      <Intro />
      <AboutUs />
      <ContactPage />
    </main>
  );
}

