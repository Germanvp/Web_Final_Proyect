<template>
  <v-row justify="center">
    <v-dialog v-model="dialog" persistent max-width="600px">
      <template v-slot:activator="{ on }">
            <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn
                color="green darken-1"
                text
                v-on="on"
                >
                Post Update
                </v-btn>
            </v-card-actions>
      </template>
      <v-card>
        <v-card-title>
          <span class="headline">New Update</span>
        </v-card-title>
        <v-card-text>
          <v-container>
            <v-row>
                <v-text-field
                    v-model= "img_src"
                    label="Image Src"
                ></v-text-field>
            </v-row>
            <v-row>
                <v-col class="d-flex">
                    <v-textarea
                        label="Description"
                        v-model="description"
                        auto-grow
                        outlined
                        rows="4"
                        row-height="25"
                        shaped
                        ></v-textarea>   
                </v-col>
            </v-row>
          </v-container>
          <small>*indicates required field</small>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue darken-1" text @click="dialog = false">Close</v-btn>
          <v-btn color="blue darken-1" text @click="createUpdate()">Save</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script>
import ThreadService from '@/services/ThreadService'

export default {
    props: ['thread'],
    data: () => ({
      dialog: false,
      description: "",
      img_src: ""
    }),
    methods: {
        async createUpdate() {
            const update = {
                description: this.description,
                img_src: this.img_src,
                userName: localStorage.name,
                user_id: localStorage.user_id
            }

            const data = {
              update: update,
              headers: {
                uid: localStorage.user_id
              }
            }

            console.log(data)

            let resp = await ThreadService.updateThread(this.thread, data)
            .then(resp => {
              alert(resp);
            })
            .catch(err => {
              alert(err);
            });
            console.log(resp);

            this.dialog = false;
        }
    }
  }
</script>
