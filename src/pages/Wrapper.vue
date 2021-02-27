<template>
  <Header />

  <div class="container-fluid">
    <div class="row">
      <Nav />

      <main class="col-md-9 ms-sm-auto col-lg-10 px-md-4">
        <router-view />
      </main>
    </div>
  </div>
</template>

<script>
import Nav from "@/components/Nav";
import Header from "@/components/Header";

export default {
  name: "Wrapper",

  components: {
    Nav,
    Header,
  },
};
</script>
