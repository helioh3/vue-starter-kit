<template>
  <div>
    <h3 class="py-2 mb-8 text-gray-500 text-lg font-medium text-center">
      Recuperar senha
    </h3>
    <div v-if="response.message" :class="`alert ${response.type} mb-2`">
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
            d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
          ></path>
        </svg>
        <label>{{ response.message }}</label>
      </div>
    </div>
    <ValidationObserver
      ref="resetPasswordForm"
      tag="form"
      @submit.stop.prevent="resetPassword()"
    >
      <div class="grid gap-2">
        <ValidationProvider
          v-slot="{ errors }"
          rules="required|email"
          name="E-mail"
        >
          <input
            v-model="email"
            type="email"
            placeholder="Digite seu e-mail"
            class="bg-gray-900 placeholder-gray-700 text-gray-500 font-light border border-gray-900 focus:outline-none focus:border-blue-800 rounded-lg py-3 px-4 block w-full appearance-none leading-normal"
          />

          <div v-if="!!errors[0]" class="text-red-500 text-sm mb-2">
            {{ errors[0] }}
          </div>
        </ValidationProvider>

        <ValidationProvider
          v-slot="{ errors }"
          :rules="{
            required: true
          }"
          name="Senha"
        >
          <input
            v-model="password "
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
          class="flex items-center justify-center bg-blue-800 text-blue-200 font-medium text-sm focus:outline-none rounded-lg py-3 px-4 w-full appearance-none leading-normal"
        >
          <img
            v-if="spinner.reset_password"
            src="@/assets/img/spinner.svg"
            alt=""
            class="w-5 h-5 mr-2"
          />

          ALETRAR SENHA
        </button>

        <div class="my-4 text-center">
          <RouterLink
            :to="{ name: 'login' }"
            class="text-sm font-light text-gray-300"
          >
            Login
          </RouterLink>
        </div>
      </div>
    </ValidationObserver>
  </div>
</template>

<script>
import { ValidationObserver, ValidationProvider } from 'vee-validate';
import message from '../utils/messeges';
export default {
  name: 'ResetPassword',

  components: {
    ValidationObserver,
    ValidationProvider
  },

  data() {
    return {
      email: '',
      password: '',
      token: '',
      response: {
        type: '',
        message: ''
      },
      spinner: {
        reset_password: false
      }
    };
  },

  beforeRouteEnter(to, from, next) {
    if (!to?.query?.token) {
      next({ name: 'login' });
    }

    next();
  },

  created() {
    this.token = this.$route?.query?.token || '';
  },

  methods: {
    async resetPassword() {
      const validator = await this.$refs.resetPasswordForm.validate();
      if (!validator) {
        return;
      }

      this.resetResponse();

      const payload = {
        email: this.email,
        password: this.password,
        token: this.token
      };

      this.spinner.reset_password = true;

      this.$axios
        .post('v1/reset-password', payload)
        .then(() => {
          this.response.message = 'Senha alterada com sucesso!';

          this.resetForm();
        })
        .catch(e => {
          const errorCode = e?.response?.data?.error || 'ServerError';
          this.response.type = 'red';
          this.response.message = message[errorCode];
        })
        .finally(() => {
          this.spinner.reset_password = false;
        });
    },
    resetResponse() {
      this.response.color = '';
      this.response.message = '';
    },

    resetForm() {
      this.$refs.resetPasswordForm.reset();
      this.email = '';
      this.password = '';
      this.token = '';
    }
  }
};
</script>
