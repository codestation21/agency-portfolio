const styles = {
    Container: {
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        zIndex: "999",
        "&.sticky": {
            backgroundColor: "background.default",
            boxShadow: theme => `0 0 20px ${theme.palette.primary.box_shadow_black}`
        }
    }
};

export default styles;