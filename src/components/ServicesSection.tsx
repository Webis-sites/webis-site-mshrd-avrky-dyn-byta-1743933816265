import React from 'react';
import { FaBalanceScale, FaLaptopCode, FaShieldAlt, FaHandshake, FaGavel, FaRegLightbulb } from 'react-icons/fa';

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ icon, title, description }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 flex flex-col items-center text-center">
      <div className="text-primary text-4xl mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-bold mb-3 text-gray-800">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

const ServicesSection: React.FC = () => {
  const services = [
    {
      icon: <FaLaptopCode />,
      title: "קניין רוחני וטכנולוגיה",
      description: "ייעוץ משפטי מקיף בנושאי פטנטים, זכויות יוצרים, סימני מסחר והגנה על נכסים דיגיטליים"
    },
    {
      icon: <FaShieldAlt />,
      title: "הגנת מידע ופרטיות",
      description: "ליווי בנושאי GDPR, תקנות הגנת הפרטיות והתאמת מערכות לדרישות רגולטוריות"
    },
    {
      icon: <FaHandshake />,
      title: "הסכמי תוכנה ורישוי",
      description: "ניסוח וליווי בהסכמי רישוי, הסכמי SaaS, ותנאי שימוש למוצרי תוכנה וטכנולוגיה"
    },
    {
      icon: <FaRegLightbulb />,
      title: "ליווי סטארטאפים",
      description: "תמיכה משפטית לחברות סטארטאפ בכל שלבי ההקמה, גיוס הון, והתפתחות העסקית"
    },
    {
      icon: <FaGavel />,
      title: "ליטיגציה טכנולוגית",
      description: "ייצוג בסכסוכים משפטיים בתחום הטכנולוגיה, הפרות קניין רוחני וסכסוכים מסחריים"
    },
    {
      icon: <FaBalanceScale />,
      title: "רגולציה טכנולוגית",
      description: "ייעוץ בנושאי ציות לרגולציה בתחומי הסייבר, פינטק, בלוקצ'יין וטכנולוגיות מתקדמות"
    }
  ];

  return (
    <section className="py-16 bg-gray-50 font-heebo" dir="rtl">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-4">תחומי התמחות</h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            משרד עורכי דין ביתא מתמחה במתן פתרונות משפטיים מתקדמים לחברות טכנולוגיה, סטארטאפים ויזמים בעולם הדיגיטלי
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard 
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;