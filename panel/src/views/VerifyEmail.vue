<template>
  <div>
    <p>verificar email de cadastro</p>
    <img
      v-if="spinner.register"
      src="@/assets/img/spinner.svg"
      alt=""
      class="w-5 h-5 mr-2"
    />

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
            d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          ></path>
        </svg>
        <label>{{ response.message }}</label>
      </div>
    </div>
  </div>
</template>
<script>
import message from '@/utils/messeges';

export default {
  name: 'VerifyEmail',

  beforeRouteEnter(to, from, next){
    if(!to?.query?.token){
      next({name: 'login'})
    }
    next()
  },

  created() {
    this.token = this.$route?.query?.token;
    this.verifyEmail();
  },

  data() {
    return {
      token: '',
      response: {
        type: '',
        message: ''
      },
      spinner: {
        verify_email: false
      }
    };
  },

  methods: {
    verifyEmail() {
      this.$axios
        .post('v1/verify-email', { token: this.token || '' })
        .then(() => {
          this.response.type = 'alert-success';
          this.response.message = 'E-email verificado com sucesso!';
        })
        .catch(e => {
          const codeError = e?.response?.data?.error || 'MyServerError';
          this.response.type = 'alert-warning';
          this.response.message = message[codeError];
        });
    }
  }
};
</script>
