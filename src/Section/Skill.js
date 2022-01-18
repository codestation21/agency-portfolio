import { Container, Grid } from "@mui/material";

//Components
import Experience from "Components/Skill/Experience";
import Progress from "Components/Skill/Progress";
import Award from "Components/Skill/Award";

const Skill = () => {
    return (
        <Container maxWidth={false} disableGutters sx={{ pt: "1em", pb: "5em" }} as="section">
            <Grid container spacing={3}>
                <Grid item md={6}>
                    <Experience />
                </Grid>
                <Grid item md={6}>
                    <Progress />
                </Grid>
            </Grid>
            <Award />
        </Container>
    );
};
export default Skill;