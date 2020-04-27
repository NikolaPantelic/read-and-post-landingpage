import React, {Component} from "react";
import Post from "../../components/Post/Post";
import axios from "../../axios";
import styles from "../Posts/Posts.module.css";

class Posts extends Component {

    state = {
        posts: [],
    };

    postSelectedHandler = (id) => {
        this.setState({selectedPostId: id});
    };


    componentDidMount() {
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
                return <Post
                    title={post.title}
                    key={post.id}
                    author={post.author}
                    clicked={() => this.postSelectedHandler(post.id)}/>
            });
        }
        return (
            <section className={styles.Posts}>
                {posts}
            </section>
        );
    }
}

export default Posts;