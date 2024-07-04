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
      lastModified: '2024-06-04T11:28:15.949Z',
      changeFrequency: 'yearly',
      priority: 1,
    },
    {
      url: 'https://affotax.com/pricing',
      lastModified: '2024-07-04T11:28:15.949Z',
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: 'https://affotax.com/services',
      lastModified: '2024-07-04T11:28:15.949Z',
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: 'https://affotax.com/about-us',
      lastModified: '2024-07-04T11:28:15.949Z',
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: 'https://affotax.com/contact-us',
      lastModified: '2024-07-04T11:28:15.949Z',
      changeFrequency: 'monthly',
      priority: 0.8,
    },

    ...mappedArr
  ]





  return sitemapArr;
}