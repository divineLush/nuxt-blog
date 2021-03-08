<template>
  <section class="home-page">
    <PostList />
  </section>
</template>

<script>
import PostList from '~/components/posts/PostList.vue';

export default {
  components: {
    PostList,
  },

  // asyncData can only be placed on page components.
  // runs on the server
  // waits for the asynchronous task to finish and then returns a page
  // gotta return a value
  // 'this' doesn't work as expected
  // gotta return a promise or execute a callback method
  // so asyncData has the idea when the work is finished
  // asyncData(context, callback) {
  //     console.log(context, callback, this);
  //     setTimeout(() => {
  //         // gotta pas an error or null as a first argument
  //         // and object that will become a 'data' property
  //         callback(null, { posts });
  //     }, 500);
  // },

  // asyncData(context) {
  //     console.log(context);
  //     return new Promise((res, rej) => {
  //         setTimeout(() => {
  //             res({ posts });
  //         }, 500);
  //     })
  //     .then(data => data)
  //     .catch(error => context.error(new Error()));
  // },

  // shouldn't use 'posts' inside 'data'
  // as this code runs on the client
  // and will override asyncData
  // data() {
  //     return {
  //         posts: [],
  //     }
  // },
}
</script>
