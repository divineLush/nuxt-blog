<template>
    <nuxt-link class="post-preview" :to="postLink">
        <article class="post-preview__wrapper">
            <div class="post-preview__post-thumbnail" :style="backgroundImage"></div>
            <div class="post-preview__post-content">
              <h2>{{ post.title }}</h2>
              <p>{{ post.preview }}</p>
            </div>
        </article>
    </nuxt-link>
</template>

<script>
export default {
    name: 'PostPreview',

    props: {
        post: {
            type: Object,
            required: true,
        },
        isAdmin: {
            type: Boolean,
            default: false,
        },
    },

    computed: {
        backgroundImage() {
            const thumbnailLink = this.post.thumbnailLink;
            const backgroundImage = `url('${thumbnailLink}')`;

            return thumbnailLink ? { backgroundImage } : {};
        },

        postLink() {
            const baseUrl = this.isAdmin ? '/admin/' : '/posts/';
            return `${baseUrl}${this.post.id}`;
        },
    },
}
</script>

<style>
.post-preview {
  opacity: 1;
  transition: opacity 1s ease;
  text-align: center;
  text-decoration: none;
}

.post-preview:hover {
  opacity: .4;
}

.post-preview__post-preview {
  width: 90%;
}

@media (min-width: 850px) {
  .post-preview__post-preview {
    width: 400px;
    margin: 10px;
  }
}

.post-preview__post-thumbnail {
  width: 300px;
  height: 300px;
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
}

.post-preview__post-content {
  padding: 10px;
}
</style>
