import { Stack } from "@mui/material" ;
import { borderRight } from "@mui/system";
import { Link } from "react-router-dom";

import { logo } from '../utils/constants';
import SearchBar from "./SearchBar";

const Navbar = () => (
  <Stack 
    direction="row" 
    alignItems="center" 
    p={2} 
    sx={{ position: "sticky", background: "#000", top: 0, justifyContent: "space-between"}}>
      <Link to="/" style={{ display: 'flex', alignItems: 'center'}}>
        <img src={logo} alt='logo' height={45} />
      </Link>
      
      <Link to="/" style={{ display: 'flex', alignItems: 'center', backgroundColor: "blue", borderRadius: "40%" }}>
        <h2 style={{ color: "white"}}>中文</h2>
      </Link>
      
      <Link to="/es" style={{ display: 'flex', alignItems: 'center', backgroundColor: "blue", borderRadius: "40%" }}>
        <h2 style={{ color: "white"}}>ES</h2>
      </Link>
      <Link to="/en" style={{ display: 'flex', alignItems: 'center', backgroundColor: "blue", borderRadius: "40%" }}>
        <h2 style={{ color: "white"}}>EN</h2>
      </Link>
      
  <SearchBar />
  </Stack>
)

export default Navbar