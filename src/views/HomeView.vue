<template>
      <main class="px-3" >
          <h1>
              Hendrik Braasch
          </h1>
          <p class="lead">
              {{ $t('message.thatsMe') }}
          </p>
          <p class="lead">
              <a href="https://www.linkedin.com/in/hendrikbraasch/" class="btn btn-lg btn-secondary fw-bold border-white bg-white">
                {{ $t('message.findMeOnLinkedin') }}
              </a>
          </p>
      </main>
</template>

<script>

export default {
  name: 'HomeView',
  components: {
  },
  data () {
    return {
      currentYear: 2020
    }
  }
}
</script>

<style>
/* Custom default button */
.btn-secondary,
.btn-secondary:hover,
.btn-secondary:focus {
  color: #333;
  text-shadow: none; /* Prevent inheritance from `body` */
}

body {
  text-shadow: 0 .05rem .1rem rgba(0, 0, 0, .5);
  box-shadow: inset 0 0 5rem rgba(0, 0, 0, .5);
}

.cover-container {
  max-width: 42em;
}

.red {
  color: rgb(188, 26, 26);
}
</style>
