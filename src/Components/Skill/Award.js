import { Box, Grid, Stack, Typography, Divider, Rating } from "@mui/material";

//Counterup
import Odometers from "Utilis/Odometers";

//Data
import Awards from "Data/Skill/Award.data";

//Styles
import styles from "Styles/Skill/Award.styles";

const Award = () => {
    return (
        <Box>
            <Divider sx={styles.Divider} />
            <Grid container spacing={2} sx={{ alignItems: "center" }}>
                <Grid item md={8}>
                    <Box>
                        <Grid container spacing={2}>
                            {Awards &&
                                Awards.map((award, i) => (
                                    <Grid item md={4} key={i}>
                                        <Box sx={{ textAlign: "center" }}>
                                            <Typography variant="h4" component="h4" sx={styles.AwardNumber}>
                                                <Stack direction="row" sx={{ justifyContent: "center" }}>
                                                    <Odometers value={award.award} />
                                                    <Typography variant="h4" component="h4">
                                                        +
                                                    </Typography>
                                                </Stack>
                                            </Typography>
                                            <Typography variant="body1" component="p" sx={styles.AwardTitle}>
                                                {award.title}
                                            </Typography>
                                            {award.star > 0 &&
                                                <Rating name="half-rating-read" defaultValue={award.star} precision={0.5} readOnly size="small" sx={{ mt: "5px" }} />
                                            }
                                        </Box>
                                    </Grid>
                                ))
                            }
                        </Grid>
                    </Box>
                </Grid>
                <Grid item md={4}>
                    <Box>
                        <Typography variant="h5" component="h5" sx={styles.Title}>
                            Great Achievements <br />
                            In My Career
                        </Typography>
                    </Box>
                </Grid>
            </Grid>
        </Box>
    );
};
export default Award;