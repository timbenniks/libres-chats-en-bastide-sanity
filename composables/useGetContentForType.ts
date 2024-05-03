type Props = {
  slug: string,
  type: "page" | "cat"
}

export async function useGetContentForType(properties: Props) {
  const query = groq`*[_type == "page" && slug.current == $slug][0]{
    _id,
    slug,
    title,
    description,
    image,
    components[] {
      _type == "hero" => {
        _type,
        heading,
        description,
        image,
        ctas[] {
          url->{
            _id,
            slug
          },
          label,
          secondary
        }
      },
      _type == "twoColumn" => {
        _type,
        heading,
        description,
        sideA,
        sideB
      },
      _type == "singleImage" => {
        _type,
        image,
        title,
        standaloneImage
      },
      _type == "howItWorks" => {
        _type,
        heading,
        description,
        steps[] {
          step,
          name,
          image
        },
        ctas[] {
          url->{
            _id,
            slug
          },
          label,
          secondary
        }
      },
      _type == "stats" => {
        _type,
        statBlocks
      },
      _type == "richText" => {
        _type,
        heading,
        richText,
      },
      _type == "featuredCats" => {
        _type,
        heading,
        description,
        ctas[] {
          url->{
            _id,
            slug
          },
          label,
          secondary
        },
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