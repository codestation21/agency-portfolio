import { Box, Grid, InputBase, InputAdornment, ButtonBase } from "@mui/material";

//Icons
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import ArrowForwardTwoToneIcon from '@mui/icons-material/ArrowForwardTwoTone';

//Styles
import styles from "Styles/Contact/Form.styles";

const Form = () => {
    return (
        <Box sx={{ mt: "3em" }}>
            <Grid container spacing={2}>
                <Grid item md={3}>
                    <InputBase
                        placeholder="Your Full Name"
                        endAdornment={
                            <InputAdornment position="end">
                                <Box sx={styles.Icon}>
                                    <PersonOutlineOutlinedIcon />
                                </Box>
                            </InputAdornment>
                        }
                        sx={styles.InputField}
                    />
                </Grid>
                <Grid item md={3}>
                    <InputBase
                        placeholder="Email Address"
                        endAdornment={
                            <InputAdornment position="end">
                                <Box sx={styles.Icon}>
                                    <MailOutlineIcon />
                                </Box>
                            </InputAdornment>
                        }
                        sx={styles.InputField}
                    />
                </Grid>
                <Grid item md={3}>
                    <InputBase
                        placeholder="Write Message"
                        multiline
                        minRows={1.5}
                        maxRows={5}
                        sx={styles.MessageFiled}
                    />
                </Grid>
                <Grid item md={3}>
                    <Box>
                        <ButtonBase type="submit" sx={styles.SubmitButton}>
                            Send Message
                            <ArrowForwardTwoToneIcon />
                        </ButtonBase>
                    </Box>
                </Grid>
            </Grid>
        </Box>
    );
};
export default Form;