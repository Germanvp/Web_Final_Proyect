<template>
<v-app style = "background: #DEE7EF;">
  <v-card>
    <v-card-title>
      Teams
      <v-spacer></v-spacer>
      <v-text-field
        v-model="search"
        append-icon="mdi-magnify"
        label="Search"
        single-line
        hide-details
      ></v-text-field>
      <new-team-dialog></new-team-dialog>
    </v-card-title>

  <template>
    <v-data-table
      :headers="headers"
      :items="teams"
      :search="search"
    >
      <template v-slot:item="row">
          <tr>
            <td>{{row.item.name}}</td>
            <td>{{row.item.id}}</td>
            <td>{{row.item.users_ref.length}}</td>
            <td>{{row.item.description}}</td>
          </tr>
      </template>
    
    </v-data-table>
   </template> 
  </v-card>
</v-app>
</template>

<script>
  import ThreadDialog from './dialogs/ThreadDialog'
  import NewTeamDialog from './dialogs/NewTeamDialog'
  import TeamService from '@/services/TeamService'

  export default {
    components: { ThreadDialog, NewTeamDialog },
    data () {
      return {
        search: '',
        singleSelect: false,
        teams: [],
        emptyString: "",
        selected: [],
        headers: [
          {
            text: 'Team',
            align: 'start',
            sortable: false,
            value: 'name',
          },
          { text: 'Team_Id', value: 'id' },
          { text: 'Members', value: 'users_ref.length' },
          { text: 'Description', value: 'description' },
        ]
      }
    },
    methods: {
      async getTeams() {
          const response = await TeamService.getTeams({
            headers: {
                uid: localStorage.user_id,
            }
          })
            
          this.teams = this.teams.concat(response.data);
          console.log(this.teams)
        }
    },

    created: function() {
      this.getTeams();
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
