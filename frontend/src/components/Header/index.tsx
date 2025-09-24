
import { AppBar, Box, Toolbar, Typography } from "@mui/material";
import NavBar from "../NavBar";

type Props = {
    title: string;
};

export default function Header ( {title}: Props ){

    return(
        <AppBar position="static">
            <Toolbar>
                <Typography 
                variant="h6" 
                noWrap
                component="div"
                sx={{display:{xs: "none", sm:'block'}}}>
                    {title}
                </Typography>
                <Box sx={{ flexGrow: 1}} />
                <NavBar />
            </Toolbar>
        </AppBar>
    );
};