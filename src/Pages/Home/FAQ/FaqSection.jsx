import  { useState } from "react";
import { useSpring, animated } from "react-spring";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  Box,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";


const FaqSection = () => {
  const [expanded, setExpanded] = useState(null);
  const [springProps, setSpringProps] = useSpring(() => ({
    height: 0,
    opacity: 0,
  }));

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : null);
    setSpringProps({
      height: isExpanded ? "auto" : 0,
      opacity: isExpanded ? 1 : 0,
    });
  };

  return (
    <div>
      {/* Replace this SectionTitle component with your own */}
      <SectionTitle heading={"FAQ Section"} subHeading={"Some question ans"} />
      <Box my={6}>
        <Accordion
          expanded={expanded === "panel1"}
          onChange={handleChange("panel1")}
        >
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography variant="h6">
              What does Our inventory management system offer that others may not?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <animated.div style={springProps}>
              <Typography>
                Our inventory management system is designed to offer real-time
                tracking, detailed analytics, and intuitive user interfaces.
                Unlike some systems, ours provides customizable features to
                suit diverse business needs, ensuring seamless integration and
                enhanced operational efficiency.
              </Typography>
            </animated.div>
          </AccordionDetails>
        </Accordion>

        {/* Add more Accordion items similarly */}
        <Accordion
          expanded={expanded === "panel2"}
          onChange={handleChange("panel2")}
        >
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography variant="h6">
              How user-friendly is our inventory management system for beginners?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <animated.div style={springProps}>
              <Typography>
                Our system is designed with simplicity in mind. Its intuitive
                interface and user-friendly design make it easy for beginners
                to navigate through the system. Moreover, we offer
                comprehensive tutorials and customer support to assist users at
                every step.
              </Typography>
            </animated.div>
          </AccordionDetails>
        </Accordion>

        {/* Add more Accordion items similarly */}
        <Accordion
          expanded={expanded === "panel3"}
          onChange={handleChange("panel3")}
        >
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography variant="h6">
              What kind of customer support do you offer for your inventory management system?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <animated.div style={springProps}>
              <Typography>
                We provide comprehensive customer support, including live chat,
                email support, and an extensive knowledge base. Our dedicated
                support team is available to assist users with any inquiries,
                troubleshooting, or training requirements.
              </Typography>
            </animated.div>
          </AccordionDetails>
        </Accordion>

        {/* Add more Accordion items similarly */}
      </Box>
    </div>
  );
};

export default FaqSection;
