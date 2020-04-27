import React, {Component} from 'react';
import styles from "./Blog.module.css";
import Posts from "../Posts/Posts";
import {Route, NavLink} from "react-router-dom";
import NewPost from "../NewPost/NewPost";

class Blog extends Component {
    render() {
        return (
            <div className={styles.Blog}>
                <header>
                    <nav>
                        <ul>
                            <li><NavLink to="/" exact activeStyle={{
                                color: "#fa923f",
                                textTransform: "uppercase"
                            }}>Home</NavLink></li>
                            <li><NavLink to="/new-post" activeStyle={{
                                color: "#fa923f",
                                textTransform: "uppercase"
                            }}>New Post</NavLink></li>
                        </ul>
                    </nav>
                </header>
                {/*<Route path="/" exact render={() => <h1>Home</h1>}/>
                <Route path="/" exact render={() => <h1>Home 2</h1>}/>*/}
                <Route path="/" exact component={Posts}/>
                <Route path="/new-post" exact component={NewPost}/>
            </div>
        );
    }
}

export default Blog;