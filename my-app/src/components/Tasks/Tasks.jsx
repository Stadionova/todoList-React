import classes from "./Tasks.module.css";
import EachTaskInList from '../EachTaskInList/EachTaskInList';
import React from "react";

class Tasks extends React.Component {
    render = () => {
        return (
            <div className={classes.tasksList} >
                <EachTaskInList />
            </div>
        )
    }
}

export default Tasks;