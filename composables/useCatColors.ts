export async function useCatColors() {
  const query = groq`*[_type == "cat"] {
    color
  }`;

  const { data: colors } = await useSanityQuery(query);

  const allColors = colors.value.flatMap(cat => cat.color);
  return [...new Set(allColors)];
}