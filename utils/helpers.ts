import { AgeCalculator } from "@dipaktelangre/age-calculator";
import type { CatFilters } from "@/utils/types";
import { hash } from "ohash";

export function getAge(birthDate: string) {
  const weeks = AgeCalculator.getAgeIn(new Date(birthDate), "weeks");
  const months = AgeCalculator.getAgeIn(new Date(birthDate), "month");
  const years = AgeCalculator.getAgeIn(new Date(birthDate), "years");

  let result = '';

  if (weeks <= 8 && months < 12 && years < 1) {
    result = `${weeks} semaines`
  }

  if (weeks > 8 && months < 12 && years < 1) {
    result = `${months} mois`
  }

  if (years >= 1) {
    result = `${years} ans`
  }

  return result
}

export function createQuery(filters: CatFilters) {
  let birthdayQuery = "";
  switch (filters.date) {
    case "younger-than-six-months":
      birthdayQuery =
        " && birthDate >= dateTime(now()) - (6 * 30 * 24 * 60 * 60)";
      break;
    case "between-six-and-twelve-months":
      birthdayQuery =
        " && birthDate < dateTime(now()) - (6 * 30 * 24 * 60 * 60) && birthDate >= dateTime(now()) - (12 * 30 * 24 * 60 * 60)";
      break;
    case "older-than-a-year":
      birthdayQuery =
        " && birthDate < dateTime(now()) - (12 * 30 * 24 * 60 * 60)";
      break;
  }

  return groq`*[_type == "cat"
    ${filters.withDogs ? " && withDogs == $withDogs" : ""}
    ${filters.withCats ? " && withCats == $withCats" : ""}
    ${filters.sex ? " && sex == $sex" : ""}
    ${filters.color ? " && color match $color" : ""}
    ${filters.date ? birthdayQuery : ""}
  ]`;
}

export function hashQueryCacheKey(query: any, filters: CatFilters) {
  return `sanity-${hash(query.value + JSON.stringify(filters))}`
}

export function checkFilterActive(filters: CatFilters) {
  return filters.withDogs || filters.withCats || filters.sex !== "" || filters.color !== "" || filters.date !== ""
}