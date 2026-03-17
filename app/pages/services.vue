<script setup lang="ts">
</script>

<template>
  <div>
    <UPageHero
      title="Consultancy Services"
      description="Expert support to help you succeed with your Business Intelligence projects."
      :links="[
        { label: 'Contact Us', to: '/contact', icon: 'material-symbols:mail-outline' }
      ]"
    />

    <UPageSection>
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <!-- Training -->
        <UCard class="h-full">
          <template #header>
            <div class="flex items-center gap-3">
              <div class="p-3 bg-blue-100 dark:bg-blue-900 rounded-lg">
                <UIcon
                  name="material-symbols:school-outline"
                  class="w-8 h-8 text-blue-600 dark:text-blue-400"
                />
              </div>
              <h2 class="text-2xl font-bold">
                Training
              </h2>
            </div>
          </template>

          <div class="space-y-4">
            <h3 class="text-lg font-semibold text-primary-600 dark:text-primary-400">
              Discover How to Fully Exploit KNOWAGE
            </h3>
            <p class="text-gray-600 dark:text-gray-300">
              Our standard training provides basic and advanced knowledge on the entire range of analyses that can be performed with KNOWAGE.
            </p>
            <p class="text-gray-600 dark:text-gray-300">
              Training alternates theory and hands-on sessions based on real use cases to provide you with comprehensive knowledge of the suite. All courses are provided with a certificate of completion.
            </p>
          </div>

          <template #footer>
            <div class="flex items-center gap-2 text-sm text-gray-500">
              <UIcon
                name="material-symbols:workspace-premium-outline"
                class="w-4 h-4"
              />
              <span>Certificate of completion included</span>
            </div>
          </template>
        </UCard>

        <!-- Consulting -->
        <UCard class="h-full">
          <template #header>
            <div class="flex items-center gap-3">
              <div class="p-3 bg-purple-100 dark:bg-purple-900 rounded-lg">
                <UIcon
                  name="material-symbols:lightbulb-outline"
                  class="w-8 h-8 text-purple-600 dark:text-purple-400"
                />
              </div>
              <h2 class="text-2xl font-bold">
                Consulting
              </h2>
            </div>
          </template>

          <div class="space-y-4">
            <p class="text-gray-600 dark:text-gray-300">
              Carrying out a business intelligence project is a very demanding activity which needs to be treated in detail at every stage to produce effective results and support agile decision making.
            </p>
            <p class="text-gray-600 dark:text-gray-300">
              Our consultancy services support you during the whole analytical process, starting from the first prototype, along with the support to development and implementation activities, the integration with other tools and periodic health checks.
            </p>
            <p class="text-gray-600 dark:text-gray-300 font-medium">
              KNOWAGE services help you saving money and time while reaching your business goals.
            </p>
          </div>

          <template #footer>
            <div class="flex items-center gap-2 text-sm text-gray-500">
              <UIcon
                name="material-symbols:check-circle-outline"
                class="w-4 h-4"
              />
              <span>Full project lifecycle support</span>
            </div>
          </template>
        </UCard>
      </div>
    </UPageSection>

    <!-- CTA Section -->
    <UPageSection
      title="Ready to Get Started?"
      description="Contact us to learn more about our training programs and consulting services."
    >
      <div class="flex justify-center">
        <UButton
          to="/contact"
          size="xl"
          icon="material-symbols:send-outline"
          label="Contact Us"
        />
      </div>
    </UPageSection>
  </div>
</template>
