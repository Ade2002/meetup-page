import React, { useRef } from 'react'
import Card from '../ui/Card'
import classes from './NewMeetupForm.module.scss'
const NewMeetupForm = (props) => {
    const titleInputRef = useRef();
    const imageInputRef = useRef();
    const addressInputRef = useRef();
    const descriptionInputRef = useRef();
    const submitMeetup = (e) => {
        e.preventDefault();
        const titleValue = titleInputRef.current.value;
        const imageValue = imageInputRef.current.value;
        const addressValue = addressInputRef.current.value;
        const descriptionValue = descriptionInputRef.current.value;
        const meetupData = {
            title: titleValue,
            image: imageValue,
            address: addressValue,
            description: descriptionValue
        }
        props.onAddMeetup(meetupData)
    }
    return (
        <form className={classes.form} onSubmit={submitMeetup}>
            <span className={classes.control}>
                <label htmlFor='title'>Meetup Title</label>
                <input id='title' type={'text'} required ref={titleInputRef} />
            </span>
            <span className={classes.control}>
                <label htmlFor='image'>Meetup Image</label>
                <input id='image' type={'url'} required ref={imageInputRef} />
            </span>
            <span className={classes.control}>
                <label htmlFor='address'>Address</label>
                <input id='address' type={'text'} required ref={addressInputRef} />
            </span>
            <span className={classes.control}>
                <label htmlFor='description'>Description</label>
                <textarea id='description' rows={5} required ref={descriptionInputRef} />
            </span>
            <button className={classes.actions}>Add Meetup</button>
        </form>
    )
}

export default NewMeetupForm