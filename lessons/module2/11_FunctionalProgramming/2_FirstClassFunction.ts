type Action = (name: string) => string;

export const hi: Action = (name) => `Hi ${name}`;
export const greeting: Action = (name) => hi(name);
