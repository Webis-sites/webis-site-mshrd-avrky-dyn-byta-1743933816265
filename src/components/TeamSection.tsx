import React from 'react';
import { FaLinkedin, FaTwitter, FaEnvelope } from 'react-icons/fa';
import Image from 'next/image';

interface TeamMember {
  id: number;
  name: string;
  position: string;
  expertise: string;
  image: string;
  social?: {
    email?: string;
    linkedin?: string;
    twitter?: string;
  };
}

const TeamSection: React.FC = () => {
  const teamMembers: TeamMember[] = [
    {
      id: 1,
      name: 'אדם כהן',
      position: 'שותף מייסד',
      expertise: 'מומחה בדיני הייטק וסטארטאפים עם ניסיון של למעלה מ-20 שנה בליווי חברות טכנולוגיה',
      image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a',
      social: {
        email: 'adam@betalaw.co.il',
        linkedin: 'https://linkedin.com',
        twitter: 'https://twitter.com'
      }
    },
    {
      id: 2,
      name: 'מיכל לוי',
      position: 'ראש מחלקת קניין רוחני',
      expertise: 'מתמחה בפטנטים, סימני מסחר וזכויות יוצרים בתחום הטכנולוגיה',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2',
      social: {
        email: 'michal@betalaw.co.il',
        linkedin: 'https://linkedin.com'
      }
    },
    {
      id: 3,
      name: 'דוד אברהמי',
      position: 'שותף בכיר',
      expertise: 'מומחה בהסכמי השקעה, גיוסי הון ומיזוגים ורכישות בתעשיית ההייטק',
      image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7',
      social: {
        email: 'david@betalaw.co.il',
        linkedin: 'https://linkedin.com'
      }
    },
    {
      id: 4,
      name: 'נועה גולן',
      position: 'ראש מחלקת הגנת הפרטיות וסייבר',
      expertise: 'מובילה בתחום אבטחת מידע, GDPR והגנת הפרטיות בעולם הדיגיטלי',
      image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956',
      social: {
        email: 'noa@betalaw.co.il',
        linkedin: 'https://linkedin.com'
      }
    },
    {
      id: 5,
      name: 'יוסף מזרחי',
      position: 'ראש מחלקת ליטיגציה מסחרית',
      expertise: 'מייצג חברות טכנולוגיה בסכסוכים מסחריים מורכבים וליטיגציה בינלאומית',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d',
      social: {
        email: 'yosef@betalaw.co.il',
        linkedin: 'https://linkedin.com'
      }
    }
  ];

  return (
    <section className="bg-white py-16 px-4 sm:px-6 lg:px-8 rtl" dir="rtl">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">הצוות המקצועי שלנו</h2>
          <div className="w-24 h-1 bg-primary mx-auto"></div>
          <p className="mt-6 text-xl text-gray-600 max-w-3xl mx-auto">
            הצוות המשפטי של משרד עורכי דין ביתא מורכב ממומחים מובילים בתחום המשפט הטכנולוגי,
            המלווים את לקוחותינו בכל האתגרים המשפטיים בעולם ההייטק המתפתח.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {teamMembers.map((member) => (
            <div 
              key={member.id} 
              className="bg-gray-50 rounded-lg overflow-hidden shadow-lg transition-transform duration-300 hover:shadow-xl hover:-translate-y-2"
            >
              <div className="relative h-80 w-full">
                <Image
                  src={`${member.image}?fit=crop&w=800&h=600&q=80`}
                  alt={member.name}
                  layout="fill"
                  objectFit="cover"
                  className="transition-transform duration-500 hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-1">{member.name}</h3>
                <p className="text-secondary font-medium mb-3">{member.position}</p>
                <p className="text-gray-600 mb-4">{member.expertise}</p>
                
                <div className="flex space-x-4 space-x-reverse">
                  {member.social?.email && (
                    <a 
                      href={`mailto:${member.social.email}`}
                      className="text-gray-500 hover:text-primary transition-colors"
                      aria-label={`שלח מייל ל${member.name}`}
                    >
                      <FaEnvelope size={20} />
                    </a>
                  )}
                  {member.social?.linkedin && (
                    <a 
                      href={member.social.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-500 hover:text-primary transition-colors"
                      aria-label={`הפרופיל של ${member.name} בלינקדאין`}
                    >
                      <FaLinkedin size={20} />
                    </a>
                  )}
                  {member.social?.twitter && (
                    <a 
                      href={member.social.twitter}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-500 hover:text-primary transition-colors"
                      aria-label={`הפרופיל של ${member.name} בטוויטר`}
                    >
                      <FaTwitter size={20} />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;