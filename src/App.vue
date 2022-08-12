<template>
  <div class="cover-container d-flex w-100 h-100 p-3 mx-auto flex-column">
    <header class="mb-auto">
      <nav class="nav nav-masthead justify-content-center float-md-end">
        <router-link to="/" class="nav-link">Home</router-link>
      </nav>
    </header>
    <router-view/>
    <footer class="mt-auto text-white-50">
      <p>{{ currentYear }}</p>
    </footer>
  </div>
</template>

<script>
export default {
  data () {
    return {
      currentYear: 2020,
      isColourCHange: false
    }
  },
  mounted () {
    this.currentYear = this.getCurrentYear()
  },
  methods: {
    getCurrentYear () {
      const currentDate = new Date()
      return currentDate.getFullYear()
    }
  }
}
</script>

<style>

 .nav-masthead .nav-link {
  color: rgba(255, 255, 255, .5);
  border-bottom: .25rem solid transparent;
}

.nav-masthead .nav-link:hover,
.nav-masthead .nav-link:focus {
  border-bottom-color: rgba(255, 255, 255, .25);
}

.nav-masthead .nav-link + .nav-link {
  margin-left: 1rem;
}

.nav-masthead .active {
  color: #fff;
  border-bottom-color: #fff;
}
</style>
