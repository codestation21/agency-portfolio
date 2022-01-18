const styles = {
    Container: {
        position: "fixed",
        top: 0,
        left: 0,
        padding: "12px 5%",
        zIndex: "999",
        "&.sticky": {
            backgroundColor: "background.default",
            boxShadow: theme => `0 0 20px ${theme.palette.primary.box_shadow_black}`
        }
    }
};

export default styles;