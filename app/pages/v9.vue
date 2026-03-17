<template>
  <div>
    <UPageHero
      title="Knowage 9 — Major Release"
      description="A major step forward: redesigned UX, faster engines, enhanced integrations and more."
      :ui="{ container: 'flex flex-col lg:grid py-6 sm:py-8 lg:py-10 gap-16 sm:gap-y-24', title: 'text-3xl sm:text-4xl lg:text-5xl text-pretty tracking-tight font-bold text-highlighted' }"
    />

    <UPageSection class="py-12">
      <div class="container mx-auto px-4">
        <div class="grid grid-cols-1">
          <div>
            <!-- Aggressive rocket interface -->
            <div class="bg-black rounded-lg overflow-hidden shadow-lg text-white">
              <div class="relative flex items-center justify-center">
                <img
                  :src="`${baseNormalized}/img/v9/rocket.png`"
                  alt="Rocket"
                  class="w-full h-96 object-cover"
                >

                <div class="absolute inset-0 bg-black/60 flex items-center justify-center">
                  <div class="text-center px-6">
                    <h2 class="text-3xl font-extrabold tracking-wide">
                      Prepare for launch
                    </h2>
                    <p class="mt-2 text-lg opacity-90">
                      Knowage 9 is GO.
                    </p>
                    <div class="mt-4 flex items-center justify-center gap-3">
                      <UButton
                        to="https://github.com/KnowageLabs/Knowage-Server/"
                        target="_blank"
                        variant="subtle"
                        color="neutral"
                        label="Release Notes"
                        aria-label="Release Notes (opens in new tab)"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </UPageSection>

    <!-- Launch Sequence section: target for the Launch Sequence CTA -->
    <UPageSection
      id="launch-sequence"
      title="Key Features"
      description="Discover what makes KNOWAGE 9.x the next-generation Business Intelligence platform."
    >
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div class="p-6 bg-white/5 rounded-lg">
          <h4 class="text-xl font-semibold mb-4">
            <span aria-hidden="true">🧠</span> AI Virtual Assistant for Faster Data Analysis
          </h4>
          <ul class="text-sm text-gray-300 space-y-2">
            <li class="flex items-start gap-2">
              <span class="text-blue-400 mt-1" aria-hidden="true">•</span>
              <span>Search for dashboards using natural language</span>
            </li>
            <li class="flex items-start gap-2">
              <span class="text-blue-400 mt-1" aria-hidden="true">•</span>
              <span>Explore underlying data without complex queries</span>
            </li>
            <li class="flex items-start gap-2">
              <span class="text-blue-400 mt-1" aria-hidden="true">•</span>
              <span>Obtain immediate insights, even those not explicitly shown in reports</span>
            </li>
            <li class="flex items-start gap-2">
              <span class="text-blue-400 mt-1" aria-hidden="true">•</span>
              <span>A simpler, more intuitive, and accessible data-discovery experience for everyone</span>
            </li>
          </ul>
        </div>

        <div class="p-6 bg-white/5 rounded-lg">
          <h4 class="text-xl font-semibold mb-4">
            <span aria-hidden="true">📊</span> New KNOWAGE Dashboard: Faster, More Modern, More Powerful
          </h4>
          <ul class="text-sm text-gray-300 space-y-2">
            <li class="flex items-start gap-2">
              <span class="text-blue-400 mt-1" aria-hidden="true">•</span>
              <span>New high-performance architecture with local caching</span>
            </li>
            <li class="flex items-start gap-2">
              <span class="text-blue-400 mt-1" aria-hidden="true">•</span>
              <span>Fully responsive interface for optimized BI on any device</span>
            </li>
            <li class="flex items-start gap-2">
              <span class="text-blue-400 mt-1" aria-hidden="true">•</span>
              <span>New advanced widgets (Maps, Pivot, advanced charts)</span>
            </li>
            <li class="flex items-start gap-2">
              <span class="text-blue-400 mt-1" aria-hidden="true">•</span>
              <span>Centralized theming for a consistent look & feel</span>
            </li>
            <li class="flex items-start gap-2">
              <span class="text-blue-400 mt-1" aria-hidden="true">•</span>
              <span>Unified header for smoother navigation</span>
            </li>
          </ul>
        </div>

        <div class="p-6 bg-white/5 rounded-lg">
          <h4 class="text-xl font-semibold mb-4">
            <span aria-hidden="true">🔧</span> Technical Enhancements and New Integrations
          </h4>
          <ul class="text-sm text-gray-300 space-y-2">
            <li class="flex items-start gap-2">
              <span class="text-blue-400 mt-1" aria-hidden="true">•</span>
              <span>Compatibility with Apache Doris for data sources and caching</span>
            </li>
            <li class="flex items-start gap-2">
              <span class="text-blue-400 mt-1" aria-hidden="true">•</span>
              <span>Multi-factor authentication (MFA) for enhanced security</span>
            </li>
            <li class="flex items-start gap-2">
              <span class="text-blue-400 mt-1" aria-hidden="true">•</span>
              <span>Deployment through official Docker images (community and enterprise)</span>
            </li>
            <li class="flex items-start gap-2">
              <span class="text-blue-400 mt-1" aria-hidden="true">•</span>
              <span>New wizard for dossier creation</span>
            </li>
            <li class="flex items-start gap-2">
              <span class="text-blue-400 mt-1" aria-hidden="true">•</span>
              <span>Intelligent cache management with automatic refresh</span>
            </li>
          </ul>
        </div>
      </div>

      <div class="mt-12 p-6 bg-linear-to-r from-blue-600/10 to-purple-600/10 rounded-lg border border-blue-500/20">
        <h3 class="text-2xl font-bold mb-4"><span aria-hidden="true">⭐</span> Why Choose KNOWAGE 9.x</h3>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
          <div class="flex items-start gap-3">
            <span class="text-green-400 text-lg" aria-hidden="true">✓</span>
            <span>Faster analysis thanks to AI</span>
          </div>
          <div class="flex items-start gap-3">
            <span class="text-green-400 text-lg" aria-hidden="true">✓</span>
            <span>Modern, fully customizable dashboards</span>
          </div>
          <div class="flex items-start gap-3">
            <span class="text-green-400 text-lg" aria-hidden="true">✓</span>
            <span>Improved security and scalability</span>
          </div>
          <div class="flex items-start gap-3">
            <span class="text-green-400 text-lg" aria-hidden="true">✓</span>
            <span>Integration with cloud-native technologies</span>
          </div>
          <div class="flex items-start gap-3">
            <span class="text-green-400 text-lg" aria-hidden="true">✓</span>
            <span>More efficient data management</span>
          </div>
        </div>
      </div>

      <div class="mt-6 flex gap-3">
        <UButton
          to="/editions#comparison"
          label="Compare Editions"
        />
        <UButton
          to="https://github.com/KnowageLabs/Knowage-Server/releases"
          target="_blank"
          variant="subtle"
          color="neutral"
          label="View Releases"
          aria-label="View Releases (opens in new tab)"
        />
      </div>
    </UPageSection>
  </div>
</template>

<script setup lang="ts">
import { onMounted, nextTick, watch } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()

const config = useRuntimeConfig()
const base = config?.app?.baseURL ?? '/'
const baseNormalized = base.endsWith('/') ? base.slice(0, -1) : base

function scrollToHash(hash: string | undefined) {
  if (!hash) return
  const id = hash.replace(/^#/, '')
  nextTick(() => {
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  })
}

onMounted(() => {
  scrollToHash(route.hash)
})

watch(() => route.hash, (h) => {
  scrollToHash(h)
})
</script>
