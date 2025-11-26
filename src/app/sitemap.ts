import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://journeyonwheel.com"; 

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 1,
    },
  
   
    {
      url: `${baseUrl}/pages/partner`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/pages/blog`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.5,
    },
      {
      url: `${baseUrl}/ pages/blog/1`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
        {
      url: `${baseUrl}/ pages/blog/2`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
          {
      url: `${baseUrl}/ pages/blog/3`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
      {
      url: `${baseUrl}/ pages/blog/4`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },

    // Add more dynamic routes here if needed
  ];
}
