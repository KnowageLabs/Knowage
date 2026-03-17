<template>
  <div>
    <!-- Hero with background image -->
    <div
      class="relative bg-cover bg-center bg-no-repeat"
      :style="{ backgroundImage: `url('${bgUrl}')` }"
    >
      <div class="absolute inset-0 bg-white/80 dark:bg-gray-900/80" />
      <div class="relative">
        <UPageHero
          description="The open source, secure and reliable solution for advanced data analytics and business intelligence. Aggregate data from heterogeneous systems, visualize insights on any device through charts, maps, KPIs and interactive dashboards — and make truly data-driven decisions."
          headline="New release 9.0"
          :links="links as any"
        >
          <template #title>
            <img class="h-24 w-auto mx-auto dark:hidden" :src="`${baseNormalized}/img/knowage-wordmark-light.svg`" alt="Knowage" />
          <img class="h-24 w-auto mx-auto hidden dark:block" :src="`${baseNormalized}/img/knowage-wordmark-dark.svg`" alt="Knowage" />
          </template>
        </UPageHero>
      </div>
    </div>

    <UPageSection
      title="Open & Customizable"
      description="KNOWAGE meets the standards of modern Business Intelligence, providing a wide set of analytical tools and a high level of customization. Its solid data governance ensures that data never leaves your organizational perimeter — with full security, traceability and access control. Thanks to its open-source nature, it can be used stand-alone or seamlessly integrated into third-party applications."
      orientation="horizontal"
    >
      <img
        :src="`${baseNormalized}/img/home/open&custom.jpg`"
        alt="Illustration"
        class="w-full rounded-lg"
      >
    </UPageSection>

    <UPageSection
      title="Different Editions for Different Needs"
      description="KNOWAGE is available in different editions to meet the needs of various users, from individual analysts to large enterprises. Choose the edition that best fits your requirements and start leveraging the power of data today."
      orientation="horizontal"
      reverse
    >
      <img
        :src="`${baseNormalized}/img/home/editions.jpg`"
        alt="Illustration"
        class="w-full rounded-lg"
      >
    </UPageSection>

    <UPageSection
      id="features"
      title="Everything you need to build your Data Visualizations"
      description="KNOWAGE provides a comprehensive set of analytical capabilities — from traditional reporting to advanced analytics, big data exploration and AI-assisted insights — to cover every modern Business Intelligence need."
      :features="features"
    />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const features = [
  {
    icon: 'material-symbols:devices-outline',
    title: 'Any Platform',
    description: 'Work on every Operating System, on premise or in the cloud. From desktop to mobile devices.'
  },
  {
    icon: 'material-symbols:database-outline',
    title: 'Any Data',
    description: 'Combine data coming from RDBMS, big data, NoSQL, open data, Solr indexes, flat files and external data services.'
  },
  {
    icon: 'material-symbols:cloud-outline',
    title: 'Cloud Ready',
    description: 'Usable in any Cloud environment in IaaS mode or find it in the major marketplaces.'
  },
  {
    icon: 'material-symbols:dashboard-customize-outline',
    title: 'Customizable',
    description: 'Create the best solution according to your needs combining themes and analytical features.'
  },
  {
    icon: 'material-symbols:person-pin-outline-sharp',
    title: 'User Centric',
    description: 'Build your analysis in autonomy, explore and organize your own data space thanks to advanced self-service features.'
  },
  {
    icon: 'material-symbols:inbox-outline',
    title: 'Multitenant',
    description: 'Activate different virtual instances to support multi-company, multi-department or multi-user scenarios.'
  },
  {
    icon: 'material-symbols:robot-2-outline',
    title: 'AI-Powered',
    description: 'An AI virtual assistant guides users through data exploration, answers questions and makes advanced analytics accessible to everyone — regardless of technical skills.'
  },
  {
    icon: 'material-symbols:shield-outline',
    title: 'Data Security & Governance',
    description: 'Solid governance ensures your data never leaves the organizational perimeter, with full security, traceability and granular access control.'
  },
  {
    icon: 'material-symbols:code-blocks-outline',
    title: 'Open Source',
    description: 'Fully open source and community-driven, Knowage gives you complete freedom to inspect, extend and contribute — with no vendor lock-in.'
  }
]

type HeroLink = {
  label: string
  to: string
  icon?: string
  color?: string
  variant?: string
  trailingIcon?: string
}

const runtimeConfig = useRuntimeConfig()
const base = runtimeConfig?.app?.baseURL ?? '/'
const baseNormalized = base.endsWith('/') ? base.slice(0, -1) : base
const bgUrl = `${baseNormalized}/img/home/background-homepage.png`
// links typed as HeroLink[] to match UPageHero expected shape at runtime
const links = ref<HeroLink[]>([
  {
    label: 'Get started',
    to: 'https://knowage-suite.readthedocs.io/en/9.0/chapter_5/index.html',
    icon: 'material-symbols:play-circle-outline'
  },
  {
    label: 'Release 9',
    to: '/v9',
    color: 'primary',
    icon: 'material-symbols:rocket-launch-outline'
  },
  {
    label: 'Learn more',
    to: '/features',
    color: 'neutral',
    variant: 'subtle',
    trailingIcon: 'material-symbols:arrow-forward'
  }
])
</script>
