<template>
  <div
    v-if="visible"
    class="bg-gradient-to-r from-primary-600 to-primary-500 text-white"
    role="region"
    aria-label="Knowage 9 announcement"
  >
    <div class="container mx-auto px-4 py-3 flex items-center justify-between gap-4">
      <div class="flex items-center gap-3">
        <svg
          class="w-8 h-8 flex-shrink-0"
          viewBox="0 0 24 24"
          fill="none"
          aria-hidden="true"
        >
          <path
            d="M12 2l2.6 5.26L20 9l-4 3.9L17 20l-5-2.6L7 20l1-7.1L4 9l5.4-1.74L12 2z"
            fill="currentColor"
          />
        </svg>
        <div>
          <p class="font-semibold">
            Knowage 9 is out — major release
          </p>
          <p class="text-sm opacity-90">
            Faster queries, modern UI, improved integrations. Check what's new.
          </p>
        </div>
      </div>

      <div class="flex items-center gap-3">
        <NuxtLink
          to="/v9"
          class="inline-flex items-center gap-2 bg-white text-primary-600 px-3 py-1.5 rounded-md font-medium shadow-sm hover:opacity-95"
        >
          Learn what's new
        </NuxtLink>
        <button
          aria-label="Dismiss announcement"
          class="text-white/90 hover:text-white"
          @click="dismiss"
        >
          <svg
            class="w-5 h-5"
            viewBox="0 0 24 24"
            fill="none"
            aria-hidden="true"
          >
            <path
              d="M6 6l12 12M6 18L18 6"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'

const KEY = 'announcement_v9_dismissed'
const visible = ref(true)

onMounted(() => {
  try {
    const stored = localStorage.getItem(KEY)
    if (stored === '1') visible.value = false
  } catch {
    // ignore localStorage errors
  }
})

function dismiss() {
  visible.value = false
  try {
    localStorage.setItem(KEY, '1')
  } catch {
    // ignore
  }
}
</script>

<style scoped>
/* restored to primary gradient style */
</style>
