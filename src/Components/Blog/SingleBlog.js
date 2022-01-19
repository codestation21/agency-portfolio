import { useState, useEffect } from "react";
import { Box, Grid, Stack, Typography, ButtonBase } from "@mui/material";
import { styled } from '@mui/material/styles';
import Rodal from 'rodal';
import 'rodal/lib/rodal.css';

//Icons
import { ClendarIcon } from "Utilis/Icons";
import ArrowForwardTwoToneIcon from '@mui/icons-material/ArrowForwardTwoTone';

//Components
import Dialogs from "./SingleBlog/Dialogs";

//Data
import Blogs from "Data/Blog/Blogs.data";

//Styles
import styles from "Styles/Blog/SingleBlog.styles";

const SingleBlog = () => {
    const [visible, setVisible] = useState(false);
    const [hidden, setHidden] = useState(false);
    const modalOpen = (index) => () => {
        setVisible(index)
        setHidden(true)
    }
    const modelClose = () => {
        setVisible(false)
    }
    const onAnimationEnd = () => {
        if (visible === false) {
            setHidden(false)
        }
    }
    useEffect(() => {
        const body = document.querySelector('body');
        const header = document.querySelector('header');
        if (hidden) {
            const scrollBarWidth = window.innerWidth - document.documentElement.clientWidth;
            body.style.overflow = 'hidden';
            body.style.paddingRight = `${scrollBarWidth}px`;
            header.style.paddingRight = `${scrollBarWidth}px`
        } else if (!hidden) {
            body.style.overflow = 'unset';
            body.style.paddingRight = '0px';
            header.style.paddingRight = '0px'
        }
    }, [hidden])
    return (
        <Box sx={{ mt: "4rem" }}>
            <Grid container spacing={4}>
                {Blogs &&
                    Blogs.map((blog, i) => (
                        <Grid item md={4} key={i}>
                            <Box sx={styles.BoxContainer}>
                                <Box component="img" src={blog.image} alt={blog.title} sx={styles.Image} />
                                <Box sx={styles.Content}>
                                    <Typography variant="body1" component="p" sx={styles.Category}>
                                        {blog.category}
                                    </Typography>
                                    <Typography variant="h6" component="h6" sx={styles.Title}>
                                        {blog.title}
                                    </Typography>
                                    <Stack
                                        direction="row"
                                        sx={{ alignItems: "center" }}
                                    >
                                        <Box sx={styles.TimeIcon}>
                                            <ClendarIcon />
                                        </Box>
                                        <Typography variant="body1" component="p" sx={styles.TimeText}>
                                            {blog.time}
                                        </Typography>
                                    </Stack>
                                    <ButtonBase sx={styles.Button} onClick={modalOpen(i)}>
                                        Read More
                                        <ArrowForwardTwoToneIcon />
                                    </ButtonBase>
                                    <Modal
                                        visible={visible === i}
                                        onClose={modelClose}
                                        customMaskStyles={{ background: '#0B0B13AB' }}
                                        enterAnimation='slideDown'
                                        leaveAnimation='slideDown'
                                        onAnimationEnd={onAnimationEnd}
                                        sx={styles.Modal}
                                    >
                                        <Dialogs
                                            blog={blog}
                                        />
                                    </Modal>
                                </Box>
                            </Box>
                        </Grid>
                    ))
                }
            </Grid>
        </Box >
    );
};
export default SingleBlog;


//Custom Component
const Modal = styled(Rodal)``;