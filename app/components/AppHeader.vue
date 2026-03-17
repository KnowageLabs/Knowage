<script setup lang="ts">
const items = computed(() => [
  {
    label: 'Features',
    to: '/features'
  },
  {
    label: 'Editions',
    to: '/editions'
  },
  {
    label: 'Showcase',
    to: '/showcase'
  },
  {
    label: 'About Us',
    to: '/aboutus'
  }
])
</script>

<template>
  <UHeader>
    <template #left>
      <NuxtLink to="/" aria-label="Knowage — Home">
        <AppLogo class="h-10 w-auto shrink-0" aria-hidden="true" />
      </NuxtLink>
    </template>

    <UNavigationMenu
      :items="items"
      variant="link"
    />

    <template #right>
      <UColorModeButton class="cursor-pointer" />
      <UButton
        to="https://github.com/KnowageLabs/Knowage-Server"
        target="_blank"
        icon="i-simple-icons-github"
        aria-label="GitHub (opens in new tab)"
        color="neutral"
        variant="ghost"
      />
    </template>

    <template #body>
      <UNavigationMenu
        :items="items"
        orientation="vertical"
        class="-mx-2.5"
      />
    </template>
  </UHeader>
</template>
