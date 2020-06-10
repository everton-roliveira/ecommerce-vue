<template>
  <section class="login">
    <h1>Login</h1>
    <form action>
      <label for="email">Email</label>
      <input type="email" name="email" id="email" v-model="login.email" />
      <label for="password">Senha</label>
      <input type="password" name="password" id="password" v-model="login.password" />
      <button class="btn btn__big" @click.prevent="logInto">Logar</button>
    </form>
    <p class="lost-password">
      <a href="/" target="_blank">Perdeu a senha? Clique aqui.</a>
    </p>
    <CreateLogin />
  </section>
</template>

<script>
import CreateLogin from "@/components/login/CreateLogin";
export default {
  name: "Login",
  data() {
    return {
      login: {
        email: "",
        password: ""
      }
    };
  },
  components: {
    CreateLogin
  },
  methods: {
    logInto() {
      this.$store.dispatch("getUser", this.login.email);
      this.$router.push({ name: "user" });
    }
  }
};
</script>

<style scoped lang="scss">
.login {
  max-width: 500px;
  margin: 0 auto;
  padding: 0 20px;
  h1 {
    @include font-size(xx-max);
    text-align: center;
    margin: 40px 0 20px;
    color: color(brand, primary);
  }
  form {
    display: grid;
  }
  .lost-password {
    text-align: center;
    margin: 20px auto 0 auto;
    a:hover {
      transition-duration: 0.4s;
      color: color(brand, primary);
      text-decoration: underline;
    }
  }
  .btn {
    width: 100%;
    max-width: 300px;
    margin-left: auto;
    margin-right: auto;
  }
}
</style>