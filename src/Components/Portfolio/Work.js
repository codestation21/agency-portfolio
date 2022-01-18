import { Grid, Box, Typography } from "@mui/material";
import Link from "next/link";

//Icons
import { PlusIcon } from "Utilis/Icons";

//Styles
import styles from "Styles/Portfolio/Work.styles";

const Work = ({ works }) => {
    return (
        <Grid container rowSpacing={6} columnSpacing={22}>
            {works &&
                works.map((work, i) => (
                    <Grid item md={6} key={i}>
                        <Box sx={{
                            ...styles.ImageContainer,
                            marginLeft: `${i % 2 ? "unset" : "auto"}`
                        }}>
                            <Link href={work.url}>
                                <a target="_blank">
                                    <Box sx={styles.ImageBox}>
                                        <Box component="img" src={work.image} />
                                        <Box className="css-mui-svg">
                                            <PlusIcon />
                                        </Box>
                                    </Box>
                                    <Typography
                                        variant="h5"
                                        component="h6"
                                        sx={styles.WorkTitle}
                                    >
                                        {work.name}
                                    </Typography>
                                </a>
                            </Link>
                        </Box>
                    </Grid>
                ))
            }
        </Grid>
    );
};
export default Work;