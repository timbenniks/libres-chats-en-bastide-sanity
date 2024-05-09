import imageUrlBuilder from '@sanity/image-url'

export async function useOGTags(page: any) {
  const builder = imageUrlBuilder(useSanity().config)

  useSeoMeta({
    title: page.title,
    ogTitle: page.title,
    description: page.description,
    ogDescription: page.description,
    ogImage: builder.image(page.image).auto('format').url(),
    ogSiteName: "Libres Chats en Bastide",
    ogType: "website",
    twitterCard: "summary_large_image",
    twitterDescription: page.description,
  });
}