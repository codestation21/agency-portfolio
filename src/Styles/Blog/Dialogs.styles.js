const styles = {
    CloseBtn: {
        px: "5px",
        borderRadius: "5px"
    },
    Content: {
        position: "relative",
        height: "26em",
    },
    Image: {
        width: "100%",
        height: "100%",
        objectFit: "cover",
        borderRadius: "10px"
    },
    TopContainer: {
        position: "absolute",
        backgroundColor: "background.default",
        bottom: "0",
        left: "10%",
        right: "10%",
        transform: "translateY(50%)",
        p: "25px 20px",
        boxShadow: theme => `0 0 20px ${theme.palette.primary.box_shadow_black}`,
        borderRadius: "10px"
    },
    BlogInfo: {
        mr: "3rem",
        fontSize: "15px",
        a: {
            textDecoration: "none",
            color: "text.primary",
            transition: "0.2s ease"
        },
        svg: {
            fontSize: "20px",
            mr: "5px",
            mb: "-4px",
            color: "primary.main"
        },
        "&:hover": {
            a: {
                color: "primary.main"
            },
        }
    },
    BlogTitle: {
        mt: "5px",
        letterSpacing: "1px"
    }
};

export default styles;