<template>
  <div>
    <v-container>
      <h1 class="text-center" style="color: white">{{ $t('food') }}</h1>
      <v-row>
        <v-col v-for="(food, index) in $t('foods')" :key="(food, index)" :sm="6">
          <v-card>
            <v-img :src="images[index]" height="200px"></v-img>
            <v-card-title> {{ food.title }}</v-card-title>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  data () {
    return {
      images: [
        require('../../assets/pictures/food/cheese.jpg'),
        require('../../assets/pictures/food/goat.jpg')
      ]
    }
  },
  i18n: {
    messages: {
      hr: {
        foods: [
          {
            title: 'Sir'
          },
          {
            title: 'Janjetina'
          }
        ],
        food: 'Hrana'
      },
      en: {
        foods: [
          {
            title: 'Cheese'
          },
          {
            title: 'Lamb'
          }
        ],
        food: 'Food'
      },
      de: {
        foods: [
          {
            title: 'Käse'
          },
          {
            title: 'Lamm'
          }
        ],
        food: 'Essen'
      },
      cs: {
        foods: [
          {
            title: 'Sýr'
          },
          {
            title: 'Jehněčí'
          }
        ],
        food: 'Jídlo'
      },
      it: {
        foods: [
          {
            title: 'Formaggio'
          },
          {
            title: 'Agnello'
          }
        ],
        food: 'Cibo'
      },
      sl: {
        foods: [
          {
            title: 'Sir'
          },
          {
            title: 'Jagnjetina'
          }
        ],
        food: 'Hrana'
      }
    }
  }
}
</script>
