import React, {Component} from "react";
import {Route} from "react-router-dom";
import Post from "../../components/Post/Post";
import axios from "../../axios";
import styles from "../Posts/Posts.module.css";
import FullPost from "../FullPost/FullPost";

class Posts extends Component {

    state = {
        posts: []
    };

    postSelectedHandler = (id) => {
        // this.props.history.push({pathname: '/posts/' + id});
        this.props.history.push('/posts/' + id);
    };


    componentDidMount() {
        console.log(this.props);
        axios.get('/posts')
            .then(response => {
                const posts = response.data.slice(0, 4);
                const updatedPost = posts.map(post => {
                    return {
                        ...post,
                        author: 'Nikola',
                    }
                });
                this.setState({posts: updatedPost});
                //console.log(response);
            }).catch(error => {
            //this.setState({error: true})
            console.log(error);
        });
    };


    render() {

        let posts = <p style={{textAlign: "center", fontWeight: "bold"}}>Something went wrong</p>;
        if (!this.state.error) {
            posts = this.state.posts.map(post => {
                return (
                    //<Link to={"/" + post.id} key={post.id}>
                    <Post
                        title={post.title}
                        key={post.id}
                        author={post.author}
                        clicked={() => this.postSelectedHandler(post.id)}/>
                    //</Link>
                )
            });
        }
        return (
            <div>
                <section className={styles.Posts}>
                    {posts}
                </section>
                <Route path={this.props.match.url + '/:id'} exact component={FullPost}/>
            </div>
        );
    }
}

export default Posts;