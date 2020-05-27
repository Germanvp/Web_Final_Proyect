import Api from '@/services/Api'

export default {
  getThread (thread_id, credentials) {
    return Api().get('thread/' + thread_id, credentials)
  },

  updateThread(thread_id, credentials) {
    return Api().patch('thread/' + thread_id, credentials)
  }
  
}
