import { Stack, Box, Divider, ButtonBase, Typography } from "@mui/material";

//Styles
import styles from "Styles/Footer/BottomFooter.styles";

const BottomFooter = () => {
    return (
        <Box>
            <Divider sx={styles.Divider} />
            <Stack direction="row" sx={{ alignItems: "center" }}>
                <Typography variant="body1" component="p" sx={styles.Copyright}>
                    © {new Date().getFullYear()} Code Station 21. All Rights Reserved.
                </Typography>
                <Stack direction="row" sx={styles.Terms}>
                    <ButtonBase>
                        Membership
                    </ButtonBase>
                    <ButtonBase>
                        Purchase Guide
                    </ButtonBase>
                    <ButtonBase>
                        Privacy Policy
                    </ButtonBase>
                    <ButtonBase>
                        Terms of Service
                    </ButtonBase>
                </Stack>
            </Stack>
        </Box>
    );
};
export default BottomFooter;