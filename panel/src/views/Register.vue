<template>
  <div style="height: 300px">
    <LoginMenu />

    <div v-if="response.message" :class="`alert ${response.type} mb-2`">
      <div class="flex-1">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          class="w-6 h-6 mx-2 stroke-current"
        >
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"></path>
        </svg>
        <label>{{ response.message }}</label>
      </div>
    </div>
    <ValidationObserver
      ref="registerForm"
      tag="form"
      @submit.stop.prevent="register()"
    >
      <div class="grid gap-2">
        <div class="flex-1">
          <ValidationProvider
            v-slot="{ errors }"
            rules="required"
            name="Nome"
          >
            <input
              v-model="name"
              type="text"
              placeholder="Digite seu nome"
              class="bg-gray-900 placeholder-gray-700 text-gray-500 font-light border border-gray-900 focus:outline-none focus:border-blue-800 rounded-lg py-3 px-4 block w-full appearance-none leading-normal"
            />

            <div v-if="!!errors[0]" class="text-red-500 text-sm mb-2">
              {{ errors[0] }}
            </div>
          </ValidationProvider>
        </div>

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
          :disabled="spinner.register"
          class="flex items-center justify-center bg-blue-800 text-blue-200 font-medium text-sm focus:outline-none rounded-lg py-3 px-4 w-full appearance-none leading-normal"
        >
          <img
            v-if="spinner.register"
            src="@/assets/img/spinner.svg"
            alt=""
            class="w-5 h-5 mr-2"
          />

          SALVAR
        </button>
      </div>
    </ValidationObserver>
  </div>
</template>

<script>
import LoginMenu from '@/components/Auth/LoginMenu';
import { ValidationObserver, ValidationProvider } from 'vee-validate';
import message from '../utils/messeges';

export default {
  name: 'Register',
  components: {
    LoginMenu,
    ValidationProvider,
    ValidationObserver
  },
  data() {
    return {
      name: '',
      email: '',
      password: '',
      response: {
        type: '',
        message: ''
      },
      spinner: {
        register: false
      }
    };
  },

  methods: {
    async register() {
      const validator = await this.$refs.registerForm.validate();
      if (!validator) {
        return;
      }

      this.resetResponse();

      const payload = {
        name: this.name,
        email: this.email,
        password: this.password
      }

      this.spinner.register = true;

      this.$axios
        .post('v1/register', payload)
        .then(() => {
          this.response.type = 'alert-success'
          this.response.message = 'cadastro realizado com sucesso';

          this.resetForm();
        })
        .catch((e) => {
          const codeError = e?.response?.data?.error || 'MyServerError';
          this.response.type = 'alert-warning';
          this.response.message = message[codeError];
        })
        .finally(() => {
          this.spinner.register = false;
        });
    },

    resetResponse() {
      this.response.color = '';
      this.response.message = '';
    },

    resetForm() {
      this.$refs.registerForm.reset();
      this.name = '';
      this.email = '';
      this.password = '';
    }
  }
};
</script>
