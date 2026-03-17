<script setup lang="ts">
const runtimeConfig = useRuntimeConfig()
const base = runtimeConfig?.app?.baseURL ?? '/'
const baseNormalized = base.endsWith('/') ? base.slice(0, -1) : base

const items = [
  {
    title: 'Business Intelligence for Regional Employment Agencies',
    description: 'The new Regional Labor Information System of Emilia-Romagna (SILER) supports Employment Centers in administrative management and in providing information and services to citizens and local businesses.',
    image: `${baseNormalized}/img/showcase/STORIES_LAVORO.jpg`,
    badge: { label: 'Case Study', color: 'primary' },
    country: 'Italy',
    to: 'https://www.eng.it/it/insights/stories/case-studies/business-intelligence-per-le-agenzie-di-lavoro-regionali-e-i-centri-per-impiego'
  },
  {
    title: 'Business Intelligence for Entrepreneurship',
    description: 'By connecting Knowage to its CRM, Confcommercio Umbria achieved better data visualization and analysis, and is now able to make confident, data-driven business decisions.',
    image: 'https://s7g10.scene7.com/is/image/eng/STORIES_CONFCOMMERCIO-UMBRIA?bfc=on&fmt=webp-alpha&dpr=on,3&network=on',
    badge: { label: 'Case Study', color: 'primary' },
    country: 'Italy',
    to: 'https://www.eng.it/it/insights/stories/case-studies/la-business-intelligence-per-l-imprenditorialita'
  },
  {
    title: 'Atlas 4 Dev — The Atlas for Development',
    description: 'A digital platform for consulting indicators representing the geographical, demographic, economic, sociocultural, environmental and institutional profile of every country in the world.',
    image: 'https://s7g10.scene7.com/is/image/eng/image-landscape-100?bfc=on&fmt=webp-alpha&dpr=on,3&network=on',
    badge: { label: 'Case Study', color: 'primary' },
    country: 'Global',
    to: 'https://www.eng.it/it/insights/stories/case-studies/atlas4dev-atlante-per-lo-sviluppo'
  },
  {
    title: 'Monitoring Sustainable Development Goals',
    description: 'How to use Advanced Analytics to track progress on Sustainable Development Goals (SDGs) and connect them to business strategy or principles of good governance.',
    image: `${baseNormalized}/img/showcase/STORIES_MONITORARE-SDG.jpg`,
    badge: { label: 'Use Case', color: 'success' },
    country: 'Global',
    to: 'https://www.eng.it/it/insights/stories/use-cases/monitorare-gli-obiettivi-di-sviluppo-sostenibile'
  },
  {
    title: 'Dairy Sector: Precision Livestock Farming Goes Smart',
    description: 'How precision livestock farming enables continuous monitoring of animal welfare and milk quality, turning farm data into actionable intelligence.',
    image: 'https://s7g10.scene7.com/is/image/eng/Settore%20lattiero-caseario-%20la%20zootecnia%20diventa%20smart?bfc=on&fmt=webp-alpha&dpr=on,3&network=on',
    badge: { label: 'Use Case', color: 'success' },
    country: 'Italy',
    to: 'https://www.eng.it/it/insights/stories/use-cases/settore-lattierocaseario-la-zootecnia-diventa-smart'
  },
  {
    title: 'EW-SHOPP: Advanced Customer Journey',
    description: 'A solution that integrates data from multiple sources through a new generation of business analytics, enabling a deeper understanding of the end-to-end customer journey.',
    image: `${baseNormalized}/img/showcase/ewshopp-advanced-customer-journey.jpg`,
    badge: { label: 'Research Project', color: 'info' },
    country: 'Europe',
    to: 'https://www.eng.it/it/insights/stories/research-projects/ewshopp-advanced-customer-journey'
  },
  {
    title: 'DEMETER: Data Takes the Field for Smart Agriculture',
    description: 'Innovative, interoperable IoT and Big Data platforms designed to support sustainable agricultural and food production systems at scale.',
    image: 'https://s7g10.scene7.com/is/image/eng/Demeter?bfc=on&fmt=webp-alpha&dpr=on,3&network=on',
    badge: { label: 'Research Project', color: 'info' },
    country: 'Europe',
    to: 'https://www.eng.it/it/insights/stories/research-projects/demeter-i-dati-scendono-in-campo-per-la-smart-agriculture'
  },
  {
    title: 'Distributed Intelligence for Smart Cities',
    description: 'BigClouT gives cities an analytical mind: leveraging IoT, cloud computing and big data to increase the efficiency of urban infrastructure, economic resources and environmental sustainability.',
    image: 'https://s7g10.scene7.com/is/image/eng/Intelligenza%20distribuita%20per%20le%20Smart%20City?bfc=on&fmt=webp-alpha&dpr=on,3&network=on',
    badge: { label: 'Research Project', color: 'info' },
    country: 'Global',
    to: 'https://www.eng.it/it/insights/stories/research-projects/intelligenza-distribuita-per-le-smart-city'
  },
  {
    title: '5 Questions to… Massimiliano Ceceri',
    description: 'An interview with Engineering\'s Data Visualization Senior Manager on the evolution of BI, the role of open source and the future of data-driven organizations.',
    image: 'https://s7g10.scene7.com/is/image/eng/HERO_5-domande?bfc=on&fmt=webp-alpha&dpr=on,3&network=on',
    badge: { label: 'Interview', color: 'warning' },
    country: 'Italy',
    to: 'https://www.eng.it/it/insights/cinque-domande-a/massimiliano-ceceri'
  }
]

useSeoMeta({
  title: 'KNOWAGE Showcase',
  ogTitle: 'KNOWAGE Showcase',
  description: 'Discover case studies, use cases and research projects built with KNOWAGE',
  ogDescription: 'Discover case studies, use cases and research projects built with KNOWAGE'
})
</script>

<template>
  <div>
    <UContainer>
      <UPageBody>
        <UPageSection
          title="Discover More About Knowage"
          description="Explore real-world case studies, use cases and research projects that show how organizations across industries leverage Knowage to turn data into decisions."
        >
          <UBlogPosts>
            <UBlogPost
              v-for="item in items"
              :key="item.title"
              :title="item.title"
              :description="item.description"
              :badge="item.badge"
              :to="item.to"
              target="_blank"
              orientation="vertical"
              variant="naked"
              :ui="{ description: 'line-clamp-3', body: 'pt-6 sm:pt-8' }"
            >
              <template #header>
                <img
                  :src="item.image"
                  :alt="item.title"
                  class="object-cover object-top w-full h-full"
                >
              </template>
              <template #date>
                <div class="flex items-center gap-1.5 text-sm text-gray-500 dark:text-gray-400">
                  <UIcon name="material-symbols:location-on-outline" class="w-4 h-4" />
                  <span>{{ item.country }}</span>
                </div>
              </template>
            </UBlogPost>
          </UBlogPosts>
        </UPageSection>
      </UPageBody>
    </UContainer>
  </div>
</template>
