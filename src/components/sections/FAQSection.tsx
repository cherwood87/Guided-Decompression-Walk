import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { faqData } from '@/data/faqData';

export const FAQSection = () => {
  return (
    <section id="faq" className="py-12 md:py-16 lg:py-20">
      <div className="container mx-auto px-4 max-w-4xl">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center mb-12 md:mb-16 text-forest-deep">
          Frequently Asked Questions
        </h2>
        
        <div className="space-y-6">
          {faqData.map((faq, index) => (
            <Card key={index} className="shadow-medium">
              <CardHeader>
                <CardTitle className="text-forest-deep text-lg md:text-xl">{faq.question}</CardTitle>
              </CardHeader>
              <CardContent>
                {faq.answer}
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12 p-6 bg-forest-light/20 rounded-xl">
          <p className="text-lg font-medium text-forest-deep mb-2">In short:</p>
          <p className="text-muted-foreground">
            We provide the space, structure, and coaching—just bring your dog, some treats, and an open mind.
          </p>
        </div>
      </div>
    </section>
  );
};