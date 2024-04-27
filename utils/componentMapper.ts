import type { Component } from 'vue'
import NoComponent from "@/components/NoComponent.vue";
import Hero from "~/components/Hero.vue";
import SingleImage from "~/components/SingleImage.vue";
import FeaturedCats from "~/components/FeaturedCats.vue";

type Mapping = {
  [name: string]: Component
}

export const mapping: Mapping = {
  hero: Hero,
  singleImage: SingleImage,
  featuredCats: FeaturedCats
};

export function getComponentForName(name: string) {
  return mapping[name] ?? NoComponent
}