<template>
  <nav class="navbar">
    <div class="logo">
      Sport-ify
    </div>
    <ul class="nav-list">
      <li><a href="/home" class="active">Home</a></li>
      <li><a href="/about">About</a></li>
      <li><router-link to="/contact">Contact</router-link></li>
    </ul>
  </nav>
</template>

<style scoped>
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background-color: #000;
  color: white;
  border-bottom: 2px solid #f1c40f;
}

.logo {
  font-size: 1.5rem;
  font-weight: bold;
}

.nav-list {
  list-style: none;
  display: flex;
  gap: 1.5rem;
  margin: 0;
  padding: 0;
}

.nav-list li a {
  color: white;
  text-decoration: none;
  font-weight: 500;
  transition: color 0.3s ease;
}

.nav-list li a:hover,
.nav-list li .active {
  color: #f1c40f;
  font-weight: bold;
}
</style>
