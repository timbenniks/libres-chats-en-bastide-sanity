import { asSitemapUrl, defineSitemapEventHandler } from '#imports'

export default defineSitemapEventHandler(async (e) => {

  const sanity = useSanity();
  const sanityCats = await sanity.fetch(groq`*[_type == "cat"]{ _id }`);
  const sanityPages = await sanity.fetch(groq`*[_type == "page"] { slug }`);

  const pages = sanityPages.map((page: any) => {
    return asSitemapUrl({
      loc: `/${page.slug.current !== "home" ? page.slug.current : ""}`
    }) || []
  })

  const cats = sanityCats.map((cat: any) => {
    return asSitemapUrl({
      loc: `/cats/${cat._id}`,
    }) || []
  })



  return [...pages, ...cats]
});
