import { Link, Route, Routes } from "react-router-dom";
import AboutUs from "./AboutUs";
import Sponsors from "./Sponsors";
import Missions from "./Missions";

const About = () => {
  return (
    <>
      <h2>About Page</h2>
      <nav>
        <Link to="us">About US </Link>
        <Link to="missions">Mission </Link>
        <Link to="sponsors">Our Sponsors</Link>
      </nav>
      <Routes>
        <Route path="/us" element={<AboutUs />} />
        <Route path="/missions" element={<Missions />} />
        <Route path="/sponsors" element={<Sponsors />} />
      </Routes>
    </>
  );
};
export default About;
