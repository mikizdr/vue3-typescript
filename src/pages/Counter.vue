<template>
  {{ counter }}
  <input type="number" v-model="counter" />
</template>

<script>
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "Counter",

  setup() {
    const counter = ref(0);

    return {
      counter,
    };
  },
});
</script>
