import React, { useEffect, useState } from 'react';
import axios from 'axios';

function SignInScreen() {
    const [posts, setPosts] = useState([]);
    const [users, setUsers] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetchPosts();
        fetchUsers();
    }, []);

    const fetchPosts = async () => {
        try {
            const response = await axios.get('http://localhost:4000/api/post');
            setPosts(response.data);
        } catch (error) {
            setError(error.message);
            console.error('Error fetching posts:', error);
        }
    };

    const fetchUsers = async () => {
        try {
            const response = await axios.get('http://localhost:4000/api/user');
            setUsers(response.data);
        } catch (error) {
            setError(error.message);
            console.error('Error fetching users:', error);
        }
    };

    const getUserById = (userId) => {
        return users.find(user => user._id === userId);
    };

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4">Shared Posts</h1>
            {error && <p className="text-red-500">{error}</p>}
            {posts.map(post => (
                <Post key={post._id} post={post} getUserById={getUserById} />
            ))}
        </div>
    );
}

function Post({ post, getUserById }) {
    const poster = getUserById(post.posterId);
    const originalPoster = getUserById(post.originalPostId);

    return (
        <div className="bg-white p-4 rounded-lg shadow mb-4">
            <div className="flex items-center mb-2">
                {poster && (
                    <>
                        <img className="w-12 h-12 rounded-full mr-4" src={poster.picture} alt="User Avatar" />
                        <div>
                            <div className="font-bold">{poster.name}</div>
                            <div className="text-sm text-gray-600">{new Date(post.createdAt).toLocaleString()}</div>
                        </div>
                    </>
                )}
            </div>
            <p className="mb-2">{post.message}</p>
            {post.media && post.media.length > 0 && (
                <img className="w-full rounded" src={post.media[0].mediaUrl} alt="Post Media" />
            )}
            {originalPoster && (
                <div className="shared-post mt-4 p-4 border-l-4 border-blue-500 bg-gray-100 rounded">
                    <div className="flex items-center mb-2">
                        <img className="w-10 h-10 rounded-full mr-4" src={originalPoster.picture} alt="Original Poster Avatar" />
                        <div>
                            <div className="font-bold">{originalPoster.name}</div>
                            <div className="text-sm text-gray-600">{new Date(post.createdAt).toLocaleString()}</div>
                        </div>
                    </div>
                    <p className="text-gray-800">{post.originalMessage}</p>
                </div>
            )}
        </div>
    );
}

export default SignInScreen;
