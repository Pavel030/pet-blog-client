import { defineStore } from 'pinia';
import axios from 'axios';

export const usePostsStore = defineStore({
    id: 'post',
    state: () => ({
        posts: null,
        post: null
    }),
    actions: {
        async fetchBlogPosts() {
            try {
                const response = await axios.get('http://pavel/api/post')
                this.posts = response.data
            } catch (error) {
                console.error('Error fetching blog posts:', error)
            }
        },
        async fetchBlogPostById(id) {
            try {
                const response = await axios.get(`http://pavel/api/post/${id}`)
                this.post = response.data
            } catch (error) {
                console.error('Error fetching blog post by ID:', error)
            }
        },
    },
});

