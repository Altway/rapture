<template>
  <div>
    <h1>Home page</h1>
    ici {{ runtimeConfig.googleClientId }}
    la {{ runtimeConfig.public.apiBase }}
    <div id="googleButton"></div>
  </div>
</template>
<script lang="ts" setup>
/// <reference types='google.accounts' />
const runtimeConfig = useRuntimeConfig()

onMounted(() => {
   window.onload = () => {
    google.accounts.id.initialize({
      client_id: 'YOUR_CLIENT_ID',
      callback: handleCredentialResponse, //method to run after user clicks the Google sign in button
    });
    google.accounts.id.renderButton(
      document.getElementById("googleButton"),
      { theme: "outline", size: "large" } // customization attributes
    );
    google.accounts.id.prompt(); // also display the One Tap dialog
  }
})

const handleCredentialResponse = (response) => {
  // call your backend API here
  // the token can be accessed as: response.credential
}
</script>