import React from 'react';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Star, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';

interface RestaurantCardProps {
  id: string | number;
  slug: string;
  name: string;
  imageUrl: string;
  rating: number;
  deliveryTime: string;
  cuisineTags: string[];
}

const RestaurantCard: React.FC<RestaurantCardProps> = ({
  name,
  imageUrl,
  rating,
  deliveryTime,
  cuisineTags,
  slug,
}) => {
  console.log('RestaurantCard loaded for:', name);

  return (
    <Link to="/restaurant-detail" aria-label={`View details for ${name}`}>
      <Card className="w-full overflow-hidden transition-all duration-300 hover:shadow-lg group border">
        <CardHeader className="p-0">
          <AspectRatio ratio={16 / 9}>
            <img
              src={imageUrl || 'https://via.placeholder.com/400x225'}
              alt={`Photo of ${name}`}
              className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
            />
          </AspectRatio>
        </CardHeader>
        
        <CardContent className="p-4 space-y-2">
          <CardTitle className="text-lg font-bold truncate group-hover:text-primary">
            {name}
          </CardTitle>
          <div className="flex items-center justify-between text-sm text-muted-foreground">
            <div className="flex items-center gap-1">
              <Star className="w-4 h-4 text-yellow-500 fill-current" />
              <span>{rating.toFixed(1)}</span>
            </div>
            <div className="flex items-center gap-1">
              <Clock className="w-4 h-4" />
              <span>{deliveryTime}</span>
            </div>
          </div>
        </CardContent>

        <CardFooter className="p-4 pt-0">
          <div className="flex flex-wrap gap-2">
            {cuisineTags.slice(0, 3).map((tag) => (
              <Badge key={tag} variant="secondary">
                {tag}
              </Badge>
            ))}
            {cuisineTags.length > 3 && (
              <Badge variant="outline">
                +{cuisineTags.length - 3}
              </Badge>
            )}
          </div>
        </CardFooter>
      </Card>
    </Link>
  );
};

export default RestaurantCard;