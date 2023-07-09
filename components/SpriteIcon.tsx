import React from 'react';

interface SvgProps {
  id: string;
  [key: string]: any;
}

export const iconId = ['floatArt', 'logoNoShadow', 'fragmentArt'];

export default function SpriteIcon({ id, ...props }: SvgProps) {
  return (
    <svg {...props}>
      <use href={`/assets/svgs/sprite.svg#${id}`} />
    </svg>
  );
}
