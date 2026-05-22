import { useRef, useEffect } from 'react';
import type { ZvTerminal as ZvTerminalElement } from '../zv-terminal';
import '../zv-terminal';

interface ZvTerminalProps {
  strings: string[];
  speed?: number;
  loop?: boolean;
  prefix?: string;
  showChrome?: boolean;
  className?: string;
}

/**
 * React wrapper for <zv-terminal>.
 *
 * The `strings` array is passed as a DOM property (not an attribute)
 * since it's a complex type — React 19 supports this directly.
 * We use a ref + useEffect as a fallback for the initial render.
 */
export function ZvTerminal({
  strings,
  speed = 65,
  loop = true,
  prefix = '',
  showChrome = false,
  className,
}: ZvTerminalProps) {
  const ref = useRef<ZvTerminalElement>(null);

  useEffect(() => {
    if (ref.current) {
      ref.current.strings = strings;
    }
  }, [strings]);

  return (
    <zv-terminal
      ref={ref}
      speed={speed}
      loop={loop || undefined}
      prefix={prefix}
      show-chrome={showChrome ? '' : undefined}
      className={className}
    />
  );
}
