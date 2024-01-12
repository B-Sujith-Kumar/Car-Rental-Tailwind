import {
  Hero,
  Booking,
  Procedure,
  Label,
  Features,
  Testimonial,
  Faq,
  Download,
  Footer,
} from "./sections";

import Nav from "./components/Nav";

const App = () => {
  return (
    <main className="">
      <section className="w-full top-0 flex flex-col bg-[url('./images/hero/hero-bg.png')] bg-no-repeat bg-right max-lg:bg-right-top lg:bg-right-top max-md-2:bg-none">
        <Nav />
        <Hero />
      </section>
      <section>
        <Booking />
      </section>
      <section>
        <Procedure />
      </section>
      <section>
        <Label />
      </section>
      <section>
        <Features />
      </section>
      <section>
        <Testimonial />
      </section>
      <section>
        <Faq />
      </section>
      <section className="bg-[url('./images/banners/bg02.png')] bg-no-repeat bg-right max-xl:bg-none">
        <Download />
      </section>
      <section>
        <Footer />
      </section>
    </main>
  );
};

export default App;
