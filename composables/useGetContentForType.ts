type Props = {
  slug: string,
  type: "page" | "cat"
}

export async function useGetContentForType(properties: Props) {
  let query = '';
  if (properties.type === "page") {
    query = groq`*[_type == "page" && slug.current == $slug][0]{
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
          small,
          nospace,
          darkImageUsed,
          ctas[] {
            url->{
              _id,
              slug
            },
            label,
            secondary,
            onDarkBackground
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
            secondary,
            onDarkBackground
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
            secondary,
            onDarkBackground
          },
          "cats": cats[]->{
            _id,
            name,
            birthDate,
            sterilised,
            sex,
            images
          }
        }
      },
    }`;
  }

  if (properties.type === "cat") {
    query = groq`*[_type == "cat" && _id == $slug][0]`
  }
  const { data, error, encodeDataAttribute } = await useSanityQuery(query, { slug: properties.slug });

  if (!error) {
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