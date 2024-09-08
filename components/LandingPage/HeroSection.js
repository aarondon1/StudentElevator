import { Button } from "@mui/material";
import PropTypes from "prop-types";

const HeroSection = ({ className = "" }) => {
  return (
    <div
    className={`self-stretch flex flex-row items-center justify-center flex-wrap content-start gap-[23px] max-w-full text-center text-45xl text-darkslateblue font-poppins mx-auto ${className}`}
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
                Improve your learning and academic journey til college and
                further to achieve a bright and clear future in your desired
                career
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
              <div className="self-stretch rounded-9xl bg-darkslateblue flex flex-row items-start justify-center pt-[43px] pb-[50px] pl-[53px] pr-[45px] box-border gap-7 max-w-full mq800:flex-wrap mq800:pt-7 mq800:pb-8 mq800:box-border mq1150:pl-[26px] mq1150:pr-[22px] mq1150:box-border">
                <div className="h-[553px] w-[866px] relative rounded-9xl bg-darkslateblue hidden max-w-full" />
                <div className="flex-1 rounded-xl bg-white flex flex-col items-start justify-start pt-[70px] px-[29px] pb-[25.2px] box-border gap-[43px] min-w-[160px] z-[1] mq450:pt-[45px] mq450:pb-5 mq450:box-border">
                  <div className="w-[246px] h-[460px] relative rounded-xl bg-white hidden" />
                  <div className="h-0 flex flex-row items-start justify-start py-0 pl-1 pr-1.5 box-border">
                    <img
                      className="h-0 w-[178px] relative z-[2]"
                      loading="lazy"
                      alt=""
                      src="/line-15.svg"
                    />
                  </div>
                  <div className="w-[147px] flex flex-col items-start justify-start gap-[24.2px]">
                    <div className="self-stretch flex flex-row items-start justify-start gap-[20.2px]">
                      <div className="h-[20.1px] w-[20.1px] relative rounded-8xs bg-darkslategray-200 z-[2]" />
                      <div className="flex-1 flex flex-row items-start justify-start gap-2">
                        <div className="flex-1 flex flex-col items-start justify-start gap-[8.1px] shrink-0">
                          <div className="self-stretch h-1.5 relative rounded-14xl bg-darkslategray-200 z-[2]" />
                          <div className="flex flex-row items-start justify-start gap-2.5">
                            <div className="h-1.5 w-[36.3px] relative rounded-14xl bg-darkslategray-200 z-[2]" />
                            <div className="h-1.5 w-[24.2px] relative rounded-14xl bg-darkslategray-200 z-[2]" />
                          </div>
                        </div>
                        <div className="h-1.5 w-[24.2px] relative rounded-14xl bg-darkslategray-200 shrink-0 z-[2]" />
                      </div>
                    </div>
                    <div className="self-stretch flex flex-row items-start justify-start gap-[20.2px]">
                      <div className="h-[20.1px] w-[20.1px] relative rounded-8xs bg-darkslategray-200 z-[2]" />
                      <div className="flex-1 flex flex-row items-start justify-start gap-2">
                        <div className="flex-1 flex flex-col items-start justify-start gap-[8.1px] shrink-0">
                          <div className="self-stretch h-1.5 relative rounded-14xl bg-darkslategray-200 z-[2]" />
                          <div className="flex flex-row items-start justify-start gap-2.5">
                            <div className="h-1.5 w-[36.3px] relative rounded-14xl bg-darkslategray-200 z-[2]" />
                            <div className="h-1.5 w-[24.2px] relative rounded-14xl bg-darkslategray-200 z-[2]" />
                          </div>
                        </div>
                        <div className="h-1.5 w-[24.2px] relative rounded-14xl bg-darkslategray-200 shrink-0 z-[2]" />
                      </div>
                    </div>
                    <div className="self-stretch flex flex-row items-start justify-start gap-[20.2px]">
                      <div className="h-[20.1px] w-[20.1px] relative rounded-8xs bg-darkslategray-200 z-[2]" />
                      <div className="flex-1 flex flex-row items-start justify-start gap-2">
                        <div className="flex-1 flex flex-col items-start justify-start gap-[8.1px] shrink-0">
                          <div className="self-stretch h-1.5 relative rounded-14xl bg-darkslategray-200 z-[2]" />
                          <div className="flex flex-row items-start justify-start gap-2.5">
                            <div className="h-1.5 w-[36.3px] relative rounded-14xl bg-darkslategray-200 z-[2]" />
                            <div className="h-1.5 w-[24.2px] relative rounded-14xl bg-darkslategray-200 z-[2]" />
                          </div>
                        </div>
                        <div className="h-1.5 w-[24.2px] relative rounded-14xl bg-darkslategray-200 shrink-0 z-[2]" />
                      </div>
                    </div>
                    <div className="self-stretch flex flex-row items-start justify-start gap-[20.2px]">
                      <div className="h-[20.1px] w-[20.1px] relative rounded-8xs bg-darkslategray-200 z-[2]" />
                      <div className="flex-1 flex flex-row items-start justify-start gap-2">
                        <div className="flex-1 flex flex-col items-start justify-start gap-[8.1px] shrink-0">
                          <div className="self-stretch h-1.5 relative rounded-14xl bg-darkslategray-200 z-[2]" />
                          <div className="flex flex-row items-start justify-start gap-2.5">
                            <div className="h-1.5 w-[36.3px] relative rounded-14xl bg-darkslategray-200 z-[2]" />
                            <div className="h-1.5 w-[24.2px] relative rounded-14xl bg-darkslategray-200 z-[2]" />
                          </div>
                        </div>
                        <div className="h-1.5 w-[24.2px] relative rounded-14xl bg-darkslategray-200 shrink-0 z-[2]" />
                      </div>
                    </div>
                    <div className="self-stretch flex flex-row items-start justify-start gap-[20.2px]">
                      <div className="h-[20.1px] w-[20.1px] relative rounded-8xs bg-darkslategray-200 z-[2]" />
                      <div className="flex-1 flex flex-row items-start justify-start gap-2">
                        <div className="flex-1 flex flex-col items-start justify-start gap-[8.1px] shrink-0">
                          <div className="self-stretch h-1.5 relative rounded-14xl bg-darkslategray-200 z-[2]" />
                          <div className="flex flex-row items-start justify-start gap-2.5">
                            <div className="h-1.5 w-[36.3px] relative rounded-14xl bg-darkslategray-200 z-[2]" />
                            <div className="h-1.5 w-[24.2px] relative rounded-14xl bg-darkslategray-200 z-[2]" />
                          </div>
                        </div>
                        <div className="h-1.5 w-[24.2px] relative rounded-14xl bg-darkslategray-200 shrink-0 z-[2]" />
                      </div>
                    </div>
                  </div>
                  <div className="self-stretch flex flex-row items-start justify-start py-0 pl-[62px] pr-[63px]">
                    <div className="flex-1 flex flex-row items-start justify-start relative">
                      <div className="h-1.5 w-[56.4px] absolute !m-[0] bottom-[14.1px] left-[-22.1px] rounded-14xl bg-darkslategray-200 z-[2]" />
                      <div className="h-1.5 w-[42.3px] absolute !m-[0] right-[-22.2px] bottom-[14.1px] rounded-14xl bg-darkslategray-200 z-[2]" />
                      <div className="flex-1 flex flex-col items-end justify-start gap-[33.2px]">
                        <div className="self-stretch flex flex-row items-start justify-end py-0 pl-2.5 pr-[9px]">
                          <div className="h-[42.3px] w-[42.3px] relative rounded-[50%] bg-silver z-[2]" />
                        </div>
                        <div className="self-stretch h-1.5 relative rounded-14xl bg-darkslategray-200 z-[2]" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="w-[231px] flex flex-col items-start justify-start gap-[26px]">
                  <div className="self-stretch h-[217px] relative rounded-xl bg-white z-[1]">
                    <div className="absolute top-[0px] left-[0px] rounded-xl bg-white w-full h-full hidden z-[1]" />
                    <div className="absolute top-[25px] left-[21.8px] w-[193.3px] h-[156.1px] z-[2]">
                      <div className="absolute top-[44.3px] left-[40.3px] w-[111.8px] h-[111.8px]">
                        <img
                          className="absolute top-[0px] left-[0px] w-full h-full"
                          alt=""
                          src="/vector.svg"
                        />
                        <img
                          className="absolute w-[calc(100%_-_18.7px)] top-[9.3px] right-[9.4px] left-[9.3px] max-w-full overflow-hidden h-[93.1px] z-[1]"
                          loading="lazy"
                          alt=""
                          src="/vector-1.svg"
                        />
                        <img
                          className="absolute top-[0.4px] left-[0.4px] w-full h-full z-[2]"
                          alt=""
                          src="/vector-2.svg"
                        />
                        <div className="absolute top-[28.2px] left-[29.2px] rounded-[50%] bg-darkslategray-200 w-[54.4px] h-[54.4px] z-[3]" />
                        <div className="absolute top-[36.3px] left-[37.3px] rounded-[50%] bg-white w-[38.3px] h-[38.3px] z-[4]" />
                      </div>
                      <div className="absolute top-[0px] left-[0px] rounded-14xl bg-darkslategray-200 w-[74.5px] h-1.5" />
                      <div className="absolute top-[0px] left-[82.6px] rounded-14xl bg-darkslategray-200 w-[24.2px] h-1.5" />
                      <div className="absolute top-[14.1px] left-[46.4px] rounded-14xl bg-darkslategray-200 w-[24.2px] h-1.5" />
                      <div className="absolute top-[14.1px] left-[0px] rounded-14xl bg-darkslategray-200 w-[36.3px] h-1.5" />
                      <div className="absolute top-[0px] left-[173.2px] rounded-8xs bg-darkslategray-200 w-[20.1px] h-[20.1px]" />
                    </div>
                  </div>
                  <div className="self-stretch rounded-xl bg-white flex flex-col items-start justify-start pt-[26.7px] pb-[27.8px] pl-[25px] pr-[11px] gap-[29.2px] z-[1]">
                    <div className="w-[231px] h-[217px] relative rounded-xl bg-white hidden" />
                    <div className="self-stretch flex flex-col items-start justify-start gap-[18.2px]">
                      <div className="self-stretch flex flex-row items-start justify-between gap-5">
                        <div className="w-[106.7px] flex flex-row items-start justify-start gap-2">
                          <div className="flex-1 flex flex-col items-start justify-start gap-[8.1px] shrink-0">
                            <div className="self-stretch h-1.5 relative rounded-14xl bg-darkslategray-200 z-[2]" />
                            <div className="flex flex-row items-start justify-start gap-2.5">
                              <div className="h-1.5 w-[36.3px] relative rounded-14xl bg-darkslategray-200 z-[2]" />
                              <div className="h-1.5 w-[24.2px] relative rounded-14xl bg-darkslategray-200 z-[2]" />
                            </div>
                          </div>
                          <div className="h-1.5 w-[24.2px] relative rounded-14xl bg-darkslategray-200 shrink-0 z-[2]" />
                        </div>
                        <div className="h-[20.1px] w-[20.1px] relative rounded-8xs bg-darkslategray-200 z-[2]" />
                      </div>
                      <div className="self-stretch h-px relative border-darkslategray-200 border-t-[1px] border-solid box-border z-[2]" />
                    </div>
                    <div className="w-[184.9px] flex flex-row items-start justify-start py-0 px-1.5 box-border">
                      <img
                        className="h-[94px] flex-1 relative max-w-full overflow-hidden z-[2]"
                        loading="lazy"
                        alt=""
                        src="/group-132.svg"
                      />
                    </div>
                  </div>
                </div>
                <div className="w-[235px] flex flex-col items-start justify-start gap-7">
                  <div className="w-[230px] rounded-xl bg-white flex flex-col items-start justify-start pt-[25px] pb-[25.1px] pl-[23px] pr-[13px] box-border gap-[23.2px] z-[1]">
                    <div className="w-[230px] h-[328px] relative rounded-xl bg-white hidden" />
                    <div className="self-stretch flex flex-row items-start justify-start gap-[7.6px]">
                      <div className="flex-1 flex flex-col items-end justify-start gap-[35.3px]">
                        <div className="self-stretch flex flex-row items-start justify-end py-0 pl-0 pr-[27px]">
                          <div className="flex-1 flex flex-row items-start justify-start gap-[8.1px]">
                            <div className="flex-1 flex flex-col items-start justify-start gap-[8.1px] shrink-0">
                              <div className="self-stretch h-1.5 relative rounded-14xl bg-darkslategray-200 z-[2]" />
                              <div className="flex flex-row items-start justify-start gap-[10.1px]">
                                <div className="h-1.5 w-[36.3px] relative rounded-14xl bg-darkslategray-200 z-[2]" />
                                <div className="h-1.5 w-[24.2px] relative rounded-14xl bg-darkslategray-200 z-[2]" />
                              </div>
                            </div>
                            <div className="h-1.5 w-[24.2px] relative rounded-14xl bg-darkslategray-200 shrink-0 z-[2]" />
                          </div>
                        </div>
                        <div className="w-[74.5px] flex flex-col items-start justify-start gap-[8.1px]">
                          <div className="self-stretch h-1.5 relative rounded-14xl bg-darkslategray-200 z-[2]" />
                          <div className="flex flex-row items-start justify-start gap-[10.1px]">
                            <div className="h-1.5 w-[36.3px] relative rounded-14xl bg-darkslategray-200 z-[2]" />
                            <div className="h-1.5 w-[24.2px] relative rounded-14xl bg-darkslategray-200 z-[2]" />
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-col items-start justify-start pt-[55.4px] px-0 pb-0">
                        <div className="w-[24.2px] h-1.5 relative rounded-14xl bg-darkslategray-200 z-[2]" />
                      </div>
                      <div className="h-[20.1px] w-[20.1px] relative rounded-8xs bg-darkslategray-200 z-[2]" />
                    </div>
                    <div className="self-stretch flex flex-col items-end justify-start gap-[15.1px]">
                      <div className="self-stretch h-px relative border-darkslategray-100 border-t-[1px] border-solid box-border z-[2]" />
                      <div className="w-[160.9px] flex flex-row items-start justify-end py-0 px-[27px] box-border">
                        <div className="flex-1 flex flex-row items-start justify-start gap-[8.1px]">
                          <div className="flex-1 flex flex-col items-start justify-start gap-[8.1px] shrink-0">
                            <div className="self-stretch h-1.5 relative rounded-14xl bg-darkslategray-200 z-[2]" />
                            <div className="flex flex-row items-start justify-start gap-[10.1px]">
                              <div className="h-1.5 w-[36.3px] relative rounded-14xl bg-darkslategray-200 z-[2]" />
                              <div className="h-1.5 w-[24.2px] relative rounded-14xl bg-darkslategray-200 z-[2]" />
                            </div>
                          </div>
                          <div className="h-1.5 w-[24.2px] relative rounded-14xl bg-darkslategray-200 shrink-0 z-[2]" />
                        </div>
                      </div>
                    </div>
                    <div className="self-stretch flex flex-col items-end justify-start gap-[15.1px]">
                      <div className="self-stretch h-px relative border-darkslategray-100 border-t-[1px] border-solid box-border z-[2]" />
                      <div className="w-[160.9px] flex flex-row items-start justify-end py-0 px-[27px] box-border">
                        <div className="flex-1 flex flex-row items-start justify-start gap-[8.1px]">
                          <div className="flex-1 flex flex-col items-start justify-start gap-[8.1px] shrink-0">
                            <div className="self-stretch h-1.5 relative rounded-14xl bg-darkslategray-200 z-[2]" />
                            <div className="flex flex-row items-start justify-start gap-[10.1px]">
                              <div className="h-1.5 w-[36.3px] relative rounded-14xl bg-darkslategray-200 z-[2]" />
                              <div className="h-1.5 w-[24.2px] relative rounded-14xl bg-darkslategray-200 z-[2]" />
                            </div>
                          </div>
                          <div className="h-1.5 w-[24.2px] relative rounded-14xl bg-darkslategray-200 shrink-0 z-[2]" />
                        </div>
                      </div>
                    </div>
                    <div className="self-stretch flex flex-col items-end justify-start gap-[15.1px]">
                      <div className="self-stretch h-px relative border-darkslategray-100 border-t-[1px] border-solid box-border z-[2]" />
                      <div className="w-[160.9px] flex flex-row items-start justify-end py-0 px-[27px] box-border">
                        <div className="flex-1 flex flex-row items-start justify-start gap-[8.1px]">
                          <div className="flex-1 flex flex-col items-start justify-start gap-[8.1px] shrink-0">
                            <div className="self-stretch h-1.5 relative rounded-14xl bg-darkslategray-200 z-[2]" />
                            <div className="flex flex-row items-start justify-start gap-[10.1px]">
                              <div className="h-1.5 w-[36.3px] relative rounded-14xl bg-darkslategray-200 z-[2]" />
                              <div className="h-1.5 w-[24.2px] relative rounded-14xl bg-darkslategray-200 z-[2]" />
                            </div>
                          </div>
                          <div className="h-1.5 w-[24.2px] relative rounded-14xl bg-darkslategray-200 shrink-0 z-[2]" />
                        </div>
                      </div>
                    </div>
                    <div className="self-stretch h-px relative border-darkslategray-100 border-t-[1px] border-solid box-border z-[2]" />
                  </div>
                  <div className="self-stretch flex flex-row items-start justify-start py-0 pl-[3px] pr-0">
                    <textarea
                      className="[border:none] bg-white h-[104px] w-auto [outline:none] flex-1 relative rounded-xl z-[1]"
                      rows={5}
                      cols={12}
                    />
                  </div>
                </div>
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
