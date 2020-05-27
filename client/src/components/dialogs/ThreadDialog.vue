<template>
  <tr @click.stop="dialog = true">
    <v-card
      class="mx-auto"
      max-width="85%"
      @click.stop="dialog = true; getUpdates()"
      >
          <v-card-title>
            <v-icon
              large
              left
            >
              mdi-adjust
            </v-icon>
            <span class="title font-weight-light">{{row.item.teamName}} : {{row.item.name}}</span>
          </v-card-title>

          <v-card-text class="headline font-weight-bold">
            {{row.item.description}}
          </v-card-text>

          <v-card-actions>
            <v-list-item class="grow">
              <v-list-item-avatar color="grey darken-3">
                <v-img
                  class="elevation-6"
                  src="https://avataaars.io/?avatarStyle=Transparent&topType=ShortHairShortCurly&accessoriesType=Prescription02&hairColor=Black&facialHairType=Blank&clotheType=Hoodie&clotheColor=White&eyeType=Default&eyebrowType=DefaultNatural&mouthType=Default&skinColor=Light"
                ></v-img>
              </v-list-item-avatar>

              <v-list-item-content>
                <v-list-item-title>{{row.item.userName}}</v-list-item-title>
              </v-list-item-content>

              <v-row
                align="center"
                justify="end"
              >
              <v-icon v-on:click.stop @click="deleteGoal()" class="mr-1">mdi-trash-can</v-icon>
              </v-row>
            </v-list-item>
          </v-card-actions>
    </v-card>
    <v-divider light></v-divider>
    <v-row justify="center">
      <v-dialog
        v-model="dialog"
        scrollable height="100%"
        max-width="80%"
      >
        <v-card scrollable width = "100%" height = "100%">
        <v-card-actions v-if="!row.item.is_complete">
                <v-spacer></v-spacer>
                <v-btn @click="updateGoal()"
                color="green darken-1"
                text
                >
                Mark as Complete
                </v-btn>
        </v-card-actions>
        <v-card-title v-else>Task was completed on {{new Date(this.row.item.completedDate)}}</v-card-title>
        <newUpdate :thread="this.row.item.thread_ref"></newUpdate>
        <v-container height = "100%" justify="center" width = "100%"> 
          <v-row id ="vContainer" v-for="update in updates" :key="update.description" >
            <v-card
              max-width="100%"
              id = "updateCard"
            >
              <v-img
                :src="update.img"
                height="70%"
              ></v-img>

              <v-card-title>
                {{update.userName}}
              </v-card-title>

              <v-card-text>
                {{update.description}}
              </v-card-text>

            </v-card>
            <v-card
              max-width="100%"
              scrollable
              id="commentsListId"
            >
              <v-list>
                <v-list-item v-for="comment in update.comments_list " :key="comment.text">
                  <v-list-item-avatar>
                    <v-img 
                    src="https://avataaars.io/?avatarStyle=Transparent&topType=ShortHairShortCurly&accessoriesType=Prescription02&hairColor=Black&facialHairType=Blank&clotheType=Hoodie&clotheColor=White&eyeType=Default&eyebrowType=DefaultNatural&mouthType=Default&skinColor=Light"
                    ></v-img>
                  </v-list-item-avatar>

                  <v-list-item-content>
                    <v-list-item-title >{{comment.userName}}</v-list-item-title>
                    <v-list-item-subtitle>{{comment.text}}</v-list-item-subtitle>
                  </v-list-item-content>
                </v-list-item>
                <v-divider></v-divider>
              </v-list>
              <v-textarea
                append-outer-icon="comment"
                v-model = "newComment"
                @click:append-outer="postComments(update.id)"
                class="mx-2"
                rows="1"
              ></v-textarea>
            </v-card>
            
            <v-divider></v-divider>
          </v-row>
        </v-container>
        </v-card>
      </v-dialog>
    </v-row>
  </tr>
</template>

<script>
  import ThreadService from '@/services/ThreadService'
  import UpdateService from '@/services/UpdateService'
  import CommentsService from '@/services/CommentsService'
  import GoalService from '@/services/GoalsService'
  import NewUpdate from './NewUpdate'

  export default {
    components: {NewUpdate},
    props: ['row'],
    show: false,
    data () {
      return {
        dialog: false,
        show: false,
        update_array : [],
        updates: [],
        newComment: "",
      }
    },
    methods: {
      async getThread() {
            const response = await ThreadService.getThread(this.row.item.thread_ref, {})
            
            this.update_array = this.update_array.concat(response.data.updates)
        },
      async getUpdates() {
        var json_updates = JSON.parse(localStorage.updates)
        console.log("JS", json_updates)

        for (const update of this.update_array) {
          console.log("DOWQN", localStorage.updates[update])
          if (json_updates[update] == undefined) {
            var response = await UpdateService.getUpdate(update, {})
            var update_data = response.data

            update_data.comments_list = []
            console.log("ZZZAs", update_data)

            for (const comment of response.data.comments) {
              var comment_data = await CommentsService.getComment(comment, {})
              if(comment_data.status == 200){
                comment_data.data.id = comment
                console.log(comment_data)
                update_data.comments_list.push(comment_data.data)
              }
            }

            update_data.id = update
            this.updates.push(update_data)
            json_updates[update] = update_data
            console.log("asdwwe", this.updates)
          } else {
            console.log(json_updates[update])
          }
          
          localStorage.updates = JSON.stringify(json_updates)

        }
      },
      async postComments(update_id) {
        const comment = {
          date: Date.now(),
          text: this.newComment,
          user: localStorage.user_id,
          userName: localStorage.name,
        }

        console.log(comment)
        var json_updates = JSON.parse(localStorage.updates)
        json_updates[update_id].comments_list.push(comment)
        localStorage.updates = JSON.stringify(json_updates)
        console.log("D", comment)
        const resp = await UpdateService.patchUpdate(update_id, comment)
        .then(resp => {
          alert(resp);
        })
        .catch(err => {
          alert(err);
        });

        console.log(resp);

      },
      async deleteGoal(){
        const data = {
            headers: {
              uid: localStorage.user_id
            }
        }
          
        console.log(data)
        const response = await GoalService.deleteGoal(this.row.item.id, data)
        .then(resp => {
          if(resp.status == 202){
                alert("Deleted goal")
          }
          console.log(resp)
        })
        .catch(err => {
          alert(err);
        })
      },

      async updateGoal() {
        const data = {
            headers: {
              uid: localStorage.user_id
            }
        }
          
        const response = await GoalService.patchGoal(this.row.item.id, data)
        .then(resp => {
          if(resp.status == 202){
                alert("Marked as completed")
          }
          console.log(resp)
        })
        .catch(err => {
          alert(err);
        })
      }
    },

    created: function() {
      console.log("AAAA")
      this.getThread()
    },

    beforeDestroy: function() {
      localStorage.updates = JSON.stringify({})
    }

  }
</script>

<style scoped>
.v-icon {
    background-color: transparent;
}

.v-textarea {
  position: relative;
  padding-bottom: 50px;
}

 #updateCard {
   width: 70%
 }

 #commentsListId {
   width: 30%
 }

@media screen and (max-width: 850px) {
 #vContainer {
   flex-direction: column;
 }

 #updateCard {
   width: 100%
 }

 #commentsListId {
   width: 100%
 }
}


</style>