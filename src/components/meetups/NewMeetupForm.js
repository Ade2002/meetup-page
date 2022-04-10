import React,{ useRef } from 'react'
import Card from '../ui/Card'
import classes from './NewMeetupForm.module.scss'
const NewMeetupForm = () => {
    const titleInputRef = useRef();
    const submitMeetup = (e) => {
        e.preventDefault();
    }
    return (
        <Card>
            <form className={classes.form} onSubmit={submitMeetup}>
                <span className={classes.control}>
                    <label htmlFor='title'>Meetup Title</label>
                    <input id='title' type={'text'} required />
                </span>
                <span className={classes.control}>
                    <label htmlFor='image'>Meetup Image</label>
                    <input id='image' type={'url'} required />
                </span>
                <span className={classes.control}>
                    <label htmlFor='address'>Address</label>
                    <input id='address' type={'text'} required />
                </span>
                <span className={classes.control}>
                    <label htmlFor='description'>Description</label>
                    <textarea id='description' rows={5} required />
                </span>
                <button className={classes.actions}>Add Meetup</button>
            </form>
        </Card>
    )
}

export default NewMeetupForm