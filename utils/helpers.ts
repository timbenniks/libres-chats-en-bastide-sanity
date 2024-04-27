import { AgeCalculator } from "@dipaktelangre/age-calculator";

export function getAge(birthDate: string) {
  const weeks = AgeCalculator.getAgeIn(new Date(birthDate), "weeks");
  const months = AgeCalculator.getAgeIn(new Date(birthDate), "month");
  const years = AgeCalculator.getAgeIn(new Date(birthDate), "years");

  let result = '';

  if (weeks <= 8 && months < 12 && years < 1) {
    result = `${weeks} weeks`
  }

  if (weeks > 8 && months < 12 && years < 1) {
    result = `${months} months`
  }

  if (years >= 1) {
    result = `${years} years`
  }

  return result
}