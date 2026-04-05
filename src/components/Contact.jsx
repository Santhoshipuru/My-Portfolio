import React from "react";
import { Container, Card, Typography, Stack, Button } from "@mui/material";
import { motion } from "framer-motion";
import data from "../data";

export default function Contact() {
  return (
    <Container id="contact" sx={{ py: 10, maxWidth: "800px" }}>
      <Typography
          variant="h4"
          sx={{
            fontWeight: 700,
            background: "linear-gradient(90deg,#4F46E5,#EC4899)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            mb: 2,
            textAlign: "center",
          }}
        >
          Let's Connect
        </Typography>
      <Card
        component={motion.div}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        sx={{
          p: 5,
          textAlign: "center",
          borderRadius: "20px",
          boxShadow: "0px 12px 40px rgba(79, 70, 229, 0.12)",
          background: "rgba(255, 255, 255, 0.85)",
          backdropFilter: "blur(12px)",
        }}
      >
        <Typography variant="body1" color="text.secondary" sx={{ mb: 4 }}>
          I'm open to collaborations, freelance work, and new opportunities.
        </Typography>

        <Stack
          direction="row"
          justifyContent="center"
          spacing={2}
          sx={{ flexWrap: "wrap" }}
        >
          <Button
            variant="contained"
            href={`https://mail.google.com/mail/?view=cm&fs=1&to=${data.email}&su=Job%20Opportunity&body=Hi%20Abhinava,%0D%0A%0D%0AI%20would%20like%20to%20connect%20with%20you.`}
            target="_blank"
          >
            Email
          </Button>
          <Button variant="contained" href={data.linkedin} target="_blank">
            LinkedIn
          </Button>
          <Button variant="contained" href={data.github} target="_blank">
            GitHub
          </Button>
          <Button variant="contained" href={data.thopMember} target="_blank">
            Thop Member
          </Button>
        </Stack>
      </Card>
    </Container>
  );
}
