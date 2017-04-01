import React, { Component, PropTypes } from 'react';
import { reduxForm } from 'redux-form';
import { Link } from 'react-router';

import { createPostAction } from '../actions/index';

class PostsNew extends Component {

    static contextTypes = {
        router: PropTypes.object
    };

    onSubmit(props) {
        this.props.createPostAction(props)
            .then( () => {
                // blog post has been created, navigate the user to the index
                // We navigate by calling this.context.router.push with the 
                // new path to navigate to.
                this.context.router.push('/');
        });
    }

    render() {
        const handleSubmit = this.props.handleSubmit;
        const fields = this.props.fields;

        return (
            <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
                <h3>Create a new post</h3>

                <div className={`form-group ${fields.title.touched && fields.title.invalid ? has-danger : ''}`}>
                    <label>Title</label>
                    <input type="text" className="form-control" {...fields.title} />
                    <div className="text-help">
                        {fields.title.touched ? fields.title.error : ''}
                    </div>
                </div>

                <div className={`form-group ${fields.categories.touched && fields.categories.invalid ? has-danger : ''}`}>
                    <label>Categories</label>
                    <input type="text" className="form-control" {...fields.categories} />
                    <div className="text-help">
                        {fields.categories.touched ? fields.categories.error : ''}
                    </div>

                </div>

                <div className={`form-group ${fields.content.touched && fields.content.invalid ? has-danger : ''}`}>
                    <label>Content</label>
                    <textarea type="text" className="form-control" {...fields.content} />
                    <div className="text-help">
                        {fields.content.touched ? fields.content.error : ''}
                    </div>

                </div>

                <button type="submit" className="btn btn-primary">Submit</button>
                <Link to="/" className="btn btn-danger">Cancel</Link>
            </form>
        )
    }
}


function validate(values) {
    const errors = {};

    if (!values.title) {
        errors.title = 'Enter username';
    }

    if(!values.categories) {
        errors.categories = 'Enter some content';
    }

    if(!values.content) {
        errors.content = 'Enter some content';
    }


    return errors;
}


export default reduxForm({
    form: 'postsNewForm',
    fields: ['title', 'categories', 'content'],
    validate
}, null, {createPostAction})(PostsNew);