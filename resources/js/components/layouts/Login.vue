<template>
  <v-row align="center" justify="center" @keypress.enter.prevent="login">
    <v-col cols="12" sm="8" md="6">
      <v-card class="elevation-12 mt-5">
        <v-toolbar color="primary" dark flat>
          <v-toolbar-title>Вход</v-toolbar-title>
          <v-spacer />
        </v-toolbar>
        <v-progress-linear :active="processing" indeterminate height='5' color="red darken-1"></v-progress-linear>
        <v-card-text>
          <v-alert :value="error" type="warning">{{ error }}</v-alert>
          <v-form v-model="valid">
            <v-text-field v-model="user.email" 
              label="E-Mail" 
              name="login" 
              prepend-icon="person" 
              type="text" 
              required 
              :rules="erules"
            />
            <v-text-field v-model="user.password" 
              id="password" 
              label="Пароль" 
              name="password" 
              prepend-icon="lock"
              :append-icon="show ? 'mdi-eye' : 'mdi-eye-off'"
              :type="show ? 'text' : 'password'" 
              required 
              :rules="prules"
              @click:append="show = !show"
            />
          </v-form>
        </v-card-text>
        <v-card-actions>
          <v-spacer />
          <v-btn color="primary" @click.prevent="login" :disabled="processing || !valid">Войти</v-btn>
        </v-card-actions>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
export default {
  data: () => ({
      user: {
        email: null,
        password: null
      },
      valid: false,
      show: false,
      erules: [
        (v) => !!v || "Пожалуйста, введите email",
        (v) =>/^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$/.test(v) || "Неверный email"
      ],
      prules: [
        (v) => !!v || "Пожалуйста, введите пароль",
        (v) => (v && v.length >= 8) || "пароль слишком короткий - должен быть более 8 символов"
      ] 
  }),
  computed: {
    error() {
      return this.$store.getters.get_error;
    },
    processing() {
      return this.$store.getters.get_processing;
    },
    is_user_authenticated() {
      return this.$store.getters.is_user_authenticated;
    }
  },
  watch: {
    is_user_authenticated(value) {
      if (value === true) this.$router.push({ path: "/admin" });
    }
  },
  methods: {
    login() {
      this.$store.dispatch('login_user', this.user);
    }
  }
}
</script>

<style>
</style>