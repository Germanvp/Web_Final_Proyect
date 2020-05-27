<template>
    <v-toolbar dense fixed>
        <v-toolbar-side-icon>
            <router-link to="/">
                <h1 height="50px"
                     width="50%" contain>Untitled</h1>
            </router-link>
        </v-toolbar-side-icon>   
      <v-spacer></v-spacer>
    </v-toolbar>
</template>

<script>
export default {

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.router-link {
    color: #000063;
    text-decoration-line: rgb(0, 0, 0);
    text-decoration-color: #000063
}

h1 {
    color: #000063;
    text-decoration-color: #000063;
}
</style>
