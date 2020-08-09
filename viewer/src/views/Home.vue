<template>
  <div class="home">
    <header>
      <h1>CSS Katas</h1>
    </header>
    <main>
      <section v-for="category in categories" :key="category.id">
        <h2>{{ category.name }}</h2>
        <div id="nav">
          <div class="kata-link" v-for="kata in category.katas" :key="kata.id">
            <router-link
              :to="{
                name: 'Kata',
                params: { category: category.id, id: kata.id, mode: 'mobile' },
              }"
              >{{ kata.name }}</router-link
            >
          </div>
        </div>
      </section>
    </main>
  </div>
</template>

<script>
export default {
  data() {
    return {
      categories: [],
    };
  },
  created() {
    fetch("/katas/katas.json")
      .then((res) => res.json())
      .then((data) => (this.categories = data.categories));
  },
};
</script>

<style scoped>
.home {
  padding: 5rem;
}

.kata-link {
  margin-bottom: 0.75rem;
  margin-left: 1ch;
}

.kata-link a {
  font-weight: 400;
}
</style>
