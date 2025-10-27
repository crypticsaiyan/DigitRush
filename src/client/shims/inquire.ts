// Browser-safe shim for @protobufjs/inquire
// The real inquire module tries to detect CommonJS `require` using eval and
// dynamic checks which cause bundlers (and security policies) to complain.
// For browser builds we can safely return undefined so protobufjs uses its
// browser-friendly code paths.

export default function inquire(_module: string): any {
  return undefined;
}
