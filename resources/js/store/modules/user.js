export default {
    state: {
        user: {   
            uid: null,
            name: null,
            email: null,
            is_authenticated: false
        }
    },
    mutations: {
        set_user(state, payload) {
            state.user.uid = payload.user.id;
            state.user.name = payload.user.name;
            state.user.email = payload.user.email;
            state.user.is_authenticated = true;
        },
        un_set_user(state) {
            state.user.uid = null;
            state.user.name = null;
            state.user.email = null;
            state.user.is_authenticated = false;
          },
    },
    actions: {
        login_user ({ commit }, user){
            commit("set_processing", true);
            axios.post('/api/user/login', {
                email: user.email,
                password: user.password
            })
            .then(responce => {
                commit("clear_error");
                commit("set_processing", false);
                commit("set_user", responce.data);
                if (responce.data.access_token){
                    localStorage.setItem('token', responce.data.access_token);
                    //localStorage.setItem('user', JSON.stringify(responce.data.user));

                }
            })
            .catch(error => {
                commit("set_processing", false);
                commit("set_error", error);
            })
        },
        logout_user ({ commit }){
            localStorage.removeItem('token');
            commit("un_set_user");

        },
        state_change({ commit, state }) {
            if (localStorage.hasOwnProperty('user')) {
                commit("set_user", state.user)
            } 
            else {
                commit("un_set_user");
            }
          }
    },
    getters:{
        is_user_authenticated: state => state.user.is_authenticated,
        user_info: state => state.user
    }
}