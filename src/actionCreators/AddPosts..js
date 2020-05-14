let postId = 0;

export const addPost = text => {
    type: 'ADD_POST';
        id: postId++,
            text
}