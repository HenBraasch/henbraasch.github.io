<template>
    <nav>
      <ul class="nav nav-masthead justify-content-center">
        <li v-for="(lang, i) in langs"
          :key="`lang-${i}`"
          :value="lang.short"
          class="nav-link"
          v-on:click="$i18n.locale = lang.short">{{lang.full}}</li>
      </ul>
    </nav>
</template>
<script>
export default {
  name: 'SelectLocale',
  data () {
    return { langs: [{ full: 'English', short: 'en' }, { full: 'Deutsch', short: 'de' }] }
  }
}
</script>
