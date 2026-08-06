import { ARTICLES } from "./articles.js";
import { LAWYERS } from "../pages/LawyerProfile/lawyers.js";

/**
 * Dynamic Template Asset Preloader Utility
 * Automatically scans all assets, dataset image URLs, and template placeholders dynamically.
 */
export function getDynamicAssetUrls() {
  const assetMap = new Set();

  // 1. Dynamically discover all local template assets in src/assets/ using Vite glob
  try {
    const globAssets = import.meta.glob('../assets/**/*.{png,jpg,jpeg,svg,webp,gif}', {
      eager: true,
      import: 'default',
    });
    Object.values(globAssets).forEach((url) => {
      if (url && typeof url === 'string') {
        assetMap.add(url);
      }
    });
  } catch (e) {
    // Vite glob fallback
  }


  // 2. Extract image URLs dynamically from Articles dataset
  if (Array.isArray(ARTICLES)) {
    ARTICLES.forEach((article) => {
      if (article?.image) assetMap.add(article.image);
      if (article?.author?.avatar) assetMap.add(article.author.avatar);
    });
  }

  // 3. Extract image URLs dynamically from Lawyers roster
  if (Array.isArray(LAWYERS)) {
    LAWYERS.forEach((lawyer) => {
      if (lawyer?.photo) assetMap.add(lawyer.photo);
    });
  }

  return Array.from(assetMap);
}

/**
 * Preloads an array of image URLs asynchronously with real progress callbacks.
 */
export function preloadAllAssets(urls, onProgress) {
  return new Promise((resolve) => {
    if (!Array.isArray(urls) || urls.length === 0) {
      if (onProgress) onProgress(100);
      resolve();
      return;
    }

    let loadedCount = 0;
    const totalCount = urls.length;

    const handleSingleAssetComplete = () => {
      loadedCount += 1;
      const pct = Math.min(100, Math.round((loadedCount / totalCount) * 100));
      if (onProgress) onProgress(pct);
      if (loadedCount >= totalCount) {
        resolve();
      }
    };

    urls.forEach((src) => {
      if (!src) {
        handleSingleAssetComplete();
        return;
      }
      const img = new Image();
      img.onload = handleSingleAssetComplete;
      img.onerror = handleSingleAssetComplete; // Fallback so broken paths never hang loading
      img.src = src;
    });

    // Safety net fallback after 3.5s
    setTimeout(() => {
      if (onProgress) onProgress(100);
      resolve();
    }, 3500);
  });
}
