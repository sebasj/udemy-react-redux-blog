import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPostsAction } from '../actions/index'


class PostsIndex extends Component {
    componentWillMount() {
        this.props.fetchPostsAction();
    }

    render() {
        return (
            <div>List of blog posts</div>
        );
    }
}


export default connect(null, { fetchPostsAction: fetchPostsAction })(PostsIndex);