import React, { useState, useEffect } from 'react';

// Custom Layout Components
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import RestaurantCard from '@/components/RestaurantCard';

// shadcn/ui Components
import { Input } from '@/components/ui/input';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Separator } from '@/components/ui/separator';
import { Skeleton } from '@/components/ui/skeleton';

// Mock Data for Restaurants
const mockRestaurants = [
  {
    id: 1,
    slug: 'mamas-trattoria',
    name: "Mama's Trattoria",
    imageUrl: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=500&q=80',
    rating: 4.7,
    deliveryTime: '25-35 min',
    cuisineTags: ['Italian', 'Pasta', 'Pizza'],
  },
  {
    id: 2,
    slug: 'sushi-zen',
    name: 'Sushi Zen',
    imageUrl: 'https://images.unsplash.com/photo-1579871494447-9811cf80d66c?w=500&q=80',
    rating: 4.9,
    deliveryTime: '30-40 min',
    cuisineTags: ['Japanese', 'Sushi', 'Asian'],
  },
  {
    id: 3,
    slug: 'the-burger-joint',
    name: 'The Burger Joint',
    imageUrl: 'https://images.unsplash.com/photo-1571091718767-18b5b1457add?w=500&q=80',
    rating: 4.5,
    deliveryTime: '20-30 min',
    cuisineTags: ['American', 'Burgers', 'Fries'],
  },
  {
    id: 4,
    slug: 'taco-fiesta',
    name: 'Taco Fiesta',
    imageUrl: 'https://images.unsplash.com/photo-1552332386-f8dd00dc2f85?w=500&q=80',
    rating: 4.6,
    deliveryTime: '25-35 min',
    cuisineTags: ['Mexican', 'Tacos', 'Burritos'],
  },
  {
    id: 5,
    slug: 'pho-kingdom',
    name: 'Pho Kingdom',
    imageUrl: 'https://images.unsplash.com/photo-1585101647460-61a733ae439e?w=500&q=80',
    rating: 4.8,
    deliveryTime: '35-45 min',
    cuisineTags: ['Vietnamese', 'Noodles', 'Pho'],
  },
  {
    id: 6,
    slug: 'veggie-delight',
    name: 'Veggie Delight',
    imageUrl: 'https://images.unsplash.com/photo-1498837167922-ddd27525d352?w=500&q=80',
    rating: 4.7,
    deliveryTime: '20-30 min',
    cuisineTags: ['Vegan', 'Salad', 'Healthy'],
  },
];

const cuisineFilters = ['Italian', 'Japanese', 'American', 'Mexican', 'Vietnamese', 'Vegan'];

// Skeleton component for loading state
const RestaurantCardSkeleton = () => (
  <div className="space-y-4">
    <Skeleton className="h-48 w-full" />
    <div className="space-y-2 p-1">
      <Skeleton className="h-6 w-3/4" />
      <Skeleton className="h-4 w-1/2" />
    </div>
  </div>
);

const RestaurantListingPage = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    console.log('RestaurantListingPage loaded');
    // Simulate data fetching
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow container py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 lg:gap-8">
          {/* Filters Sidebar */}
          <aside className="col-span-1 mb-8 lg:mb-0">
            <div className="sticky top-24 space-y-6">
              <h2 className="text-2xl font-bold">Filters</h2>
              
              {/* Sort By */}
              <div>
                <Label htmlFor="sort-by" className="text-lg font-semibold">Sort By</Label>
                <Select defaultValue="top-rated">
                  <SelectTrigger id="sort-by" className="w-full mt-2">
                    <SelectValue placeholder="Sort by..." />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="top-rated">Top Rated</SelectItem>
                    <SelectItem value="delivery-time">Delivery Time</SelectItem>
                    <SelectItem value="distance">Distance</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <Separator />

              {/* Cuisine Filter */}
              <div>
                <h3 className="text-lg font-semibold">Cuisine</h3>
                <div className="space-y-3 mt-2">
                  {cuisineFilters.map((cuisine) => (
                    <div key={cuisine} className="flex items-center space-x-2">
                      <Checkbox id={cuisine.toLowerCase()} />
                      <Label htmlFor={cuisine.toLowerCase()} className="font-normal">{cuisine}</Label>
                    </div>
                  ))}
                </div>
              </div>

              <Separator />

              {/* Price Range (Example Input) */}
               <div>
                <h3 className="text-lg font-semibold">Price Range</h3>
                <Input placeholder="e.g., $$" className="mt-2" />
              </div>
            </div>
          </aside>

          {/* Restaurant Grid */}
          <section className="col-span-1 lg:col-span-3">
            <h1 className="text-3xl font-bold mb-6">Found {mockRestaurants.length} restaurants</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
              {isLoading
                ? Array.from({ length: 6 }).map((_, index) => <RestaurantCardSkeleton key={index} />)
                : mockRestaurants.map((restaurant) => (
                    <RestaurantCard key={restaurant.id} {...restaurant} />
                  ))}
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default RestaurantListingPage;