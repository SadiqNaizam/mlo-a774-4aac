import React, { useState } from 'react';

// Custom Components
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import MenuItemCard from '@/components/MenuItemCard';
import RatingInput from '@/components/RatingInput';

// shadcn/ui Components
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card } from "@/components/ui/card";

// Lucide Icons
import { MapPin, Clock } from 'lucide-react';

// --- Placeholder Data ---
const restaurant = {
  name: "Mama's Trattoria",
  rating: 4.5,
  tags: ["Italian", "Pasta", "Family Friendly"],
  address: "123 Pizza Lane, Foodie Town",
  openingHours: "11:00 AM - 10:00 PM",
  bannerUrl: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=1974&auto=format&fit=crop",
  avatarUrl: "https://i.pravatar.cc/150?u=mamas-trattoria",
};

const menu = {
  mainCourses: [
    {
      id: "mc1",
      name: "Spaghetti Carbonara",
      description: "A classic Roman pasta dish with creamy egg sauce, pecorino cheese, pancetta, and black pepper.",
      price: 18.50,
      imageUrl: "https://images.unsplash.com/photo-1608796335042-3a52d7cb455e?q=80&w=1974&auto=format&fit=crop",
      isCustomizable: true,
    },
    {
      id: "mc2",
      name: "Margherita Pizza",
      description: "Simple and delicious, with San Marzano tomatoes, fresh mozzarella, basil, and a drizzle of olive oil.",
      price: 15.00,
      imageUrl: "https://images.unsplash.com/photo-1598021680133-eb3a733194a2?q=80&w=1974&auto=format&fit=crop",
      isCustomizable: false,
    },
  ],
  appetizers: [
    {
      id: "ap1",
      name: "Bruschetta al Pomodoro",
      description: "Toasted bread topped with fresh tomatoes, garlic, basil, and olive oil.",
      price: 9.00,
      imageUrl: "https://images.unsplash.com/photo-1505253716362-afb742c0d57e?q=80&w=2070&auto=format&fit=crop",
      isCustomizable: false,
    },
    {
      id: "ap2",
      name: "Calamari Fritti",
      description: "Lightly battered and fried calamari served with a zesty marinara sauce.",
      price: 12.50,
      imageUrl: "https://images.unsplash.com/photo-1549611440-84a86a423cda?q=80&w=1974&auto=format&fit=crop",
      isCustomizable: false,
    },
  ],
  drinks: [
    {
      id: "dr1",
      name: "San Pellegrino",
      description: "Sparkling natural mineral water from Italy.",
      price: 3.50,
      imageUrl: "https://images.unsplash.com/photo-1553531384-411a247ccd74?q=80&w=1974&auto=format&fit=crop",
      isCustomizable: false,
    },
  ],
};
// --- End Placeholder Data ---


const RestaurantDetailPage = () => {
  const [rating, setRating] = useState(restaurant.rating);
  console.log('RestaurantDetailPage loaded');

  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <main className="flex-grow">
        {/* Banner Section */}
        <section className="relative h-64 md:h-80 w-full">
          <img
            src={restaurant.bannerUrl}
            alt={`${restaurant.name} banner`}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50" />
        </section>

        {/* Restaurant Info Section */}
        <section className="container -mt-16 md:-mt-20 z-10 relative">
          <Card className="p-6 bg-card/95 backdrop-blur-sm shadow-xl">
            <div className="flex flex-col md:flex-row md:items-start gap-6">
              <Avatar className="w-24 h-24 md:w-32 md:h-32 border-4 border-background">
                <AvatarImage src={restaurant.avatarUrl} alt={restaurant.name} />
                <AvatarFallback>{restaurant.name.substring(0, 2)}</AvatarFallback>
              </Avatar>
              <div className="flex-grow pt-2">
                <h1 className="text-3xl md:text-4xl font-bold tracking-tight">{restaurant.name}</h1>
                <div className="flex items-center gap-4 mt-2">
                  <RatingInput value={rating} onChange={setRating} readOnly />
                  <span className="text-sm text-muted-foreground font-semibold">{rating.toFixed(1)} stars</span>
                </div>
                <div className="flex flex-wrap gap-2 mt-3">
                  {restaurant.tags.map(tag => (
                    <Badge key={tag} variant="secondary">{tag}</Badge>
                  ))}
                </div>
                <div className="mt-4 space-y-2 text-sm text-muted-foreground">
                  <p className="flex items-center gap-2"><MapPin className="h-4 w-4" /> {restaurant.address}</p>
                  <p className="flex items-center gap-2"><Clock className="h-4 w-4" /> {restaurant.openingHours}</p>
                </div>
              </div>
            </div>
          </Card>
        </section>


        {/* Menu Section */}
        <section className="container py-8 md:py-12">
          <Tabs defaultValue="main-courses" className="w-full">
            <TabsList className="grid w-full grid-cols-3 md:w-auto md:inline-grid md:grid-cols-3">
              <TabsTrigger value="main-courses">Main Courses</TabsTrigger>
              <TabsTrigger value="appetizers">Appetizers</TabsTrigger>
              <TabsTrigger value="drinks">Drinks</TabsTrigger>
            </TabsList>
            <TabsContent value="main-courses" className="mt-6">
              <div className="space-y-4">
                {menu.mainCourses.map(item => <MenuItemCard key={item.id} {...item} />)}
              </div>
            </TabsContent>
            <TabsContent value="appetizers" className="mt-6">
              <div className="space-y-4">
                {menu.appetizers.map(item => <MenuItemCard key={item.id} {...item} />)}
              </div>
            </TabsContent>
            <TabsContent value="drinks" className="mt-6">
              <div className="space-y-4">
                {menu.drinks.map(item => <MenuItemCard key={item.id} {...item} />)}
              </div>
            </TabsContent>
          </Tabs>
        </section>

      </main>

      <Footer />
    </div>
  );
};

export default RestaurantDetailPage;