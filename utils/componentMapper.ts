import type { Component } from 'vue'
import NoComponent from "@/components/NoComponent.vue";
import Hero from "~/components/Hero.vue";
import SingleImage from "~/components/SingleImage.vue";
import FeaturedCats from "~/components/FeaturedCats.vue";
import HowItWorks from "~/components/HowItWorks.vue";
import Stats from "~/components/Stats.vue";

type Mapping = {
  [name: string]: Component
}

export const mapping: Mapping = {
  hero: Hero,
  singleImage: SingleImage,
  featuredCats: FeaturedCats,
  howItWorks: HowItWorks,
  stats: Stats
};

export function getComponentForName(name: string) {
  return mapping[name] ?? NoComponent
}