export default function WebpImage({ src, alt, ...props }) {
  let webpSrc;

  try {
    const path = src.replace(/\.(png|jpe?g)$/, '.webp');
    webpSrc = new URL(path, import.meta.url).href;
  } catch {
    webpSrc = src;
  }

  return (
    <picture>
      <source srcSet={webpSrc} type="image/webp" />
      <img src={src} alt={alt} loading="lazy" decoding="async" {...props} />
    </picture>
  );
}
