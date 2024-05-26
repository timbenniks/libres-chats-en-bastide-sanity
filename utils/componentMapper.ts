import type { Component } from 'vue'
import NoComponent from "@/components/NoComponent.vue";
import hero from "~/components/Hero.vue";
import singleImage from "~/components/SingleImage.vue";
import featuredCats from "~/components/FeaturedCats.vue";
import howItWorks from "~/components/HowItWorks.vue";
import stats from "~/components/Stats.vue";
import richText from "~/components/RichText.vue"
import twoColumn from "~/components/TwoColumn.vue"
import helloAsso from "~/components/HelloAsso.vue"

type Mapping = {
  [name: string]: Component
}

export const mapping: Mapping = {
  hero,
  singleImage,
  featuredCats,
  howItWorks,
  stats,
  richText,
  twoColumn,
  helloAsso
};

export function getComponentForName(name: string) {
  return mapping[name] ?? NoComponent
}