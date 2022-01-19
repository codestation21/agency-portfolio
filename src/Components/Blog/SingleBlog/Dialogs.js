import { Box, Stack, Typography, Divider } from "@mui/material";
import Link from "next/link";

//Icons
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import LocalOfferOutlinedIcon from '@mui/icons-material/LocalOfferOutlined';
import DateRangeRoundedIcon from '@mui/icons-material/DateRangeRounded';

//Styles
import styles from "Styles/Blog/Dialogs.styles";

const Dialogs = ({ blog }) => {
    return (
        <Box>
            <Typography variant="h6" component="h6" sx={{ flex: 1 }}>
                Blog Details
            </Typography>
            <Divider sx={styles.Divider} />
            <Box sx={styles.Scroll}>
                <Box sx={styles.Content}>
                    <Box component="img" sx={styles.Image} src={blog.image} alt="Blog" />
                    <Box sx={styles.TopContainer}>
                        <Stack direction="row">
                            <Typography variant="body1" component="p" sx={styles.BlogInfo}>
                                {blog.userLink &&
                                    <Link href={blog.userLink}>
                                        <a>
                                            <AccountCircleOutlinedIcon />
                                            {blog.user}
                                        </a>
                                    </Link>
                                }
                                {!blog.userLink &&
                                    <>
                                        <AccountCircleOutlinedIcon />
                                        {blog.user}
                                    </>
                                }
                            </Typography>
                            <Typography variant="body1" component="p" sx={styles.BlogInfo}>
                                <DateRangeRoundedIcon />
                                {blog.time}
                            </Typography>
                            <Typography variant="body1" component="p" sx={styles.BlogInfo}>
                                <LocalOfferOutlinedIcon />
                                {blog.category}
                            </Typography>
                        </Stack>
                        <Typography variant="h6" component="h6" sx={styles.BlogTitle}>
                            {blog.title}
                        </Typography>
                    </Box>
                </Box>
                <Typography variant="body1" component="p" sx={{ mt: "5em" }}>
                    {blog.description}
                </Typography>
            </Box>
        </Box>
    );
};
export default Dialogs;