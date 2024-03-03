import { motion } from "framer-motion";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { Button, Divider, Grid, Paper } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import NotificationsIcon from "@mui/icons-material/Notifications";
import HelpIcon from "@mui/icons-material/Help";
import FeedbackIcon from "@mui/icons-material/Feedback";
import SettingsIcon from "@mui/icons-material/Settings";
import { Link } from "react-router-dom";
import ListItemButton from "@mui/material/ListItemButton";
import EventIcon from "@mui/icons-material/Event";
import VideocamIcon from "@mui/icons-material/Videocam";

const Todo = () => {
  // Mock meeting/work data
  const meetings = [
    { id: 1, date: "2024-03-15", title: "Going to Rourkela", description: "Meet with team members of HACKNITR" },
    { id: 2, date: "2024-03-18", title: "Brainstorming session", description: "Discuss new project ideas with the team" },
    { id: 3, date: "2024-03-20", title: "Client meeting", description: "Present project updates to the client" },
    { id: 4, date: "2024-03-25", title: "Training workshop", description: "Attend a workshop on new technologies" },
    { id: 5, date: "2024-03-28", title: "Team building activity", description: "Participate in team-building exercises" },
    { id: 6, date: "2024-04-02", title: "Presentation preparation", description: "Prepare slides for upcoming presentation" },
  ];

  return (
    <div className="flex h-screen bg-gray-100">
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

      <div className="flex-grow flex flex-col justify-center items-center px-8 bg-gradient-to-br from-blue-200 to-purple-200">
        <motion.h1
          className="text-4xl text-slate-500 mb-8"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          Your Todo List!
        </motion.h1>
        <Grid container spacing={4} justifyContent="center">
          {meetings.map((meeting) => (
            <Grid item key={meeting.id} xs={12} sm={6} md={4} lg={4}>
              <motion.div
                className="w-full"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                <Paper className="p-4 h-full flex flex-col justify-between">
                  <div>
                    <h2 className="text-xl font-semibold mb-2">{meeting.title}</h2>
                    <p className="text-gray-600 mb-2">{meeting.description}</p>
                    <p className="text-gray-500">{meeting.date}</p>
                  </div>
                  <Button
                    variant="outlined"
                    color="primary"
                    startIcon={<EditIcon />}
                    className="mt-4"
                  >
                    Edit
                  </Button>
                </Paper>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </div>
    </div>
  );
};

export default Todo;
