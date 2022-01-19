const styles = {
    SeeProjectBtn: {
        backgroundColor: "primary.main",
        color: "background.default",
        p: "12px 18px",
        fontSize: "15px",
        fontWeight: 500,
        svg: {
            fontSize: "18px",
            ml: "8px",
            mb: "-1px"
        }
    },
    ToogleButton: {
        ml: "10px",
        display: "block",
        p: "0 10px",
        div: {
            width: "25px",
            height: "3px",
            m: "6px 0",
            backgroundColor: "text.primary",
            transition: "0.4s ease",
            "&.ripple1": {
                width: "20px",
                ml: "auto"
            },
            "&.ripple3": {
                width: "20px",
            }
        },
        "&.active, &:hover": {
            div: {
                backgroundColor: "primary.main",
                "&.ripple1": {
                    width: "25px",
                },
                "&.ripple3": {
                    width: "25px",
                }
            }
        }
    },
    Drawer: {
        zIndex: '9999999999',
        '& .MuiDrawer-paper': {
            width: "32%",
            py: "2.5em",
            px: "2em"
        }
    },
};

export default styles;