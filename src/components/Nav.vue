<template>
  <nav
    id="sidebarMenu"
    class="col-md-3 col-lg-2 d-md-block bg-light sidebar collapse"
  >
    <div class="position-sticky pt-3">
      <ul class="nav flex-column">
        <li class="nav-item">
          <router-link to="/" class="nav-link" active-class="active">
            Dashboard
          </router-link>
        </li>

        <li class="nav-item">
          <router-link to="/users" class="nav-link" active-class="active">
            Users
          </router-link>
        </li>

        <li class="nav-item">
          <router-link to="/counter" class="nav-link" active-class="active">
            Counter
          </router-link>
        </li>
      </ul>
    </div>
  </nav>
</template>
