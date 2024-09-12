import { Button } from "@mui/material";
import PropTypes from "prop-types";


const Header = ({ className = "" }) => {
  return (
    <div
      className={`w-[1225px] h-[107px] flex flex-row items-start justify-start py-0 px-14 box-border max-w-full text-center text-6xl text-darkslateblue font-poppins mq1350:pl-7 mq1350:pr-7 mq1350:box-border ${className}`}
    >
      <div className="self-stretch flex-1 flex flex-row items-start justify-between max-w-full gap-5">
        <a className="[text-decoration:none] w-[307px] relative leading-[80px] font-semibold text-[inherit] inline-block shrink-0 whitespace-nowrap mq450:text-xl mq450:leading-[64px]">
          StudentElevator
        </a>
        <div className="self-stretch w-[140px] flex flex-col items-start justify-start pt-9 px-0 pb-0 box-border">
          <div className="w-[71px] flex-1 relative [filter:blur(20px)] rounded-[50%] [background:radial-gradient(50%_50%_at_50%_50%,_#8fb1e8,_#1c2048)]" />
        </div>
        <div className="w-[242px] flex flex-row items-start justify-start gap-[34px] text-sm text-darkgray mq800:hidden">
          <div className="flex flex-col items-start justify-start pt-2 px-0 pb-0">
            <a className="[text-decoration:none] relative leading-[28px] text-[inherit] inline-block min-w-[42px]">
              Home
            </a>
          </div>
         
            <Button
              className="h-11 flex-1"
              disableElevation
              variant="contained"
              sx={{
                textTransform: "none",
                color: "#fff",
                fontSize: "14",
                background: "linear-gradient(92.51deg, rgba(11, 74, 164, 0.64), #8154ff)",
                borderRadius: "5px",
                "&:hover": {
                  background: "linear-gradient(72.51deg, rgba(9, 44, 154, 0.64), #7134ff)",
                },
                height: 44,
              }}
            >
              Join the Waitlist
            </Button>
          
        </div>
      </div>
    </div>
  );
};

Header.propTypes = {
  className: PropTypes.string,
};

export default Header;
