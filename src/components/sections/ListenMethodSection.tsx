import { Card, CardContent } from '@/components/ui/card';

export const ListenMethodSection = () => {
  const listenSteps = [
    {
      letter: 'L',
      title: 'Listen',
      description: 'Learn to read your dog\'s body language and communication signals'
    },
    {
      letter: 'I',
      title: 'Invite',
      description: 'Create opportunities for natural exploration and choice-making'
    },
    {
      letter: 'S',
      title: 'Support',
      description: 'Provide appropriate responses that support nervous system regulation'
    },
    {
      letter: 'T',
      title: 'Trust',
      description: 'Allow the natural cycling process of arousal and regulation to unfold'
    },
    {
      letter: 'E',
      title: 'Engage',
      description: 'Be mindfully present as a supportive, calming presence'
    },
    {
      letter: 'N',
      title: 'Nurture',
      description: 'Foster the connection through shared, positive experiences'
    }
  ];

  return (
    <section className="py-12 md:py-16 lg:py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4 max-w-6xl">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center mb-6 md:mb-8 text-forest-deep">
          The LISTEN Method Framework
        </h2>
        
        <div className="text-center mb-8 md:mb-12 max-w-3xl mx-auto">
          <p className="text-lg text-muted-foreground leading-relaxed">
            A structured approach to applying decompression principles that guides both species toward regulation and connection.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {listenSteps.map((step, index) => (
            <Card key={index} className="shadow-soft hover:shadow-medium transition-smooth">
              <CardContent className="pt-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-forest-medium text-white rounded-full flex items-center justify-center font-bold text-lg flex-shrink-0">
                    {step.letter}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-forest-deep mb-2">{step.title}</h3>
                    <p className="text-sm text-muted-foreground">{step.description}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};