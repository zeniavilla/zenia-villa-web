import { LitElement, html, css } from 'lit';

/**
 * <zv-timeline-entry> — A single entry in a career timeline.
 *
 * Demonstrates the web components <slot> API for composition.
 * The connector dot and vertical line live in shadow DOM;
 * body content flows through a named slot into light DOM (fully
 * accessible, indexable, styleable from outside).
 *
 * Attributes:
 *   date       — timeframe label, e.g. "2021 – Present"
 *   title      — job title
 *   company    — company name
 *   is-current — boolean; makes the dot pulse with a CSS animation
 *
 * Slots:
 *   body — the description content
 */
export class ZvTimelineEntry extends LitElement {
  static override properties = {
    date: { type: String },
    title: { type: String },
    company: { type: String },
    isCurrent: { type: Boolean, attribute: 'is-current', reflect: true },
    _open: { type: Boolean, state: true },
  };

  date = '';
  title = '';
  company = '';
  isCurrent = false;
  _open = true;

  static override styles = css`
    :host {
      display: block;
      position: relative;
      padding-left: 2rem;
      padding-bottom: 2.5rem;
    }

    /* Vertical connector line */
    :host::before {
      content: '';
      position: absolute;
      left: 6px;
      top: 14px;
      bottom: 0;
      width: 1px;
      background: var(--border, oklch(0.929 0.013 255.508));
    }

    /* Hide the line on the last entry */
    :host(:last-child)::before {
      display: none;
    }

    /* Connector dot */
    .dot {
      position: absolute;
      left: 0;
      top: 8px;
      width: 14px;
      height: 14px;
      border-radius: 50%;
      background: var(--background, oklch(1 0 0));
      border: 2px solid var(--border, oklch(0.929 0.013 255.508));
      z-index: 1;
      transition: border-color 300ms ease;
    }

    :host([is-current]) .dot {
      background: var(--ai-accent, oklch(0.55 0.18 280));
      border-color: var(--ai-accent, oklch(0.55 0.18 280));
      animation: dot-pulse 2.5s ease-in-out infinite;
    }

    @keyframes dot-pulse {
      0%, 100% {
        box-shadow: 0 0 0 0 var(--ai-accent-muted, oklch(0.55 0.18 280 / 0.4));
      }
      50% {
        box-shadow: 0 0 0 7px transparent;
      }
    }

    /* Header row */
    .header {
      display: flex;
      align-items: flex-start;
      justify-content: space-between;
      gap: 1rem;
      cursor: pointer;
      user-select: none;
      padding-bottom: 0.25rem;
    }

    .header:hover .title {
      color: var(--foreground, oklch(0.129 0.042 264.695));
    }

    .header-left {
      display: flex;
      flex-direction: column;
      gap: 0.125rem;
    }

    .title {
      font-size: 1.125rem;
      font-weight: 400;
      color: var(--foreground, oklch(0.129 0.042 264.695));
      margin: 0;
      transition: color 200ms ease;
    }

    .company {
      font-size: 0.9375rem;
      font-weight: 300;
      color: var(--muted-foreground, oklch(0.554 0.046 257.417));
      margin: 0;
    }

    :host([is-current]) .company {
      color: var(--ai-accent, oklch(0.55 0.18 280));
    }

    .date {
      font-size: 0.75rem;
      font-weight: 300;
      color: var(--muted-foreground, oklch(0.554 0.046 257.417));
      white-space: nowrap;
      padding-top: 0.25rem;
      font-family: 'Courier New', Courier, monospace;
    }

    /* Collapse / expand body via CSS grid trick */
    .body {
      display: grid;
      transition: grid-template-rows 350ms ease, opacity 350ms ease;
    }

    .body.open {
      grid-template-rows: 1fr;
      opacity: 1;
    }

    .body.closed {
      grid-template-rows: 0fr;
      opacity: 0;
    }

    .body-inner {
      overflow: hidden;
    }

    /* Slotted content styles */
    ::slotted([slot='body']) {
      display: block;
      padding-top: 0.75rem;
      font-size: 0.9375rem;
      font-weight: 300;
      line-height: 1.75;
      color: var(--foreground, oklch(0.129 0.042 264.695));
    }

    ::slotted(p + p) {
      margin-top: 0.75rem;
    }
  `;

  private _toggle() {
    this._open = !this._open;
  }

  override render() {
    return html`
      <div class="dot" aria-hidden="true"></div>

      <div
        class="header"
        role="button"
        aria-expanded=${this._open ? 'true' : 'false'}
        tabindex="0"
        @click=${this._toggle}
        @keydown=${(e: KeyboardEvent) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            this._toggle();
          }
        }}
      >
        <div class="header-left">
          <span class="title">${this.title}</span>
          <span class="company">${this.company}</span>
        </div>
        <span class="date">${this.date}</span>
      </div>

      <div class="body ${this._open ? 'open' : 'closed'}">
        <div class="body-inner">
          <slot name="body"></slot>
        </div>
      </div>
    `;
  }
}

customElements.define('zv-timeline-entry', ZvTimelineEntry);

declare global {
  interface HTMLElementTagNameMap {
    'zv-timeline-entry': ZvTimelineEntry;
  }
}
