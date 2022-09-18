<template>
  <div class="cover-container d-flex w-100 h-100 p-3 mx-auto flex-column">
    <header class="mb-auto">
      <nav class="nav nav-masthead justify-content-center float-md-end">
        <router-link to="/" class="nav-link">Home</router-link>
        <router-link to="/about" class="nav-link">{{ $t('message.about') }}</router-link>
        <a href="https://www.linkedin.com/in/hendrikbraasch/" class="nav-link" target="_parent">{{ $t('message.contact') }}</a>
      </nav>
    </header>
    <router-view/>
    <footer class="mt-auto text-white-50">
      <div class="sm-12 column">
        <div class="header-top row">
          <SelectLocale />
        </div>
      </div>
      <p>{{ currentYear }}</p>
    </footer>
  </div>
</template>

<script>
import SelectLocale from './components/SelectLocale.vue'
export default {
  data () {
    return {
      currentYear: 2020
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
  },
  components: { SelectLocale }
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
