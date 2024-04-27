type Props = {
  slug: string,
  type: "page" | "cat"
}

export async function useGetContentForType(properties: Props) {
  const query = groq`*[_type == "page" && slug.current == $slug][0]{
    _id,
    title,
    slug,
    components[]{
      _type == "hero" => {
        _type,
        heading,
        description,
        image,
        cta,
        cta2
      },
      _type == "singleImage" => {
        _type,
        image,
        title
      },
      _type == "featuredCats" => {
        _type,
        heading,
        description,
        "cats": cats[]->{
          _id,
          name,
          birthDate,
          chipped,
          sterilised,
          sex,
          images,
          treatments
        }
      }
    },
  }`;

  const { data, encodeDataAttribute } = await useSanityQuery(query, { slug: properties.slug });

  if (!data) {
    throw createError({
      statusCode: 404,
      statusMessage: "Page Not Found",
    });
  }

  return {
    data,
    encodeDataAttribute
  }
}