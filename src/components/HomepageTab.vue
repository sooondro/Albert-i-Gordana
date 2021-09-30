<template>
  <div>
    <v-tabs
      v-model="tab"
      background-color="dark"
      class="elevation-2"
      dark
      :grow="grow"
    >
      <v-tabs-slider></v-tabs-slider>
      <v-tab
        v-for="(house, index) in $t('houses')"
        :key="(house, index)"
        :href="`#house-${titles[index]}`"
      >
        {{ titles[index] }}
      </v-tab>
      <v-tab-item
        class="mt-5"
        style="background-color: black; color: white"
        v-for="(house, index) in $t('houses')"
        :key="(house, index)"
        :value="'house-' + titles[index]"
      >
        <v-container>
          <v-img :src="images[index]" class="mb-7"></v-img>
          <v-row justify="center">
            <v-col :sm="12" :md="6" cols="12">
              <ul>
                <li v-for="(item, index) in house.list" :key="(item, index)">
                  {{ item }}
                </li>
              </ul>
            </v-col>
            <v-col :sm="12" :md="6" cols="12">
              <h3 class="mb-4">{{ house.description.title }}</h3>
              <p
                v-for="(item, index) in house.description.text"
                :key="(item, index)"
              >
                {{ item }}
              </p>
            </v-col>
          </v-row>
          <iframe
            :src="iframes[index]"
            frameborder="0"
            style="border: 0; width: 100%; height: 25rem"
            allowfullscreen=""
          ></iframe>
        </v-container>
      </v-tab-item>
    </v-tabs>
  </div>
</template>

<script>
import houses from '../data/houses'
import iframes from '../data/iframes'

export default {
  data () {
    return {
      tab: null,
      grow: true,
      tabs: 2,
      iframes,
      images: [
        require('../assets/pictures/homepage/albert.jpg'),
        require('../assets/pictures/homepage/gordana.jpg')
      ],
      titles: [
        'Albert',
        'Gordana'
      ]
    }
  },
  i18n: {
    messages: houses
  }
}
</script>
