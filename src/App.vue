<script setup lang="ts">
import { ref } from 'vue';
import UserTable from './components/UserTable.vue';

const filter = ref<string>('');

const missingWebhook = !import.meta.env.VITE_DISCORD_WEBHOOK;

const tooManyTries = ref(false);

const isEisvanaHost = window.location.host === 'census.eisvana.com';
</script>

<template>
  <header class="header">
    <nav>
      <a :href="isEisvanaHost ? 'https://eisvana.com' : '..'">&larr; View other pages</a>
    </nav>
    <h1 class="title">Eisvana Census Renewal</h1>
  </header>

  <main>
    <p
      v-if="missingWebhook"
      class="warning"
    >
      No Webhook URL found, no message will be sent!
    </p>
    <template v-if="!tooManyTries">
      <input
        id="searchBar"
        name="searchBar"
        placeholder="Search Name"
        type="text"
        v-model="filter"
      />
      <UserTable
        :filter="filter"
        @exceeded="tooManyTries = true"
      />
    </template>
    <p
      v-else
      class="tries-exceeded-error"
    >
      You have requested too many renewals. Please contact Lenni on Discord for help.
    </p>
  </main>
</template>

<style scoped lang="scss">
.header {
  margin-block-start: 2rem;
}

.title {
  margin-block-end: 2rem;
  text-align: center;
}

.warning {
  background-color: red;
  color: white;
  border-radius: var(--pico-border-radius);
  padding: 0.5rem;
}

.tries-exceeded-error {
  text-align: center;
}
</style>
