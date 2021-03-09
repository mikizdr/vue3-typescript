<template>
  <main class="form-signin">
    <form @submit.prevent="submit">
      <h1 class="h3 mb-3 fw-normal">Please register yourself</h1>
      <label for="inputFirstName" class="visually-hidden">First name</label>
      <input
        v-model="firstName"
        type="text"
        id="inputFirstName"
        class="form-control"
        placeholder="First name"
        required
        autofocus
      />
      <label for="inputLastName" class="visually-hidden">Last name</label>
      <input
        v-model="lastName"
        type="text"
        id="inputLastName"
        class="form-control"
        placeholder="Last name"
        required
      />
      <label for="inputEmail" class="visually-hidden">Email address</label>
      <input
        v-model="email"
        type="email"
        id="inputEmail"
        class="form-control"
        placeholder="Email address"
        required
      />
      <label for="inputPassword" class="visually-hidden">Password</label>
      <input
        v-model="password"
        type="password"
        id="inputPassword"
        class="form-control"
        placeholder="Password"
        required
      />
      <label for="inputPasswordConfirm" class="visually-hidden"
        >Confirm Password</label
      >
      <input
        v-model="passwordConfirm"
        type="password"
        id="inputPasswordConfirm"
        class="form-control"
        placeholder="Confirm Password"
        required
      />
      <button class="w-100 btn btn-lg btn-primary" type="submit">
        Submit
      </button>
    </form>
  </main>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import axios from "axios";
import { useRouter } from "vue-router";

export default defineComponent({
  name: "Register",

  setup() {
    const firstName = ref("");
    const lastName = ref("");
    const email = ref("");
    const password = ref("");
    const passwordConfirm = ref("");
    const router = useRouter();

    const submit = async () => {
      const user = {
        first_name: firstName.value,
        last_name: lastName.value,
        email: email.value,
        password: password.value,
        password_confirm: passwordConfirm.value,
      };

      await axios.post("register", user);

      await router.push("/login");
    };

    return { firstName, lastName, email, password, passwordConfirm, submit };
  },
});
</script>

<style scoped>
html,
body {
  height: 100%;
}

body {
  display: flex;
  align-items: center;
  padding-top: 40px;
  padding-bottom: 40px;
  background-color: #f5f5f5;
}

.form-signin {
  width: 100%;
  max-width: 330px;
  padding: 15px;
  margin: auto;
}
.form-signin .checkbox {
  font-weight: 400;
}
.form-signin .form-control {
  position: relative;
  box-sizing: border-box;
  height: auto;
  padding: 10px;
  font-size: 16px;
}
.form-signin .form-control:focus {
  z-index: 2;
}
.form-signin input[type="email"] {
  margin-bottom: -1px;
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 0;
}
.form-signin input[type="password"] {
  margin-bottom: 10px;
  border-top-left-radius: 0;
  border-top-right-radius: 0;
}
</style>
