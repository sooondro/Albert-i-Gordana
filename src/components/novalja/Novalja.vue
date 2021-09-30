<template>
  <v-container>
    <h1 class="text-center">Novalja</h1>
    <ul>
      <li v-for="(item, index) in $t('info')" :key="(item, index)">{{ item }}</li>
    </ul>
  </v-container>
</template>

<script>
import novaljaInfo from '../../data/novalja/novalja'

export default {
  i18n: {
    messages: novaljaInfo
  }
}
</script>
