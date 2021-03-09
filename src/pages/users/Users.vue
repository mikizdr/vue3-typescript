<template>
  <div class="table-responsive">
    <table class="table table-striped table-sm">
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Email</th>
          <th>Role</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="user in users" :key="user.id">
          <td>{{ user.id }}</td>
          <td>{{ user.first_name }} {{ user.last_name }}</td>
          <td>{{ user.email }}</td>
          <td>{{ user.role.name }}</td>
          <td>
            <div class="btn-group mr-2">
              <button
                class="btn btn-sm btn-outline-secondary"
                @click="deleteUser(user.id)"
              >
                Delete
              </button>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  </div>

  <nav>
    <ul class="pagination">
      <li class="page-item">
        <a href="javascript:void(0)" class="page-link" @click="prev"
          >Previous</a
        >
      </li>
      <li class="page-item">
        <a href="javascript:void(0)" class="page-link" @click="next">Next</a>
      </li>
    </ul>
  </nav>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref, watch } from "vue";
import axios from "axios";
import { User } from "@/interfaces/User";

export default defineComponent({
  name: "Users",

  setup() {
    const users = ref([]);
    const page = ref(1);
    const lastPage = ref(1);

    const loadUsers = async (): Promise<void> => {
      const { data } = await axios.get(`users?page=${page.value}`);
      users.value = data.data;
      lastPage.value = data.meta.last_page;
    };

    const deleteUser = async (id: number): Promise<void> => {
      if (confirm("Are you sure you want to delete the user?")) {
        await axios.delete(`users/${id}`);
        users.value = users.value.filter((user: User) => user.id !== id);
      }
    };

    watch(page, loadUsers);

    onMounted(loadUsers);

    const next = () => {
      if (page.value === lastPage.value) return;
      page.value++;
    };

    const prev = () => {
      if (page.value === 1) return;
      page.value--;
    };

    return { users, next, prev, deleteUser };
  },
});
</script>
