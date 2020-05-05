<template>
  <section class="mt-2 container">
    <b-tabs v-model="activeTab" position="is-centered">
      <b-tab-item label="House Albert">
        <b-carousel :autoplay="false" with-carousel-list :indicator="false" :overlay="gallery">
          <b-carousel-item v-for="(item, i) in albert" :key="i">
            <figure @click="switchGallery(true)" class="image">
              <img :src="item.image" />
            </figure>
          </b-carousel-item>
          <span v-if="gallery" @click="switchGallery(false)" class="modal-close is-large" />
          <template slot="list" slot-scope="props">
            <b-carousel-list
              v-model="props.active"
              :data="albert"
              :config="al"
              :refresh="gallery"
              @switch="props.switch($event, false)"
              as-indicator
            />
          </template>
        </b-carousel>
        <div class="columns is-vcentered mt-2">
          <div class="column">
            <ul>
              <li v-for="(item, index) in $t('houses.albert.list')" :key="index">{{ item }}</li>
            </ul>
          </div>
          <div class="column">
            <h5 class="title is-5">{{ $t('houses.albert.description.title') }}</h5>
            <p v-for="(item, index) in $t('houses.albert.description.text')" :key="index">
              {{ item }}
            </p>
          </div>
        </div>
        <div class="container mt-2">
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6443.450502975293!2d14.876171655939515!3d44.56159309897829!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x19d9843fc8c7a383!2sApartmani%20Albert!5e0!3m2!1shr!2shr!4v1580590027216!5m2!1shr!2shr" width="100%" height="450" frameborder="0" style="border:0;" allowfullscreen=""></iframe>
        </div>
      </b-tab-item>
      <b-tab-item label="House Gordana">
        <b-carousel :autoplay="false" with-carousel-list :indicator="false" :overlay="galleryG">
          <b-carousel-item v-for="(item, i) in gordana" :key="i">
            <figure @click="switchGalleryG(true)" class="image">
              <img :src="item.image" />
            </figure>
          </b-carousel-item>
          <span v-if="galleryG" @click="switchGalleryG(false)" class="modal-close is-large" />
          <template slot="list" slot-scope="props">
            <b-carousel-list
              v-model="props.active"
              :data="gordana"
              :config="al"
              :refresh="galleryG"
              @switch="props.switch($event, false)"
              as-indicator
            />
          </template>
        </b-carousel>
        <div class="columns is-vcentered mt-2">
          <div class="column">
            <ul>
              <li v-for="(item, index) in $t('houses.gordana.list')" :key="index">{{ item }}</li>
            </ul>
          </div>
          <div class="column">
            <h5 class="title is-5">{{ $t('houses.gordana.description.title') }}</h5>
            <p v-for="(item, index) in $t('houses.gordana.description.text')" :key="index">
              {{ item }}
            </p>
          </div>
        </div>
        <div class="container mt-2">
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6443.450502975293!2d14.876171655939515!3d44.56159309897829!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xbab9170667ae1c88!2sHouse%20Gordana!5e0!3m2!1shr!2shr!4v1580590464544!5m2!1shr!2shr" width="100%" height="450" frameborder="0" style="border:0;" allowfullscreen=""></iframe>
        </div>
      </b-tab-item>
    </b-tabs>
  </section>
</template>

<script>
export default {
  data() {
    return {
      activeTab: 0,
      showBooks: true,
      gallery: false,
      galleryG: false,
      al: {
        hasGrayscale: true,
        itemsToShow: 2,
        breakpoints: {
          768: {
            hasGrayscale: false,
            itemsToShow: 4,
          },
          960: {
            hasGrayscale: true,
            itemsToShow: 6,
          },
        },
      },
      albert: [
        {
          title: 'Slide 1',
          image: require('@/assets/pictures/albert/a001.jpeg'), // eslint-disable-line global-require
        },
        {
          title: 'Slide 2',
          image: require('@/assets/pictures/albert/a003.jpg'), // eslint-disable-line global-require
        },
        {
          title: 'Slide 3',
          image: require('@/assets/pictures/albert/a005.jpg'), // eslint-disable-line global-require
        },
        {
          title: 'Slide 4',
          image: require('@/assets/pictures/albert/a007.jpg'), // eslint-disable-line global-require
        },
        {
          title: 'Slide 5',
          image: require('@/assets/pictures/albert/a010.jpg'), // eslint-disable-line global-require
        },
        {
          title: 'Slide 6',
          image: require('@/assets/pictures/albert/a011.jpg'), // eslint-disable-line global-require
        },
      ],
      gordana: [
        {
          title: 'Slide 1',
          image: require('@/assets/pictures/gordana/g001.jpg'), // eslint-disable-line global-require
        },
        {
          title: 'Slide 2',
          image: require('@/assets/pictures/gordana/g-dnevni01.jpg'), // eslint-disable-line global-require
        },
        {
          title: 'Slide 3',
          image: require('@/assets/pictures/gordana/g-spavaca1.jpg'), // eslint-disable-line global-require
        },
        {
          title: 'Slide 4',
          image: require('@/assets/pictures/gordana/g-terasa1.jpg'), // eslint-disable-line global-require
        },
        {
          title: 'Slide 5',
          image: require('@/assets/pictures/gordana/g-terasa3.jpg'), // eslint-disable-line global-require
        },
        {
          title: 'Slide 6',
          image: require('@/assets/pictures/gordana/g-ispred2.jpg'), // eslint-disable-line global-require
        },
      ],
    };
  },
  methods: {
    switchGallery(value) {
      this.gallery = value;
      if (value) {
        return document.documentElement.classList.add('is-clipped');
      }
      return document.documentElement.classList.remove('is-clipped');
    },
    switchGalleryG(value) {
      this.galleryG = value;
      if (value) {
        return document.documentElement.classList.add('is-clipped');
      }
      return document.documentElement.classList.remove('is-clipped');
    },
  },
};
</script>

<style lang="scss">
.tabs li.is-active a {
  border-bottom-color: gray;
  color: white;
}

a {
  color: white;
}

a:hover {
  color: white;
}

.tabs {
  font-size: 1.5rem;
}
</style>

<style lang="scss" scoped>
li {
  margin-left: 1.5rem;
  margin-top: 3px;
}

iframe {
  height: 25rem;
  width: 100%;
}

.image img {
  max-width: 800px;
  max-height: 600px;
  margin: auto;
}
</style>
