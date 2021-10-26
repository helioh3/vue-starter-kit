<template>
  <body class="bg-gray-800">
    <div style="height: 300px">
      <LoginMenu />
      <div v-if="response.message" class="alert alert-error mb-2">
        <div class="flex-1">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            class="w-6 h-6 mx-2 stroke-current"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636"
            ></path>
          </svg>
          <label>{{ response.message }}</label>
        </div>
      </div>
      <ValidationObserver
        ref="loginForm"
        tag="form"
        @submit.stop.prevent="login()"
      >
        <div class="grid gap-2 boyd">
          <ValidationProvider
            v-slot="{ errors }"
            rules="required|email"
            name="E-mail"
          >
            <input
              v-model="email"
              type="text"
              placeholder="Digite seu e-mail"
              class="bg-gray-900 placeholder-gray-700 text-gray-500 font-light border border-gray-900 focus:outline-none focus:border-blue-800 rounded-lg py-3 px-4 block w-full appearance-none leading-normal"
            />
            <div v-if="!!errors[0]" class="text-red-500 text-sm mb-2">
              {{ errors[0] }}
            </div>
          </ValidationProvider>

          <ValidationProvider v-slot="{ errors }" rules="required" name="Senha">
            <input
              v-model="password"
              type="password"
              placeholder="Digite sua senha"
              class="bg-gray-900 placeholder-gray-700 text-gray-500 font-light border border-gray-900 focus:outline-none focus:border-blue-800 rounded-lg py-3 px-4 block w-full appearance-none leading-normal"
            />

            <div v-if="!!errors[0]" class="text-red-500 text-sm mb-2">
              {{ errors[0] }}
            </div>
          </ValidationProvider>

          <button
            type="submit"
            :desabled="spinner.login"
            class="flex items-center justify-center bg-blue-800 text-blue-200 font-medium text-sm focus:outline-none rounded-lg py-3 px-4 w-full appearance-none leading-normal"
          >
            <img
              v-if="spinner.login"
              src="@/assets/img/spinner.svg"
              alt=""
              class="w-5 h-5 mr-2"
            />
            ENTRAR
          </button>

          <div class="my-4 text-center">
            <RouterLink
              :to="{ name: 'forgotPassword' }"
              class="text-sm font-light text-gray-400"
            >
              Esqueci minha senha
            </RouterLink>
          </div>
        </div>
      </ValidationObserver>
    </div>
  </body>
</template>
<script>
import Cookies from 'js-cookie';
import LoginMenu from '@/components/Auth/LoginMenu';
import { ValidationObserver, ValidationProvider } from 'vee-validate';
import message from '@/utils/messeges';

export default {
  name: 'login',

  components: {
    ValidationObserver,
    ValidationProvider,
    LoginMenu
  },

  data() {
    return {
      email: '',
      password: '',
      response: {
        color: '',
        message: ''
      },
      spinner: {
        login: false
      }
    };
  },

  methods: {
    async login() {
      const validator = await this.$refs.loginForm.validate();
      if (!validator) {
        return;
      }

      const payload = {
        email: this.email,
        password: this.password
      };

      this.resetResponse();

      this.spinner.login = true;

      this.$axios
        .post('v1/login', payload)
        .then(response => {
          const token = `${response.data.token_type} ${response.data.access_token}`;
          Cookies.set('_epref_token', token, { expires: 30 });

          this.$store.commit('user/STORE_USER', response.data.data);
        })
        .catch(e => {
          this.spinner.login = false;

          const codeError = e?.response?.data?.error || 'MyServerError';
          this.response.color = 'red';
          this.response.message = message[codeError];
        });
    },

    resetResponse() {
      (this.response.color = ''), (this.response.message = '');
    }
  }
};
</script>
