<template>
  <div class="app flex-row align-items-center">
    <div class="container">
      <b-row class="justify-content-center">
        <b-col md="8">
          <b-card-group>
            <b-card
              no-body
              class="p-4">
              <b-card-body>
                <h1>Login</h1>
                <p class="text-muted">Sign In to your account</p>
                <b-input-group class="mb-3">
                  <b-input-group-prepend><b-input-group-text><i class="icon-user"/></b-input-group-text></b-input-group-prepend>
                  <input v-model="email" type="text" class="form-control" placeholder="Email">
                </b-input-group>
                <b-input-group class="mb-4">
                  <b-input-group-prepend><b-input-group-text><i class="icon-lock"/></b-input-group-text></b-input-group-prepend>
                  <input v-model="password" type="password" class="form-control" placeholder="Password">
                </b-input-group>
                <b-row>
                  <b-col cols="6">
                    <b-button variant="primary" class="px-4" @click="Login">Login</b-button>
                  </b-col>
                  <b-col
                    cols="6"
                    class="text-right">
                    <b-button
                      variant="link"
                      class="px-0">Forgot password?</b-button>
                  </b-col>
                </b-row>
              </b-card-body>
            </b-card>
            <b-card
              no-body
              class="text-white bg-primary py-5 d-md-down-none"
              style="width:44%">
              <b-card-body class="text-center">
                <div>
                  <h2>Sign up</h2>
                  <p>Modern Test Case Management Software for QA and Development Teams.</p>
                  <b-button
                    variant="primary"
                    class="active mt-3">Register Now!</b-button>
                </div>
              </b-card-body>
            </b-card>
          </b-card-group>
        </b-col>
      </b-row>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Login',
  data() {
    return {
      email: '',
      password: ''
    };
  },
  methods: {
    Login() {
      this.$store.dispatch('handleLogin', { email: this.email, password: this.password })
        .then((response) => {
          this.$router.push({ name: 'Home' });
        });
    }
  }
};
</script>
