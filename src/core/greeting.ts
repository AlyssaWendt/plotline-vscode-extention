export function getGreeting(name?: string): string {
  return name ? `Hello, ${name}! Welcome to Plotline.` : 'Hello from Plotline!';
}
