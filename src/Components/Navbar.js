import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
function Navbar() {
	return (
		<Box sx={{ flexGrow: 1, minHeight: "100vh" }}>
			<AppBar position="static">
				<Toolbar>
					<Button sx={{ mr: 2 }} variant="contained" color="secondary">
						Home
					</Button>
					<Button sx={{ mr: 2 }} variant="contained" color="secondary">
						About
					</Button>
					<Button sx={{ mr: 2 }} variant="contained" color="secondary">
						Projects
					</Button>
				</Toolbar>
			</AppBar>
		</Box>
	);
}

export default Navbar;
