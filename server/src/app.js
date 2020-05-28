const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')
const admin = require("firebase-admin");
const firebase = require('firebase');
const auth = require("firebase/auth");
const firebaseConfig = require('./firebaseConfig')
const app = express()
app.use(morgan('combine'))
app.use(bodyParser.json())
app.use(cors())

// Server Endpoints
app.post('/register', (req, res) => {
    // Crear usuario.
    console.log(req.body)
    admin.auth().createUser({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
        is_active: true,
        date_joined: Date.now()
    }).then((status) => {
        console.log(status['uid'])
        admin.auth().setCustomUserClaims(status['uid'], {name: req.body.name})
        .then (resp => {
            res.status(200)
            res.send({
                name: req.body.name,
                uid: status["uid"],
            })
        })
        .catch(err => {
            console.log(err);
        })
    }).catch((err) => {
        res.status(400)
        res.send({
            message: err,
            statusCode: 400,
        })
    })
 })
  
// Login Endpoint
app.post('/login', (req, res) => {
    const promise = firebase.auth().signInWithEmailAndPassword(req.body.email, req.body.password)
    .then((user) => {
        admin.auth().getUser(user.user.uid).then((userRecord) => {
            // The claims can be accessed on the user record.
            console.log(userRecord)
            res.status(200)
            return res.send({
                name: userRecord.customClaims.name,
                uid: user.user.uid,
            }).end()
        });
    }).catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    if (errorCode === 'auth/wrong-password') {
    } else {
    console.log(errorMessage);
    }
    })
})
  
app.get('/global_goals', (req, res) => {
    var ref = this.db.collection('goals')

    ref.where("is_public", "==", true).get()
    .then(snapshot => {
        if (snapshot.empty){
            res.message = "Empty goals"
            console.log("Empty")
        }
        var goals = []
        snapshot.forEach((goal) => {
            goals.push(goal.data())
        })

        res.json(goals)
        return res.status(200).end()
    })

    .catch(err => {
        res.status(400)
        return res.end()
    })
})

app.get('/goals', (req, res) => {
    var ref = this.db.collection('goals')
    const uid = req.headers.uid;
    console.log(req.headers.uid)
    ref.where("user_ref", "array-contains", uid).get()
    .then(snapshot => {
        if (snapshot.empty){
            res.message = "Empty goals"
            console.log("Empty")
        }
        var goals = []
        snapshot.forEach((goal) => {
            var goal_data = goal.data()
            goal_data.id = goal.id
            goals.push(goal_data)
        })

        res.json(goals)
        return res.status(200).end()
    })

    .catch(err => {
        res.status(400)
        return res.end()
    })
})

app.get('/notifications', (req, res) => {
    var ref = this.db.collection('notifications')
    const uid = req.headers.uid;
    console.log("UID",req.headers.uid)
    
    ref.where("userTo", "==", uid).where("is_approved", "==", false).get()
    .then(snapshot => {
        if (snapshot.empty){
            res.message = "Empty notifications"
            console.log("Empty")
        }
        var notifications = []
        snapshot.forEach((noti) => {
            var noti_data = noti.data()
            noti_data.id = noti.id
            notifications.push(noti_data)
        })

        res.json(notifications)
        return res.status(200).end()
    })

    .catch(err => {
        res.status(400)
        return res.end()
    })
})

app.delete('/goals/:id', (req, res) => {
    let param_id = req.params.id
    let goal_ref = this.db.collection('goals').doc(param_id)
    let uid = req.headers.uid

    console.log("prd",uid)
    goal_ref.get().then(doc => {
        if(!doc.exists) {
            res.status(404)
            return res.end()
        }

        console.log(doc.data().user_ref)
        if(doc.data().user_ref.includes(uid)) {
            goal_ref.delete()
            .then(() => {
                res.status(202)
                return res.end()
            })
            .catch(err => {
                res.status(400)
                return res.end()
            })
        } else {
            res.status(405)
            return res.end()
        }

    })
})
app.post('/goals', (req, res) => {
    const uid = req.headers.uid;
    console.log(req.body)

    if (!req.body.name || !req.body.description) {
        res.status(406)
        return res.end()
    }
    
    if (req.body.team_ref != undefined && req.body.team_ref != ''){
        let team = this.db.collection('teams').doc(req.body.team_ref)
        .get().then(doc => {
            if (!doc.exists) {

            }
            if (doc.data().users_ref.includes(req.body.user_ref)) {
                var goal = {
                    name : req.body.name,
                    teamName : req.body.teamName,
                    end : req.body.end,
                    start : Date.now(),
                    description : req.body.description,
                    team_ref : req.body.team_ref,
                    teamName : req.body.teamName,
                    is_public : req.body.is_public,
                    is_complete: false,
                    userName : req.body.userName,
                    user_ref : doc.data().users_ref
                }

                // Add thread to goal
                let thread = this.db.collection('threads').add({
                    updates: [],
                }).then(ref => {
                    console.log(ref)
                    goal.thread_ref = ref.id
                    console.log("a", goal)
                    let new_goal = this.db.collection('goals').add(goal)
                    .then(ref => {
                        console.log("a", ref)
                        res.status(200)
                        res.json(ref)
                        return res.end()
                    })
                    .catch(err => {
                        console.log("a", err)
                        res.json(err)
                        res.status(400)
                        return res.end()
                    })
                    console.log('Added document with ID: ', ref.id);
                })
                .catch(err => {
                    res.json(err)
                    res.status(400)
                    return res.end()
                })
            }
        }).catch(err => {
            res.message ="No team"
            res.json(err)
            res.status(400)
            return res.end()
        })
    } else {
        var goal = {
            name : req.body.name,
            teamName : req.body.teamName,
            end : req.body.end,
            start : Date.now(),
            description : req.body.description,
            team_ref : req.body.team_ref,
            teamName : req.body.teamName,
            is_public : req.body.is_public,
            is_complete: false,
            userName : req.body.userName,
            user_ref : [req.body.user_ref]
        }
    
        // Add thread to goal
        let thread = this.db.collection('threads').add({
            updates: [],
          }).then(ref => {
            console.log(ref)
            goal.thread_ref = ref.id
            console.log("a", goal)
            let new_goal = this.db.collection('goals').add(goal)
            .then(ref => {
                console.log("a", ref)
                res.status(200)
                res.json(ref)
                return res.end()
            })
            .catch(err => {
                console.log("a", err)
                res.json(err)
                res.status(400)
                return res.end()
            })
            console.log('Added document with ID: ', ref.id);
        })
        .catch(err => {
            res.json(err)
            res.status(400)
            return res.end()
        })
    
    }
})

app.patch('/notifications/:id', (req, res) => {
    let param_id = req.params.id
    let uid = req.body.headers.uid

    console.log(uid)
    console.log(req.body)
    console.log("UID", uid)

    let notification_ref = this.db.collection('notifications').doc(param_id)
    console.log(param_id)
    notification_ref.get().then(doc => {
        if(!doc.exists){
            res.status(404)
            return res.end()
        }

        notification_ref.update({is_approved: true})
        .then (() => {
            if (doc.data().userTo == uid){
                let comment = doc.data().comment_id
                this.db.collection('comments').doc(comment)
                .update({is_approved: true})
                .then(() => {
                    res.status(202)
                    return res.end()
                })
                .catch(err => {
                    res.status(400)
                    return res.end()
                })
            } else {
                res.status(405)
                return res.end()
            }
        })
        .catch(err => {
            res.status(400)
            return res.end()
        })
    })
})
app.patch('/goals/:id', (req, res) => {
    let param_id = req.params.id
    let uid = req.body.headers.uid

    console.log(uid)
    console.log(req.body)
    console.log("UID", uid)
    let goal_ref = this.db.collection('goals').doc(param_id)
    console.log(param_id)
    goal_ref.get().then(doc => {
        if(!doc.exists){
            res.status(404)
            return res.end()
        }

        if (doc.data().user_ref.includes(uid)){
            goal_ref.update({is_complete: true, completedDate: Date.now()})
            .then(() => {
                res.status(202)
                return res.end()
            })
            .catch(err => {
                res.status(400)
                return res.end()
            })
        } else {
            res.status(405)
            return res.end()
        }
    })

})

app.get('/thread/:id', (req, res) => {
    let param_id = req.params.id
    let thread_ref = this.db.collection('threads').doc(param_id)
    
    console.log(param_id)
    console.log("ADNDW")
    thread_ref.get().then(doc => {
        if (!doc.exists){
            res.message = "No Thread"
            return res.status(404).end()
        }

        console.log(doc.data())
        res.json(doc.data())
        return res.status(200).end()
    })

    .catch(err => {
        res.status(400)
        return res.end()
    })
})

app.patch('/update/:id', (req, res) => {
    let param_id = req.params.id
    let update_ref = this.db.collection('updates').doc(param_id)
    let uid = req.body.user
    console.log(param_id)

    const comment = {
        date: req.body.date,
        text: req.body.text,
        user: req.body.user,
        userName: req.body.userName,
        is_approved: false,
    }
    
    this.db.collection('comments').add(comment)
    .then(ref => {
        // Once the comment is created add it to the update.
        update_ref.get()
        .then(doc => {
            if (!doc.exists){
                res.message = "No Update exists"
                return res.status(404).end()
            }
        
            //Once the comment is created, create a notification to the user
            const notification = {
                comment_text: req.body.text,
                comment_id: ref.id,
                userFrom: uid,
                userTo: doc.data().user,
                type: "Comment",
                is_approved: false,
            }

            console.log("Noti",notification);
            this.db.collection('notifications').add(notification)
            .then(() => {
                var update_comments = doc.data().comments
                update_comments.push(ref.id)
    
                // Update thread.
                update_ref.update({comments: update_comments});
    
                console.log(update_comments)
                return res.status(200).end()
            })
            .catch(err => {
                res.message = "Error sending notification update to User"
                res.status(400)
                return res.end()
            })
            
        })
        .catch(err => {
            res.message = "Error adding update to thread"
            res.status(400)
            return res.end()
        })
    })
    .catch(err => {


    })
    console.log(comment);

    return res.end()
})

app.patch('/thread/:id', (req, res) => {
    let param_id = req.params.id
    let uid = req.body.update.user_id

    const update = {
        comments: [],
        description: req.body.update.description,
        img: req.body.update.img_src,
        userName: req.body.update.userName,
        user: req.body.update.user_id
    }

    let thread_ref = this.db.collection('threads').doc(param_id)
    console.log("UID", uid)
    //Checks if user can patch this goal.
    this.db.collection('goals').where("thread_ref", "==", param_id).get()
    .then(snapshot => {
        if (snapshot.empty){
            res.message = "No goals"
            console.log("Empty")
        }


        snapshot.forEach((goal) => {
            console.log(goal.data())
            
            if (goal.data().user_ref.includes(uid)) {
                belongsToUser = true;
                this.db.collection('updates').add(update)
                .then(ref => {
                    console.log("B", ref);
                    thread_ref.get()
                    .then(doc => {
                        if (!doc.exists){
                            res.message = "No Thread"
                            return res.status(404).end()
                        }
                        
                        var thread_updates = doc.data().updates
                        thread_updates.push(ref.id)
            
                        // Update thread.
                        thread_ref.update({updates: thread_updates});
            
                        console.log(thread_updates)
                        return res.status(200).end()
                    })
                    .catch(err => {
                        res.message = "Error adding update to thread"
                        res.status(400)
                        return res.end()
                    })
                })
                .catch(err => {
                    res.message = "Error creating update"
                    res.status(400)
                    return res.end()
                })
            } else {
                res.message = "User cannot create an update to this goal."
                res.status(405)
                return res.end()
            }
        })
    })
    .catch(err => {
        res.message = "Error adding update to thread"
        res.status(400)
        return res.end()
    })

})

app.get('/update/:id', (req, res) => {
    let param_id = req.params.id
    let update_ref = this.db.collection('updates').doc(param_id)
    
    console.log(param_id)

    update_ref.get().then(doc => {
        if (!doc.exists){
            res.message = "No Update exists"
            return res.status(404).end()
        }

        console.log(doc.data())
        res.json(doc.data())
        return res.status(200).end()
    })

    .catch(err => {
        res.status(400)
        return res.end()
    })
})

app.get('/comment/:id', (req, res) => {
    let param_id = req.params.id
    let comment_ref = this.db.collection('comments').doc(param_id)
    
    console.log(param_id)

    comment_ref.get().then(doc => {
        if (!doc.exists){
            res.message = "No Comment exists"
            return res.status(404).end()
        }

        if (!doc.data().is_approved) {
            return res.status(202).end()
        }

        console.log(doc.data())
        res.json(doc.data())
        return res.status(200).end()
    })

    .catch(err => {
        res.status(400)
        return res.json(err).end()
    })
})

app.get('/teams', (req, res) => {
    var ref = this.db.collection('teams')
    const uid = req.headers.uid

    console.log("QAQAQ", uid)
    ref.get()
    .then(snapshot => {
        if (snapshot.empty){
            res.message = "Empty teams"
            console.log("Empty")
        }
        var teams = []

        snapshot.forEach((team) => {
            console.log(team.data())
            
            if (team.data().users_ref.includes(uid)) {
                var team_data = team.data()
                team_data.id = team.id

                teams.push(team_data);
            }
            console.log(teams)
        })

        res.json(teams)
        return res.status(200).end()
    })

    .catch(err => {
        res.status(400)
        return res.end()
    })
})

app.post('/teams', (req, res) => {
    const uid = req.body.uid;

    console.log(uid, req.body)
    const team = {
        description: req.body.team.description,
        name: req.body.team.name,
        users_ref: req.body.team.users
    }

    console.log(team)
    this.db.collection('teams').add(team)
    .then(doc => {
        console.log("a", doc)
        res.status(201)
        res.json(doc)
        return res.end()
    })
    .catch(err => {
        res.json(err)
        res.status(400)
        return res.end()
    })
})

app.listen(process.env.PORT || 8081, () => {
    // Firebase integration.
    new Promise((resolve, reject) => {
        var serviceAccount = require("./web-final-76d71-firebase-adminsdk-ve33q-3ded03c18d.json");

        serviceAccount.private_key = process.env.ADMIN_API_KEY.replace(/\\n/g, '\n')
        serviceAccount.private_key_id = process.env.PRIVATE_KEY_ID

        console.log(serviceAccount)
        admin.initializeApp({
            credential: admin.credential.cert(serviceAccount),
            databaseURL: "https://web-final-76d71.firebaseio.com"
        });

        firebase.initializeApp(firebaseConfig);

        this.db = admin.firestore();
        console.log("Connected");
    })
    .catch( err => {
        console.log(err);
    })
}) 