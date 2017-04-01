import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPostAction } from '../actions/index';


class PostsShow extends Component {
    componentWillMount() {
        this.props.fetchPostAction(this.props.params.id);
    }

    render() {
        return <div>Show post {this.props.params.id}</div>;
    }
}


export default connect(null, { fetchPostAction })(PostsShow);