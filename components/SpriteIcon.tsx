import React from 'react';
import { cn } from '@/lib/utils';
interface SvgProps {
  id: string;
  heightClass?: string; //width and height for setting SIZE of SVG
  widthClass?: string;
  svgClassName?: string; // for setting POSITION of SVG. Absolute, inline, etc
  useClassName?: string;
}

export const iconId = [
  'floatArt',
  'logoNoShadow',
  'fragmentArt',
  'SeIllustration',
  'DeveloperIllustration',
];

// Responsive size and position. Cannot make responsive colour for dark/light mode. Use inline SVG instead.
// https://svgomg.net/
// https://youtu.be/MbUyHQRq2go

export default function SpriteIcon({
  id,
  heightClass,
  widthClass,
  svgClassName,
  useClassName,
}: SvgProps) {
  return (
    <svg className={cn(heightClass, widthClass, svgClassName)}>
      <use
        className={cn(heightClass, widthClass, useClassName)}
        href={`/assets/svgs/sprite.svg#${id}`}
      />
    </svg>
  );
}
