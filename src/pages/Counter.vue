<template>
  {{ counter }}
  <input type="number" v-model="counter" />
</template>

<script>
import { ref } from "vue";

export default {
  name: "Counter",

  setup() {
    const counter = ref(0);

    return {
      counter,
    };
  },
};
</script>
