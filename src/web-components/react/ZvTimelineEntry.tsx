import type { ReactNode } from 'react';
import '../zv-timeline-entry';

interface ZvTimelineEntryProps {
  date: string;
  title: string;
  company: string;
  isCurrent?: boolean;
  children: ReactNode;
}

/**
 * React wrapper for <zv-timeline-entry>.
 *
 * Boolean attribute `is-current` is passed as an empty string when
 * true (HTML boolean attribute convention), or omitted when false.
 * Children are rendered into the named slot "body".
 */
export function ZvTimelineEntry({
  date,
  title,
  company,
  isCurrent = false,
  children,
}: ZvTimelineEntryProps) {
  return (
    <zv-timeline-entry
      date={date}
      title={title}
      company={company}
      is-current={isCurrent ? '' : undefined}
    >
      <div slot="body">{children}</div>
    </zv-timeline-entry>
  );
}
