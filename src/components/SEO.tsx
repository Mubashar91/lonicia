import { useEffect } from 'react';

interface SEOProps {
  title: string;
  description?: string;
  canonicalUrl?: string;
  noIndex?: boolean;
  jsonLd?: Record<string, unknown> | string;
}

const SEO: React.FC<SEOProps> = ({ title, description, canonicalUrl, noIndex, jsonLd }) => {
  useEffect(() => {
    if (title) {
      document.title = title;

      const ogTitle = document.querySelector<HTMLMetaElement>('meta[property="og:title"]');
      if (ogTitle) {
        ogTitle.content = title;
      }

      const twitterTitle = document.querySelector<HTMLMetaElement>('meta[name="twitter:title"]');
      if (twitterTitle) {
        twitterTitle.content = title;
      }
    }

    if (description) {
      let metaDescription = document.querySelector<HTMLMetaElement>('meta[name="description"]');
      if (!metaDescription) {
        metaDescription = document.createElement('meta');
        metaDescription.name = 'description';
        document.head.appendChild(metaDescription);
      }
      metaDescription.content = description;

      const ogDescription = document.querySelector<HTMLMetaElement>('meta[property="og:description"]');
      if (ogDescription) {
        ogDescription.content = description;
      }

      const twitterDescription = document.querySelector<HTMLMetaElement>('meta[name="twitter:description"]');
      if (twitterDescription) {
        twitterDescription.content = description;
      }
    }

    const robotsValue = noIndex ? 'noindex,nofollow' : 'index,follow';
    let robotsMeta = document.querySelector<HTMLMetaElement>('meta[name="robots"]');
    if (!robotsMeta) {
      robotsMeta = document.createElement('meta');
      robotsMeta.name = 'robots';
      document.head.appendChild(robotsMeta);
    }
    robotsMeta.content = robotsValue;

    if (canonicalUrl) {
      let canonicalLink = document.querySelector<HTMLLinkElement>('link[rel="canonical"]');
      if (!canonicalLink) {
        canonicalLink = document.createElement('link');
        canonicalLink.rel = 'canonical';
        document.head.appendChild(canonicalLink);
      }
      canonicalLink.href = canonicalUrl;

      const ogUrl = document.querySelector<HTMLMetaElement>('meta[property="og:url"]');
      if (ogUrl) {
        ogUrl.content = canonicalUrl;
      }
    }

    const ogImageSelector = 'meta[property="og:image"]';
    let ogImage = document.querySelector<HTMLMetaElement>(ogImageSelector);
    if (!ogImage) {
      ogImage = document.createElement('meta');
      ogImage.setAttribute('property', 'og:image');
      document.head.appendChild(ogImage);
    }
    ogImage.content = '/logo.jpeg';

    const twitterImageSelector = 'meta[name="twitter:image"]';
    let twitterImage = document.querySelector<HTMLMetaElement>(twitterImageSelector);
    if (!twitterImage) {
      twitterImage = document.createElement('meta');
      twitterImage.setAttribute('name', 'twitter:image');
      document.head.appendChild(twitterImage);
    }
    twitterImage.content = '/logo.jpeg';

    if (jsonLd) {
      let script = document.getElementById('seo-jsonld') as HTMLScriptElement | null;
      if (!script) {
        script = document.createElement('script');
        script.type = 'application/ld+json';
        script.id = 'seo-jsonld';
        document.head.appendChild(script);
      }

      try {
        const content = typeof jsonLd === 'string' ? jsonLd : JSON.stringify(jsonLd);
        script.text = content;
      } catch {
        // ignore JSON errors silently
      }
    }
  }, [title, description, canonicalUrl, noIndex, jsonLd]);

  return null;
};

export default SEO;
