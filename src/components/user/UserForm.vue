<template>
  <form>
    <!-- <label for="name">Nome</label>
    <input type="text" name="name" id="name" v-model="name" />
    <label for="email">Email</label>
    <input type="email" name="email" id="email" v-model="email" />
    <label for="password">Password</label>
    <input type="password" name="password" id="password" v-model="password" />-->
    <label for="zipCode">CEP</label>
    <input
      type="text"
      name="zipCode"
      id="zipCode"
      v-model="zipCode"
      v-mask="'#####-###'"
      @keyup="getAddress"
    />
    <!-- <label for="street">Logradouro</label>
    <input type="text" name="street" id="street" v-model="street" />
    <label for="number">Número</label>
    <input type="text" name="number" id="number" v-model="number" />
    <label for="complement">Complemento</label>
    <input type="text" name="complement" id="complement" v-model="complement" />
    <label for="neighborhood">Bairro</label>
    <input type="text" name="neighborhood" id="neighborhood" v-model="neighborhood" />
    <label for="city">CIdade</label>
    <input type="text" name="city" id="city" v-model="city" />
    <label for="state">Estado</label>
    <select name="state" id="state">
      <option value>Selecione</option>
    </select>-->
  </form>
</template>

<script>
import { mask } from "vue-the-mask";
import { getAddress } from "@/services/api";
export default {
  name: "UserForm",
  directives: { mask },
  data() {
    return {
      zipCode: ""
    };
  },
  methods: {
    getAddress() {
      let zip = this.zipCode.replace(/\D/g, "");
      if (zip.length === 8) {
        getAddress(zip).then(response => {
          console.log(response);
        });
      }
    }
  }
};
</script>

<style scoped lang="scss">
form {
  display: grid;
  grid-template-columns: auto 1fr;
  grid-gap: 5px 10px;
  align-items: center;
}
</style>