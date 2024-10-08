import { Button } from "@mui/material";
import PropTypes from "prop-types";

const FeatureSection = ({ className = "" }) => {
  return (
    <section
      className={`self-stretch flex flex-col items-center justify-start pt-0 px-0 pb-[127px] box-border gap-[17px] max-w-full text-center text-29xl text-darkslateblue font-poppins mq800:pb-[35px] mq1350:pb-[54px] ${className}`}
    >
      <div className="w-full flex flex-row items-center justify-center py-0 px-5 box-border max-w-full">
        <h1 className="m-0 relative text-inherit leading-[80px] font-semibold font-[inherit] mq800:text-19xl mq800:leading-[64px] mq450:text-10xl mq450:leading-[48px]">
          Our Tools and Features
        </h1>
      </div>
      <div className="w-full flex flex-row items-center justify-center pt-0 px-5 pb-[13px] box-border max-w-full text-left text-lg text-lightsteelblue-200">
        <div className="w-full max-w-[1110px] flex flex-col items-center justify-start gap-[27px]">
          <div className="w-full max-w-[595px] flex flex-row items-center justify-center py-0 px-[9px] box-border">
            <div className="flex-1 relative leading-[28px] inline-block">
              Further assist your learning and academic journey using our tools
              specifically designed for you
            </div>
          </div>
          <div className="w-full flex flex-row items-center justify-center flex-wrap content-start gap-[30px] text-center text-xl text-darkslateblue">
            <div className="flex-1 rounded-xl bg-lightsteelblue-300 flex flex-col items-center justify-start pt-[50px] pb-[19px] pl-6 pr-[23px] box-border gap-[39px] min-w-[262px] max-w-full mq450:gap-[19px] mq450:pt-8 mq450:pb-5">
              <div className="w-[350px] h-[371px] relative rounded-xl bg-lightsteelblue-300 hidden max-w-full" />
              <div className="self-stretch flex flex-row items-start justify-center py-0 pl-0 pr-px">
                <div className="rounded-11xl bg-white flex flex-row items-start justify-start py-[29px] pl-[30px] pr-[29px] z-[1]">
                  <div className="h-[104px] w-[104px] relative rounded-11xl bg-white hidden" />
                  <img
                    className="h-[46px] w-[44.8px] relative z-[2]"
                    loading="lazy"
                    alt=""
                    src="/group-102.svg"
                  />
                </div>
              </div>
              <div className="self-stretch flex flex-col items-start justify-start gap-[15px]">
                <div className="self-stretch flex flex-row items-start justify-center py-0 px-5">
                  <h3 className="m-0 relative text-inherit leading-[32px] font-semibold font-[inherit] inline-block min-w-[41px] z-[1] mq450:text-base mq450:leading-[26px]">
                    Revise
                  </h3>
                </div>
                <div className="self-stretch relative text-sm leading-[28px] z-[1]">
                  <p className="m-0">
                    Retain and understand concepts by using Feynman's technique
                    for explanations, active recall, and AI-generated quizzes
                    and flashcards.
                  </p>
                </div>
              </div>
            </div>
            <div className="flex-1 rounded-xl bg-lightsteelblue-300 flex flex-col items-start justify-start pt-[50px] pb-[75px] pl-6 pr-[23px] box-border gap-[39px] min-w-[262px] min-h-[371px] max-w-full mq450:gap-[19px] mq450:pt-8 mq450:pb-[49px] mq450:box-border">
              <div className="w-[350px] h-[371px] relative rounded-xl bg-lightsteelblue-300 hidden max-w-full" />
              <div className="self-stretch flex flex-row items-start justify-center py-0 pl-0 pr-px">
                <div className="rounded-11xl bg-white flex flex-row items-start justify-start pt-[30px] pb-[29.3px] pl-[31px] pr-[29px] z-[1]">
                  <div className="h-[104px] w-[104px] relative rounded-11xl bg-white hidden" />
                  <img
                    className="h-[44.7px] w-11 relative z-[2]"
                    loading="lazy"
                    alt=""
                    src="/group.svg"
                  />
                </div>
              </div>
              <div className="self-stretch flex flex-col items-start justify-start gap-[15px]">
                <div className="self-stretch flex flex-row items-start justify-start py-0 pl-[47px] pr-12 mq450:pl-5 mq450:pr-5 mq450:box-border">
                  <h3 className="m-0 relative text-inherit leading-[32px] font-semibold font-[inherit] z-[1] mq450:text-base mq450:leading-[26px]">
                    Learn New Concepts
                  </h3>
                </div>
                <div className="self-stretch relative text-sm leading-[28px] z-[1]">
                  View and log your saved concepts and material into
                </div>
              </div>
            </div>
            <div className="flex-1 rounded-xl bg-lightsteelblue-300 flex flex-col items-start justify-start pt-[50px] pb-12 pl-6 pr-[23px] box-border gap-[39px] min-w-[262px] max-w-full mq450:gap-[19px] mq450:pt-8 mq450:pb-[31px] mq450:box-border">
              <div className="w-[350px] h-[371px] relative rounded-xl bg-lightsteelblue-300 hidden max-w-full" />
              <div className="self-stretch flex flex-row items-start justify-center py-0 pl-0 pr-px">
                <div className="rounded-11xl bg-white flex flex-row items-start justify-start z-[1]">
                  <div className="self-stretch w-[104px] relative rounded-11xl bg-white hidden" />
                  <img
                    className="h-[104px] w-[104px] relative z-[2]"
                    loading="lazy"
                    alt=""
                    src="/group-129.svg"
                  />
                </div>
              </div>
              <div className="self-stretch flex flex-col items-start justify-start gap-[15px]">
                <div className="self-stretch flex flex-row items-start justify-start py-0 pl-[45px] pr-[46px] mq450:pl-5 mq450:pr-5 mq450:box-border">
                  <h3 className="m-0 relative text-inherit leading-[32px] font-semibold font-[inherit] z-[1] mq450:text-base mq450:leading-[26px]">{`AI-Assisted Learning `}</h3>
                </div>
                <div className="self-stretch h-[83px] relative text-sm leading-[28px] inline-block shrink-0 z-[1]">
                  -------
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="self-stretch flex flex-row items-start justify-center pt-0 px-5 pb-[39px] box-border max-w-full text-xl">
        <div className="w-[1110px] flex flex-row items-start justify-center flex-wrap content-start gap-[30px] max-w-full">
          <div className="flex-1 rounded-xl bg-lightsteelblue-300 flex flex-col items-start justify-start pt-[50px] pb-[103px] pl-6 pr-[23px] box-border gap-[39px] min-w-[262px] max-w-full mq450:gap-[19px] mq450:pt-8 mq450:pb-[67px] mq450:box-border">
            <div className="w-[350px] h-[371px] relative rounded-xl bg-lightsteelblue-300 hidden max-w-full" />
            <div className="self-stretch flex flex-row items-start justify-center py-0 pl-0 pr-px">
              <div className="rounded-11xl bg-white flex flex-row items-start justify-start pt-[30px] px-[30px] pb-[29px] z-[1]">
                <div className="h-[104px] w-[104px] relative rounded-11xl bg-white hidden" />
                <img
                  className="h-[45px] w-11 relative z-[2]"
                  loading="lazy"
                  alt=""
                  src="/group-103.svg"
                />
              </div>
            </div>
            <div className="self-stretch flex flex-col items-start justify-start gap-[15px]">
              <div className="self-stretch flex flex-row items-start justify-start py-0 px-[72px] mq450:pl-5 mq450:pr-5 mq450:box-border">
                <h3 className="m-0 relative text-inherit leading-[32px] font-semibold font-[inherit] z-[1] mq450:text-base mq450:leading-[26px]">
                  Resume Builder
                </h3>
              </div>
              <div className="self-stretch relative text-sm leading-[28px] z-[1]">
                --------
              </div>
            </div>
          </div>
          <div className="flex-1 rounded-xl bg-lightsteelblue-300 flex flex-col items-start justify-start pt-[50px] pb-[103px] pl-6 pr-[23px] box-border gap-[39px] min-w-[262px] max-w-full mq450:gap-[19px] mq450:pt-8 mq450:pb-[67px] mq450:box-border">
            <div className="w-[350px] h-[371px] relative rounded-xl bg-lightsteelblue-300 hidden max-w-full" />
            <div className="self-stretch flex flex-row items-start justify-center py-0 pl-0 pr-px">
              <div className="rounded-11xl bg-white flex flex-row items-start justify-start py-[29px] pl-[30px] pr-[29px] z-[1]">
                <div className="h-[104px] w-[104px] relative rounded-11xl bg-white hidden" />
                <img
                  className="h-[46px] w-[45px] relative z-[2]"
                  loading="lazy"
                  alt=""
                  src="/group-105.svg"
                />
              </div>
            </div>
            <div className="self-stretch flex flex-col items-start justify-start gap-[15px]">
              <div className="self-stretch flex flex-row items-start justify-center py-0 px-5">
                <h3 className="m-0 relative text-inherit leading-[32px] font-semibold font-[inherit] inline-block min-w-[41px] z-[1] mq450:text-base mq450:leading-[26px]">
                  Some new feature
                </h3>
              </div>
              <div className="self-stretch relative text-sm leading-[28px] z-[1]">
                --------
              </div>
            </div>
          </div>
          <div className="flex-1 rounded-xl bg-lightsteelblue-300 flex flex-col items-start justify-start pt-[50px] pb-[103px] pl-6 pr-[23px] box-border gap-[39px] min-w-[262px] max-w-full mq450:gap-[19px] mq450:pt-8 mq450:pb-[67px] mq450:box-border">
            <div className="w-[350px] h-[371px] relative rounded-xl bg-lightsteelblue-300 hidden max-w-full" />
            <div className="self-stretch flex flex-row items-start justify-center py-0 pl-0 pr-px">
              <div className="rounded-11xl bg-white flex flex-row items-start justify-start pt-[30px] px-[30px] pb-[30.5px] z-[1]">
                <div className="h-[104px] w-[104px] relative rounded-11xl bg-white hidden" />
                <img
                  className="h-[43.5px] w-11 relative z-[2]"
                  loading="lazy"
                  alt=""
                  src="/group-106.svg"
                />
              </div>
            </div>
            <div className="self-stretch flex flex-col items-start justify-start gap-[15px]">
              <div className="self-stretch flex flex-row items-start justify-start py-0 pl-[65px] pr-[66px] mq450:pl-5 mq450:pr-5 mq450:box-border">
                <h3 className="m-0 relative text-inherit leading-[32px] font-semibold font-[inherit] z-[1] mq450:text-base mq450:leading-[26px]">{`Personal Planner `}</h3>
              </div>
              <div className="self-stretch relative text-sm leading-[28px] z-[1]">
                ------
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-[1405px] flex flex-row items-start justify-center py-0 px-5 box-border max-w-full text-left">
        <div className="w-[1145px] flex flex-row items-start justify-center gap-[22px] max-w-full mq1150:flex-wrap">
          <div className="h-[678px] flex-1 relative min-w-[441px] max-w-full mq800:min-w-full">
            <img
              className="absolute top-[0px] left-[0px] w-full h-full"
              alt=""
              src="/group-123.svg"
            />
            <img
              className="absolute top-[117px] left-[382px] w-8 h-8 z-[1]"
              loading="lazy"
              alt=""
              src="/group-124.svg"
            />
            <img
              className="absolute top-[448px] left-[437px] w-8 h-8 z-[1]"
              loading="lazy"
              alt=""
              src="/group-124.svg"
            />
            <img
              className="absolute top-[347px] left-[141px] w-8 h-8 z-[1]"
              loading="lazy"
              alt=""
              src="/group-124.svg"
            />
            <div className="absolute top-[93px] left-[153px] rounded-11xl bg-gray-200 w-20 h-20 z-[1]">
              <div className="absolute top-[0px] left-[0px] rounded-11xl bg-gray-200 w-full h-full hidden" />
              <img
                className="absolute h-[32.75%] w-[38.5%] top-[33.62%] right-[34.63%] bottom-[33.63%] left-[26.88%] max-w-full overflow-hidden max-h-full z-[1]"
                loading="lazy"
                alt=""
                src="/vector-3.svg"
              />
            </div>
            <div className="absolute top-[148px] left-[513px] rounded-11xl bg-gray-200 w-[98px] h-[98px] z-[1]">
              <div className="absolute top-[0px] left-[0px] rounded-11xl bg-gray-200 w-full h-full hidden" />
              <img
                className="absolute h-[47.14%] w-[49.08%] top-[26.94%] right-[25%] bottom-[25.92%] left-[25.92%] max-w-full overflow-hidden max-h-full z-[1]"
                loading="lazy"
                alt=""
                src="/vector-4.svg"
              />
            </div>
            <div className="absolute top-[484px] left-[239px] rounded-11xl bg-gray-200 w-[90px] h-[90px] z-[1]">
              <div className="absolute top-[0px] left-[0px] rounded-11xl bg-gray-200 w-full h-full hidden" />
              <img
                className="absolute h-[32.67%] w-[42.33%] top-[33.67%] right-[28.78%] bottom-[33.67%] left-[28.89%] max-w-full overflow-hidden max-h-full z-[1]"
                loading="lazy"
                alt=""
                src="/vector-5.svg"
              />
            </div>
          </div>
          <div className="w-[445px] flex flex-col items-start justify-start pt-[136px] px-0 pb-0 box-border min-w-[445px] max-w-full mq800:pt-[88px] mq800:box-border mq800:min-w-full mq1150:flex-1">
            <div className="self-stretch flex flex-col items-start justify-start gap-[84px] max-w-full mq450:gap-[42px]">
              <div className="self-stretch flex flex-row items-start justify-start py-0 pl-0.5 pr-0 box-border max-w-full">
                <div className="flex-1 flex flex-col items-start justify-start gap-6 max-w-full">
                  <h1 className="m-0 relative text-inherit leading-[64px] font-semibold font-[inherit] mq800:text-19xl mq800:leading-[51px] mq450:text-10xl mq450:leading-[38px]">
                    <p className="m-0">
                      We're here to help and Guide you at all times
                    </p>
                  </h1>
                  <div className="w-[385px] relative text-lg leading-[28px] text-darkgray inline-block max-w-full">
                    (elaborate more here)
                  </div>
                </div>
              </div>
              <Button
                className="w-[166px] h-11"
                disableElevation
                variant="contained"
                sx={{
                  textTransform: "none",
                  color: "#fff",
                  fontSize: "14",
                  background:
                    "linear-gradient(92.51deg, rgba(11, 74, 164, 0.64), #925fe2)",
                  borderRadius: "5px",
                  "&:hover": {
                    background:
                      "linear-gradient(92.51deg, rgba(11, 74, 164, 0.64), #925fe2)",
                  },
                  width: 166,
                  height: 44,
                }}
              >
                Join the Waitlist
              </Button>
            </div>
          </div>
        </div>
      </div>
      <div className="self-stretch bg-lightsteelblue-300 flex flex-col items-center justify-start pt-28 px-5 pb-[83px] box-border gap-[41px] max-w-full mq800:gap-5 mq800:pt-[73px] mq800:pb-[54px] mq800:box-border">
        <div className="w-[1440px] h-[725px] relative bg-lightsteelblue-300 hidden max-w-full" />
        <div className="w-[1110px] flex flex-row items-start justify-center max-w-full">
          <h1 className="m-0 relative text-inherit leading-[64px] font-semibold font-[inherit] z-[1] mq800:text-19xl mq800:leading-[51px] mq450:text-10xl mq450:leading-[38px]">
            Grow and be Career Ready
          </h1>
        </div>
        <div className="rounded-21xl [background:linear-gradient(135.66deg,_#aec8e6,_#8154ff)] flex flex-row items-end justify-center pt-[37px] pb-[19px] pl-[93px] pr-0 box-border [row-gap:20px] max-w-full z-[1] text-xl mq1150:flex-wrap mq1150:pl-5 mq1150:pr-5 mq1150:box-border mq450:pt-6 mq450:pb-5 mq450:box-border">
          <div className="h-[425px] w-[1110px] relative rounded-21xl [background:linear-gradient(135.66deg,_#aec8e6,_#8154ff)] hidden max-w-full" />
          <div className="w-[503px] flex flex-col items-start justify-start pt-0 px-0 pb-[53px] box-border min-w-[503px] min-h-[307px] max-w-full mq800:min-w-full mq1150:flex-1">
            <div className="self-stretch flex flex-col items-start justify-start gap-3 max-w-full">
              <h3 className="m-0 relative text-inherit leading-[32px] font-normal font-[inherit] z-[2] mq450:text-base mq450:leading-[26px]">
                Love our Our Tools?
              </h3>
              <div className="self-stretch flex flex-row items-start justify-start py-0 pl-1 pr-0 box-border max-w-full text-left text-29xl">
                <div className="flex-1 flex flex-col items-start justify-start gap-9 max-w-full mq800:gap-[18px]">
                  <h1 className="m-0 self-stretch relative text-inherit leading-[65px] font-semibold font-[inherit] z-[2] mq800:text-19xl mq800:leading-[52px] mq450:text-10xl mq450:leading-[39px]">
                    Sign Up for our Waitlist
                  </h1>
                  <Button
                    className="w-[196px] h-11 z-[2]"
                    disableElevation
                    variant="contained"
                    sx={{
                      textTransform: "none",
                      color: "#fff",
                      fontSize: "14",
                      background: "#000",
                      borderRadius: "5px",
                      "&:hover": { background: "#000" },
                      width: 196,
                      height: 44,
                    }}
                  >
                    Join the community
                  </Button>
                </div>
              </div>
            </div>
          </div>
          <div className="w-[514px] flex flex-col items-start justify-start py-0 px-0 box-border min-w-[514px] max-w-full mq800:min-w-full mq1150:flex-1">
            <img
              className="ml-[-40px] w-[554px] relative max-h-full overflow-hidden max-w-[108%] shrink-0 z-[3] mq1150:self-stretch mq1150:w-auto"
              loading="lazy"
              alt=""
              src="/frame.svg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

FeatureSection.propTypes = {
  className: PropTypes.string,
};

export default FeatureSection;
