<template>
    <section class="single-post-page">
        <article class="single-post-page__post">
            <h1 class="single-post-page__title">Title</h1>
            <div class="single-post-page__details"></div>
        </article>
    </section>
</template>

<style>
.single-post-page {
  padding: 30px;
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

.single-post-page__details {
  padding: 10px;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

@media (min-width: 768px) {
  .single-post-page__details {
    flex-direction: row;
  }
}

.post-detail {
  margin: 0 10px;
}
</style>