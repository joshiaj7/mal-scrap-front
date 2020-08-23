import React, { Component } from 'react'
import "./Posts.scss";
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchPosts } from '../../actions/postActions' ;

export class Posts extends Component {    
    componentDidMount() {
        this.props.fetchPosts();
    }

    render() {
        console.log(this.props.posts);
        const posts = this.props.posts;
        let postItems;
        if (posts.length > 0) {
            postItems = this.props.posts.map(post => (
                <div key={post.id}>
                    <h3>{post.title}</h3>
                    <p>{post.body}</p>
                </div>
            ));
        } else {
            postItems = <h2>Loading Data</h2>;
        }
        return (
            <div className="post">
                <h1>POST</h1>
                {postItems}
            </div>
        );
    }
}

Posts.propTypes = {
    fetchPosts: PropTypes.func.isRequired,
    posts: PropTypes.array.isRequired
}

const mapStateToProps = state => ({
    posts: state.posts.items
});

export default connect(mapStateToProps, { fetchPosts })(Posts);
