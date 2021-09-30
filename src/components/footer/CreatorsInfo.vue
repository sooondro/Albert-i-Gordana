<template>
  <div>
    <v-list disabled dense dark>
      <v-list-item v-for="(item, index) in $t('items')" :key="(item, index)" >
        <v-spacer />
        <v-list-item-icon>
          <v-icon>mdi-information-variant</v-icon>
        </v-list-item-icon>

        <v-list-item-title>{{ item.title }}</v-list-item-title>
      </v-list-item>
    </v-list>
  </div>
</template>

<script>
export default {
  i18n: {
    messages: {
      hr: {
        items: [
          {
            title: 'Razvio Sandro Blavicki'
          },
          {
            title: 'Logo dizajnirao Davor Suljić'
          }
        ]
      },
      en: {
        items: [
          {
            title: 'Developed by Sandro Blavicki'
          },
          {
            title: 'Logo designed by Davor Suljić'
          }
        ]
      },
      de: {
        items: [
          {
            title: 'Entwickelt von Sandro Blavicki'
          },
          {
            icon: 'mdi-map-marker',
            title: 'Logo von Davor Suljić'
          }
        ]
      },
      it: {
        items: [
          {
            title: 'Sviluppato da Sandro Blavicki'
          },
          {
            title: 'Logo disegnato da Davor Suljić'
          }
        ]
      },
      sl: {
        items: [
          {
            title: 'Razvil Sandro Blavicki'
          },
          {
            title: 'Logotip oblikoval Davor Suljić'
          }
        ]
      },
      cs: {
        items: [
          {
            title: 'Vyvinut Sandro Blavicki'
          },
          {
            title: 'Logo navrhl Davor Suljić'
          }
        ]
      }
    }
  }
}
</script>
