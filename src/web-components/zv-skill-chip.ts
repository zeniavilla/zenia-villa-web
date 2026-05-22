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

  // 'declare' prevents TypeScript from emitting a class-field initializer, which
  // would shadow Lit's reactive prototype accessor when useDefineForClassFields=true.
  // Default values are set in the constructor (through the reactive setter).
  declare label: string;
  declare variant: 'primary' | 'secondary' | 'ai';

  constructor() {
    super();
    this.label = '';
    this.variant = 'primary';
  }

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

    /* AI variant */
    :host([variant='ai']) .chip {
      border-color: var(--ai-accent, oklch(0.55 0.18 280));
      color: var(--ai-accent, oklch(0.55 0.18 280));
      background: oklch(0.55 0.18 280 / 0.1);
      transition:
        background 1500ms ease 250ms,
        box-shadow 1500ms ease 250ms;
    }

    :host([variant='ai']) .chip:hover {
      background: oklch(0.48 0.20 280 / 0.38);
      box-shadow: 0 0 14px 3px oklch(0.55 0.18 280 / 0.35);
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
