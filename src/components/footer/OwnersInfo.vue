<template>
  <div>
    <v-list disabled dense dark>
      <v-list-item v-for="(item, index) in $t('items')" :key="(item, index)">
        <v-list-item-icon>
          <v-icon>{{ icons[index] }}</v-icon>
        </v-list-item-icon>

        <v-list-item-title>{{ item.title }}</v-list-item-title>
      </v-list-item>
    </v-list>
  </div>
</template>

<script>
export default {
  data () {
    return {
      icons: [
        'mdi-home',
        'mdi-map-marker',
        'mdi-phone',
        'mdi-cellphone-android',
        'mdi-email'
      ]
    }
  },
  i18n: {
    messages: {
      hr: {
        items: [
          {
            title: 'Albert & Gordana Semenčić'
          },
          {
            title: 'Novalja, otok Pag, Hrvatska'
          },
          {
            title: 'Tel: 00385 53 661 917'
          },
          {
            title: 'Mob: 00385 91 554 1149'
          },
          {
            title: 'goran.semencic@gmail.com'
          }
        ]
      },
      en: {
        items: [
          {
            title: 'Albert & Gordana Semenčić'
          },
          {
            title: 'Novalja, island Pag, Croatia'
          },
          {
            title: 'Tel: 00385 53 661 917'
          },
          {
            title: 'Mob: 00385 91 554 1149'
          },
          {
            title: 'goran.semencic@gmail.com'
          }
        ]
      },
      de: {
        items: [
          {
            title: 'Albert & Gordana Semenčić'
          },
          {
            title: 'Novalja, Insel Pag, Kroatien'
          },
          {
            title: 'Tel: 00385 53 661 917'
          },
          {
            title: 'Mob: 00385 91 554 1149'
          },
          {
            title: 'goran.semencic@gmail.com'
          }
        ]
      },
      it: {
        items: [
          {
            title: 'Albert & Gordana Semenčić'
          },
          {
            title: 'Novalja, isola Pag, Croazia'
          },
          {
            title: 'Tel: 00385 53 661 917'
          },
          {
            title: 'Mob: 00385 91 554 1149'
          },
          {
            title: 'goran.semencic@gmail.com'
          }
        ]
      },
      sl: {
        items: [
          {
            title: 'Albert & Gordana Semenčić'
          },
          {
            title: 'Novalja, otok Pag, Hrvaška'
          },
          {
            title: 'Tel: 00385 53 661 917'
          },
          {
            title: 'Mob: 00385 91 554 1149'
          },
          {
            title: 'goran.semencic@gmail.com'
          }
        ]
      },
      cs: {
        items: [
          {
            title: 'Albert & Gordana Semenčić'
          },
          {
            title: 'Novalja, ostrov Pag, Chorvatsko'
          },
          {
            title: 'Tel: 00385 53 661 917'
          },
          {
            title: 'Mob: 00385 91 554 1149'
          },
          {
            title: 'goran.semencic@gmail.com'
          }
        ]
      }
    }
  }
}
</script>
