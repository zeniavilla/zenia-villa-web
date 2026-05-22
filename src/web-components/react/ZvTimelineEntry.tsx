import type { ZvTimelineEntry as ZvTimelineEntryElement } from '../zv-timeline-entry';
import '../zv-timeline-entry';

interface ZvTimelineEntryProps {
  date: string;
  title: string;
  company: string;
  isCurrent?: boolean;
  paragraphs: string[];
}

/**
 * React wrapper for <zv-timeline-entry>.
 *
 * `paragraphs` is a string array — set via a callback ref so the property is
 * applied the moment the element is inserted into the DOM (synchronous, no effect
 * delay). React 19 would also handle array props directly on custom elements, but
 * the callback ref is explicit and works in all React versions.
 */
export function ZvTimelineEntry({
  date,
  title,
  company,
  isCurrent = false,
  paragraphs,
}: ZvTimelineEntryProps) {
  console.log("Timeline", paragraphs)
  const setRef = (el: ZvTimelineEntryElement | null) => {
    if (el) {
      el.paragraphs = paragraphs;
    }
  };

  return (
    <zv-timeline-entry
      ref={setRef}
      date={date}
      title={title}
      company={company}
      is-current={isCurrent ? '' : undefined}
    />
  );
}
