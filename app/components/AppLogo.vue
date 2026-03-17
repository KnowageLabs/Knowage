<script setup lang="ts">
defineOptions({ inheritAttrs: false })
const runtimeConfig = useRuntimeConfig()
const base = runtimeConfig?.app?.baseURL ?? '/'
const baseNormalized = base.endsWith('/') ? base.slice(0, -1) : base
</script>

<template>
  <img v-bind="$attrs" class="dark:hidden" :src="`${baseNormalized}/img/knowage-light.svg`" alt="Knowage" />
  <img v-bind="$attrs" class="hidden dark:block" :src="`${baseNormalized}/img/knowage-dark.svg`" alt="Knowage" />
</template>
