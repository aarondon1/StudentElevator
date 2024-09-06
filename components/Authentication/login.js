import {
    TextField,
    InputAdornment,
    Icon,
    IconButton,
    Button,
  } from "@mui/material";
  import PropTypes from "prop-types";
  
  const Login = ({ className = "" }) => {
    return (
      <div
        className={`w-[1440px] bg-white max-w-full overflow-hidden flex flex-row items-start justify-start py-0 pl-[230px] pr-[26px] box-border leading-[normal] tracking-[normal] [row-gap:20px] mq450:pl-5 mq450:box-border mq750:pl-[115px] mq750:box-border mq1125:flex-wrap ${className}`}
      >
        <div className="w-[518px] flex flex-col items-start justify-start pt-24 px-0 pb-0 box-border min-w-[518px] max-w-full mq750:pt-[62px] mq750:box-border mq1050:min-w-full mq1125:flex-1">
          <form className="m-0 self-stretch flex flex-col items-start justify-start gap-[38px] max-w-full mq750:gap-[19px]">
            <div className="w-[359px] flex flex-col items-start justify-start gap-1 max-w-full">
              <h1 className="m-0 relative text-29xl leading-[80px] font-semibold font-poppins text-gray-100 text-center mq450:text-10xl mq450:leading-[48px] mq1050:text-19xl mq1050:leading-[64px]">
                Login
              </h1>
              <div className="self-stretch flex flex-col items-start justify-start gap-4 max-w-full">
                <TextField
                  className="[border:none] bg-[transparent] w-[350px] h-11 font-poppins text-sm text-darkgray max-w-full"
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
                    width: "350px",
                  }}
                />
                <TextField
                  className="[border:none] bg-[transparent] w-[350px] h-11 font-poppins text-sm text-darkgray max-w-full"
                  placeholder="Password"
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
                    width: "350px",
                  }}
                />
              </div>
            </div>
            <div className="self-stretch flex flex-row items-start justify-start gap-[21px] max-w-full mq750:flex-wrap">
              <Button
                className="h-11 w-[139px]"
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
                  width: 139,
                  height: 44,
                }}
              >
                Login
              </Button>
            </div>
            <div className="w-[168px] rounded-8xs bg-gray-300 flex flex-row items-start justify-start pt-1.5 px-[13px] pb-[5px] box-border gap-2.5">
              <div className="h-[51px] w-[168px] relative rounded-8xs bg-gray-300 hidden" />
              <div className="flex flex-col items-start justify-start pt-2 px-0 pb-0">
                <img
                  className="w-[23px] h-[23px] relative z-[1]"
                  loading="lazy"
                  alt=""
                  src="/group-259.svg"
                />
              </div>
              <div className="h-[34px] flex flex-col items-start justify-start pt-1.5 px-0 pb-0 box-border">
                <div className="w-px h-[29px] relative border-darkslategray-100 border-r-[1px] border-solid box-border z-[1]" />
              </div>
              <div className="flex flex-col items-start justify-start">
                <div className="relative text-[10px] leading-[20px] font-poppins text-darkgray text-left inline-block min-w-[64px] shrink-0 z-[1]">
                  Login with
                </div>
                <div className="h-5 flex flex-row items-start justify-start pt-0 px-0 pb-0 box-border">
                  <div className="mt-[-8px] relative text-sm leading-[28px] font-poppins text-white text-left inline-block min-w-[51px] shrink-0 z-[1]">
                    Google
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
        <div className="flex-1 flex flex-row items-start justify-start gap-[30.5px] min-w-[451px] max-w-full ml-[-28px] mq750:gap-[15px] mq750:flex-wrap mq750:min-w-full mq1050:ml-0">
          <div className="h-[798px] flex-1 flex flex-col items-start justify-start pt-[202.2px] px-0 pb-[86.2px] box-border gap-[30.6px] min-w-[158px] mq750:pb-9 mq750:box-border mq1125:pt-12 mq1125:pb-14 mq1125:box-border">
            <div className="mt-[-270px] self-stretch h-[239.5px] relative rounded-xl bg-darkslateblue shrink-0" />
            <div className="self-stretch h-[239.5px] relative rounded-xl bg-lavender shrink-0" />
            <div className="self-stretch h-[239.5px] relative rounded-xl bg-darkslateblue shrink-0" />
            <div className="self-stretch h-[239.5px] relative rounded-xl bg-darkslateblue shrink-0" />
          </div>
          <div className="h-[798px] flex-1 flex flex-col items-start justify-start pt-[86.1px] px-0 pb-[202.4px] box-border gap-[30.6px] min-w-[158px] mq750:pb-[86px] mq750:box-border mq1125:pt-12 mq1125:pb-[132px] mq1125:box-border">
            <div className="mt-[-270.1px] self-stretch h-[239.5px] relative rounded-xl bg-darkslateblue shrink-0" />
            <div className="self-stretch h-[239.5px] relative rounded-xl bg-darkslateblue shrink-0" />
            <div className="self-stretch h-[239.5px] relative rounded-xl bg-lavender shrink-0" />
            <div className="self-stretch h-[239.5px] relative rounded-xl bg-darkslateblue shrink-0" />
          </div>
          <div className="h-[798px] flex-1 flex flex-col items-start justify-start pt-[202.2px] px-0 pb-[86.2px] box-border gap-[30.6px] min-w-[158px] mq750:pb-9 mq750:box-border mq1125:pt-12 mq1125:pb-14 mq1125:box-border">
            <div className="mt-[-270px] self-stretch h-[239.5px] relative rounded-xl bg-darkslateblue shrink-0" />
            <img
              className="self-stretch h-[239.5px] relative rounded-xl max-w-full overflow-hidden shrink-0"
              loading="lazy"
              alt=""
              src="/rectangle-68.svg"
            />
            <div className="self-stretch h-[239.5px] relative rounded-xl bg-darkslateblue shrink-0" />
            <div className="self-stretch h-[239.5px] relative rounded-xl bg-darkslateblue shrink-0" />
          </div>
        </div>
      </div>
    );
  };
  
  Login.propTypes = {
    className: PropTypes.string,
  };
  
  export default Login;