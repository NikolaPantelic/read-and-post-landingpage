import React, {Component} from 'react';
import axios from "axios";
import styles from './FullPost.module.css';


class FullPost extends Component {

    state = {
        loadedPost: null
    };

    componentDidMount () {
        console.log(this.props);
        if (this.props.match.params.id) {
            if (!this.state.loadedPost || (this.state.loadedPost && this.state.loadedPost.id !== this.props.id)) {
                axios.get('/posts/' + this.props.match.params.id).then(response => {
                    this.setState({loadedPost: response.data})
                    //console.log(response);
                });
            }
        }
    }

    postDeleteHandler = () => {
         axios.delete('/posts/' + this.props.id).then(response => {
             console.log(response);
         })
    };

    render() {
        let post = <p style={{textAlign: "center", fontWeight: "bold"}}>Please select a Post!</p>;
        if (this.props.id) {
            post = <p style={{textAlign: "center", fontWeight: "bold"}}>Loading ...</p>;
        }
        if (this.state.loadedPost) {
            post = (
                <div className={styles.FullPost}>
                    <h1>{this.state.loadedPost.title}</h1>
                    <p>{this.state.loadedPost.body}</p>
                    <div className={styles.Edit}>
                        <button onClick={this.postDeleteHandler} className={styles.Delete}>Delete</button>
                    </div>
                </div>
            );
        }
        return post;
    }
}

export default FullPost;