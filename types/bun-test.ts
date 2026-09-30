declare module "bun:test" {
  interface Matchers {
    toEqual(expected: unknown): void
    toBe(expected: unknown): void
    toThrow(expected?: string | RegExp): void
    toBeNull(): void
  }

  export function describe(name: string, fn: () => void): void
  export function test(name: string, fn: () => void | Promise<void>): void
  export function expect(actual: unknown): Matchers
}
