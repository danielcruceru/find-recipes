<template>
  <div id="app1">
        <form-component />
    <cookie-law theme="blood-orange"></cookie-law>
  </div>
</template>

<script>
import FormComponent from "@/components/FormComponent.vue";
import CookieLaw from 'vue-cookie-law';
export default {
  name: "App1",
  components: {
    FormComponent,
    CookieLaw  
  }
};
</script>

<style>
.Cookie--blood-orange {
    background: #1e2023!important;
}

</style>