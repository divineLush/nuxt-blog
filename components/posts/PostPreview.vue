<template>
    <nuxt-link class="post-preview" to="/posts/1">
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
    },

    computed: {
        backgroundImage() {
            const backgroundImage = `url('${this.post.thumbnail}')`;

            return { backgroundImage }
        }
    }
}
</script>

<style>
.post-preview {
  opacity: 1;
  transition: opacity 1s ease;
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
  /* background-image: url('~/static/memes/stallman-meme.png'); */
}

.post-preview__post-content {
  padding: 10px;
  text-align: center;
}

a:hover .post-content,
a:active .post-content {
  background-color: #ccc;
}
</style>