import { useState } from "react";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { Button, Divider } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import EditIcon from "@mui/icons-material/Edit";
import VideocamIcon from "@mui/icons-material/Videocam";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import EventIcon from "@mui/icons-material/Event";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import NotificationsIcon from "@mui/icons-material/Notifications";
import HelpIcon from "@mui/icons-material/Help";
import FeedbackIcon from "@mui/icons-material/Feedback";
import SettingsIcon from "@mui/icons-material/Settings";
import { Link } from "react-router-dom";
import ListItemButton from "@mui/material/ListItemButton";
import OpenAI from "openai";
import { motion } from "framer-motion";
import axios from 'axios'

const Dashboard = () => {
  const [showUploadArea, setShowUploadArea] = useState(false);

  const handleAddButtonClick = () => {
    setShowUploadArea(true);
  };

  const handleFileUpload = async (e) => {
    const file = e.target.files[0];
    const formData = new FormData();
    formData.append("file", file);
    const openai = new OpenAI({
      apiKey: import.meta.env.VITE_OPENAI_API_KEY,
      dangerouslyAllowBrowser: true,
    });

    try {
      const transcription = await openai.audio.transcriptions.create({
        file: file,
        model: "whisper-1",
      });

      console.log("Transcription:", transcription.text);
      const eventData = await axios.post("https://127.0.0.1:5000/", { conversation: transcription.text });
    } catch (error) {
      console.error("Error transcribing file:", error);
    }
  };

  return (
    <motion.div
      className="flex h-screen"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <Drawer
        variant="permanent"
        anchor="left"
        sx={{
          width: 240,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: 240,
            boxSizing: "border-box",
            backgroundColor: "#FFFFFF",
          },
        }}
      >
        <List>
          <ListItemButton component={Link} to="/dashboard">
            <ListItemIcon>
              <VideocamIcon />
            </ListItemIcon>
            <ListItemText primary="Dashboard" />
          </ListItemButton>
          <ListItemButton component={Link} to="/calendar">
            <ListItemIcon>
              <EventIcon />
            </ListItemIcon>
            <ListItemText primary="Calendar" />
          </ListItemButton>
          <ListItemButton component={Link} to="/todo">
            <ListItemIcon>
              <EditIcon />
            </ListItemIcon>
            <ListItemText primary="Todo List" />
          </ListItemButton>
          <ListItemButton component={Link} to="/settings">
            <ListItemIcon>
              <SettingsIcon />
            </ListItemIcon>
            <ListItemText primary="Settings" />
          </ListItemButton>

          <Divider />

          <ListItemButton>
            <ListItemIcon>
              <AccountCircleIcon />
            </ListItemIcon>
            <ListItemText primary="Profile" />
          </ListItemButton>
          <ListItemButton>
            <ListItemIcon>
              <NotificationsIcon />
            </ListItemIcon>
            <ListItemText primary="Notifications" />
          </ListItemButton>
          <ListItemButton>
            <ListItemIcon>
              <HelpIcon />
            </ListItemIcon>
            <ListItemText primary="Help" />
          </ListItemButton>
          <ListItemButton>
            <ListItemIcon>
              <FeedbackIcon />
            </ListItemIcon>
            <ListItemText primary="Feedback" />
          </ListItemButton>
        </List>
      </Drawer>

      <motion.div
        className="flex-grow flex flex-col justify-center items-center px-8 bg-gradient-to-br from-blue-200 to-purple-200"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 1 }}
      >
        <div className="text-center mb-8">
          <motion.h1
            className="text-slate-500 text-5xl mb-2"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
          >
            Welcome to Koala Vision
          </motion.h1>
          <motion.h1
            className="text-slate-500 text-4xl mb-4"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.7, duration: 1 }}
          >
            Lets get you started!
          </motion.h1>
          <motion.h1
            className="text-3xl font-bold text-slate-700 mb-4"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.9, duration: 1 }}
          >
            Revolutionize Your Meetings with KoalaVision
          </motion.h1>
          <motion.h2
            className="text-lg text-slate-600 mb-4"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.1, duration: 1 }}
          >
            Effortlessly Record, Upload, and Organize Your Meetings
          </motion.h2>
        </div>
        <motion.div
          className="bg-slate-50 p-12 rounded-3xl"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1.3, duration: 1 }}
        >
          <div className="flex justify-center items-center mb-4">
            <CloudUploadIcon style={{ color: "black" }} />
            <h1 className="font-semibold text-black text-xl">
              Upload your video file, audio file, or transcript file
            </h1>
          </div>
          <Button
            variant="contained"
            sx={{ color: "white", mx: 2 }}
            onClick={handleAddButtonClick}
          >
            <AddIcon />
            Add Video
          </Button>
          <Button
            variant="contained"
            sx={{ color: "white", mx: 2 }}
            onClick={handleAddButtonClick}
          >
            <AddIcon />
            Add Audio
          </Button>
          <Button
            variant="contained"
            sx={{ color: "white", mx: 2 }}
            onClick={handleAddButtonClick}
          >
            <AddIcon />
            Add Transcript
          </Button>
          {showUploadArea && (
            <div className="mt-4 text-center">
              <h2 className="text-lg font-semibold mb-2">Upload Area</h2>
              <input
                type="file"
                id="file-upload"
                className="hidden"
                onChange={handleFileUpload}
              />
              <label
                htmlFor="file-upload"
                className="block mx-auto cursor-pointer"
              >
                <CloudUploadIcon style={{ color: "black", fontSize: 40 }} />
                <p className="text-sm font-light text-gray-500">
                  Drag & Drop your files here
                </p>
              </label>
            </div>
          )}
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Dashboard;
