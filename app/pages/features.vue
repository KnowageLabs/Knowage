<script setup lang="ts">
const mainFeatures = [
  {
    id: 'dashboards',
    icon: 'material-symbols:dashboard-outline',
    title: 'Interactive Dashboards',
    description: 'A dashboard in Knowage transforms data into visual insights, enabling real-time monitoring, analysis, and strategic decision-making.',
    image: '/img/features/dashboard.png',
    details: [
      'Combine data from multiple sources and datasets into a unified analysis environment',
      'Wide range of widgets: charts, tables, pivot, text, images, filters, maps, and custom code',
      'Location Intelligence capabilities with multi-layered maps',
      'Support for Solr indexes to analyze both structured data and text'
    ]
  },
  {
    id: 'assistant',
    icon: 'material-symbols:smart-toy-outline',
    title: 'Virtual Assistant',
    description: 'An intelligent, conversational interface designed to help users interact seamlessly with the KNOWAGE suite.',
    image: '/img/features/assistant.png',
    details: [
      'Real-time support by answering questions',
      'Dashboard navigation assistance',
      'Natural language processing for context-aware responses'
    ]
  },
  {
    id: 'dataviz',
    icon: 'material-symbols:insert-chart-outline',
    title: 'Advanced Data Visualization',
    description: 'Modern data analysis requires flexibility and openness to custom code.',
    image: '/img/features/forecast.png',
    details: [
      'Wide range of open widgets for advanced components',
      'Use HTML, third-party libraries, or Python code',
      'Rich gallery of pre-packaged widgets included'
    ]
  },
  {
    id: 'reporting',
    icon: 'material-symbols:description-outline',
    title: 'Reporting',
    description: 'Knowage reporting enables structured, customizable documents from data, supporting analysis, distribution, and decision-making.',
    details: [
      'Creation and distribution of static reports with pixel-perfect layouts',
      'Reports accessed online or automatically sent via email on schedule',
      'Multiple formats: PDF, CSV, XLS, RTF, and XLSX',
      'Powerful scheduler for offline report generation'
    ]
  },
  {
    id: 'dossier',
    icon: 'material-symbols:folder-open-outline',
    title: 'Automatic Dossier',
    description: 'Compile reports into a single Word or PowerPoint document for meetings or publications.',
    details: [
      'Define Word or PowerPoint templates with designated placeholders',
      'Automatically populated with reports based on execution date',
      'Ready-to-edit draft with one click'
    ]
  },
  {
    id: 'qbe',
    icon: 'material-symbols:search',
    title: 'Visual Data Exploration (QbE)',
    description: 'Query by Example enables intuitive and unrestricted data exploration within the data space.',
    details: [
      'Empowers context-aware users to directly query data',
      'Save query results as new datasets or store for future execution',
      'Supports self-service and ad hoc reporting'
    ]
  },
  {
    id: 'selfservice',
    icon: 'material-symbols:manage-accounts-outline',
    title: 'Self-Service & Ad-Hoc Reporting',
    description: 'KNOWAGE fully supports self-service data access and ad-hoc reporting, balancing user autonomy with robust security.',
    details: [
      'Personal Workspace to independently organize data and analyses',
      'Upload new files and design customized views',
      'Combine datasets and widgets to build your own dashboards'
    ]
  },
  {
    id: 'kpi',
    icon: 'material-symbols:speed-outline',
    title: 'Performance Management',
    description: 'Define Key Performance Indicators (KPIs) with threshold settings, scheduled evaluations, and native publication.',
    details: [
      'KPI definition with threshold settings',
      'Scheduled evaluations',
      'System of targeted alerts and notifications'
    ]
  },
  {
    id: 'multitenant',
    icon: 'material-symbols:domain',
    title: 'Multi-tenant',
    description: 'KNOWAGE supports IT teams in managing complex enterprise environments with multitenancy and rich metadata structures.',
    details: [
      'Manage multiple tenants in a single installation',
      'Empowers individual users to freely explore their own data space',
      'Bi-modal approach and fast prototyping practices'
    ]
  }
]

const featuredItems = mainFeatures.slice(0, 3)
const gridItems = mainFeatures.slice(3)

const runtimeConfig = useRuntimeConfig()
const base = runtimeConfig?.app?.baseURL ?? '/'
const baseNormalized = base.endsWith('/') ? base.slice(0, -1) : base
</script>

<template>
  <div>
    <!-- <div class="relative">
      <Screenshot3d />
      <div class="absolute inset-0 bg-linear-to-b from-transparent via-transparent" />
    </div> -->

    <UPageHero
      title="Product Features"
      description="KNOWAGE provides a comprehensive set of analytical features to cover all modern Business Intelligence needs, from traditional reporting to advanced analytics and big data exploration."
      :ui="{ container: 'flex flex-col lg:grid py-6 sm:py-8 lg:py-10 gap-16 sm:gap-y-24', title: 'text-3xl sm:text-4xl lg:text-5xl text-pretty tracking-tight font-bold text-highlighted' }"
    />

    <!-- First 3 features: horizontal layout with image -->
    <UContainer class="py-12 sm:py-16 space-y-16">
      <div
        v-for="(feature, index) in featuredItems"
        :id="feature.id"
        :key="feature.id"
        class="flex flex-col lg:flex-row items-center gap-10"
        :class="{ 'lg:flex-row-reverse': index % 2 === 1 }"
      >
        <!-- Image -->
        <div class="w-full lg:w-1/2 shrink-0">
          <div class="rounded-xl overflow-hidden border border-gray-200 dark:border-gray-800">
            <img
              v-if="feature.image"
              :src="`${baseNormalized}${feature.image}`"
              :alt="feature.title"
              class="w-full h-auto"
            >
            <div
              v-else
              class="aspect-[16/9] bg-gradient-to-br from-primary-50 via-white to-primary-100 dark:from-gray-900 dark:via-primary-950 dark:to-gray-900 flex items-center justify-center"
            >
              <UIcon :name="feature.icon" class="size-20 text-primary-200 dark:text-primary-800" />
            </div>
          </div>
        </div>

        <!-- Content -->
        <div class="w-full lg:w-1/2 flex flex-col gap-5">
          <div class="size-12 rounded-lg bg-primary-50 dark:bg-primary-950 flex items-center justify-center">
            <UIcon :name="feature.icon" class="size-6 text-primary-500 dark:text-primary-400" />
          </div>
          <div>
            <h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-2">
              {{ feature.title }}
            </h2>
            <p class="text-base text-gray-500 dark:text-gray-400 leading-relaxed">
              {{ feature.description }}
            </p>
          </div>
          <ul class="space-y-2.5 pt-4 border-t border-gray-100 dark:border-gray-800">
            <li
              v-for="detail in feature.details"
              :key="detail"
              class="flex items-start gap-2.5"
            >
              <UIcon name="material-symbols:check" class="size-4 text-primary-500 mt-0.5 shrink-0" />
              <span class="text-sm text-gray-600 dark:text-gray-300">{{ detail }}</span>
            </li>
          </ul>
        </div>
      </div>
    </UContainer>

    <!-- Remaining 6 features: compact card grid -->
    <UContainer class="pb-12 sm:pb-16">
      <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <div
          v-for="feature in gridItems"
          :id="feature.id"
          :key="feature.id"
          class="group flex flex-col gap-5 p-6 rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900/40 hover:border-primary-400 dark:hover:border-primary-600 hover:shadow-lg transition-all duration-200"
        >
          <div class="size-12 rounded-lg bg-primary-50 dark:bg-primary-950 flex items-center justify-center shrink-0 group-hover:bg-primary-100 dark:group-hover:bg-primary-900 transition-colors duration-200">
            <UIcon :name="feature.icon" class="size-6 text-primary-500 dark:text-primary-400" />
          </div>
          <div>
            <h2 class="text-base font-semibold text-gray-900 dark:text-white mb-1.5">
              {{ feature.title }}
            </h2>
            <p class="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">
              {{ feature.description }}
            </p>
          </div>
          <ul class="mt-auto space-y-2 pt-4 border-t border-gray-100 dark:border-gray-800">
            <li
              v-for="detail in feature.details"
              :key="detail"
              class="flex items-start gap-2"
            >
              <UIcon name="material-symbols:check" class="size-4 text-primary-500 mt-0.5 shrink-0" />
              <span class="text-sm text-gray-600 dark:text-gray-300">{{ detail }}</span>
            </li>
          </ul>
        </div>
      </div>
    </UContainer>

    <!-- CTA -->
    <UPageSection
      title="Ready to explore KNOWAGE?"
      description="Get started with KNOWAGE today and unlock the full potential of your data."
      :ui="{ container: 'py-8 sm:py-10' }"
    >
      <div class="flex justify-center gap-4">
        <UButton
          to="https://knowage-suite.readthedocs.io/en/9.0/chapter_5/index.html"
          target="_blank"
          size="xl"
          icon="material-symbols:play-circle-outline"
          label="Get Started"
          aria-label="Get Started (opens in new tab)"
        />
        <UButton
          to="/editions"
          size="xl"
          color="neutral"
          variant="subtle"
          label="View Editions"
          trailing-icon="material-symbols:arrow-forward"
        />
      </div>
    </UPageSection>
  </div>
</template>
