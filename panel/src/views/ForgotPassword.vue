<template>
  <div>
    <h3 class="py-2 mb-8 text-gray-500 text-lg font-medium text-center">
      Esqueci minha senha
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
      ref="forgotPasswordForm"
      tag="form"
      @submit.stop.prevent="forgotPassword()"
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

        <button
          type="submit"
          class="flex items-center justify-center bg-blue-800 text-blue-200 font-medium text-sm focus:outline-none rounded-lg py-3 px-4 w-full appearance-none leading-normal"
        >
          <img
            v-if="spinner.forgot_password"
            src="@/assets/img/spinner.svg"
            alt=""
            class="w-5 h-5 mr-2"
          />

          RECUPERAR SENHA
        </button>

        <div class="my-4 text-center">
          <RouterLink
            :to="{ name: 'login' }"
            class="text-sm font-light text-gray-200"
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
  components: {
    ValidationObserver,
    ValidationProvider
  },

  data() {
    return {
      email: '',
      response: {
        type: '',
        message: ''
      },
      spinner: {
        forgot_password: false
      }
    };
  },

  methods: {
    async forgotPassword() {
      const validator = await this.$refs.forgotPasswordForm.validate();
      if (!validator) {
        return;
      }

      this.resetResponse();

      const payload = {
        email: this.email
      };

      this.spinner.forgot_password = true;

      this.$axios
        .post('v1/forgot-password', payload)
        .then(() => {
          this.response.message =
            'Senha alterada com sucesso.';
        })
        .catch(e => {
          const codeError = e?.response?.data?.error || 'ServerError';
          this.response.type = 'alert-warning';
          this.response.message = message[codeError];

          this.resetForm();
        })
        .finally(() => {
          this.spinner.forgot_password = false;
        });
    },
    resetResponse() {
      this.response.color = '';
      this.response.message = '';
    },

    resetForm() {
      this.$refs.forgotPasswordForm.reset();
      this.email = '';
    }
  }
};
</script>
