const styles = {
    InputField: {
        backgroundColor: "background.default",
        width: "100%",
        py: "14px",
        px: "14px",
        height: "52px",
        borderRadius: "5px",
        boxShadow: theme => `0 0 15px ${theme.palette.primary.box_shadow_black}`
    },
    MessageFiled: {
        backgroundColor: "background.default",
        width: "100%",
        px: "14px",
        pt: "12px",
        pb: "5px",
        borderRadius: "5px",
        boxShadow: theme => `0 0 15px ${theme.palette.primary.box_shadow_black}`
    },
    Icon: {
        svg: {
            color: "primary.main"
        }
    },
    SubmitButton: {
        backgroundColor: "primary.main",
        p: "17px 0",
        fontSize: "14px",
        fontWeight: 600,
        color: "background.default",
        borderRadius: "5px",
        width: "100%",
        svg: {
            fontSize: "18px",
            mb: "-3px",
            ml: "10px"
        }
    }
};

export default styles;