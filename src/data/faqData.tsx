import { ReactNode } from 'react';

export interface FAQItem {
  question: string;
  answer: ReactNode;
}

export const faqData: FAQItem[] = [
  {
    question: "Will this be safe for my reactive dog?",
    answer: (
      <p className="text-muted-foreground">
        Yes! Guided Decompression Walks are designed <em>for</em> dogs who struggle on leash. With 100 acres of private property, plenty of space to spread out, and trainer-managed setups, your dog will never be forced into greetings or situations that push them over threshold. The goal is calm exploration—not confrontation.
      </p>
    )
  },
  {
    question: "What happens if the weather is bad?",
    answer: (
      <p className="text-muted-foreground">
        Safety and comfort come first. Walks will go ahead in light rain or cooler weather (sniffing is often even better in damp conditions!), but if conditions are unsafe (storms, extreme heat, icy trails), we'll reschedule. You'll receive notice via email or text.
      </p>
    )
  },
  {
    question: "What should I bring?",
    answer: (
      <div className="space-y-2 text-muted-foreground">
        <p>• Your dog's regular flat collar or harness</p>
        <p>• A secure long line if you have one (12–30 ft recommended)</p>
        <p>• High-value treats for reinforcement</p>
        <p>• Water for your dog (and yourself!)</p>
        <p>• Weather-appropriate clothing and footwear (trails may be uneven or muddy)</p>
      </div>
    )
  },
  {
    question: "What equipment is provided?",
    answer: (
      <div className="space-y-2 text-muted-foreground">
        <p><strong>We provide:</strong></p>
        <p>• Extra long lines to borrow if you don't own one</p>
        <p>• Treat pouches (limited)</p>
        <p>• Feathers and scent items we may use during the walk for sniffing exercises</p>
      </div>
    )
  },
  {
    question: "Where do I park and check in?",
    answer: (
      <p className="text-muted-foreground">
        When you arrive at our Richmond, ON property, you'll see signage directing you to the designated parking area near the trail entrance. <strong>Please leave your dog in the car when you first arrive, and come check in with your trainer before unloading your dog.</strong> This helps keep the parking area calm and prevents reactive moments.
      </p>
    )
  },
  {
    question: "Do I need prior training experience?",
    answer: (
      <p className="text-muted-foreground">
        Not at all! We'll guide you through leash handling, sniffing techniques, and everything else during the walk. You just need to show up ready to learn alongside your dog.
      </p>
    )
  }
];