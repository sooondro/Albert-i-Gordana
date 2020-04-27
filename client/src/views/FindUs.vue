  <template>
  <div class="container">
    <div class="columns mt-2">
      <div class="column">
        <h3 class="title is-3">Albert</h3>
        <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6443.450502975293!2d14.876171655939515!3d44.56159309897829!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x19d9843fc8c7a383!2sApartmani%20Albert!5e0!3m2!1shr!2shr!4v1580590027216!5m2!1shr!2shr"
        frameborder="0" style="border:0;" allowfullscreen=""></iframe>
      </div>
      <div class="column">
        <h3 class="title is-3">Gordana</h3>
        <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6443.450502975293!2d14.876171655939515!3d44.56159309897829!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xbab9170667ae1c88!2sHouse%20Gordana!5e0!3m2!1shr!2shr!4v1580590464544!5m2!1shr!2shr"
        frameborder="0" style="border:0;" allowfullscreen=""></iframe>
      </div>
    </div>
    <div class="columns is-mobile mt-2 padded">
      <div class="column is-2">
        <a href="https://www.buscroatia.com/hr/">
          <img src="../assets/pictures/findUs/bus.png" alt="Bus">
        </a>
      </div>
      <div class="column"></div>
      <div class="column is-2">
        <a href="https://www.jadrolinija.hr/default.aspx?dpid=1335">
          <img src="../assets/pictures/findUs/ship.png" alt="Ship">
        </a>
      </div>
      <div class="column"></div>
      <div class="column is-2">
        <a href="http://www.zagreb-airport.hr/">
          <img src="../assets/pictures/findUs/airplane.png" alt="Airplane">
        </a>
      </div>
      <div class="column"></div>
      <div class="column is-2">
        <a href="https://cammeo.hr/hr/gradovi/zadar">
          <img src="../assets/pictures/findUs/taxi.png" alt="Taxi">
        </a>
      </div>
    </div>
    <div class="columns is-vcentered mt-2">
      <div class="column">
        <div class="list">
          <span class="list-item"><font-awesome-icon icon="home" />Albert & Gordana Semenčić</span>
          <span class="list-item"><font-awesome-icon icon="map-marker-alt" />
          Novalja, {{ $t('footer.island') }} Pag,{{ $t('footer.croatia') }}</span>
          <span class="list-item"><font-awesome-icon icon="phone-alt" />Tel: 00385 53 661 917</span>
          <span class="list-item"><font-awesome-icon icon="mobile-alt" />
          Mob: 00385 91 554 1149</span>
          <span class="list-item"><font-awesome-icon icon="at" />goran.semencic@gmail.com</span>
        </div>
      </div>
      <div class="column">
        <a @click="isImageModalActive = true">
          <img src="../assets/pictures/findUs/novalja_map.jpg" alt="Novalja Map">
        </a>
        <b-modal :active.sync="isImageModalActive">
          <p class="image">
            <img src="../assets/pictures/findUs/novalja_map.jpg">
          </p>
        </b-modal>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isImageModalActive: false,
    };
  },
};
</script>

<style scoped>

.list-item {
  padding: 0.75rem 1rem;
}

iframe {
  height: 25rem;
  width: 100%;
}
</style>
