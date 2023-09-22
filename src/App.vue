<script setup>
import { RouterLink, RouterView } from 'vue-router'
import pageHeader from './components/pageheader.vue'
</script>

<template>
  <header>
    <img alt="Jack Griffiths" class="logo" src="@/assets/Jack.ico" width="220" height="250" />

    <div class="wrapper">
      <pageHeader msg="Jack Griffiths - My Portfolio" />

      <nav>
        <RouterLink to="/">General Information</RouterLink>
        <RouterLink to="/aboutMe">About Me</RouterLink>
        <RouterLink to="/expertise">Expertise</RouterLink>
        <RouterLink to="/quiz">My Quiz</RouterLink>
      </nav>
    </div>
  </header>

  
  <div class="page-container">
    <div class="content-wrapper">
      <RouterView />
    </div>
    <footer class="pageFooter">
      <FooterComponent/>
    </footer>
  </div>
</template>

<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>
