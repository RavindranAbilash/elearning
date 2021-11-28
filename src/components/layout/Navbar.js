import './Navbar.css'
import TextField from '@mui/material/TextField';
import SettingsIcon from '@mui/icons-material/Settings';



function Navbar() {
    return(
        <nav className="navbar">
            <div className="logo">LOGO</div>
            <ul className="nav-links">
                <div className="menu">
                    <li><a href="/">Home</a></li>
                    <li><a href="/">About</a></li>
                    <li className="services">
                        <a href="/">Services</a>
                        <ul className="dropdown">
                            <li><a href="/">Dropdown 1 </a></li>
                            <li><a href="/">Dropdown 2</a></li>
                            <li><a href="/">Dropdown 2</a></li>
                            <li><a href="/">Dropdown 3</a></li>
                            <li><a href="/">Dropdown 4</a></li>
                        </ul>
                    </li>
                    <li><a href="/">Pricing</a></li>
                    <div>
                        <TextField id="outlined-basic" label="Search" variant="outlined" size="small"/>
                    </div>
                    <div><SettingsIcon fontSize="large"/></div>
                </div>


            </ul>
        </nav>
    )
}

export default Navbar;