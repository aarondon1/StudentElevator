import { Button } from "@mui/material";
import PropTypes from "prop-types";

const HeroSection = ({ className = "" }) => {
  return (
    <div
      className={`self-stretch flex flex-row items-start justify-start flex-wrap content-start gap-[23px] max-w-full text-center text-45xl text-darkslateblue font-poppins ${className}`}
    >
      <div className="h-[360px] w-[188px] flex flex-col items-start justify-start pt-[172px] px-0 pb-0 box-border mq450:pt-28 mq450:box-border">
        <div className="self-stretch flex-1 relative [filter:blur(30px)] rounded-[50%] [background:radial-gradient(50%_50%_at_50%_50%,_rgba(143,_177,_232,_0.64),_rgba(28,_32,_72,_0.87))]" />
      </div>
      <div className="flex-1 flex flex-row items-start justify-start gap-[23px] min-w-[687px] max-w-full mq1150:flex-wrap mq1150:min-w-full">
        <div className="flex-1 flex flex-col items-start justify-start gap-[66px] max-w-full mq800:min-w-full mq1150:gap-[33px] mq450:gap-4">
          <div className="self-stretch flex flex-col items-end justify-start gap-[30px] max-w-full">
            <h1 className="m-0 self-stretch relative text-inherit leading-[80px] font-semibold font-[inherit] mq800:text-32xl mq800:leading-[64px] mq450:text-19xl mq450:leading-[48px]">
              Your Personal Learning Hub
            </h1>
            <div className="w-[855px] flex flex-row items-start justify-center py-0 px-5 box-border max-w-full text-lg text-lightsteelblue-200">
              <div className="w-[577px] relative leading-[28px] inline-block shrink-0 max-w-full">
              Enhance your learning and academic journey with scientifically proven methods like 
              the Feynman Technique and active recall, 
              empowering you to excel in college and beyond, 
              and paving the way for a successful future in your chosen field
              </div>
            </div>
          </div>
          <div className="self-stretch flex flex-row items-start justify-start py-0 pl-0.5 pr-[3px] box-border max-w-full">
            <div className="flex-1 flex flex-col items-end justify-start gap-[34px] max-w-full mq450:gap-[17px]">
              <div className="w-[836px] flex flex-row items-start justify-center py-0 px-5 box-border max-w-full">
                <Button
                  className="h-11 w-[166px]"
                  disableElevation
                  variant="contained"
                  sx={{
                    textTransform: "none",
                    color: "#fff",
                    fontSize: "14",
                    background:
                      "linear-gradient(92.51deg, rgba(11, 74, 164, 0.64), #8154ff)",
                    borderRadius: "5px",
                    "&:hover": {
                      background:
                        "linear-gradient(92.51deg, rgba(11, 74, 164, 0.64), #8154ff)",
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
        <div className="h-64 w-[163px] flex flex-col items-start justify-start pt-[93px] px-0 pb-0 box-border">
          <div className="self-stretch flex-1 relative [filter:blur(20px)] rounded-[50%] [background:radial-gradient(50%_50%_at_50%_50%,_#8fb1e8,_#1c2048)]" />
        </div>
      </div>
    </div>
  );
};

HeroSection.propTypes = {
  className: PropTypes.string,
};

export default HeroSection;
