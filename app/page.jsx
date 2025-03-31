import { Box } from "@mui/material";
import Navbar from "./components/Navbar";
import WorkPage from "./work/page";

export default function Home() {
  return (
    <Box>
      <Navbar />
      <WorkPage/>
    </Box>
  );
}
