import React from 'react';
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";
import { PlusCircle } from 'lucide-react';

interface MenuItemCardProps {
  id: string;
  name: string;
  description: string;
  price: number;
  imageUrl?: string;
  isCustomizable?: boolean;
}

const MenuItemCard: React.FC<MenuItemCardProps> = ({
  id,
  name,
  description,
  price,
  imageUrl,
  isCustomizable = false,
}) => {
  console.log(`MenuItemCard loaded for: ${name}`);

  const handleSimpleAddToCart = () => {
    toast.success(`${name} has been added to your cart.`);
    console.log(`Added item ${id} to cart.`);
  };

  const handleCustomAddToCart = () => {
    toast.success(`${name} (customized) has been added to your cart.`);
    console.log(`Added customized item ${id} to cart.`);
    // In a real app, you would close the dialog here.
    // The DialogTrigger manages state, but manual closing might be needed
    // if you have complex state logic inside.
  };

  const formatPrice = (value: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
    }).format(value);
  };

  return (
    <div className="flex items-center space-x-4 p-4 border-b transition-colors hover:bg-slate-50 w-full">
      {/* Optional Image */}
      <div className="flex-shrink-0">
        <img
          src={imageUrl || 'https://via.placeholder.com/100'}
          alt={name}
          className="w-20 h-20 md:w-24 md:h-24 rounded-md object-cover"
        />
      </div>

      {/* Text Content */}
      <div className="flex-grow">
        <h4 className="font-semibold text-md md:text-lg">{name}</h4>
        <p className="text-sm text-gray-600 mt-1 line-clamp-2">{description}</p>
        <p className="text-md font-bold mt-2 text-gray-800">{formatPrice(price)}</p>
      </div>

      {/* Action Button/Dialog */}
      <div className="flex-shrink-0">
        {isCustomizable ? (
          <Dialog>
            <DialogTrigger asChild>
              <Button variant="outline">Customize</Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
              <DialogHeader>
                <DialogTitle>{name}</DialogTitle>
                <DialogDescription>{description}</DialogDescription>
              </DialogHeader>
              <div className="py-4 space-y-4">
                <h5 className="font-semibold text-gray-800">Customizations</h5>
                <div className="flex items-center space-x-3">
                  <Checkbox id="option1" />
                  <Label htmlFor="option1" className="cursor-pointer">
                    Add extra pancetta (+$1.50)
                  </Label>
                </div>
                <div className="flex items-center space-x-3">
                  <Checkbox id="option2" />
                  <Label htmlFor="option2" className="cursor-pointer">
                    Gluten-free pasta (+$2.00)
                  </Label>
                </div>
              </div>
              <DialogFooter>
                <Button type="submit" onClick={handleCustomAddToCart}>
                  Add to Cart
                </Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        ) : (
          <Button onClick={handleSimpleAddToCart}>
            <PlusCircle className="mr-2 h-4 w-4" />
            Add
          </Button>
        )}
      </div>
    </div>
  );
};

export default MenuItemCard;