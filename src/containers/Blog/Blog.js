import React, {Component} from 'react';

import Post from '../../components/Post/Post';
import FullPost from '../../components/FullPost/FullPost';
import NewPost from '../../components/NewPost/NewPost';
import styles from "./Blog.module.css";
//import axios from "axios";
import axios from "../../axios";

class Blog extends Component {
    state = {
        posts: [],
        selectedPostId: null,
        error: false,

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
                this.setState({error: true})
            //console.log(error);
        });
    };

    postSelectedHandler = (id) => {
        this.setState({selectedPostId: id});
    };

    render() {
        let posts = <p style={{textAlign: "center", fontWeight: "bold"}}>Something went wrong</p>;
        if (!this.state.error){
            posts = this.state.posts.map(post => {
                return <Post
                    title={post.title}
                    key={post.id}
                    author={post.author}
                    clicked={() => this.postSelectedHandler(post.id)}/>
            });
        }

        return (
            <div>
                <section className={styles.Posts}>
                    {posts}
                </section>
                <section>
                    <FullPost id={this.state.selectedPostId}/>
                </section>
                <section>
                    <NewPost/>
                </section>
            </div>
        );
    }
}

export default Blog;