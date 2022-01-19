const styles = {
    Container: {
        mt: "12em",
        pb: "5rem",
        position: "relative"
    },
    Title: {
        fontWeight: 700,
        mb: "25px"
    },
    Description: {
        mb: "15px",
        pl: "15px",
        position: "relative",
        "&:after": {
            content: '""',
            width: "3px",
            top: "7px",
            bottom: "5px",
            backgroundColor: "primary.main",
            position: "absolute",
            left: "0"
        }
    },
    Features: {
        mb: "15px",
        alignItems: "center",
        svg: {
            backgroundColor: "primary.main",
            width: "20px",
            height: "20px",
            color: "background.default",
            borderRadius: "50%",
            p: "3px",
            mr: "8px"
        },
        "& p": {
            fontSize: "15px",
            fontWeight: 500
        }
    },
    Button: {
        backgroundColor: "primary.light",
        p: "14px 25px",
        mt: "5px",
        borderRadius: "5px",
        fontSize: "14px",
        fontWeight: 500,
        svg: {
            color: "background.default",
            fontSize: "17px",
            ml: "10px",
            mb: "-1px"
        }
    },
    Image: {
        position: "absolute",
        right: "-2%",
        bottom: "0",
        width: "68%"
    }
};

export default styles;