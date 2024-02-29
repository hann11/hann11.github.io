<script lang="ts">
  import { ArrowUpRight } from "lucide-svelte";

  import Seo from "$lib/components/Seo.svelte";
</script>

<Seo
  title="John Hannebery"
  description="Applied scientist and software engineer."
/>

<div class="layout-md text-lg space-y-5">
  <div class="space-y-5">
    <p>
      I'm an applied scientist and software engineer based in Melbourne, Australia.
    </p>

    <p>
      I graduated from The University of Melbourne with an MSc in Operations Research 
      from the school of Mathematics and Statistics, studying advanced coursework
      in statistics, optimisation, machine learning and computer science.
    </p>

    <p>
      As part of the degree,
      I also wrote a thesis looking at fairness in recommendation systems, in particular attempting
      to exploit the structure of graph neural networks to generate fairer recommendations.
    </p>
  </div>


  <div class="space-y-5">
    <p>
      While studying my MSc, I worked full time as a machine learning
      engineer at Sportsbet, applying machine
      learning to understand problem gambling - building ML systems to
      understand a customers betting behaviour and detect signs of problem gambling
      early, allowing intervention before it becomes an issue.
    </p>

  </div>
</div>

<style lang="postcss">
  .g {
    @apply text-neutral-400;
  }

  em {
    @apply font-serif text-[110%] leading-[100%];
  }

  .project-pair {
    @apply grid sm:grid-cols-[1fr,2fr] gap-y-1 -mx-3 px-3 py-2 hover:bg-neutral-100 transition-colors;
  }

  aside {
    @apply mt-0.5 text-base text-neutral-500;
  }

  /* Correction for vertical navigation links on mobile. */
  @media (max-width: 420px) {
    #eric-is {
      @apply -mt-10;
    }
  }
</style>
