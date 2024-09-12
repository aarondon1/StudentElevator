import Header from "../components/LandingPage/Header";
import HeroSection from "../components/LandingPage/HeroSection";
import FeatureSection from "../components/LandingPage/feature-section";
import Footer from "../components/LandingPage/Footer";


const LandingPage = () => {
  return (
    <div className="w-full relative bg-white overflow-hidden flex flex-col items-start justify-start pt-[27px] px-0 pb-0 box-border gap-[136px] leading-[normal] tracking-[normal] mq800:gap-[68px] mq450:gap-[34px]">
      <section className="w-full flex flex-row items-center justify-center py-0 px-[74px] box-border max-w-full mq1350:pl-[37px] mq1350:pr-[37px] mq1350:box-border">
        <div className="flex-1 flex flex-col items-center justify-start gap-[27px] max-w-full">
          <Header />
          <HeroSection />
        </div>
      </section>
      <FeatureSection />
      <section className="self-stretch flex flex-col items-start justify-start gap-[21px] max-w-full">
        <Footer />
      </section>
    </div>
  );
};

export default LandingPage;




