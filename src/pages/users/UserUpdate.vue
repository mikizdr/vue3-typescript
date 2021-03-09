<template>
  <form @submit.prevent="submit">
    <div class="mb-3">
      <label>First Name</label
      ><input
        type="text"
        class="form-control"
        name="first_name"
        v-model="user.first_name"
      />
    </div>
    <div class="mb-3">
      <label>Last Name</label
      ><input
        type="text"
        class="form-control"
        name="last_name"
        v-model="user.last_name"
      />
    </div>
    <div class="mb-3">
      <label>Email</label
      ><input
        type="text"
        class="form-control"
        name="email"
        v-model="user.email"
      />
    </div>
    <div class="mb-3">
      <label>Role</label>
      <select name="role_id" class="form-control" v-model="user.role_id">
        <option v-for="role in roles" :key="role.id" :value="role.id">{{
          role.name
        }}</option>
      </select>
    </div>
    <button class="btn btn-sm btn-outline-danger">Update</button>
  </form>
</template>

<script lang="ts">
import { defineComponent, onMounted, reactive, ref } from "vue";
import axios from "axios";
import { useRouter, useRoute } from "vue-router";

export default defineComponent({
  name: "UserUpdate",

  setup() {
    const user = reactive({
      first_name: "",
      last_name: "",
      email: "",
      role_id: null,
    });
    const roles = ref([]);
    const router = useRouter();
    const route = useRoute();
    const url = `users/${route.params.id}`;

    onMounted(async () => {
      const getRoles = await axios.get("roles");
      roles.value = getRoles.data;

      const getUser = await axios.get(url);
      user.first_name = getUser.data.first_name;
      user.last_name = getUser.data.last_name;
      user.email = getUser.data.email;
      user.role_id = getUser.data.role.id;
    });

    const submit = async () => {
      await axios.put(url, user);
      await router.push("/users");
    };

    return { roles, submit, user };
  },
});
</script>
