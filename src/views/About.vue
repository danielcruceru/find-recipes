<template>
  <div class="about" style="padding-top:30px;">
    <h1>
      Modern Web Programming info...
    </h1>
    <div v-html="html"></div>
  </div>
</template>

<script>
  import showdown from 'showdown';

  export default {
    name: "About",

    data: function(){
      return {
        html: ""
      }
    },

    created() {
      let $this = this;

      fetch('../README.md').then(response => {
        return response.text();
      }).then(data => {
        // Work with JSON data here
        let converter = new showdown.Converter();
        $this.html = converter.makeHtml(data);
      }).catch(err => {
        // Do something for an error here
      });
    }
  }
</script>