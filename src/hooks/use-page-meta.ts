import { useEffect } from "react";

interface BreadcrumbItem {
  name: string;
  url: string;
}

interface PageMetaProps {
  title: string;
  description: string;
  keywords?: string;
  image?: string;
  type?: "website" | "article" | "product";
  canonical?: string;
  breadcrumbs?: BreadcrumbItem[];
  author?: string;
  publishedDate?: string;
  modifiedDate?: string;
}

export const usePageMeta = ({
  title,
  description,
  keywords,
  image,
  type = "website",
  canonical,
  breadcrumbs,
  author,
  publishedDate,
  modifiedDate,
}: PageMetaProps) => {
  useEffect(() => {
    // Set document title
    document.title = title;

    // Update or create meta description
    let descriptionMeta = document.querySelector('meta[name="description"]');
    if (descriptionMeta) {
      descriptionMeta.setAttribute("content", description);
    } else {
      descriptionMeta = document.createElement("meta");
      descriptionMeta.setAttribute("name", "description");
      descriptionMeta.setAttribute("content", description);
      document.head.appendChild(descriptionMeta);
    }

    // Update or create meta keywords
    if (keywords) {
      let keywordsMeta = document.querySelector('meta[name="keywords"]');
      if (keywordsMeta) {
        keywordsMeta.setAttribute("content", keywords);
      } else {
        keywordsMeta = document.createElement("meta");
        keywordsMeta.setAttribute("name", "keywords");
        keywordsMeta.setAttribute("content", keywords);
        document.head.appendChild(keywordsMeta);
      }
    }

    // Update Open Graph tags
    const updateOGTag = (property: string, content: string) => {
      let og = document.querySelector(`meta[property="${property}"]`);
      if (og) {
        og.setAttribute("content", content);
      } else {
        og = document.createElement("meta");
        og.setAttribute("property", property);
        og.setAttribute("content", content);
        document.head.appendChild(og);
      }
    };

    updateOGTag("og:title", title);
    updateOGTag("og:description", description);
    updateOGTag("og:type", type);

    if (image) {
      updateOGTag("og:image", image);
    }

    // Update Twitter Card tags
    const updateTwitterTag = (name: string, content: string) => {
      let twitter = document.querySelector(`meta[name="${name}"]`);
      if (twitter) {
        twitter.setAttribute("content", content);
      } else {
        twitter = document.createElement("meta");
        twitter.setAttribute("name", name);
        twitter.setAttribute("content", content);
        document.head.appendChild(twitter);
      }
    };

    updateTwitterTag("twitter:title", title);
    updateTwitterTag("twitter:description", description);

    if (image) {
      updateTwitterTag("twitter:image", image);
    }
  }, [title, description, keywords, image, type]);
};
