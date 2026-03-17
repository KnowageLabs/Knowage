<template>
  <UPageSection>
    <div class="mx-auto max-w-4xl space-y-8">
      <p class="text-lg text-gray-700 dark:text-gray-200">
        Knowage is the open source Business Intelligence and data analytics platform by <a href="https://www.eng.it" target="_blank" rel="noopener noreferrer" class="font-semibold underline underline-offset-2 hover:opacity-75 transition-opacity">Engineering — Ingegneria Informatica</a>, Italy's leading ICT group. We are a team of professionals committed to empowering organizations with secure, reliable and flexible analytics tools — built on open standards and driven by a deep passion for data innovation.
      </p>

      <section class="space-y-4">
        <h2 class="text-2xl font-semibold">
          Where We Work
        </h2>
        <p class="text-base text-gray-500 dark:text-gray-400">
          A distributed team rooted across Europe, bringing local expertise and a shared passion for data innovation.
        </p>

        <div class="overflow-hidden rounded-lg border border-gray-200 dark:border-gray-700">
          <ClientOnly>
            <EngMap />
            <template #fallback>
              <div class="flex h-[460px] w-full items-center justify-center bg-gray-100 dark:bg-gray-800 text-sm text-gray-500">
                Loading map…
              </div>
            </template>
          </ClientOnly>
        </div>
      </section>

      <section class="space-y-4">
        <h2 class="text-2xl font-semibold">
          Contact us
        </h2>

        <form
          class="space-y-4 rounded-lg border border-gray-200 p-4 dark:border-gray-700"
          action="mailto:knowage@eng.it"
          method="post"
          enctype="text/plain"
        >
          <div class="space-y-2">
            <label
              for="contact-email"
              class="block text-sm font-medium"
            >Email</label>
            <input
              id="contact-email"
              name="email"
              type="email"
              autocomplete="email"
              required
              class="w-full rounded-md border border-gray-300 bg-white px-3 py-2 dark:border-gray-600 dark:bg-gray-900"
              placeholder="name@example.com"
            >
          </div>

          <div class="space-y-2">
            <label
              for="contact-request"
              class="block text-sm font-medium"
            >What information do you need?</label>
            <textarea
              id="contact-request"
              name="request"
              required
              rows="4"
              class="w-full rounded-md border border-gray-300 bg-white px-3 py-2 dark:border-gray-600 dark:bg-gray-900"
              placeholder="Tell us what you would like to know"
            />
          </div>

          <div class="space-y-2">
            <label
              for="contact-captcha"
              class="block text-sm font-medium"
            >Anti-spam captcha: what is 4 + 3?</label>
            <input
              id="contact-captcha"
              name="captcha"
              type="text"
              inputmode="numeric"
              required
              class="w-full rounded-md border border-gray-300 bg-white px-3 py-2 dark:border-gray-600 dark:bg-gray-900"
              placeholder="Type your answer"
            >
          </div>

          <button
            type="submit"
            class="rounded-md bg-primary px-4 py-2 font-medium text-white hover:opacity-90"
          >
            Send request
          </button>
        </form>
      </section>
    </div>
  </UPageSection>
</template>
