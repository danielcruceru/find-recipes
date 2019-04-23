<template>
  <div id="app1">
        <form-component1 />
    <cookie-law theme="blood-orange"></cookie-law>
  </div>
</template>

<script>
import FormComponent1 from "@/components/FormComponent1.vue";
import CookieLaw from 'vue-cookie-law';
export default {
  name: "App1",
  components: {
    FormComponent1,
    CookieLaw  
  }
};
</script>

<style>
.Cookie--blood-orange {
    background: #1e2023!important;
}

</style>