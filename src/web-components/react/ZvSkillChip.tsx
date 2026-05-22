import '../zv-skill-chip';

interface ZvSkillChipProps {
  label: string;
  variant?: 'primary' | 'secondary' | 'ai';
  className?: string;
  onChipClick?: (label: string, variant: string) => void;
}

/**
 * React wrapper for <zv-skill-chip>.
 * Handles the JSX attribute mapping and optional event bridging.
 */
export function ZvSkillChip({ label, variant = 'primary', className, onChipClick }: ZvSkillChipProps) {
  const handleRef = (el: HTMLElement | null) => {
    if (!el || !onChipClick) return;
    const listener = (e: Event) => {
      const detail = (e as CustomEvent<{ label: string; variant: string }>).detail;
      onChipClick(detail.label, detail.variant);
    };
    el.addEventListener('chip-click', listener);
    return () => el.removeEventListener('chip-click', listener);
  };

  return (
    <zv-skill-chip
      ref={handleRef}
      label={label}
      variant={variant}
      className={className}
    />
  );
}
