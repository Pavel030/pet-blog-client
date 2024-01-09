<template>
  <div class="main">
    <div class="p-list">
      <router-link v-for="post in posts" :key="post.id"
                   :to="'/post/' + post.id"
                   class="p-container-block"
                   :class="{'p-container-block-active': currentId === post.id }"
      >
        <div class="p-properties">
          <div class="p-relative-time">{{ post.relativeTimeMessage }}</div>
          <div class="p-tags">
            <div v-for="tag in post.tags" :key="tag.id"
                 class="p-tag"
                 :style="getTagStyle(tag.id)"
            >
              {{ tag.tagName }}
            </div>
          </div>
        </div>
        <div class="p-title">{{ post.title }}</div>
      </router-link>
    </div>
    <PostDetail></PostDetail>
  </div>
</template>

<script lang="js">
import {defineComponent} from 'vue'
import {usePostsStore} from "@/stores/post";
import {calculateRelativeTime, getTagStyle} from "@/services/posts";
import PostDetail from "@/components/PostDetail.vue";
import {useRoute} from "vue-router";

export default defineComponent({
  name: "Posts",
  components: {PostDetail},
  data() {
    return {
      posts: null,
      route: useRoute(),
    };
  },
  async created() {
    const store = usePostsStore();
    try {
      await store.fetchBlogPosts();
      this.posts = store.posts;
      console.log(this.posts);
    } catch (error) {
      console.error('Error fetching blog posts:', error);
    }
  },
  computed: {
    currentId() {
      return this.route.params.id;
    },
  },
  methods: {
    getTagStyle,
    updateRelativeTime() {
      this.posts.forEach(post => {
        post.relativeTimeMessage = calculateRelativeTime(post);
      });
    },
  },
  mounted() {
    setInterval(this.updateRelativeTime, 1000);
  },
})
</script>

