const styles = {
    SeeProjectBtn: {
        backgroundColor: "primary.main",
        color: "background.default",
        padding: "12px 18px",
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
            margin: "6px 0",
            backgroundColor: "text.primary",
            transition: "0.4s ease",
            "&.ripple1": {
                width: "20px",
                marginLeft: "auto"
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
    }
};

export default styles;