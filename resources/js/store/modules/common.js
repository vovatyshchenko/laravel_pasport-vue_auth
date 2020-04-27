export default {
    state: {
        processing : false,
        error: null
    },
    mutations: {
        set_processing (state, payload) {
            state.processing = payload
        },
        set_error (state, payload) {
            state.error = payload
        },
        clear_error (state) {
            state.error = null
        }
    },
    getters: {
        get_processing: state => state.processing,
        get_error: state => state.error
    }
  }