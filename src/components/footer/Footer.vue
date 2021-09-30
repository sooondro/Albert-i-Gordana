<template>
  <v-footer class="font-weight-medium" dark>
    <v-container fluid>
      <v-row>
        <v-col sm="12" md="6">
          <OwnersInfo />
        </v-col>
        <v-col sm="12" md="6">
          <CreatorsInfo />
        </v-col>
      </v-row>
    </v-container>
  </v-footer>
</template>

<script>
import OwnersInfo from './OwnersInfo.vue'
import CreatorsInfo from './CreatorsInfo.vue'

export default {
  components: {
    OwnersInfo,
    CreatorsInfo
  }
}
</script>
