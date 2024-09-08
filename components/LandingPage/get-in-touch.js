import {
  TextField,
  InputAdornment,
  Icon,
  IconButton,
  Button,
} from "@mui/material";
import PropTypes from "prop-types";

const GetInTouch = ({ className = "" }) => {
  return (
    <div
      className={`w-[1346px] flex flex-row items-start justify-center py-0 px-5 box-border max-w-full text-center text-29xl text-darkslateblue font-poppins ${className}`}
    >
      <div className="w-[1130px] flex flex-row items-start justify-between max-w-full gap-5 mq800:flex-wrap">
        <div className="h-16 w-16 relative [filter:blur(20px)] rounded-[50%] [background:radial-gradient(50%_50%_at_50%_50%,_rgba(11,_74,_164,_0.64),_#141414)] z-[1]" />
        <div className="w-[644px] flex flex-col items-start justify-start pt-7 px-0 pb-0 box-border max-w-full">
          <div className="self-stretch flex flex-row items-end justify-start gap-[45px] max-w-full mq800:gap-[22px] mq800:flex-wrap">
            <div className="h-24 w-24 relative [filter:blur(20px)] rounded-[50%] [background:radial-gradient(50%_50%_at_50%_50%,_rgba(11,_74,_164,_0.64),_#141414)] z-[1]" />
            <div className="flex-1 flex flex-col items-start justify-start pt-0 px-0 pb-[84px] box-border min-w-[327px] min-h-[600px] max-w-full mq800:pb-[55px] mq800:box-border">
              <div className="self-stretch flex flex-col items-start justify-start gap-[66px] max-w-full mq800:gap-[33px] mq450:gap-4">
                <div className="self-stretch flex flex-col items-start justify-start">
                  <h1 className="m-0 relative text-inherit leading-[80px] font-semibold font-[inherit] mq800:text-19xl mq800:leading-[64px] mq450:text-10xl mq450:leading-[48px]">
                    Get In Touch
                  </h1>
                  <div className="self-stretch relative text-lg leading-[28px] text-darkgray text-left z-[1]">
                    Contact us for any queries or feedback
                  </div>
                </div>
                <div className="w-[408px] flex flex-col items-start justify-start gap-[18px] max-w-full">
                  <div className="self-stretch flex flex-col items-start justify-start gap-[18px]">
                    <TextField
                      className="[border:none] bg-[transparent] self-stretch h-11 font-poppins text-sm text-darkgray"
                      placeholder="Your Email"
                      variant="outlined"
                      sx={{
                        "& fieldset": { border: "none" },
                        "& .MuiInputBase-root": {
                          height: "44px",
                          backgroundColor: "rgba(174, 200, 230, 0.5)",
                          borderRadius: "5px",
                          fontSize: "14px",
                        },
                        "& .MuiInputBase-input": { color: "#9e9e9e" },
                      }}
                    />
                    <TextField
                      className="[border:none] bg-[transparent] self-stretch h-11 font-poppins text-sm text-darkgray"
                      placeholder="Name"
                      variant="outlined"
                      sx={{
                        "& fieldset": { border: "none" },
                        "& .MuiInputBase-root": {
                          height: "44px",
                          backgroundColor: "rgba(174, 200, 230, 0.5)",
                          borderRadius: "5px",
                          fontSize: "14px",
                        },
                        "& .MuiInputBase-input": { color: "#9e9e9e" },
                      }}
                    />
                    <textarea
                      className="[border:none] bg-lightsteelblue-300 h-[156px] w-auto [outline:none] self-stretch rounded-8xs flex flex-row items-start justify-start py-3 px-7 box-border font-poppins text-sm text-darkgray"
                      placeholder="Name"
                      rows={8}
                      cols={20}
                    />
                  </div>
                  <Button
                    className="w-36 h-11"
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
                      width: 144,
                      height: 44,
                    }}
                  >
                    Get in Touch
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

GetInTouch.propTypes = {
  className: PropTypes.string,
};

export default GetInTouch;
