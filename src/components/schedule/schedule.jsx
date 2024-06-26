import * as React from "react";
import Box from "@mui/material/Box";
// import Button from "@mui/material/Button";
// import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
// import Grid from "@mui/material/Grid";
// import { styled } from "@mui/material/styles";
// import Paper from "@mui/material/Paper";
import { GiCancel } from "react-icons/gi";
import Accordion from "@mui/material/Accordion";
import AccordionActions from "@mui/material/AccordionActions";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Button from "@mui/material/Button";
import { BorderAll } from "@mui/icons-material";
import { BiFontColor } from "react-icons/bi";
import { color } from "d3";
import { ImTextColor } from "react-icons/im";

const style = {
  position: "absolute",

  backgroundColor: "var(--bg-clr)",
  top: "50%",
  left: "50%",

  transform: "translate(-50%, -50%)",
  width: "90%",
  height: "95%",

  borderRadius: "2%",
  overflowY: "auto ",
  // border: "1px solid black",
  boxShadow: 24,
  // padding right = 1
  paddingRight: 1,
};

const largeStyle = {
  position: "absolute",
  opacity: "0.4",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "80%",
  height: "85%",
  borderLeft: "5px solid red",
  borderRadius: "5px",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const Accordion_style = {
  backgroundColor:"inherit",
  border:"none",
  width:"90%",
  borderRadius:"100%",
  color:"white",
  boxShadow:"none",
  
  
};
 
// const Item = styled(Paper)(({ theme }) => ({
//   backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
//   ...theme.typography.body2,
//   padding: theme.spacing(1),
//   textAlign: "center",
//   color: theme.palette.text.secondary,
// }));

export default function Schedule() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
 
  return (
    <div className="w-full h-full flex flex-col items-center justify-center">
      <button
        className="group h-full w-full text-4xl font-bold bg-gradient-to-r from-[var(--google-red)] to-[var(--google-blue)] inline-block text-transparent bg-clip-text hover:bg-transparent"
        onClick={handleOpen}
      >
        Schedule
        <span className="hidden group-hover:inline">{" >"}</span>
      </button>
      {/* <h1 className="text-4xl font-bold bg-gradient-to-r from-[var(--google-red)] to-[var(--google-blue)] inline-block text-transparent bg-clip-text">
        Schedule
      </h1>
      <p className="">
        Revealing Soon...
      </p> */}
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style} lg={largeStyle}>
          <dir className="relative">
            <button
              className="absolute top-0 right-0 text-2xl m-2"
              onClick={handleClose}
            >
              <GiCancel />
            </button>
            <h1
              style={{ fontSize: "30px", textAlign: "center", padding: "5px" }}
            >
              Schedule
            </h1>

            <div className="w-12/12 md:w-7/12 lg:6/12 mx-auto relative ">
              <div className="border-l-2 border-[var(--font-clr)] mt-10">
                <div className="transform transition cursor-pointer hover:-translate-y-2 ml-10 relative flex items-center px-6 py-4 bg-[#5d1914] border-2 border-[#EA4335]  rounded md:rounded-full mb-10 flex-col md:flex-row space-y-4 md:space-y-0">
                  <div className="w-5 h-5 bg-[#4285F4] absolute -left-10 transform -translate-x-2/4 rounded-full z-10 mt-2 md:mt-0"></div>

                  <div className="w-10 h-1 bg-[#4285F4] absolute -left-10 z-0"></div>

                  <Accordion sx={Accordion_style}>
                    <div className="flex-auto">
                      <h1 className="text-lg">09:30 a.m. – 10:30 a.m</h1>
                      <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1-content"
                        id="panel1-header"
                      >
                        <h1 className="text-xl font-bold">
                          Registration and Kickoff
                        </h1>
                      </AccordionSummary>
                    </div>
                    <AccordionDetails>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Suspendisse malesuada lacus ex, sit amet blandit leo
                      lobortis eget.
                    </AccordionDetails>
                  </Accordion>
                </div>

                <div className="transform transition cursor-pointer hover:-translate-y-2 ml-10 relative flex items-center px-6 py-4 bg-[#4285F4] border-2 border-[#4285F4] bg-opacity-40 rounded md:rounded-full rounded mb-10 flex-col md:flex-row space-y-4 md:space-y-0">
                  <div className="w-5 h-5 bg-[#EA4335] absolute -left-10 transform -translate-x-2/4 rounded-full z-10 mt-2 md:mt-0"></div>

                  <div className="w-10 h-1 bg-[#EA4335] absolute -left-10 z-0"></div>

                  <div className="flex-auto">
                    <h1 className="text-lg">10:30 a.m. – 10:40 a.m</h1>
                    <h1 className="text-xl font-bold">Inauguration</h1>
                  </div>
                  <div></div>
                </div>

                <div className="transform transition cursor-pointer hover:-translate-y-2 ml-10 relative flex items-center px-6 py-4 bg-[#FBBC05] border-2 border-[#FBBC05] bg-opacity-40 rounded md:rounded-full rounded mb-10 flex-col md:flex-row space-y-4 md:space-y-0">
                  <div className="w-5 h-5 bg-[#FBBC05] absolute -left-10 transform -translate-x-2/4 rounded-full z-10 mt-2 md:mt-0"></div>

                  <div className="w-10 h-1 bg-[#FBBC05] absolute -left-10 z-0"></div>

                  <div className="flex-auto">
                    <h1 className="text-lg">10:40 a.m. – 11:00 a.m</h1>
                    <h1 className="text-xl font-bold">
                      Guest Welcome / Lightning of Lamp
                    </h1>
                  </div>
                  <div></div>
                </div>

                <div className="transform transition cursor-pointer hover:-translate-y-2 ml-10 relative flex items-center px-6 py-4 bg-[#2ECC71] border-2 border-[#2ECC71] bg-opacity-40 rounded md:rounded-full rounded mb-10 flex-col md:flex-row space-y-4 md:space-y-0">
                  <div className="w-5 h-5 bg-[#2ECC71] absolute -left-10 transform -translate-x-2/4 rounded-full z-10 mt-2 md:mt-0"></div>

                  <div className="w-10 h-1 bg-[#2ECC71] absolute -left-10 z-0"></div>

                  <div className="flex-auto">
                    <h1 className="text-lg">11:00 a.m. – 11:30 a.m</h1>
                    <h1 className="text-xl font-bold">Keynote</h1>
                  </div>
                  <div></div>
                </div>

                <div className="transform transition cursor-pointer hover:-translate-y-2 ml-10 relative flex items-center px-6 py-4 bg-[#EA4335] border-2 border-[#EA4335] bg-opacity-40 rounded md:rounded-full rounded mb-10 flex-col md:flex-row space-y-4 md:space-y-0">
                  <div className="w-5 h-5 bg-[#EA4335] absolute -left-10 transform -translate-x-2/4 rounded-full z-10 mt-2 md:mt-0"></div>

                  <div className="w-10 h-1 bg-[#EA4335] absolute -left-10 z-0"></div>

                  <div className="flex-auto">
                    <h1 className="text-lg">11:30 a.m. – 12:00 p.m</h1>
                    <h1 className="text-xl font-bold">Speaker Session 1</h1>
                  </div>
                  <div></div>
                </div>

                <div className="transform transition cursor-pointer hover:-translate-y-2 ml-10 relative flex items-center px-6 py-4  bg-[#4285F4] border-2 border-[#4285F4] bg-opacity-40 rounded md:rounded-full rounded mb-10 flex-col md:flex-row space-y-4 md:space-y-0">
                  <div className="w-5 h-5 bg-[#4285F4] absolute -left-10 transform -translate-x-2/4 rounded-full z-10 mt-2 md:mt-0"></div>

                  <div className="w-10 h-1 bg-[#4285F4] absolute -left-10 z-0"></div>

                  <div className="flex-auto">
                    <h1 className="text-lg">12:00 p.m. – 12:30 p.m</h1>
                    <h1 className="text-xl font-bold">Speaker Session 2</h1>
                  </div>
                  <div></div>
                </div>

                <div className="transform transition cursor-pointer hover:-translate-y-2 ml-10 relative flex items-center px-6 py-4  bg-[#FBBC05] border-2 border-[#FBBC05] bg-opacity-40 border-2 border-[#FBBC05] bg-opacity-4 rounded md:rounded-full rounded mb-10 flex-col md:flex-row space-y-4 md:space-y-0">
                  <div className="w-5 h-5 bg-[#FBBC05] absolute -left-10 transform -translate-x-2/4 rounded-full z-10 mt-2 md:mt-0"></div>

                  <div className="w-10 h-1 bg-[#FBBC05] absolute -left-10 z-0"></div>

                  <div className="flex-auto">
                    <h1 className="text-lg">12:30 p.m. – 1:15 p.m</h1>
                    <h1 className="text-xl font-bold">Panel Discussion 1</h1>
                  </div>
                  <div></div>
                </div>

                <div className="transform transition cursor-pointer hover:-translate-y-2 ml-10 relative flex items-center px-6 py-4  bg-[#2ECC71] border-2 border-[#2ECC71] bg-opacity-40 rounded md:rounded-full rounded mb-10 flex-col md:flex-row space-y-4 md:space-y-0">
                  <div className="w-5 h-5 bg-[#2ECC71] absolute -left-10 transform -translate-x-2/4 rounded-full z-10 mt-2 md:mt-0"></div>

                  <div className="w-10 h-1 bg-[#2ECC71] absolute -left-10 z-0"></div>

                  <div className="flex-auto">
                    <h1 className="text-lg">01:15 p.m. – 02:00 p.m</h1>
                    <h1 className="text-xl font-bold">Networking Lunch</h1>
                  </div>
                  <div></div>
                </div>

                <div className="transform transition cursor-pointer hover:-translate-y-2 ml-10 relative flex items-center px-6 py-4 bg-[#EA4335] border-2 border-[#EA4335] bg-opacity-40 rounded md:rounded-full rounded mb-10 flex-col md:flex-row space-y-4 md:space-y-0">
                  <div className="w-5 h-5 bg-[#EA4335] absolute -left-10 transform -translate-x-2/4 rounded-full z-10 mt-2 md:mt-0"></div>

                  <div className="w-10 h-1 bg-[#EA4335] absolute -left-10 z-0"></div>

                  <div className="flex-auto">
                    <h1 className="text-lg">02:00 p.m. – 02:30 p.m</h1>
                    <h1 className="text-xl font-bold">
                      Technical Treasure Hunt
                    </h1>
                  </div>
                  <div></div>
                </div>

                <div className="transform transition cursor-pointer hover:-translate-y-2 ml-10 relative flex items-center px-6 py-4 bg-[#4285F4] border-2 border-[#4285F4] bg-opacity-40 rounded md:rounded-full rounded mb-10 flex-col md:flex-row space-y-4 md:space-y-0">
                  <div className="w-5 h-5 bg-[#4285F4] absolute -left-10 transform -translate-x-2/4 rounded-full z-10 mt-2 md:mt-0"></div>

                  <div className="w-10 h-1 bg-[#4285F4] absolute -left-10 z-0"></div>

                  <div className="flex-auto">
                    <h1 className="text-lg">02:30 p.m. – 03:00 p.m</h1>
                    <h1 className="text-xl font-bold">Speaker Session 3</h1>
                  </div>
                  <div></div>
                </div>

                <div className="transform transition cursor-pointer hover:-translate-y-2 ml-10 relative flex items-center px-6 py-4 bg-[#FBBC05] border-2 border-[#FBBC05] bg-opacity-40 rounded md:rounded-full rounded mb-10 flex-col md:flex-row space-y-4 md:space-y-0">
                  <div className="w-5 h-5 bg-[#FBBC05] absolute -left-10 transform -translate-x-2/4 rounded-full z-10 mt-2 md:mt-0"></div>

                  <div className="w-10 h-1 bg-[#FBBC05] absolute -left-10 z-0"></div>

                  <div className="flex-auto">
                    <h1 className="text-lg">03:00 p.m. – 03:30 p.m</h1>
                    <h1 className="text-xl font-bold">
                      Career Grooming/ Resume Building
                    </h1>
                  </div>
                  <div></div>
                </div>

                <div className="transform transition cursor-pointer hover:-translate-y-2 ml-10 relative flex items-center px-6 py-4 bg-[#2ECC71] border-2 border-[#2ECC71] bg-opacity-40 rounded md:rounded-full rounded mb-10 flex-col md:flex-row space-y-4 md:space-y-0">
                  <div className="w-5 h-5 bg-[#2ECC71] absolute -left-10 transform -translate-x-2/4 rounded-full z-10 mt-2 md:mt-0"></div>

                  <div className="w-10 h-1 bg-[#2ECC71] absolute -left-10 z-0"></div>

                  <div className="flex-auto">
                    <h1 className="text-lg">03:30 p.m. – 04:15 p.m</h1>
                    <h1 className="text-xl font-bold">Panel Discussion 2</h1>
                  </div>
                  <div></div>
                </div>

                <div className="transform transition cursor-pointer hover:-translate-y-2 ml-10 relative flex items-center px-6 py-4 bg-[#EA4335] border-2 border-[#EA4335] bg-opacity-40 rounded md:rounded-full rounded mb-10 flex-col md:flex-row space-y-4 md:space-y-0">
                  <div className="w-5 h-5 bg-[#EA4335] absolute -left-10 transform -translate-x-2/4 rounded-full z-10 mt-2 md:mt-0"></div>

                  <div className="w-10 h-1 bg-[#EA4335] absolute -left-10 z-0"></div>

                  <div className="flex-auto">
                    <h1 className="text-lg">04:15 p.m. – 05:00 p.m</h1>
                    <h1 className="text-xl font-bold">Jamming Session</h1>
                  </div>
                  <div></div>
                </div>

                <div className="transform transition cursor-pointer hover:-translate-y-2 ml-10 relative flex items-center px-6 py-4 bg-[#4285F4] border-2 border-[#4285F4] bg-opacity-40 rounded md:rounded-full rounded mb-10 flex-col md:flex-row space-y-4 md:space-y-0">
                  <div className="w-5 h-5 bg-[#4285F4] absolute -left-10 transform -translate-x-2/4 rounded-full z-10 mt-2 md:mt-0"></div>

                  <div className="w-10 h-1 bg-[#4285F4] absolute -left-10 z-0"></div>

                  <div className="flex-auto">
                    <h1 className="text-lg">05:00 p.m. – 06:00 p.m</h1>
                    <h1 className="text-xl font-bold">
                      Networking and Conclusion
                    </h1>
                  </div>
                  <div></div>
                </div>
              </div>
            </div>
          </dir>
        </Box>
      </Modal>
    </div>
  );
}
