import { Box, Typography, InputBase, ButtonBase } from "@mui/material";

//Icon
import ArrowForwardTwoToneIcon from '@mui/icons-material/ArrowForwardTwoTone';

//Styles
import styles from "Styles/Footer/FooterThree.styles"

const FooterThree = () => {
    return (
        <Box>
            <Typography variant="h6" component="h6" sx={styles.Title}>
                Newsletters
            </Typography>
            <Typography variant="body1" component="p" sx={styles.Description}>
                Quis autem vel eum iure reprehenderit qui in
                ea voluptate velit esse molestiae
            </Typography>
            <Box>
                <InputBase placeholder="Write Message" sx={styles.InputField} />
                <ButtonBase sx={styles.SubmitButton}>
                    Send Message
                    <ArrowForwardTwoToneIcon />
                </ButtonBase>
            </Box>
        </Box>
    );
};
export default FooterThree;