import Header from "../components/LandingPage/Header";
import HeroSection from "../components/LandingPage/HeroSection";
import FeatureSection from "../components/LandingPage/feature-section";
import GetInTouch from "../components/LandingPage/get-in-touch";
import Footer from "../components/LandingPage/Footer";

const LandingPage = () => {
  return (
    <div className="w-full relative bg-white overflow-hidden flex flex-col items-center justify-start pt-[27px] px-0 pb-0 box-border gap-[136px] leading-[normal] tracking-[normal] mq800:gap-[68px] mq450:gap-[34px]">
      <img
        className="w-[542px] h-[541.9px] absolute !m-[0] bottom-[439.1px] left-[130px]"
        loading="lazy"
        alt=""
        src="/group-133.svg"
      />
      <section className="w-full flex flex-row items-start justify-center py-0 px-[74px] box-border max-w-screen-lg mx-auto mq1350:pl-[37px] mq1350:pr-[37px] mq1350:box-border">
        <div className="flex-1 flex flex-col items-center justify-start gap-[27px] max-w-full">
          <Header />
          <HeroSection />
        </div>
      </section>
      <FeatureSection />
      <section className="w-full flex flex-row items-start justify-center py-0 px-[74px] box-border max-w-screen-lg mx-auto mq1350:pl-[37px] mq1350:pr-[37px] mq1350:box-border">
        <div className="flex-1 flex flex-col items-center justify-start gap-[21px] max-w-full">
          <GetInTouch />
        </div>
      </section>
      <footer className="w-full bg-lightsteelblue-300">
        <Footer />
      </footer>
    </div>
  );
};

export default LandingPage;