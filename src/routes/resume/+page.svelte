<script lang="ts">
  import Seo from "$lib/components/Seo.svelte";
  import Workplace from "./Workplace.svelte";
</script>

<Seo
  title="John Hannebery"
  description="Applied scientist and software engineer."
/>


<section class="layout-md py-12">
  <h2 class="heading2">Professional Experience</h2>

  <Workplace
    title="Machine Learning Engineer"
    company="Sportsbet"
    url="https://sportsbet.com.au/"
    dates="June 2020 – Current"
    location="Melbourne, Australia"
  >
  </Workplace>
</section>

<section class="layout-md">
  <h2 class="heading2">Education</h2>

  <div class="mb-4">
    <div class="flex justify-between items-end">
      <h3 class="text-black text-lg">The University of Melbourne</h3>
    </div>
    <p class="byline">MSc in Operations Research, School of Mathematics and Statistics</p>
  </div>

  <div class="mb-4">
    <div class="flex justify-between items-end">
      <h3 class="text-black text-lg">Monash University</h3>
    </div>
    <p class="byline">BSc & BCom, Applied Mathematics, Computer Science, Finance</p>
  </div>

  <h4 class="font-medium mt-4 mb-1">Technical coursework:</h4>
  <ul>
    <li>Approximation Algorithms & Heuristics (MAST90098)</li>
    <li>Statistical Machine Learning (COMP90051)</li>
    <li>Deep Learning Engineering (MAST90079)</li>
    <li>Optimisation for Industry (MAST90014)</li>
    <li>Mathematical Statistics (MAST90082)</li>
    <li>Bayesian Statistical Learning (MAST90125)</li>
    <li>Scheduling & Optimisation (MAST90050)</li>
    <li>Multivariate Statistics (MAST90138)</li>
    <li>Advanced Nonlinear Optimisation (MAST90142)</li>
    <li>Stochastic Optimisation (MAST90144)</li>
  </ul>
</section>


<style lang="postcss">
  b {
    @apply font-medium;
  }

  ul {
    @apply list-disc pl-7 marker:text-neutral-400;
  }

  .byline {
    @apply font-serif italic;
  }
</style>
