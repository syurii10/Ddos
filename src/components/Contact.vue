<template>
  <div class="d-flex justify-content-center" style="color: black">
    <div>
      <h1 class="mt-5">Contact Us</h1>
      <a href="#" style="color: black;font-size: 20px">Link our managers</a>
      <p class="mt-3">Our numbers</p>
        <p>Kievstar:</p><a href="#" class="ml-1" style="color: blue;white-space: nowrap">+380 98 883 14 88</a>
        <p class="ml-3">Life:</p><a href="#" class="ml-1" style="color: #0029ff;white-space: nowrap">+380 66 666 66 66</a>
      <p>Our address:</p>
      <p><a href="#" style="color: black;font-size: 23px">Yeti House</a></p>
    </div>
    <div class="w-50  p-5">
      <h1>More for us</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officiis quis sed voluptates? Consectetur dolor ea eaque iusto minus molestiae odio placeat quaerat quia quis, quod, repudiandae sapiente soluta sunt veritatis?</p>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officiis quis sed voluptates? Consectetur dolor ea eaque iusto minus molestiae odio placeat quaerat quia quis, quod, repudiandae sapiente soluta sunt veritatis?</p>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officiis quis sed voluptates? Consectetur dolor ea eaque iusto minus molestiae odio placeat quaerat quia quis, quod, repudiandae sapiente soluta sunt veritatis?</p>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officiis quis sed voluptates? Consectetur dolor ea eaque iusto minus molestiae odio placeat quaerat quia quis, quod, repudiandae sapiente soluta sunt veritatis?</p>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officiis quis sed voluptates? Consectetur dolor ea eaque iusto minus molestiae odio placeat quaerat quia quis, quod, repudiandae sapiente soluta sunt veritatis?</p>
    </div>
  </div>
  <div class="d-flex justify-content-center">
    <GoogleMap api-key="AIzaSyB1GhrKvPtal9CuIvyQYEC7hCeV9Vvq56E" style="margin: 0 10% 10% 10%; width:  85vw; height: 500px"
               :center="center" :zoom="4">
      <Marker :options="{ position: center }"/>
    </GoogleMap>
  </div>
</template>

<script>
import {defineComponent} from "vue";
import {GoogleMap, Marker} from "vue3-google-map";

export default defineComponent({
  components: {GoogleMap, Marker},
  setup() {
    const center = {lat: 35.184077, lng: -41.660045};

    return {center};
  },
});
</script>

<style scoped>
h1, p {
  color:black;
}
</style>