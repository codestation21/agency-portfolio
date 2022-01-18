import { useState, useEffect } from "react";
import { Container, Grid } from "@mui/material";

//Components
import Logo from "Components/Header/Logo";
import Nav from "Components/Header/Nav";
import Bar from "Components/Header/Bar";

//Styles
import styles from "Styles/Header/Header.styles";

const Header = () => {
    const [scroll, setScroll] = useState(false);
    useEffect(() => {
        window.addEventListener('scroll', () => {
            setScroll(window.scrollY > 50);
        });
    }, []);
    return (
        <Container maxWidth={false} disableGutters as="header" className={scroll ? "sticky" : ""} sx={styles.Container}>
            <Grid container spacing={2} sx={{ alignItems: "center" }}>
                <Grid item md={3}>
                    <Logo />
                </Grid>
                <Grid item md={6}>
                    <Nav />
                </Grid>
                <Grid item md={3}>
                    <Bar />
                </Grid>
            </Grid>
        </Container>
    );
};
export default Header;