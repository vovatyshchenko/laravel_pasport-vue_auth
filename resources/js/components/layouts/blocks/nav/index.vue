<template>
    <div>
        <v-navigation-drawer
            v-model="drawer"
            app
            :fixed="true"
            temporary
            class="hidden-md-and-up"
        >
            <v-list-item>
                <v-list-item-content>
                    <v-list-item-title>ToDo LIST</v-list-item-title>
                </v-list-item-content>
            </v-list-item>
            <v-divider></v-divider>
            <v-list dense>
                <v-list-item link 
                    v-for="(item, index) in nav_items"
                    :key="index"
                    :to="item.route"
                >
                    <v-list-item-action>
                        <v-icon>{{ item.icon }}</v-icon>
                    </v-list-item-action>
                    <v-list-item-content>
                        <v-list-item-title>{{ item.title }}</v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
            </v-list>
            <v-list dense>
                <v-list-item link @click.stop="logout()" v-if="is_user_authenticated">
                    <v-list-item-action>
                        <v-icon>mdi-power</v-icon>
                    </v-list-item-action>
                    <v-list-item-content>
                        <v-list-item-title>Выйти</v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
            </v-list>
        </v-navigation-drawer>
        <v-app-bar
            app
            color="primary"
            dark
        >
            <v-app-bar-nav-icon
                @click.stop="drawer = !drawer"
                class="hidden-md-and-up"
            />
            <v-toolbar-title>ToDo LIST</v-toolbar-title>
            <v-spacer></v-spacer>
            <v-btn text v-for="(item, index) in nav_items"
                :key="index"
                :to="item.route"
                class="hidden-sm-and-down"
            >
                <v-icon>{{ item.icon }}</v-icon>
                {{ item.title }}
            </v-btn>
            <v-btn text
                class="hidden-sm-and-down"
                @click.stop="logout()"
                v-if="is_user_authenticated"
              >
              <v-icon>mdi-power</v-icon>
              Выйти
              </v-btn>
        </v-app-bar>
    </div>
</template>

<script>
  export default {
    data: () => ({
      drawer: false,
    }),
    methods: {
      logout() {
        this.$store.dispatch('logout_user');
        this.$router.push({ path: "/login" });
      }
    },
    computed: {
       is_user_authenticated() {
        return this.$store.getters.is_user_authenticated;
      },
      nav_items() {
        return this.is_user_authenticated ? [
          {
            icon: 'mdi-home',
            title: 'Домашняя страница',
            route: '/'
          },
          {
            icon: 'mdi-mail',
            title: 'Админка',
            route: '/admin'
          }
        ]:
        [
          {
            icon: 'mdi-home',
            title: 'Домашняя страница',
            route: '/'
          },
          {
            icon: 'mdi-mail',
            title: 'Войти',
            route: '/login'
          }
        ];
      }
    },
  }
</script>

<style>

</style>