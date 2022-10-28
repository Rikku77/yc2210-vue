<script lang="ts">
  /*
  const loginForm = document.getElementById("login-form");
  loginForm.addEventListener("submit", function(e) {
  e.preventDefault();
  let form = e.currentTarget;
  let url = form.action;
  const formData = new FormData(form);
  const data = Object.fromEntries(formData.entries());
  const jsonData = JSON.stringify(data);
  console.log(jsonData);
  let res = fetch(url, {
      method: "POST",
      headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
      },
      body: jsonData
  })
  console.log("submitted")
})
*/
</script>

<template>
  <main>
    <form id="login-form" method="post" action="http://localhost:8080/User">
        <div class="form-group">
            <label for="email">Email address</label>
            <input type="email" class="form-control" id="email" name="email" placeholder="Enter email">
        </div>
        <div class="form-group">
            <label for="password">Password</label>
            <input type="password" class="form-control" id="password" name="hashedPassword" placeholder="Password">
        </div>
        <button type="submit" class="btn btn-primary">login</button>
        <nav class="text-center">
          <RouterLink to="/register">Register</RouterLink>
        </nav>
    </form>
  </main>
</template>
