import { Stack, Box, Divider, ButtonBase, Typography } from "@mui/material";

//Styles
import styles from "Styles/Footer/BottomFooter.styles";

const BottomFooter = () => {
    return (
        <Box>
            <Divider sx={styles.Divider} />
            <Box sx={{ display: { smd: "block", xxs: "none" } }}>
                <Stack direction="row" sx={{ alignItems: "center" }}>
                    <Typography variant="body1" component="p" sx={styles.Copyright}>
                        © {new Date().getFullYear()} Code Station 21. All Rights Reserved.
                    </Typography>
                    <Stack direction="row" sx={styles.Terms}>
                        <ButtonBase>
                            Purchase
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
            <Box sx={{ display: { smd: "none", xxs: "block" }, mb: "20px" }}>
                <Stack sx={{ alignItems: "center", mb: { sm: "0px", xxs: "20px" } }}>
                    <Stack direction="row" sx={styles.Terms}>
                        <ButtonBase>
                            Purchase
                        </ButtonBase>
                        <ButtonBase>
                            Privacy Policy
                        </ButtonBase>
                        <ButtonBase>
                            Terms of Service
                        </ButtonBase>
                    </Stack>
                    <Typography variant="body1" component="p" sx={styles.Copyright}>
                        © {new Date().getFullYear()} Code Station 21. All Rights Reserved.
                    </Typography>
                </Stack>
            </Box>
        </Box>
    );
};
export default BottomFooter;