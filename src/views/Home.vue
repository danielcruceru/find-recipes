<template>
    <div class="home row">
     
      <div class="col-md-12">
         <h3 style="padding: 50px 0px 50px 0px; text-align:center !important;">Featured recipes</h3> 
         </div>
           <div class="col-md-4">
         <img class="img-vue" src="../assets/paste5.png" style="width:300px; height:auto;"> 
         <p>	&#9733; PENNE MILANEZE	&#9733;</p> 
        
         </div>
         <div class="col-md-4">
          <img class="img-vue" src="../assets/paste4.png" style="width:300px; height:auto;"> 
          <p>&#9733; PENNE TUNNO 	&#9733;</p> </div>
        
       <div class="col-md-4">
          <img class="img-vue" src="../assets/paste8.png" style="width:300px; height:auto;"> 
          <p>	&#9733; PENNE FRUTTI DI MARE 	&#9733;</p> </div>
          
      <div class="col-md-4">
         <img class="img-vue" src="../assets/pizza1.png" style="width:300px; height:auto;"> 
         <p>	&#9733; PIZZA PROSCIUTTO	&#9733;</p> 
        
         </div>
         <div class="col-md-4">
          <img class="img-vue" src="../assets/pizza23.png" style="width:300px; height:auto;"> 
          <p>&#9733; PIZZA QUATRO STAGIONI 	&#9733;</p> </div>
        
       <div class="col-md-4">
          <img class="img-vue" src="../assets/pizza3.png" style="width:300px; height:auto;"> 
          <p>	&#9733; PIZZA CARNIVORA 	&#9733;</p> </div>

          <div class="col-md-12">
          <img class="img-vue" src="../assets/hr.png" style="width:100%; height:auto;"> 
           </div>  
      
        <div class="overlay w-100 h-100" v-if="loading" >
            <img alt="Loading" src="../assets/loading.svg" class="image-overlay">
        </div>
   
        <h2 class="col-sm-12" >Insert ingredients</h2>
        <p class="col-sm-12"> Find the best recipes made with ingredients in your house </p>
        
        <div class="container mt-5">
            <div v-for="(item, index) in ingredients" :key="index" class="row">
                <div class="col-sm w-25"></div>
                <div class="input-group mb-3 w-50 text-center">
                    <div class="input-group-prepend">
                        <span class="input-group-text">
                            {{index+1}}:
                        </span>
                    </div>
                    <input v-model="ingredients[index].value"
                           type="text"
                           class="form-control"
                           placeholder="Add ingredient"
                           @keyup.enter="GetRecipes()">
                    <div class="input-group-append">
                        <button @click="RemoveIngredient(index)"
                                :class="'btn ' + (ingredients.length === 1 ? 'btn-outline-dark' : 'btn-outline-danger') "
                                :disabled="ingredients.length === 1" :title="ingredients.length === 1 ? 'Hmm, 0 ingredients recipe?' : 'Remove ingredient' ">
                            <img alt="Add new ingredient" src="../assets/minus.svg" width="16">
                        </button>
                    </div>
                </div>
                <div class="col-sm  w-25"></div>
            </div>
        </div>

        <div style="text-align: center"class="col-sm-12">
            <button class="btn btn-outline-success" @click="AddNew()">
                <img alt="Add new ingredient" src="../assets/plus.svg" width="16">
            </button>
            <br><br>
            <button class="btn btn-success" @click="GetRecipes()" :disabled="DisableGet()">
                Get Recipes
            </button>
            
             <div class="col-md-12"style="padding: 50px 0px 50px 0px;">
          <img class="img-vue" src="../assets/food.png" style="width:60%; height:auto;"> 
         </div>

         
        </div>
        <div class="col-md-6">
          <h5 style="color:#000; text-decoration: underline;">SPECIAL </h5>
           <p>&#9733;  BIG PLATE 1 	&#9733;</p> 
          <img class="img-vue" src="../assets/a1.png" style="width:100%; height:auto;"> 
         </div>
        
       <div class="col-md-6">
         <h5 style="color:#000; text-decoration: underline;">SPECIAL </h5>
         <p>	&#9733; BIG PLATE 2 	&#9733;</p> 
          <img class="img-vue" src="../assets/a.png" style="width:100%; height:auto;"> 
          </div>
              <cookie-law theme="blood-orange"></cookie-law>

    </div>
</template>

<script>

  // @ is an alias to /src
  import Logo from '@/components/Logo.vue';
import CookieLaw from 'vue-cookie-law';
  export default {
    name: 'home',

    data: function () {
      return {
        ingredients: [{}],
        loading: false
      };
    },

    mounted: function () {
    },

    components: {
      Logo,
      CookieLaw
    },

    methods: {
      AddNew() {
        this.ingredients.push({});
      },

      RemoveIngredient(aIndex) {
        this.ingredients.splice(aIndex, 1);
      },

      GetRecipes() {
        //Store current object in a local variable, since inside FETCH callback "this" is something else
        let $this = this;
        //Display loading overlay
        $this.loading = true;

        //Get ingredients:
        let ingredients = this.ingredients.map(a => a.value);
        fetch('https://www.themealdb.com/api/json/v2/1/filter.php?i=' + ingredients.join(",") + '&api_key=8673533')
          .then(
            function (response) {
              if (response.status !== 200) {
                console.log('Looks like there was a problem. Status Code: ' + response.status);
                return;
              }

              response.json().then(function (data) {
                console.log(data);
                $this.loading = false;
                $this.$router.push({ name: 'recipes', params: { recipes: data } });
              });
            }
          )
          .catch(function (err) {
            console.log('Fetch Error :-S', err);
          });
      },

      DisableGet() {
        let toReturn = true;

        this.ingredients.forEach((aIngredient) => {
          if(aIngredient.value)
            toReturn = false;
        });

        return toReturn;
      }
    }
  }
</script>

<style>
    .overlay {
        position: fixed; /* Sit on top of the page content */
        width: 100%; /* Full width (cover the whole page) */
        height: 100%; /* Full height (cover the whole page) */
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: rgba(0,0,0,0.5); /* Black background with opacity */
        z-index: 99; /* Specify a stack order in case you're using a different order for other elements */
    }

    .image-overlay {
        position: absolute;
        top: 50%;
        left: 50%;
        font-size: 50px;
        color: white;
        transform: translate(-50%,-50%);
        -ms-transform: translate(-50%,-50%);
    }
.Cookie--blood-orange {
    background: #1e2023!important;
}
.Cookie--blood-orange .Cookie__button {
    background: #42b883 !important;   
}
    
</style>