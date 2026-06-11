<template>
  <div
    class="card w-full max-w-sm bg-base-100 shadow-xl border border-base-200"
  >
    <div class="card-body gap-3">
      <div class="flex items-center justify-between">
        <h2 class="card-title text-xl font-bold text-base-content">
          {{ name }}
        </h2>
        <span
          class="badge px-3 py-2 text-xs font-semibold tracking-wide"
          :class="premium ? 'badge-primary' : 'badge-ghost'"
        >
          {{ premium ? "Premium" : "Standard" }}
        </span>
      </div>

      <div class="divider my-0 opacity-50"></div>

      <div class="space-y-2 text-sm text-base-content/80">
        <div class="flex items-center gap-2">
          <span
            class="text-xs font-mono bg-base-200 px-2 py-0.5 rounded text-base-content/60"
          >
            ID: {{ id }}
          </span>
        </div>

        <div class="flex items-center gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-4 w-4 text-primary"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M3 5a2 2 0 012-2h3.28a1 1 0 01.94.725l.548 2.2a1 1 0 01-.321.988l-1.305.98a10.582 10.582 0 004.872 4.872l.98-1.305a1 1 0 01.988-.321l2.2.548a1 1 0 01.725.94V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
            />
          </svg>
          <span>{{ phone }}</span>
        </div>

        <div class="flex items-center gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-4 w-4 text-primary"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
            />
          </svg>
          <span class="link link-hover text-secondary">{{ email }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  id: {
    String,
    required: true,
  },
  name: {
    String,
    required: true,
  },
  phone: String,
  email: String,
  premium: {
    Boolean,
    default: false,
  },
});
</script>

<style lang="css" scoped></style>
