import React from 'react';
import { cn } from '@/lib/utils';
interface SvgProps {
  id: string;
  heightClass?: string; //width and height for setting size of SVG
  widthClass?: string;
  svgClassName?: string; // for setting position of SVG. Absolute, inline, etc
  useClassName?: string;
}

export const iconId = [
  'floatArt',
  'logoNoShadow',
  'fragmentArt',
  'SeIllustration',
  'DeveloperIllustration',
];

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
