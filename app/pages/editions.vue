<script setup lang="ts">
const allFeatures = [
  { name: 'AI Virtual Assistant', community: false, enterprise: true },
  { name: 'On line static Report (Birt & JasperReport)', community: true, enterprise: true },
  { name: 'On line Dashboard, with a base set of widgets', community: true, enterprise: true },
  { name: 'On line Dashboard, includes advanced widgets: pivot tables and interactive charts', community: false, enterprise: true },
  { name: 'On line Dashboard, Near-real time option', community: false, enterprise: true },
  { name: 'On line Dashboard, themes management', community: false, enterprise: true },
  { name: 'Dossier: creation of WORD / PDF documents aggregating information from dashboards', community: false, enterprise: true },
  { name: 'Data Preparation', community: false, enterprise: true },
  { name: 'KPI Definition and Visualization', community: true, enterprise: true },
  { name: 'Widget Gallery', community: true, enterprise: true },
  { name: 'Catalog Functions', community: true, enterprise: true },
  { name: 'Widgets and Python functions ready to use (50+ pre-built components)', community: false, enterprise: true },
  { name: 'OLAP', community: true, enterprise: true },
  { name: 'Visual data inquiry', community: true, enterprise: true },
  { name: 'Registry', community: true, enterprise: true },
  { name: 'Collaboration (notes, metadata…)', community: false, enterprise: true },
  { name: 'Office Document', community: true, enterprise: true },
  { name: 'Glossary', community: false, enterprise: true },
  { name: 'Talend engine', community: true, enterprise: true },
  { name: 'Audit & Monitoring dashboard', community: false, enterprise: true },
  { name: 'Document Browser', community: true, enterprise: true },
  { name: 'MyWorkSpace / MyData', community: true, enterprise: true },
  { name: 'Scheduler for batch execution', community: false, enterprise: true },
  { name: 'Python Integration', community: false, enterprise: true },
  { name: 'Knowage Theme Management', community: false, enterprise: true },
  { name: 'Import/Export functionalities', community: false, enterprise: true },
  { name: 'Resource Manager', community: false, enterprise: true },
  { name: 'News management', community: false, enterprise: true },
  { name: 'Multi-tenant management', community: false, enterprise: true }
]

// Place community features first, preserving their relative order
const comparisonFeatures = [
  ...allFeatures.filter(f => f.community),
  ...allFeatures.filter(f => !f.community)
]
</script>

<template>
  <div>
    <UPageHero
      title="KNOWAGE Editions"
      description="The suite is available in two versions. Choose the edition that best fits your requirements and start leveraging the power of data today."
      :ui="{ container: 'flex flex-col lg:grid py-6 sm:py-8 lg:py-10 gap-16 sm:gap-y-24', title: 'text-3xl sm:text-4xl lg:text-5xl text-pretty tracking-tight font-bold text-highlighted' }"
    />

    <UPageSection>
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <UCard class="h-full">
          <template #header>
            <div class="flex items-center gap-3">
              <div class="p-3 bg-green-100 dark:bg-green-900 rounded-lg">
                <UIcon
                  name="material-symbols:group-outline"
                  class="w-8 h-8 text-green-600 dark:text-green-400"
                />
              </div>
              <div>
                <h2 class="text-2xl font-bold">
                  Community Edition
                </h2>
                <UBadge
                  color="success"
                  variant="subtle"
                >
                  Open Source
                </UBadge>
              </div>
            </div>
          </template>

          <div class="space-y-4">
            <p class="text-gray-600 dark:text-gray-300">
              We believe innovation comes when people have no barrier to study, use, test and modify things. We believe innovation comes when people join a collaborative project and let it grow and transform. We believe innovation comes when people make things with passion. We believe open source is the place where all these things can happen.
            </p>
            <p class="text-gray-600 dark:text-gray-300">
              Coming from the long history of SpagoBI, <strong>KNOWAGE Community Edition</strong> includes all analytical capabilities and guarantees a full end-user experience.
            </p>
            <p class="text-gray-600 dark:text-gray-300">
              To become a KNOWAGE contributor, you only need to sign in on GitHub and accept the Contributor License Agreement.
            </p>
          </div>

          <template #footer>
            <div class="flex gap-3">
              <UButton
                to="https://github.com/KnowageLabs/Knowage-Server"
                target="_blank"
                icon="i-simple-icons-github"
                label="View on GitHub"
                aria-label="View on GitHub (opens in new tab)"
              />
              <UButton
                to="https://github.com/KnowageLabs/Knowage-Server/blob/master/CLA.md"
                target="_blank"
                color="neutral"
                variant="subtle"
                label="Contributor License"
                aria-label="Contributor License (opens in new tab)"
              />
            </div>
          </template>
        </UCard>

        <UCard class="h-full border-2 border-primary-500">
          <template #header>
            <div class="flex items-center gap-3">
              <div class="p-3 bg-primary-100 dark:bg-primary-900 rounded-lg">
                <UIcon
                  name="material-symbols:domain"
                  class="w-8 h-8 text-primary-600 dark:text-primary-400"
                />
              </div>
              <div>
                <h2 class="text-2xl font-bold">
                  Enterprise Edition
                </h2>
                <UBadge
                  color="primary"
                  variant="subtle"
                >
                  Commercial
                </UBadge>
              </div>
            </div>
          </template>

          <div class="space-y-4">
            <p class="text-gray-600 dark:text-gray-300">
              When it comes to managing large amounts of projects or customers, when reliability and rapidity are crucial, when internal assets are not sized enough to manage a whole BI project, <strong>KNOWAGE Enterprise Edition</strong> is the best choice to succeed.
            </p>
            <p class="text-gray-600 dark:text-gray-300">
              KNOWAGE Enterprise Edition supports companies and public entities providing a fully reliable, safe and easy to manage solution. Provided and guaranteed directly from Engineering Group, the leading Italian software and services company.
            </p>
          </div>

          <template #footer>
            <UButton
              to="/contact"
              icon="material-symbols:mail-outline"
              label="Contact Sales"
            />
          </template>
        </UCard>
      </div>
    </UPageSection>

    <!-- Comparison Table -->
    <UPageSection
      id="comparison"
      title="Edition Comparison"
      description="Compare features between Community and Enterprise editions."
    >
      <UCard>
        <div class="overflow-x-auto">
          <table class="w-full">
            <thead>
              <tr class="border-b border-gray-200 dark:border-gray-700">
                <th scope="col" class="text-left py-3 px-4 font-semibold text-gray-900 dark:text-white">
                  Functionalities
                </th>
                <th scope="col" class="text-center py-3 px-4 font-semibold text-green-600 dark:text-green-400 w-32">
                  Community
                </th>
                <th scope="col" class="text-center py-3 px-4 font-semibold text-primary-600 dark:text-primary-400 w-32">
                  Enterprise
                </th>
              </tr>
            </thead>
            <tbody>
              <tr
                v-for="feature in comparisonFeatures"
                :key="feature.name"
                class="border-b border-gray-100 dark:border-gray-800 hover:bg-gray-50 dark:hover:bg-gray-800/50"
              >
                <td class="py-3 px-4 text-gray-700 dark:text-gray-300">
                  {{ feature.name }}
                </td>
                <td class="py-3 px-4 text-center">
                  <template v-if="feature.community">
                    <UIcon name="material-symbols:check" class="w-5 h-5 text-green-500 mx-auto" aria-hidden="true" />
                    <span class="sr-only">Available</span>
                  </template>
                  <span v-else class="text-gray-300 dark:text-gray-600" aria-label="Not available">—</span>
                </td>
                <td class="py-3 px-4 text-center">
                  <template v-if="feature.enterprise">
                    <UIcon name="material-symbols:check" class="w-5 h-5 text-primary-500 mx-auto" aria-hidden="true" />
                    <span class="sr-only">Available</span>
                  </template>
                  <span v-else class="text-gray-300 dark:text-gray-600" aria-label="Not available">—</span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </UCard>
    </UPageSection>
  </div>
</template>
