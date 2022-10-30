import React from "react";

import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Avatar from "@mui/material/Avatar";

import styles from "./AddComment.module.scss";

const AddComment = () => {
    return (
        <>
            <div className={styles.root}>
                <Avatar
                    classes={{ root: styles.avatar }}
                    src="https://mui.com/static/images/avatar/5.jpg"
                />
                <div className={styles.form}>
                    <TextField
                        label="Написать комментарий"
                        variant="outlined"
                        maxRows={10}
                        multiline
                        fullWidth
                    />
                    <Button variant="contained">Отправить</Button>
                </div>
            </div>
        </>
    );
};

export default AddComment