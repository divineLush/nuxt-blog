<template>
    <section class="single-post-page">
        <article class="single-post-page__post">
            <h2 class="single-post-page__title">{{ post.title }}</h2>
            <h3 class="single-post-page__author">by {{ post.author }}</h3>
            <h4 class="single-post-page__data">last updated on {{ post.updatedDate | date }}</h4>
            <div class="single-post-page__content">{{ post.content }}</div>
        </article>
    </section>
</template>

<script>
import axios from 'axios';

export default {
  asyncData(context) {
    const id = context.params.id;
    const url = `/posts/${id}.json`;

    return axios.get(url)
      .then(({ data }) => ({ post: data }))
      .catch(e => context.error(e));
  }
}
</script>

<style>
.single-post-page {
  text-align: center;
  box-sizing: border-box;
}

.single-post-page__post {
  width: 100%;
}

@media (min-width: 768px) {
  .single-post-page__post {
    width: 600px;
    margin: auto;
  }
}

.single-post-page__title {
  margin: 0;
}

.post-detail {
  margin: 0 10px;
}
</style>
