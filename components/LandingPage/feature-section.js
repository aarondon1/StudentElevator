import {
  TextField,
  InputAdornment,
  Icon,
  IconButton,
  Button,
} from "@mui/material";
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
            
           
          </div>
          
          <div className="w-full flex flex-row items-center justify-center flex-wrap content-start gap-[30px] text-center text-xl text-darkslateblue">
            {/* Master Concepts */}
            
            
            <div className="flex-1 rounded-xl bg-lightsteelblue-300 flex flex-col items-center justify-start pt-[30px] pb-[30px] px-6 box-border gap-[10px] min-w-[262px] max-w-[320px] min-h-[400px] max-h-[400px]">
              <div className="rounded-full bg-white flex items-center justify-center p-[20px]">
                <img className="h-[46px] w-[46px]" src="/group-102.svg" alt="Master Concepts" />
              </div>
              <h3 className="text-lg font-semibold">Master Concepts</h3>
              <p className="text-sm leading-[24px]">
                Master concepts by breaking them down using the Feynman Technique. This method involves simplifying complex ideas into easy-to-understand explanations, helping you identify gaps in your knowledge and reinforce understanding.
              </p>
            </div>

            {/* Retain Concepts */}
            <div className="flex-1 rounded-xl bg-lightsteelblue-300 flex flex-col items-center justify-start pt-[30px] pb-[30px] px-6 box-border gap-[10px] min-w-[262px] max-w-[320px] min-h-[400px] max-h-[400px]">
              <div className="rounded-full bg-white flex items-center justify-center p-[20px]">
                <img className="h-[46px] w-[46px]" src="/group.svg" alt="Retain Concepts" />
              </div>
              <h3 className="text-lg font-semibold">Retain Concepts</h3>
              <p className="text-sm leading-[24px]">
                Retain concepts by viewing and logging your saved material while utilizing active recall. This proven method challenges you to retrieve information from memory, strengthening long-term retention and deepening your understanding.
              </p>
            </div>

            {/* AI-Assisted Learning */}
            <div className="flex-1 rounded-xl bg-lightsteelblue-300 flex flex-col items-center justify-start pt-[30px] pb-[30px] px-6 box-border gap-[10px] min-w-[262px] max-w-[320px] min-h-[400px] max-h-[400px]">
              <div className="flex items-center justify-center p-[20px]">
                <img className="h-[46px] w-[46px]" src="/group-129.svg" alt="AI-Assisted Learning" />
              </div>
              <h3 className="text-lg font-semibold">AI-Assisted Learning</h3>
              <p className="text-sm leading-[24px]">
                Enhance your learning experience with AI-assisted tools. Benefit from personalized quizzes, flashcards, and tailored study plans to help you grasp concepts.
              </p>
            </div>

            {/* Resume Builder */}
            <div className="flex-1 rounded-xl bg-lightsteelblue-300 flex flex-col items-center justify-start pt-[30px] pb-[30px] px-6 box-border gap-[10px] min-w-[262px] max-w-[320px] min-h-[400px] max-h-[400px]">
              <div className="rounded-full bg-white flex items-center justify-center p-[20px]">
                <img className="h-[46px] w-[46px]" src="/group-103.svg" alt="Resume Builder" />
              </div>
              <h3 className="text-lg font-semibold">Resume Builder</h3>
              <p className="text-sm leading-[24px]">
                Create a professional resume effortlessly with our AI-powered Resume Builder.
              </p>
            </div>

            {/* Career Path */}
            <div className="flex-1 rounded-xl bg-lightsteelblue-300 flex flex-col items-center justify-start pt-[30px] pb-[30px] px-6 box-border gap-[10px] min-w-[262px] max-w-[320px] min-h-[400px] max-h-[400px]">
              <div className="rounded-full bg-white flex items-center justify-center p-[20px]">
                <img className="h-[46px] w-[46px]" src="/group.svg" alt="Career Path" />
              </div>
              <h3 className="text-lg font-semibold">Career Path</h3>
              <p className="text-sm leading-[24px]">
                Track your career progress with our Personalized Career Timeline. Our tool helps you stay organized and focused on your career goals, providing insights and recommendations to help you advance in your field.
              </p>
            </div>

            {/* Personal Planner */}
            <div className="flex-1 rounded-xl bg-lightsteelblue-300 flex flex-col items-center justify-start pt-[30px] pb-[30px] px-6 box-border gap-[10px] min-w-[262px] max-w-[320px] min-h-[400px] max-h-[400px]">
              <div className="rounded-full bg-white flex items-center justify-center p-[20px]">
                <img className="h-[46px] w-[46px]" src="/group-106.svg" alt="Personal Planner" />
              </div>
              <h3 className="text-lg font-semibold">Personal Planner</h3>
              <p className="text-sm leading-[24px]">
                List your classes and organize your school and personal schedule effortlessly. Our AI feature creates an optimal schedule for you based on your time constraints and priorities.
              </p>
            </div>
          </div>

        </div>
      </div>


     
      <div  className="self-stretch bg-lightsteelblue-300 flex flex-col items-center justify-center pt-28 px-5 pb-[83px] box-border gap-[41px] max-w-full mq800:gap-5 mq800:pt-[73px] mq800:pb-[54px] mq800:box-border">
        
        <div  className="w-[1440px] h-[725px] relative bg-lightsteelblue-300 hidden max-w-full" />
        
        <div id="getInTouch" className="w-full flex flex-row items-center justify-center max-w-full">
          
          <h1 className="m-0 text-center text-inherit leading-[64px] font-semibold font-[inherit] z-[1] mq800:text-19xl mq800:leading-[51px] mq450:text-10xl mq450:leading-[38px]">
            Grow and be Career Ready
          </h1>
        </div>
        <div id="JoinOurWait" className="rounded-21xl [background:linear-gradient(135.66deg,_#aec8e6,_#8154ff)] flex flex-row items-center justify-center pt-[37px] pb-[19px] pl-[93px] pr-[93px] box-border [row-gap:20px] max-w-full z-[1] text-xl mq1150:flex-wrap mq1150:pl-5 mq1150:pr-5 mq1150:box-border mq450:pt-6 mq450:pb-5 mq450:box-border">
          <div className="h-[425px] w-[1110px] relative rounded-21xl [background:linear-gradient(135.66deg,_#aec8e6,_#8154ff)] hidden max-w-full" />
          <div className="w-[503px] flex flex-col items-center justify-center pt-0 px-0 pb-[53px] box-border min-w-[503px] min-h-[307px] max-w-full mq800:min-w-full mq1150:flex-1">
            <div className="self-stretch flex flex-col items-center justify-center gap-3 max-w-full">
              <h3 className="m-0 text-center text-inherit leading-[32px] font-normal font-[inherit] z-[2] mq450:text-base mq450:leading-[26px]">
                Love our Tools?
              </h3>
              <div className="self-stretch flex flex-row items-center justify-center py-0 pl-1 pr-0 box-border max-w-full text-center text-29xl">
                <div className="flex-1 flex flex-col items-center justify-center gap-9 max-w-full mq800:gap-[18px]">
                  <h1 className="m-0 self-stretch relative text-inherit leading-[65px] font-semibold font-[inherit] z-[2] mq800:text-19xl mq800:leading-[52px] mq450:text-10xl mq450:leading-[39px]">
                    Sign Up for our Waitlist
                  </h1>
                </div>
              </div>
            </div>
          </div>

        {/* TextField and Button section */}
        <div className="w-[514px] flex flex-col items-start justify-start py-0 px-[30px] box-border min-w-[514px] max-w-full mq800:min-w-full mq1150:flex-1">
          
          <div className="self-stretch flex flex-col items-start justify-start gap-[18px]">
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
                  paddingLeft: "15px", // Padding to move the input from the left edge
                },
                "& .MuiInputBase-input": { color: "white" },
              }}
            />
            <TextField
              className="[border:none] bg-[transparent] self-stretch h-11 font-poppins text-sm text-darkgray"
              placeholder="Email"
              variant="outlined"
              sx={{
                "& fieldset": { border: "none" },
                "& .MuiInputBase-root": {
                  height: "44px",
                  backgroundColor: "rgba(174, 200, 230, 0.5)",
                  borderRadius: "5px",
                  fontSize: "14px",
                  paddingLeft: "15px", // Padding to move the input from the left edge
                },
                "& .MuiInputBase-input": { color: "white" },
              }}
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
              marginTop: "20px", // Spacing above the button
              "&:hover": {
                background:
                  "linear-gradient(92.51deg, rgba(11, 74, 164, 0.64), #925fe2)",
              },
              width: 144,
              height: 44,
            }}
          >
            Submit
          </Button>
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
