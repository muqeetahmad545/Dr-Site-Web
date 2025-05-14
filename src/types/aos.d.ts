// aos.d.ts
declare module 'aos' {
  export interface AosOptions {
    duration?: number;
    delay?: number;
    offset?: number;
    easing?: string;
    once?: boolean;
    anchorPlacement?: string;
  }

  const AOS: {
    init(options?: AosOptions): void;
    refresh(): void;
    destroy(): void;
  };

  export default AOS;
}
