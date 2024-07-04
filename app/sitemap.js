import { dataArr } from "@/data/serviceData"

export default function sitemap() {
  


  const mappedArr = dataArr.map((el) => {
    return {
      url: `https://affotax.com/${el.link}`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,

    }
  })


  const  sitemapArr = [
    {
      url: 'https://affotax.com',
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 1,
    },
    {
      url: 'https://affotax.com/pricing',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: 'https://affotax.com/services',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: 'https://affotax.com/about-us',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: 'https://affotax.com/contact-us',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },

    ...mappedArr
  ]





  return sitemapArr;
}