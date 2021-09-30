<template>
  <v-container>
    <h1 class="text-center">Pag</h1>
    <ul>
      <li v-for="(item, index) in $t('info')" :key="(item, index)">{{ item }}</li>
    </ul>
  </v-container>
</template>

<script>
import pagInfo from '../../data/novalja/pag'

export default {
  i18n: {
    messages: pagInfo
  }
}
</script>
