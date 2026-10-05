import { getImageProps } from "next/image";

const TRANSPARENT_PIXEL =
  "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7";

interface ResponsiveImageProps {
  /** Image used from the `lg` breakpoint up (Figma desktop frame). */
  desktop?: string;
  /** Image used below `lg` (Figma mobile frame). */
  mobile?: string;
  alt?: string;
  sizes?: string;
  /**
   * Classes for the <img>. Use `lg:` variants for anything that differs between the frames,
   * e.g. `object-cover [object-position:50%_35%] lg:[object-position:50%_50%]`.
   */
  className?: string;
  unoptimized?: boolean;
  /** Load eagerly with high priority (above-the-fold images). */
  priority?: boolean;
}

/**
 * Art direction for the two Figma frames: the mobile and desktop frames use different photos and
 * crops, so a <picture> serves the right file for each viewport and the browser downloads only that
 * one. Must sit inside a `relative` parent (the image fills it).
 */
export default function ResponsiveImage({
  desktop,
  mobile,
  alt = "",
  sizes = "100vw",
  className = "object-cover",
  unoptimized,
  priority,
}: ResponsiveImageProps) {
  const common = { alt, fill: true, sizes, unoptimized, priority } as const;

  // Desktop-only image. Eager images would download even while hidden, so serve it through a
  // <picture> whose fallback is a transparent pixel: below `lg` nothing is fetched.
  if (desktop && !mobile) {
    const { props } = getImageProps({ ...common, src: desktop });
    if (priority) {
      return (
        <picture>
          <source media="(min-width: 1024px)" srcSet={props.srcSet ?? props.src} sizes={sizes} />
          <img
            {...props}
            src={TRANSPARENT_PIXEL}
            srcSet={undefined}
            alt={alt}
            className={className}
          />
        </picture>
      );
    }
    // eslint-disable-next-line @next/next/no-img-element
    return <img {...props} alt={alt} className={`${className} hidden lg:block`} />;
  }

  // Mobile-only image: hidden from `lg` up.
  if (mobile && !desktop) {
    const { props } = getImageProps({ ...common, src: mobile });
    // eslint-disable-next-line @next/next/no-img-element
    return <img {...props} alt={alt} className={`${className} lg:hidden`} />;
  }

  if (!mobile || !desktop) return null;

  const { props: desktopProps } = getImageProps({ ...common, src: desktop });
  const { props: mobileProps } = getImageProps({ ...common, src: mobile });

  return (
    <picture>
      <source media="(min-width: 1024px)" srcSet={desktopProps.srcSet ?? desktopProps.src} sizes={sizes} />
      <img {...mobileProps} alt={alt} className={className} />
    </picture>
  );
}
