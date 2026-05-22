import { LitElement, html, css } from 'lit';

/**
 * <zv-terminal> — A typing-animation terminal component.
 *
 * Owns its own IntersectionObserver (starts when visible), interval timer,
 * and cursor blink — the cleanest case for a platform primitive.
 *
 * Attributes:
 *   speed       — ms per character (default: 65)
 *   loop        — whether to loop through strings (default: true)
 *   prefix      — text to prepend before the typed content, e.g. "> "
 *   show-chrome — show the fake terminal window frame (default: false)
 *
 * Properties (set imperatively via ref):
 *   strings     — string[] of phrases to type through
 */
export class ZvTerminal extends LitElement {
  static override properties = {
    speed: { type: Number },
    loop: { type: Boolean },
    prefix: { type: String },
    showChrome: { type: Boolean, attribute: 'show-chrome' },
    // Internal reactive state
    _displayText: { type: String, state: true },
  };

  speed = 65;
  loop = true;
  prefix = '';
  showChrome = false;
  strings: string[] = [];

  _displayText = '';

  private _currentStringIndex = 0;
  private _currentCharIndex = 0;
  private _isDeleting = false;
  private _typeInterval?: ReturnType<typeof setInterval>;
  private _pauseTimeout?: ReturnType<typeof setTimeout>;
  private _observer?: IntersectionObserver;
  private _started = false;

  static override styles = css`
    :host {
      display: inline;
      font-family: inherit;
    }

    .terminal-chrome {
      display: block;
      background: oklch(0.15 0.03 265);
      border-radius: 8px;
      overflow: hidden;
      border: 1px solid oklch(0.3 0.04 265);
    }

    .chrome-header {
      display: flex;
      align-items: center;
      gap: 6px;
      padding: 10px 16px;
      background: oklch(0.2 0.03 265);
      border-bottom: 1px solid oklch(0.3 0.04 265);
    }

    .dot {
      width: 12px;
      height: 12px;
      border-radius: 50%;
    }
    .dot-red    { background: #ff5f57; }
    .dot-yellow { background: #febc2e; }
    .dot-green  { background: #28c840; }

    .terminal-body {
      padding: 16px 20px;
      font-family: 'Courier New', Courier, monospace;
    }

    .text-line {
      color: var(--foreground, oklch(0.984 0.003 247.858));
    }

    .prefix {
      color: var(--ai-accent, oklch(0.72 0.18 280));
      margin-right: 0.125rem;
    }

    .cursor {
      display: inline-block;
      width: 2px;
      height: 1em;
      background: var(--ai-accent, oklch(0.72 0.18 280));
      margin-left: 1px;
      vertical-align: text-bottom;
      animation: cursor-blink 1s step-start infinite;
    }

    @keyframes cursor-blink {
      0%, 100% { opacity: 1; }
      50%       { opacity: 0; }
    }
  `;

  override connectedCallback() {
    super.connectedCallback();
    this._observer = new IntersectionObserver(
      entries => {
        if (entries[0].isIntersecting && !this._started) {
          this._started = true;
          this._startTyping();
        }
      },
      { threshold: 0.2 }
    );
    this._observer.observe(this);
  }

  override disconnectedCallback() {
    super.disconnectedCallback();
    this._observer?.disconnect();
    clearInterval(this._typeInterval);
    clearTimeout(this._pauseTimeout);
  }

  private _startTyping() {
    if (!this.strings.length) return;
    this._scheduleNext(this.speed);
  }

  private _scheduleNext(delay: number) {
    clearInterval(this._typeInterval);
    this._typeInterval = setInterval(() => this._tick(), delay);
  }

  private _tick() {
    const currentString = this.strings[this._currentStringIndex];

    if (!this._isDeleting) {
      this._displayText = currentString.slice(0, this._currentCharIndex + 1);
      this._currentCharIndex++;

      if (this._currentCharIndex >= currentString.length) {
        // Finished typing — pause, then start deleting
        clearInterval(this._typeInterval);
        this._pauseTimeout = setTimeout(() => {
          this._isDeleting = true;
          this._scheduleNext(Math.floor(this.speed / 2));
        }, 1800);
      }
    } else {
      this._displayText = currentString.slice(0, this._currentCharIndex - 1);
      this._currentCharIndex--;

      if (this._currentCharIndex <= 0) {
        this._isDeleting = false;
        this._currentStringIndex =
          (this._currentStringIndex + 1) % this.strings.length;
        clearInterval(this._typeInterval);
        this._pauseTimeout = setTimeout(() => {
          this._scheduleNext(this.speed);
        }, 400);
      }
    }
  }

  override render() {
    const content = html`
      <span class="text-line">
        ${this.prefix ? html`<span class="prefix">${this.prefix}</span>` : ''}${this._displayText}<span
          class="cursor"
          aria-hidden="true"
        ></span>
      </span>
    `;

    if (this.showChrome) {
      return html`
        <div class="terminal-chrome">
          <div class="chrome-header" aria-hidden="true">
            <span class="dot dot-red"></span>
            <span class="dot dot-yellow"></span>
            <span class="dot dot-green"></span>
          </div>
          <div class="terminal-body">${content}</div>
        </div>
      `;
    }

    return content;
  }
}

customElements.define('zv-terminal', ZvTerminal);

declare global {
  interface HTMLElementTagNameMap {
    'zv-terminal': ZvTerminal;
  }
}
