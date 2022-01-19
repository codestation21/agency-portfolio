import { Box, Stack, Typography, ButtonBase } from "@mui/material";
import Image from "next/image";
import Link from "next/link";

//Icons
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import { MapIcon, EmailIcon, PhoneIcon, FacebookIcon, TwitterIcon, YoutubeIcon, BehaceIcon } from "Utilis/Icons";

//Logo
import Logo from "Assets/header/logo.png";

//Styles
import styles from "Styles/Header/Dialogs.styles";

const Drawers = ({ toggleDrawer }) => {
    return (
        <Box>
            <Stack direction="row" sx={{ alignItems: "center" }}>
                <Box sx={{ flex: 1, mt: "5px" }}>
                    <Image src={Logo} width={200} height={30} alt="Logo" />
                </Box>
                <ButtonBase onClick={toggleDrawer(false)} sx={styles.CrossButton}>
                    <CloseRoundedIcon />
                </ButtonBase>
            </Stack>
            <Typography variant="body1" component="p" sx={styles.Description}>
                But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and will give you a complete account of the system and expound the actual teachings of the great explore
            </Typography>
            <Stack direction="row" sx={styles.Address}>
                <Box>
                    <MapIcon />
                </Box>
                <Box>
                    <Typography variant="body1" component="p">
                        256 Elizaberth Ave, Brooklyn,
                        CA, 90025
                    </Typography>
                </Box>
            </Stack>
            <Stack direction="row" sx={styles.Address}>
                <Box>
                    <EmailIcon />
                </Box>
                <Box>
                    <Link href="mailto:supportconbiz@gmail.com">
                        <a>
                            <Typography variant="body1" component="p">
                                supportconbiz@gmail.com
                            </Typography>
                        </a>
                    </Link>
                </Box>
            </Stack>
            <Stack direction="row" sx={styles.Address}>
                <Box>
                    <PhoneIcon />
                </Box>
                <Box>
                    <Link href="tel:+012 (345) 678 99">
                        <a>
                            <Typography variant="body1" component="p">
                                +012 (345) 678 99
                            </Typography>
                        </a>
                    </Link>
                </Box>
            </Stack>
            <Stack direction="row" sx={styles.Social}>
                <Link href="/">
                    <a>
                        <ButtonBase>
                            <FacebookIcon />
                        </ButtonBase>
                    </a>
                </Link>
                <Link href="/">
                    <a>
                        <ButtonBase>
                            <TwitterIcon />
                        </ButtonBase>
                    </a>
                </Link>
                <Link href="/">
                    <a>
                        <ButtonBase>
                            <BehaceIcon />
                        </ButtonBase>
                    </a>
                </Link>
                <Link href="/">
                    <a>
                        <ButtonBase>
                            <YoutubeIcon />
                        </ButtonBase>
                    </a>
                </Link>
            </Stack>
        </Box >
    );
};
export default Drawers;