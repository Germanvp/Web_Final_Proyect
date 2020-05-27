<template>
<v-app style = "background: #DEE7EF;">
  <v-card>
    <v-card-title>
      Goals
      <v-divider
          class="mx-4"
          inset
          vertical
        ></v-divider>
      <v-spacer></v-spacer>
      <v-row >
        <v-col width="50%">
        <v-select
          :items="['description', 'userName',
          'teamName', 'name']"
          v-model="filterValue"
        ></v-select>
        </v-col>
        <v-spacer></v-spacer>
        <v-col width="50%">
          <v-text-field
            width="50%"
            v-model="search"
            append-icon="mdi-magnify"
            label="Search"
            single-line
            hide-details
          ></v-text-field>
        </v-col>
        <v-spacer></v-spacer>
      </v-row>
      <goal-dialog></goal-dialog>
    </v-card-title>
    <v-divider light></v-divider>
  <template>
    <v-data-table
      :items="goals"
      :search="search"
      :headers="getHeaders(filterValue)"
    >
      <template v-slot:item="row">
          <threadDialog :row = "row"></threadDialog>
      </template>
    
    </v-data-table>
   </template> 
  </v-card>
</v-app>
</template>

<script>
  import ThreadDialog from './dialogs/ThreadDialog'
  import GoalDialog from './dialogs/GoalDialog'
  import GoalService from '@/services/GoalsService'

  export default {
    components: { ThreadDialog, GoalDialog },
    data () {
      return {
        search: '',
        singleSelect: false,
        goals: [ ],
        emptyString: "",
        selected: [],
        filterValue: "description",
      }
    },
    methods: {
      async getGoals() {
            const response = await GoalService.getGlobalGoals()
            console.log(response.data);
            this.goals = this.goals.concat(response.data);
        },

      getHeaders(filterValue) {
        return [
          {
            text: '',
            align: 'start',
            sortable: false,
            value: filterValue,
          },
        ]
      }
    },

    created: function() {
      this.getGoals();
    },

  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h2 {
  color: black;
  align-self: center;
  margin: 10px;
}


.v-card {
    margin-top: 15px;
    margin-left: auto;
    margin-right: auto;
    width: 95%;
}
</style>
