// export default function robots() {
//     return {
//       rules: {
//         userAgent: '*',
//         disallow: '/',
//       },
//       sitemap: 'https://affotax.com/sitemap.xml',
//     }
//   }









  
export default function robots() {
  return {
    rules: {
      userAgent: '*',
      disallow: '/',
      allow: '/sitemap.xml',
    },
    sitemap: 'https://affotax.com/sitemap.xml',
  }
}















// export default function robots() {
//   return {
//     rules: {
//       userAgent: '*',
//       allow: '/',
//       disallow: '/private/',
//     },
//     sitemap: 'https://affotax.com/sitemap.xml',
//   }
// }