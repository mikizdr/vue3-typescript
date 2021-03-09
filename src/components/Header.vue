<template>
  <header
    class="navbar navbar-dark sticky-top bg-dark flex-md-nowrap p-0 shadow"
  >
    <a class="navbar-brand col-md-3 col-lg-2 me-0 px-3" href="#"
      >Company name</a
    >
    <nav class="my-2 my-md-0 mr-md-3">
      <router-link
        to="/profile"
        class="nav-p-2 text-white text-decoration-none"
        >{{ name }}</router-link
      >
      <a class="nav-p-2 text-white text-decoration-none" href="#">Sign out</a>
    </nav>
  </header>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from "vue";
import axios from "axios";

export default defineComponent({
  name: "Header",

  setup() {
    const name = ref("");
    onMounted(async () => {
      const { data } = await axios.get("user");
      name.value = `${data.first_name} ${data.last_name}`;
    });

    return { name };
  },
});
</script>
