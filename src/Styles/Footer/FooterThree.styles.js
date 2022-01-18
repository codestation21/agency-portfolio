const styles = {
    Title: {
        fontWeight: 700,
        mb: "1.7em"
    },
    Description: {
        fontSize: "16px",
        color: "primary.social_color",
        fontWeight: 500,
        mb: "20px"
    },
    InputField: {
        backgroundColor: "background.default",
        border: theme => `1px solid ${theme.palette.primary.inputBorder}`,
        p: "6px 15px",
        borderRadius: "8px",
        width: "100%"
    },
    SubmitButton: {
        backgroundColor: "primary.main",
        p: "15px 25px",
        mt: "10px",
        fontSize: "14px",
        fontWeight: 600,
        color: "background.default",
        borderRadius: "8px",
        svg: {
            fontSize: "18px",
            mb: "-3px",
            ml: "10px"
        }
    }
};

export default styles;