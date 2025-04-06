import React from 'react';
import Image from 'next/image';
import { FaBalanceScale, FaLaptopCode, FaHandshake } from 'react-icons/fa';

interface ValueProposition {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const AboutSection: React.FC = () => {
  const valuePropositions: ValueProposition[] = [
    {
      icon: <FaBalanceScale className="text-4xl text-primary" />,
      title: "מומחיות בחוק הטכנולוגיה",
      description: "צוות המשרד שלנו מתמחה בכל ההיבטים המשפטיים של עולם הטכנולוגיה, כולל קניין רוחני, הגנת מידע ופרטיות, וחוזי תוכנה."
    },
    {
      icon: <FaLaptopCode className="text-4xl text-primary" />,
      title: "הבנה טכנולוגית מעמיקה",
      description: "אנו משלבים ידע משפטי עם הבנה מעמיקה של טכנולוגיות מתקדמות, מה שמאפשר לנו לספק ייעוץ מדויק ורלוונטי לעסקים טכנולוגיים."
    },
    {
      icon: <FaHandshake className="text-4xl text-primary" />,
      title: "שירות אישי ומותאם",
      description: "אנו מאמינים ביצירת קשר אישי עם כל לקוח ובהתאמת הפתרונות המשפטיים לצרכים הספציפיים של העסק שלך."
    }
  ];

  return (
    <section className="py-16 bg-white text-right" dir="rtl">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-8 text-secondary border-r-4 border-primary pr-4">
          אודות משרד עורכי דין ביתא
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="relative h-[400px] w-full rounded-lg overflow-hidden shadow-xl transform transition-transform duration-500 hover:scale-[1.02]">
            <Image
              src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
              alt="משרד עורכי דין ביתא - משרד מקצועי בתחום הטכנולוגיה"
              fill
              className="object-cover"
            />
          </div>
          
          <div>
            <p className="text-lg mb-6 leading-relaxed">
              אנחנו משרד עורכי דין מוביל בתחום האופנה עם ניסיון של שנים רבות. אנחנו מתמחים במתן שירות מקצועי ואיכותי ללקוחותינו.
            </p>
            <p className="text-lg mb-8 leading-relaxed">
              משרד עורכי דין ביתא הוקם מתוך חזון לספק ייעוץ משפטי מקצועי המותאם לעידן הדיגיטלי. בעולם שבו הטכנולוגיה מתפתחת במהירות, אנו מציעים פתרונות משפטיים חדשניים המשלבים הבנה עמוקה של החוק יחד עם ידע טכנולוגי מתקדם.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
              {valuePropositions.map((prop, index) => (
                <div 
                  key={index} 
                  className="bg-gray-50 p-6 rounded-lg shadow-md transition-all duration-300 hover:shadow-lg hover:border-primary border-2 border-transparent"
                >
                  <div className="flex justify-center mb-4">
                    {prop.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-center text-secondary">
                    {prop.title}
                  </h3>
                  <p className="text-gray-700 text-center">
                    {prop.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;