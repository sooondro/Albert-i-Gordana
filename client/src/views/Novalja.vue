<template>
  <div>
    <div class="container">
      <div class="columns mt-2">
        <div class="column padded">
          <h3 class="title is-3">Pag</h3>
          <ul>
            <li v-for="(item, index) in $t('novalja.pag')" :key="index">{{ item }}</li>
          </ul>
        </div>
        <div class="column padded">
          <h3 class="title is-3">Novalja</h3>
          <ul>
            <li v-for="(item, index) in $t('novalja.novalja')" :key="index">{{ item }}</li>
          </ul>
        </div>
      </div>
    </div>
    <div class="mt-2 padded">
      <h3 class="title is-3">{{ $t('novalja.beaches') }}</h3>
      <div class="columns is-multiline is-mobile is-variable
      is-1-mobile is-2-tablet is-3-desktop is-vcentered">
        <div class="column is-half-mobile is-3-tablet">
          <a href="https://www.zrce.com/">
            <figure class="image is-16by9">
              <img src="../assets/pictures/beaches/zrce.jpg" alt="Zrće Beach" />
            </figure>
            <h4 class="title is-4">Zrće</h4>
          </a>
        </div>
        <div class="column is-half-mobile is-3-tablet">
          <a href="https://visitnovalja.hr/uvala-caska/">
            <figure class="image is-16by9">
              <img src="../assets/pictures/beaches/caska.jpg" alt="Caska Beach" />
            </figure>
            <h4 class="title is-4">Uvala Caska</h4>
          </a>
        </div>
        <div class="column is-half-mobile is-3-tablet">
          <a href="https://www.campingstrasko.com/hr/">
            <figure class="image is-16by9">
              <img src="../assets/pictures/beaches/strasko.jpg" alt="Camp Straško" />
            </figure>
            <h4 class="title is-4">{{ $t('novalja.strasko') }}</h4>
          </a>
        </div>
        <div class="column is-half-mobile is-3-tablet">
          <a href="https://www.otok-pag.hr/tours/plaza-babe/PG-TR-132">
            <figure class="image is-16by9">
              <img src="../assets/pictures/beaches/babe.jpg" alt="Beach Babe" />
            </figure>
            <h4 class="title is-4">Babe</h4>
          </a>
        </div>
        <div class="column is-4-mobile">
          <a href="https://www.otok-pag.hr/tours/plaza-trincel/PG-TR-131">
            <figure class="image is-16by9">
              <img src="../assets/pictures/beaches/trincel.jpg" alt="Trinćel Beach" />
            </figure>
            <h4 class="title is-4">Trinćel</h4>
          </a>
        </div>
        <div class="column is-4-mobile">
          <a href="https://www.otok-pag.hr/tours/gradska-plaza-vrtic/PG-TR-146">
            <figure class="image is-16by9">
              <img src="../assets/pictures/beaches/vrtic.jpg" alt="Vrtić Beach" />
            </figure>
            <h4 class="title is-4">Vrtić</h4>
          </a>
        </div>
        <div class="column is-4-mobile">
          <a href="https://croatia.hr/hr-HR/dozivljaji/plaze/plaza-branicevica">
            <figure class="image is-16by9">
              <img src="../assets/pictures/beaches/branicevica.jpg" alt="Braničevica" />
            </figure>
            <h4 class="title is-4">Braničevica</h4>
          </a>
        </div>
      </div>
    </div>
    <div class="mt-2">
      <h3 class="title is-3">{{ $t('novalja.food') }}</h3>
      <div class="columns is-mobile is-centered">
        <div class="column is-5">
          <a href="">
            <figure class="image is-16by9">
              <img class="is-rounded" src="../assets/pictures/food/cheese.jpg"
               alt="Cheese from Pag">
            </figure>
            <h4 class="title is-4">{{ $t('novalja.cheese') }}</h4>
          </a>
        </div>
        <div class="column is-5">
          <a href="">
            <figure class="image is-16by9">
              <img class="is-rounded" src="../assets/pictures/food/goat.jpg" alt="Lamb from Pag">
            </figure>
            <h4 class="title is-4">{{ $t('novalja.lamb') }}</h4>
          </a>
        </div>
      </div>
    </div>
    <div class="mt-2 padded">
      <h3 class="title is-3">{{ $t('novalja.excursions') }}</h3>
      <div class="columns is-mobile is-multiline is-vcentered
      is-variable is-1-mobile is-2-tablet is-3-desktop">
        <div class="column is-half-mobile is-3-tablet">
          <a href="http://www.rab-visit.com/hr">
            <figure class="image is-16by9">
              <img src="../assets/pictures/fieldTrips/rab.jpg" alt="Rab" />
            </figure>
            <h4 class="title is-4">Rab</h4>
          </a>
        </div>
        <div class="column is-half-mobile is-3-tablet">
          <a href="https://www.visitlosinj.hr/hr/">
            <figure class="image is-16by9">
              <img src="../assets/pictures/fieldTrips/losinj.jpg" alt="Lošinj" />
            </figure>
            <h4 class="title is-4">Lošinj</h4>
          </a>
        </div>
        <div class="column is-half-mobile is-3-tablet">
          <a href="http://www.tzsilba.hr/">
            <figure class="image is-16by9">
              <img src="../assets/pictures/fieldTrips/silba.jpg" alt="Silba" />
            </figure>
            <h4 class="title is-4">Silba</h4>
          </a>
        </div>
        <div class="column is-half-mobile is-3-tablet">
          <a href="https://np-plitvicka-jezera.hr/">
            <figure class="image is-16by9">
              <img src="../assets/pictures/fieldTrips/plitvice.jpg" alt="Plitvice Lakes" />
            </figure>
            <h4 class="title is-4">{{ $t('novalja.plitvice') }}</h4>
          </a>
        </div>
        <div class="column is-half-mobile is-one-fifth-tablet">
          <a href="http://np-kornati.hr/hr/">
            <figure class="image is-16by9">
              <img src="../assets/pictures/fieldTrips/kornati.jpg" alt="Kornati" />
            </figure>
            <h4 class="title is-4">Kornati</h4>
          </a>
        </div>
                <div class="column is-half-mobile is-one-fifth-tablet">
          <a href="http://www.np-krka.hr/hr/">
            <figure class="image is-16by9">
              <img src="../assets/pictures/fieldTrips/krka.jpg" alt="Krka" />
            </figure>
            <h4 class="title is-4">Krka</h4>
          </a>
        </div>
                <div class="column is-4-mobile is-one-fifth-tablet">
          <a href="https://www.zadar.travel/hr/vodic/zadarski-otoci/09-12-2010/olib#.XdW1N1dKhPY">
            <figure class="image is-16by9">
              <img src="../assets/pictures/fieldTrips/olib.jpg" alt="Olib" />
            </figure>
            <h4 class="title is-4">Olib</h4>
          </a>
        </div>
                <div class="column is-4-mobile is-one-fifth-tablet">
          <a href="https://www.np-paklenica.hr/hr/">
            <figure class="image is-16by9">
              <img src="../assets/pictures/fieldTrips/paklenica.jpeg" alt="Paklenica" />
            </figure>
            <h4 class="title is-4">Paklenica</h4>
          </a>
        </div>
                <div class="column is-4-mobile is-one-fifth-tablet">
          <a href="http://www.np-sjeverni-velebit.hr/">
            <figure class="image is-16by9">
              <img src="../assets/pictures/fieldTrips/velebit.jpg" alt="North Velebit" />
            </figure>
            <h4 class="title is-4">{{ $t('novalja.velebit') }}</h4>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.padded {
  margin-left: 1.5rem;
  margin-right: 1.5rem;
}

.title {
  text-align: center;
  color: white;
}

ul {
  list-style-type: circle;
}

.mt-2 {
  margin-top: 2rem;
}

a:hover {
  text-decoration: underline;
  text-decoration-color: rgb(37, 37, 109);
}
</style>
