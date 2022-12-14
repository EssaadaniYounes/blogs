import React, { useState } from 'react';
import { fetch } from '../utils/fetch';
import classes from './CreatePost.module.css';
import { useNavigate } from 'react-router-dom';
function CreatePost() {
    const [data, setData] = useState({});
    const history = useNavigate();
    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setData({ ...data, [name]: value })
    }
    const handleSubmit = async () => {

        const Obj = data;
        Obj.tags = data.tags.split(',');

        const res = await fetch({
            data: Obj,
            method: "POST"
        })
        history('/');
    }
    return (
        <div className={classes.container}>
            <div className={classes.form}>
                <div className={classes.inputsContainer}>
                    <label className={classes.label}>Title :</label>
                    <input type="text" name="title" placeholder="Title" className={classes.input} onChange={(e) => handleChange(e)} />
                </div>
                <div className={classes.inputsContainer}>
                    <label className={classes.label}>Description :</label>
                    <input type="text" name='description' placeholder="Description" className={classes.input} onChange={(e) => handleChange(e)} />
                </div>
                <div className={classes.inputsContainer}>
                    <label className={classes.label}>Thumbnail : <span className={classes.info}>(URL)</span>  </label>
                    <input type="text" name="thumbnail" placeholder="Thumbnail" className={classes.input} onChange={(e) => handleChange(e)} />
                </div>
                <div className={classes.inputsContainer}>
                    <label className={classes.label}>Tags : <span className={classes.info}>Put "," between each tag</span>  </label>
                    <input type="text" name='tags' placeholder="Tags" className={classes.input} onChange={(e) => handleChange(e)} />
                </div>
            </div >
            <button className={classes.submit} onClick={() => handleSubmit()} >Create</button>
        </div >
    )
}

export default CreatePost