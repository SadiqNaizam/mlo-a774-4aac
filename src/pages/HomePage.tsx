import React from 'react';
import { Link } from 'react-router-dom';

// Custom Components
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import RestaurantCard from '@/components/RestaurantCard';

// shadcn/ui Components
import { Button } from '@/components/ui/button';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';

// Placeholder data for featured restaurants
const featuredRestaurants = [
  {
    id: 1,
    slug: 'mamas-trattoria',
    name: "Mama's Trattoria",
    imageUrl: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=60',
    rating: 4.8,
    deliveryTime: '25-35 min',
    cuisineTags: ['Italian', 'Pasta', 'Pizza'],
  },
  {
    id: 2,
    slug: 'sushi-zen',
    name: 'Sushi Zen',
    imageUrl: 'https://images.unsplash.com/photo-1579871494447-9811cf80d66c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=60',
    rating: 4.9,
    deliveryTime: '30-40 min',
    cuisineTags: ['Japanese', 'Sushi', 'Asian'],
  },
  {
    id: 3,
    slug: 'the-burger-joint',
    name: 'The Burger Joint',
    imageUrl: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=60',
    rating: 4.6,
    deliveryTime: '20-30 min',
    cuisineTags: ['Burgers', 'American', 'Fries'],
  },
  {
    id: 4,
    slug: 'taco-fiesta',
    name: 'Taco Fiesta',
    imageUrl: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=60',
    rating: 4.7,
    deliveryTime: '25-35 min',
    cuisineTags: ['Mexican', 'Tacos', 'Burritos'],
  },
  {
    id: 5,
    slug: 'green-leaf-cafe',
    name: 'Green Leaf Cafe',
    imageUrl: 'https://images.unsplash.com/photo-1490645935967-10de6ba17025?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=60',
    rating: 4.5,
    deliveryTime: '15-25 min',
    cuisineTags: ['Salads', 'Healthy', 'Vegan'],
  },
];

const cuisineTypes = [
  'Italian', 'Mexican', 'Japanese', 'Burgers', 'Vegan', 'Pizza', 'Desserts', 'Breakfast'
];

const HomePage = () => {
  console.log('HomePage loaded');

  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative py-20 md:py-32 bg-muted/20">
          <div
            className="absolute inset-0 bg-cover bg-center opacity-10"
            style={{ backgroundImage: "url('https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=1920&q=80')" }}
          ></div>
          <div className="container relative text-center">
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-foreground">
              Craving something delicious?
            </h1>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
              Get your favorite meals from local restaurants, delivered right to your door.
            </p>
            <div className="mt-8">
              <Button size="lg" asChild>
                <Link to="/restaurant-listing">Order Now</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Featured Restaurants Section */}
        <section className="py-16 sm:py-24">
          <div className="container">
            <h2 className="text-3xl font-bold tracking-tight text-center mb-12">
              Featured Restaurants
            </h2>
            <Carousel
              opts={{
                align: 'start',
                loop: true,
              }}
              className="w-full"
            >
              <CarouselContent className="-ml-4">
                {featuredRestaurants.map((restaurant) => (
                  <CarouselItem key={restaurant.id} className="pl-4 md:basis-1/2 lg:basis-1/3">
                    <div className="p-1">
                      <RestaurantCard {...restaurant} />
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="hidden sm:flex" />
              <CarouselNext className="hidden sm:flex" />
            </Carousel>
          </div>
        </section>

        {/* Browse by Cuisine Section */}
        <section className="py-16 sm:py-24 bg-muted/40">
          <div className="container">
            <h2 className="text-3xl font-bold tracking-tight text-center mb-12">
              Browse by Cuisine
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
              {cuisineTypes.map((cuisine) => (
                <Button key={cuisine} variant="outline" size="lg" asChild>
                  <Link to="/restaurant-listing">{cuisine}</Link>
                </Button>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default HomePage;