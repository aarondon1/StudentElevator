import PropTypes from "prop-types";

const Footer = ({ className = "" }) => {
  return (
      
      <div
        className={`self-stretch bg-lightsteelblue-300 flex flex-col items-start justify-start pt-[50px] px-0 pb-0 box-border relative gap-[31px] max-w-full text-left text-6xl text-darkslateblue font-poppins mq800:gap-[15px] mq450:pt-8 mq450:box-border ${className}`}
      >
        <div className="w-full h-[268px] absolute !m-[0] top-[0px] right-[0px] left-[0px] bg-lightsteelblue-100" />
        <div className="w-full h-[268px] absolute !m-[0] top-[0px] right-[0px] left-[0px] bg-lightsteelblue-300 z-[1]" />
        <div className="self-stretch flex flex-row items-start justify-center py-0 px-5 box-border max-w-full">
          <div className="w-[1110px] flex flex-row items-start justify-between max-w-full gap-5 mq1150:flex-wrap">
            <div className="w-[303px] flex flex-col items-start justify-start pt-[3px] px-0 pb-0 box-border">
              <div className="self-stretch flex flex-col items-start justify-start">
                <div className="w-[260px] flex flex-row items-start justify-start z-[2]">
                  <h2 className="m-0 flex-1 relative text-inherit leading-[72px] font-semibold font-[inherit] mq450:text-xl mq450:leading-[64px]">
                    StudentElevator
                  </h2>
                </div>
                <div className="self-stretch relative text-sm leading-[28px] text-darkgray z-[2]">
                  (Our motto)
                </div>
              </div>
            </div>
            <div className="flex flex-row items-start justify-start gap-[104px] max-w-full text-sm text-darkgray mq800:gap-[52px] mq800:flex-wrap">
              <div className="flex flex-col items-start justify-start gap-px text-center text-base text-darkslateblue">
                <div className="relative leading-[32px] font-semibold inline-block min-w-[70px] z-[2]">
                  Sections
                </div>
                <div className="relative text-sm leading-[38px] text-darkgray text-left z-[2]">
                  <p className="m-0">Home</p>
                  <p className="m-0">Section One</p>
                  <p className="m-0">Section Two</p>
                  <p className="m-0">Section Tree</p>
                </div>
              </div>
              <div className="flex flex-col items-start justify-start pt-[33px] px-0 pb-0">
                <div className="relative leading-[38px] z-[2]">
                  <p className="m-0">Home</p>
                  <p className="m-0">Section One</p>
                  <p className="m-0">Section Two</p>
                  <p className="m-0">Section Tree</p>
                </div>
              </div>
              <div className="flex flex-col items-start justify-start pt-[33px] px-0 pb-0">
                <div className="relative leading-[38px] z-[2]">
                  <p className="m-0">Home</p>
                  <p className="m-0">Section One</p>
                  <p className="m-0">Section Two</p>
                  <p className="m-0">Section Tree</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <footer className="self-stretch flex flex-row items-start justify-start py-8 px-[145px] box-border relative gap-[39.9px] max-w-full text-left text-sm text-darkgray font-poppins mq800:gap-5 mq800:pl-9 mq800:pr-9 mq800:box-border mq1350:flex-wrap mq1350:justify-center mq1350:pl-[72px] mq1350:pr-[72px] mq1350:box-border">
          <div className="h-full w-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] bg-black" />
          <div className="w-[1006.1px] flex flex-col items-start justify-start py-0 pl-0 pr-5 box-border max-w-full">
            <div className="relative leading-[28px] z-[1]">
              All Rights Reserved StudentElevator.com 2024
            </div>
          </div>
        </footer>
      </div>
  );
};

Footer.propTypes = {
  className: PropTypes.string,
};

export default Footer;
