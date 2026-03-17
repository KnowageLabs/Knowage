export default defineAppConfig({
  ui: {
    colors: {
      primary: 'brand',
      neutral: 'slate'
    },
    pageSection: {
      slots: {
        container: 'flex flex-col lg:grid py-18 sm:py-12 lg:py-16 gap-8 sm:gap-16'
      }
    }
  }
})
