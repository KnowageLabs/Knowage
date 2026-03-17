<template>
  <div>
    <AnnouncementBanner />
    <AppHeader />
    <UMain>
      <slot />
    </UMain>
    <AppFooter />
  </div>
</template>

<script setup lang="ts">
// AnnouncementBanner is placed in app/components and auto-registered by Nuxt
const config = useRuntimeConfig()
const siteUrl = String(config.public?.siteUrl || '/').replace(/\/$/, '')
// Use the background image the user mentioned
const ogImagePath = '/img/home/background-homepage.png'
// If siteUrl is an absolute URL (https://...), use it; otherwise use app.baseURL
const base = config?.app?.baseURL ?? '/'
const baseNormalized = base.endsWith('/') ? base.slice(0, -1) : base
// prefer absolute siteUrl when configured, fall back to app base
const ogImage = siteUrl && siteUrl !== '/' && siteUrl.startsWith('http') ? `${siteUrl}${ogImagePath}` : `${baseNormalized}${ogImagePath}`

useHead({
  title: 'Knowage — Knowage Labs',
  meta: [
    { name: 'description', content: 'Knowage — enterprise-ready data analytics and BI platform by Knowage Labs.' },
    // Open Graph
    { property: 'og:title', content: 'Knowage — Knowage Labs' },
    { property: 'og:description', content: 'Knowage — enterprise-ready data analytics and BI platform by Knowage Labs.' },
    { property: 'og:type', content: 'website' },
    { property: 'og:image', content: ogImage },
    { property: 'og:url', content: siteUrl },
    // Twitter Card
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:title', content: 'Knowage — Knowage Labs' },
    { name: 'twitter:description', content: 'Knowage — enterprise-ready data analytics and BI platform by Knowage Labs.' },
    { name: 'twitter:image', content: ogImage }
  ],
  link: [
    { rel: 'canonical', href: siteUrl }
  ]
})
</script>
