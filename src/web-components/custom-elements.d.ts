/**
 * JSX type declarations for the three Lit web components.
 *
 * Extends React's IntrinsicElements via module augmentation so TypeScript
 * recognises <zv-skill-chip>, <zv-terminal>, and <zv-timeline-entry> in JSX.
 * Using DetailedHTMLProps to include ref, key, and all standard HTML attributes.
 */

import type * as React from 'react';

type CustomEl<T extends object = object> = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLElement>,
  HTMLElement
> &
  T;

declare module 'react' {
  // eslint-disable-next-line @typescript-eslint/no-namespace
  namespace JSX {
    interface IntrinsicElements {
      'zv-skill-chip': CustomEl<{
        label?: string;
        variant?: 'primary' | 'secondary' | 'ai';
      }>;
      'zv-terminal': CustomEl<{
        speed?: number;
        loop?: boolean | string;
        prefix?: string;
        'show-chrome'?: string;
      }>;
      'zv-timeline-entry': CustomEl<{
        date?: string;
        title?: string;
        company?: string;
        'is-current'?: string;
      }>;
    }
  }
}
