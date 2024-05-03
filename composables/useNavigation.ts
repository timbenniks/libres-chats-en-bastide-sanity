export async function useNavigation() {
  const query = groq`*[_type == "navigation"][0] {
    title,
    "pages": pages[] {
      _key,
      menuLabel,
      externalUrl,
      "internalUrl": internalUrl->slug.current
    }
  }`;

  const { data } = await useSanityQuery(query);

  if (!data) {
    throw createError({
      statusCode: 500,
      statusMessage: "Navigation not found",
    });
  }

  return data

}