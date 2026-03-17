<script setup lang="ts">
    const plans = ref<any>([{
        title: 'Community',
        description: 'All the basics for businesses that are just getting started.',
        prices: "Free",
        features: [
          '1 User',
          '10 Projects',
          '5 GB Storage',
          'Basic Support',
        ],
        button: {
          text: 'Get Started',
          variant: 'primary',
        },
      },
      
      {
        title: 'Enterprise',
        description: 'Comprehensive solutions for large organizations.',
        prices: '$990',
        features: [
          'Unlimited Users',
          'Unlimited Projects',
          '200 GB Storage',
          '24/7 Support',
        ],
        button: {
          text: 'Contact Us',
          variant: 'tertiary',
        },
      },
    ]);
</script>

<template>

    <UContainer>
      <UPricingPlans scale>
        <UPricingPlan
          v-for="(plan, index) in plans"
          :key="index"
          v-bind="plan"
          :price="plan.prices"
        />
      </UPricingPlans>
    </UContainer>

    

</template>