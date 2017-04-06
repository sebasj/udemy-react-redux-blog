import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPostAction, deletePostAction } from '../actions/index';
import { Link } from 'react-router';

class PostsShow extends Component {
    componentWillMount() {
        this.props.fetchPostAction(this.props.params.id);
    }

    onDeleteClick() {
        this.props.deletePostAction(this.props.params.id);
    }

    render() {
        const selected_post = this.props.selected_post;
        if (!selected_post) {
            return <div>Loading...</div>;
        }
        return (
            <div>
                <Link to="/">Back to Index</Link>
                <button 
                    className="btn btn-danger pull-xs-right"
                    onClick={this.onDeleteClick.bind(this)}>
                    Delete Post
                </button>
                <h3>{selected_post.title}</h3>
                <h6>Categories: {selected_post.categories}</h6>
                <p>Categories: {selected_post.content}</p>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return { selected_post: state.postsReducer.selected_post }
}

export default connect(mapStateToProps, { fetchPostAction, deletePostAction })(PostsShow);