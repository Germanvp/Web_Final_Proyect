import Api from '@/services/Api'

export default {
  getComment(comment_id, credentials) {
    return Api().get('comment/' + comment_id, credentials)
  },
  
}
