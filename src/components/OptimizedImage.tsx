import { ImgHTMLAttributes, forwardRef } from "react";

interface OptimizedImageProps extends ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  srcSet?: string;
  sizes?: string;
  priority?: boolean;
  width?: number | string;
  height?: number | string;
  quality?: number;
}

export const OptimizedImage = forwardRef<HTMLImageElement, OptimizedImageProps>(
  (
    {
      src,
      alt,
      srcSet,
      sizes,
      priority = false,
      width,
      height,
      quality = 85,
      className = "",
      loading,
      decoding,
      ...props
    },
    ref
  ) => {
    const effectiveLoading = priority ? "eager" : loading || "lazy";
    const effectiveDecoding = decoding || "async";

    // Add quality parameter to Builder.io URLs if not already present
    const optimizedSrc = src.includes("builder.io") && !src.includes("quality=")
      ? `${src}&quality=${quality}`
      : src;

    return (
      <img
        ref={ref}
        src={optimizedSrc}
        alt={alt}
        width={width}
        height={height}
        loading={effectiveLoading}
        decoding={effectiveDecoding}
        {...(srcSet && { srcSet })}
        {...(sizes && { sizes })}
        className={className}
        {...props}
      />
    );
  }
);

OptimizedImage.displayName = "OptimizedImage";
