declare module '*.md?raw' {
  const content: string;
  export default content;
}

interface Window {
  console: Console;
}
