import { PHOTOS } from '@/utils/images';
import { cn } from '@/utils/cn';

type PhotoProps = {
  /** key into the PHOTOS map (see utils/images.ts) */
  name: keyof typeof PHOTOS | string;
  alt: string;
  className?: string;
  /** custom-corner style: 'a' = TL/BR big, 'b' = TR/BL big */
  corner?: 'a' | 'b' | 'none';
};

/**
 * Renders a real photo when available, otherwise a palette-tinted gradient
 * placeholder. Applies the signature asymmetric custom-corner frame + sage ring.
 */
export default function Photo({ name, alt, className, corner = 'a' }: PhotoProps) {
  const src = PHOTOS[name];
  const cornerClass =
    corner === 'a'
      ? 'rounded-tl-[48px] rounded-br-[48px] rounded-tr-[14px] rounded-bl-[14px]'
      : corner === 'b'
        ? 'rounded-tr-[48px] rounded-bl-[48px] rounded-tl-[14px] rounded-br-[14px]'
        : 'rounded-2xl';

  return (
    <div
      className={cn(
        'relative overflow-hidden ring-1 ring-sage/90',
        cornerClass,
        className,
      )}
    >
      {src ? (
        <img src={src} alt={alt} className="h-full w-full object-cover" />
      ) : (
        <div
          role="img"
          aria-label={alt}
          className="h-full w-full bg-gradient-to-br from-sage via-olive to-deep"
        />
      )}
    </div>
  );
}
