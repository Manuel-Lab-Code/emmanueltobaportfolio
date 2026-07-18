export interface Testimonial {
  id: string;
  name: string;
  role: string;
  quote: string;
  rating: number;
  initials: string;
}

/**
 * Placeholder testimonials — swap these for real client / collaborator
 * quotes before shipping live. Kept generic on purpose (no fabricated
 * company identities).
 */
export const testimonials: Testimonial[] = [
  {
    id: "t1",
    name: "Orogun Jane",
    role: "School Administrator",
    quote:
      "Replace this with a real quote from a client — e.g. feedback on the school management platform delivery, communication, and turnaround time.",
    rating: 5,
    initials: "SC",
  },
  {
    id: "t2",
    name: "Prince Chukwudi",
    role: "Small Business Owner",
    quote:
      "Replace this with real feedback from a business owner you built a site for — what problem it solved and how the collaboration felt.",
    rating: 5,
    initials: "SC",
  },
  {
    id: "t3",
    name: "Ayodele Samuel",
    role: "Startup Founder",
    quote:
      "Replace this with a quote about speed of delivery, code quality, or ease of working together on a React application.",
    rating: 5,
    initials: "SC",
  },
];
