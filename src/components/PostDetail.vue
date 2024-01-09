<template>
  <div class="p-view-area">
    <div v-if="post" class="p-detail-container-block">
      <div class="p-detail-title">{{ post.title }}</div>
      <div class="p-detail-content">{{ post.content }}</div>
    </div>
    <div v-else>
      <div>Select a post to view details.</div>
    </div>
  </div>
</template>

<script lang="js">
import {defineComponent} from 'vue';
import {usePostsStore} from "@/stores/post";
import {useRoute} from "vue-router";

export default defineComponent({
      name: "PostDetail",
      data() {
        return {
          post: null,
          route: useRoute(),
        };
      },
      watch: {
        'route.params.id': {
          handler(newId) {
            this.getPost(newId);
          },
          immediate: true
        },
      },
      methods: {
        async getPost(id) {
          try {
            const store = usePostsStore()
            await store.fetchBlogPostById(id)
            this.post = store.post
          } catch (error) {
            console.error('Error fetching blog posts:', error);
            this.post = null
          }
        }
      },
    }
);
</script>
