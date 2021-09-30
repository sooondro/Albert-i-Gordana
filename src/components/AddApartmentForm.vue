<template>
  <v-container style="background-color: lightgrey">
    <v-form ref="form" v-model="valid" :lazy-validation="lazy">
      <v-btn @click="showTitleForm = !showTitleForm"
        >{{ $t("title.title") }}:</v-btn
      >
      <div v-show="showTitleForm">
        <v-text-field
          v-model="formData.title['hr']"
          :counter="10"
          :rules="titleRules"
          :label="'hr - ' + $t('title.title')"
          required
        ></v-text-field>
        <v-text-field
          v-model="formData.title['en']"
          :counter="10"
          :rules="titleRules"
          :label="'en - ' + $t('title.title')"
          required
        ></v-text-field>
        <v-text-field
          v-model="formData.title['de']"
          :counter="10"
          :rules="titleRules"
          :label="'de - ' + $t('title.title')"
          required
        ></v-text-field>
        <v-text-field
          v-model="formData.title['it']"
          :counter="10"
          :rules="titleRules"
          :label="'it - ' + $t('title.title')"
          required
        ></v-text-field>
        <v-text-field
          v-model="formData.title['sl']"
          :counter="10"
          :rules="titleRules"
          :label="'sl - ' + $t('title.title')"
          required
        ></v-text-field>
        <v-text-field
          v-model="formData.title['cs']"
          :counter="10"
          :rules="titleRules"
          :label="'cs - ' + $t('title.title')"
          required
        ></v-text-field>
      </div>

      <v-divider class="mb-3 mt-3"></v-divider>

      <v-file-input accept="image/*" label="File input" v-model="files" prepend-icon="mdi-camera"></v-file-input>

      <v-divider class="mb-3 mt-3"></v-divider>

      <v-btn @click="showTypeForm = !showTypeForm"
        >{{ $t("type.type") }}:</v-btn
      >
      <div v-show="showTypeForm">
        <v-text-field
          v-model="formData.type['hr']"
          :rules="typeRules"
          :label="'hr - ' + $t('type.type')"
          required
        ></v-text-field>
        <v-text-field
          v-model="formData.type['en']"
          :rules="typeRules"
          :label="'en - ' + $t('type.type')"
          required
        ></v-text-field>
        <v-text-field
          v-model="formData.type['de']"
          :rules="typeRules"
          :label="'de - ' + $t('type.type')"
          required
        ></v-text-field>
        <v-text-field
          v-model="formData.type['it']"
          :rules="typeRules"
          :label="'it - ' + $t('type.type')"
          required
        ></v-text-field>
        <v-text-field
          v-model="formData.type['sl']"
          :rules="typeRules"
          :label="'sl - ' + $t('type.type')"
          required
        ></v-text-field>
        <v-text-field
          v-model="formData.type['cs']"
          :rules="typeRules"
          :label="'cs - ' + $t('type.type')"
          required
        ></v-text-field>
      </div>

      <v-divider class="mb-3 mt-3"></v-divider>

      <v-btn @click="showInfoForm = !showInfoForm" class="mb-3"
        >{{ $t("info.info") }}:</v-btn
      >
      <div v-show="showInfoForm">
        <v-btn @click="infoCounter++">{{ $t("info.addInfo") }}</v-btn>
        <v-btn v-if="infoCounter > 0" @click="infoCounter--" class="ml-3">{{
          $t("info.reduceInfo")
        }}</v-btn>
        <div v-for="i in infoCounter" :key="i">
          <h4>{{ $t("info.info") }} - {{ i }}.</h4>
          <v-text-field
            v-model="formData.info['hr'][i - 1]"
            :rules="infoRules"
            :label="'hr - ' + $t('info.info')"
            required
          ></v-text-field>
          <v-text-field
            v-model="formData.info['en'][i - 1]"
            :rules="infoRules"
            :label="'en - ' + $t('info.info')"
            required
          ></v-text-field>
          <v-text-field
            v-model="formData.info['de'][i - 1]"
            :rules="infoRules"
            :label="'de - ' + $t('info.info')"
            required
          ></v-text-field>
          <v-text-field
            v-model="formData.info['it'][i - 1]"
            :rules="infoRules"
            :label="'it - ' + $t('info.info')"
            required
          ></v-text-field>
          <v-text-field
            v-model="formData.info['sl'][i - 1]"
            :rules="infoRules"
            :label="'sl - ' + $t('info.info')"
            required
          ></v-text-field>
          <v-text-field
            v-model="formData.info['cs'][i - 1]"
            :rules="infoRules"
            :label="'cs - ' + $t('info.info')"
            required
          ></v-text-field>
          <v-divider></v-divider>
        </div>
      </div>

      <v-row justify="end">
        <v-btn
          :disabled="!valid"
          color="success"
          class="mr-4"
          @click="saveData"
        >
          {{ $t("saveApartment") }}
        </v-btn>

        <v-btn color="error" class="mr-4" @click="reset">
          {{ $t("resetForm") }}
        </v-btn>
      </v-row>
    </v-form>
  </v-container>
</template>

<script>
import axios from 'axios'
import firebase from 'firebase'
import messages from '../data/formTranslations'

export default {
  data () {
    return {
      valid: true,
      files: [],
      showInfoForm: false,
      showTitleForm: false,
      showTypeForm: false,
      imageData: null,
      formData: {
        title: {
          hr: null,
          de: null,
          en: null,
          sl: null,
          it: null,
          cs: null
        },
        type: {
          hr: null,
          de: null,
          en: null,
          sl: null,
          it: null,
          cs: null
        },
        info: {
          hr: [null],
          de: [null],
          en: [null],
          sl: [null],
          it: [null],
          cs: [null]
        }
      },
      infoCounter: 1,
      lazy: false
    }
  },
  computed: {
    titleRules () {
      return [
        (v) => !!v || this.$t('title.titleRequired'),
        (v) => (v && v.length <= 10) || this.$t('title.titleLess')
      ]
    },
    typeRules () {
      return [(v) => !!v || this.$t('type.typeRequired')]
    },
    infoRules () {
      return [(v) => !!v || this.$t('info.infoRequired')]
    }
  },
  methods: {
    saveData () {
      axios
        .post(
          '/apartments.json' + '?auth=' + this.$store.getters.idToken,
          this.formData
        )
        .then((res) => {
          console.log(res.data)
          this.picture = null
          const storageRef = firebase.storage().ref(res.data.name).put(this.files)
          storageRef.on('state_changed', snapshot => {}, error => console.log(error.message))
          this.$router.go()
        })
        .catch((err) => console.log(err))
    },
    reset () {
      this.$refs.form.reset()
    }
  },
  i18n: {
    messages
  }
}
</script>

<style scoped>
  img.preview {
    width: 200px;
  }
</style>
