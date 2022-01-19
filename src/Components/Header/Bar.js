import { useState } from "react";
import { Stack, Box, ButtonBase, Drawer } from "@mui/material";
import { Link } from "react-scroll";

//Icons
import ArrowForwardTwoToneIcon from '@mui/icons-material/ArrowForwardTwoTone';

//Components
import Drawers from "./Bar/Drawers";

//Styles
import styles from "Styles/Header/Bar.styles";

const Bar = () => {
    const [drawer, setDrawer] = useState(false);
    const toggleDrawer = (open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }
        setDrawer(open);
    };
    return (
        <Box sx={{ textAlign: "right" }}>
            <Stack direction="row" sx={{ justifyContent: "right", textAlign: "right" }}>
                <Box>
                    <Link
                        to="portfolio"
                        spy={true}
                        smooth={true}
                        duration={500}
                    >
                        <ButtonBase sx={styles.SeeProjectBtn}>
                            See Projects
                            <ArrowForwardTwoToneIcon />
                        </ButtonBase>
                    </Link>
                </Box>
                <Box>
                    <ButtonBase sx={styles.ToogleButton} onClick={toggleDrawer(true)} className={drawer ? "active" : ""}>
                        <Box className="ripple1"></Box>
                        <Box className="ripple2"></Box>
                        <Box className="ripple3"></Box>
                    </ButtonBase>
                </Box>
            </Stack>
            <Drawer
                anchor="right"
                open={drawer}
                onClose={toggleDrawer(false)}
                ModalProps={{
                    disableScrollLock: true
                }}
                sx={styles.Drawer}
            >
                <Drawers toggleDrawer={toggleDrawer} />
            </Drawer>
        </Box>
    );
};
export default Bar;