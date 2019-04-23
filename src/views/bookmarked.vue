<template>
<div v-if="Bookmark " class="col-md-6" style="padding-top:30px;">
<h1> Bookmarked recipes</h1>
<p> Recipe name : {{Bookmark.name}} </p>
<p> Recipe id : {{Bookmark.id}} </p>
 <img class="card-img-top" :src="Bookmark.thumb" style="width:300px; height:auto;" >
</div>

 <div v-else class="jumbotron jumbotron-fluid">
            <div class="container">
                <h1 class="display-4">You don't have recipes bookmarked!</h1>
                <img alt="Vue logo" src="../assets/plate.svg" width="100">
                <p class="lead">Go and bookmark your favourites recipes!</p>
            </div>
        </div>

</template>

<script>




export default {
    name: "Bookmarked",
    props: ["name", "id"],

    data:
    
     function(){
      return {
        Bookmark: JSON.parse(localStorage.getItem('Bookmarked')),
}

    },

}
</script>



<style>
.jumbotron{
    background-color:#fff;
}
</style>