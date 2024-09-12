import PropTypes from "prop-types";

const Footer = ({ className = "" }) => {
  return (
      
    
        
        <footer className="self-stretch flex flex-row items-start justify-start py-8 px-[145px] box-border relative gap-[39.9px] max-w-full text-left text-sm text-darkgray font-poppins mq800:gap-5 mq800:pl-9 mq800:pr-9 mq800:box-border mq1350:flex-wrap mq1350:justify-center mq1350:pl-[72px] mq1350:pr-[72px] mq1350:box-border">
          <div className="h-full w-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] bg-black" />
          <div className="w-[1006.1px] flex flex-col items-start justify-start py-0 pl-0 pr-5 box-border max-w-full">
            <div className="relative leading-[28px] z-[1]">
              All Rights Reserved StudentElevator.com 2024
            </div>
          </div>
        </footer>
  
  );
};

Footer.propTypes = {
  className: PropTypes.string,
};

export default Footer;
