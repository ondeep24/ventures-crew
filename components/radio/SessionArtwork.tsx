import Image from "next/image";

type SessionArtworkProps = {
  src: string;
  alt: string;
  sizes?: string;
  className?: string;
};

export function SessionArtwork({
  src,
  alt,
  sizes = "(min-width: 768px) 50vw, 100vw",
  className = "",
}: SessionArtworkProps) {
  return (
    <Image
      src={src}
      alt={alt}
      width={1254}
      height={1254}
      sizes={sizes}
      className={`h-full w-full object-cover ${className}`}
    />
  );
}
