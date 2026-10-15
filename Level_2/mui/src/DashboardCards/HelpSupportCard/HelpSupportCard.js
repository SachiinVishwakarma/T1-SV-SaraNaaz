
import { Box, Typography } from "@mui/material";
import HelpOutlineIcon from "@mui/icons-material/Help";
import CallIcon from "@mui/icons-material/Call";
import { useTheme } from "@mui/material/styles";
import helpSupportTheme from "../../Theme/HelpSupportTheme.js";

function HelpSupportComponent() {
  const theme = useTheme();
  const style = helpSupportTheme(theme);

  const ques = [    
    {
      question: "How do I update my profile?",
      answer:
        'Click on "Profile Settings" in the sidebar to edit your personal information, address, and other details.',
    },
    {
      question: "Is my data secure?",
      answer:
        "This is a demo application that stores data in your browser's localStorage. In a production app, data would be encrypted and stored securely on servers.",
    },
    {
      question: "How do I change my password?",
      answer:
        'Go to "Security" in the sidebar, enter your current password, then set and confirm your new password.',
    },
  ];

  return (
    <Box sx={style.pageContent}>
      <Box sx={style.helpCard}>
        <Typography sx={style.heading}>
          Help & Support
        </Typography>

        <Box sx={style.sectionHeading}>
          <HelpOutlineIcon sx={style.faqIcon} />
          <Typography sx={style.sectionTitle}>
            Frequently Asked Questions
          </Typography>
        </Box>

        <Box sx={style.faqList}>
          {ques.map((ques) => (
            <Box key={ques.question} sx={style.faqCard}>
              <Typography sx={style.question}>
                {ques.question}
              </Typography>

              <Typography sx={style.answer}>
                {ques.answer}
              </Typography>
            </Box>
          ))}
        </Box>

        <Box sx={style.contactSection}>
          <Box sx={style.sectionHeading}>
            <CallIcon sx={style.contactIcon} />
            <Typography sx={style.sectionTitle}>
              Contact Support
            </Typography>
          </Box>

          <Typography sx={style.contactDescription}>
            This is a demonstration application for learning web development.
            In a real application, you would find contact information and
            support options here.
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}

export default HelpSupportComponent;
