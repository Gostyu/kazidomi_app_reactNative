import React from 'react'
import Post from "./Post";
const PostList = ({dataPost}) => {
    const renderPostList = dataPost.map((item,index)=>{
        return <Post key={index}
            imgUrl={item.img_url}
            category={item.category}
            title={item.title}
            description={item.description}
            date={item.date}
        />
    });
    return renderPostList;
}

export default PostList
