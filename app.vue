<script setup lang="ts">
const { status, signIn, data, signOut } = useAuth();

const username = ref("");
const password = ref("");

const handleLogin = () => {
  signIn({
    name: username.value,
    pass: password.value,
  });
};
</script>

<template>
  <div>
    <h1>You are currently {{ status }}.</h1>

    <p>{{ data }}</p>

    <div>
      <template v-if="status === 'authenticated'">
        <button @click="signOut()">Sign Out</button>
      </template>
      <template v-else>
        <form @submit.prevent="handleLogin">
          <input type="text" v-model="username" placeholder="ユーザ名" />
          <input type="password" v-model="password" placeholder="パスワード" />
          <button type="submit">Sign In</button>
        </form>
      </template>
    </div>
  </div>
</template>
