import { LitElement, html, css } from 'lit';

/**
 * <zv-skill-chip> — A self-contained skill tag with an optional shimmer animation.
 *
 * Uses CSS custom properties from the host document (--foreground, --muted,
 * --border, --ai-accent) so it adapts to light/dark mode automatically.
 *
 * Attributes:
 *   label    — the text to display
 *   variant  — "primary" | "secondary" | "ai"  (default: "primary")
 *
 * Events:
 *   chip-click — fired when the chip is clicked, with { detail: { label, variant } }
 */
export class ZvSkillChip extends LitElement {
  static override properties = {
    label: { type: String },
    variant: { type: String, reflect: true },
  };

  label = '';
  variant: 'primary' | 'secondary' | 'ai' = 'primary';

  static override styles = css`
    :host {
      display: inline-flex;
    }

    .chip {
      display: inline-flex;
      align-items: center;
      gap: 0.25rem;
      padding: 0.25rem 0.75rem;
      border-radius: 9999px;
      font-size: 0.75rem;
      font-weight: 400;
      line-height: 1.5;
      font-family: inherit;
      cursor: default;
      border: 1px solid var(--border, oklch(0.929 0.013 255.508));
      background: var(--muted, oklch(0.968 0.007 247.896));
      color: var(--muted-foreground, oklch(0.554 0.046 257.417));
      position: relative;
      overflow: hidden;
      transition: color 200ms ease, border-color 200ms ease, background 200ms ease;
      white-space: nowrap;
    }

    /* Shimmer sweep */
    .chip::before {
      content: '';
      position: absolute;
      top: 0;
      left: -100%;
      width: 60%;
      height: 100%;
      background: linear-gradient(
        90deg,
        transparent,
        oklch(1 0 0 / 0.15),
        transparent
      );
      transition: left 500ms ease;
      pointer-events: none;
    }

    .chip:hover::before {
      left: 160%;
    }

    /* AI variant */
    :host([variant='ai']) .chip {
      border-color: var(--ai-accent, oklch(0.55 0.18 280));
      color: var(--ai-accent, oklch(0.55 0.18 280));
      background: var(--ai-accent-muted, oklch(0.55 0.18 280 / 0.1));
    }

    :host([variant='ai']) .chip::before {
      background: linear-gradient(
        90deg,
        transparent,
        var(--ai-accent-muted, oklch(0.55 0.18 280 / 0.25)),
        transparent
      );
    }
  `;

  private _handleClick() {
    this.dispatchEvent(
      new CustomEvent('chip-click', {
        detail: { label: this.label, variant: this.variant },
        bubbles: true,
        composed: true,
      })
    );
  }

  override render() {
    return html`
      <span
        class="chip"
        part="chip"
        role="listitem"
        @click=${this._handleClick}
      >
        ${this.label}
      </span>
    `;
  }
}

customElements.define('zv-skill-chip', ZvSkillChip);

declare global {
  interface HTMLElementTagNameMap {
    'zv-skill-chip': ZvSkillChip;
  }
}
