import React from 'react';
import Image from 'next/image';

interface Product {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
}

export default function ProductsSection() {
  const products: Product[] = [
    {
      id: 1,
      title: "חבילת הקמת סטארט-אפ",
      description: "ייעוץ משפטי מקיף להקמת חברות טכנולוגיה, כולל הסכמי מייסדים, מסמכי התאגדות ומבנה משפטי אופטימלי.",
      imageUrl: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 2,
      title: "הגנת קניין רוחני",
      description: "שירותים משפטיים להגנה על פטנטים, סימני מסחר וזכויות יוצרים בתעשיית הטכנולוגיה.",
      imageUrl: "https://images.unsplash.com/photo-1532619675605-1ede6c2ed2b0?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 3,
      title: "חבילת תאימות רגולטורית",
      description: "פתרונות משפטיים להתמודדות עם דרישות רגולטוריות בתחום הטכנולוגיה, כולל GDPR, הגנת פרטיות ואבטחת מידע.",
      imageUrl: "https://images.unsplash.com/photo-1607703703674-df96af81dffa?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 4,
      title: "תבניות הסכמים טכנולוגיים",
      description: "מגוון הסכמים משפטיים מותאמים לחברות טכנולוגיה, כולל הסכמי פיתוח, רישיון תוכנה והסכמי שירות.",
      imageUrl: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    },
  ];

  return (
    <section className="bg-white py-16 px-4 rtl" dir="rtl">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-primary mb-4">המוצרים המשפטיים שלנו</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            משרד עורכי דין ביתא מציע פתרונות משפטיים מותאמים במיוחד לעסקים בתחום הטכנולוגיה
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <div 
              key={product.id} 
              className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform duration-300 hover:shadow-xl hover:-translate-y-2"
            >
              <div className="relative h-56 w-full">
                <Image
                  src={product.imageUrl}
                  alt={product.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-3">{product.title}</h3>
                <p className="text-gray-600 mb-4">{product.description}</p>
                <button className="w-full py-2 px-4 bg-secondary text-white font-semibold rounded-md hover:bg-secondary-dark transition-colors duration-300">
                  למידע נוסף
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}