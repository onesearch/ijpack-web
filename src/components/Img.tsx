import Image, { type ImageProps } from "next/image";
import { imageSizes } from "@/data/imageSizes";

type Props = Omit<ImageProps, "src" | "width" | "height"> & { src: string };

// next/image wrapper for files in /public/assets: looks up the intrinsic size so
// callers only pass src/alt/style, and lets CSS (max-height, object-fit, …) drive layout.
export default function Img({ src, alt, style, ...rest }: Props) {
  const size = imageSizes[src];
  if (!size) throw new Error(`Unknown image "${src}" — regenerate src/data/imageSizes.ts`);
  return (
    <Image
      src={src}
      alt={alt}
      width={size[0]}
      height={size[1]}
      style={{ width: "auto", height: "auto", ...style }}
      {...rest}
    />
  );
}
