import React, { Component } from 'react';
import { reduxForm } from 'redux-form';
import { createPostAction } from '../actions/index';

class PostsNew extends Component {
    render() {
        const handleSubmit = this.props.handleSubmit;
        const fields = this.props.fields;

        return (
            <form onSubmit={handleSubmit(this.props.createPostAction)}>
                <h3>Create a new post</h3>
                <div className="form-group">
                    <label>Title</label>
                    <input type="text" className="form-control" {...fields.title} />
                    <div className="text-help">
                        {fields.title.touched ? fields.title.error : ''}
                    </div>
                </div>

                <div className="form-group">
                    <label>Categories</label>
                    <input type="text" className="form-control" {...fields.categories} />
                </div>

                <div className="form-group">
                    <label>Content</label>
                    <textarea type="text" className="form-control" {...fields.content} />
                </div>

                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        )
    }
}


function validate(values) {
    const errors = {};

    if (!values.title) {
        errors.title = 'Enter username';
    }

    return errors;
}


export default reduxForm({
    form: 'postsNewForm',
    fields: ['title', 'categories', 'content'],
    validate
}, null, {createPostAction})(PostsNew);