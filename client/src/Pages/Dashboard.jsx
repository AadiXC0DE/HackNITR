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


const Dashboard = () => {
  const [showUploadArea, setShowUploadArea] = useState(false);

  const handleAddButtonClick = () => {
    setShowUploadArea(true);
  };

  const handleFileUpload = async (e) => {
    const file = e.target.files[0];
    const formData = new FormData();
    formData.append("file", file);
    const openai = new OpenAI({apiKey: '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', dangerouslyAllowBrowser: true});

    try {
        const transcription = await openai.audio.transcriptions.create({
            file: file,
            model: "whisper-1",
          });

      console.log("Transcription:", transcription.text);
    } catch (error) {
      console.error("Error transcribing file:", error);
    }
  };

  return (
    <div className="flex h-screen">
      <Drawer
        variant="permanent"
        anchor="left"
        sx={{
          width: 240,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: 240,
            boxSizing: "border-box",
            backgroundColor: "#FFFFFF", // Set background color
          },
        }}
      >
        <List>
          {/* Navigation Links */}
          <ListItemButton component={Link} to="/videos">
            <ListItemIcon>
              <VideocamIcon />
            </ListItemIcon>
            <ListItemText primary="Videos" />
          </ListItemButton>
          <ListItemButton component={Link} to="/calendar">
            <ListItemIcon>
              <EventIcon />
            </ListItemIcon>
            <ListItemText primary="Calendar" />
          </ListItemButton>
          <ListItemButton component={Link} to="/other">
            <ListItemIcon>
              <EditIcon />
            </ListItemIcon>
            <ListItemText primary="Edit Videos" />
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

      <div className="flex-grow flex flex-col justify-center items-center px-8 bg-gradient-to-br from-blue-200 to-purple-200">
  <div className="text-center mb-8">
    <h1 className="text-slate-500 text-5xl mb-2">Welcome to Koala Vision</h1>
    <h1 className="text-slate-500 text-4xl mb-4">Lets get you started!</h1>
    <h1 className="text-3xl font-bold text-slate-700 mb-4">
      Revolutionize Your Meetings with KoalaVision
    </h1>
    <h2 className="text-lg text-slate-600 mb-4">
      Effortlessly Record, Upload, and Organize Your Meetings
    </h2>
  </div>
  <div className="bg-slate-50 p-12 rounded-3xl">
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
  </div>
</div>
</div>
  );
};

export default Dashboard;
