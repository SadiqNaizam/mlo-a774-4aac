import React from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import AddressSelector from '@/components/AddressSelector';
import { Button } from '@/components/ui/button';
import { 
  Card, 
  CardContent, 
  CardHeader, 
  CardTitle, 
  CardDescription, 
  CardFooter 
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Separator } from '@/components/ui/separator';
import { CreditCard, Wallet } from 'lucide-react';

// Placeholder data for the order summary
const orderItems = [
  { 
    id: 1, 
    name: 'Spaghetti Carbonara', 
    price: 15.99, 
    quantity: 1, 
    image: 'https://images.unsplash.com/photo-1588013273468-411962b21955?auto=format&fit=crop&q=80&w=400' 
  },
  { 
    id: 2, 
    name: 'Garlic Bread', 
    price: 5.49, 
    quantity: 1, 
    image: 'https://images.unsplash.com/photo-1598679253440-32a61399f954?auto=format&fit=crop&q=80&w=400' 
  },
   { 
    id: 3, 
    name: 'Mineral Water', 
    price: 2.00, 
    quantity: 2, 
    image: 'https://images.unsplash.com/photo-1583122485782-9c59d8c94657?auto=format&fit=crop&q=80&w=400' 
  }
];

const subtotal = orderItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
const deliveryFee = 4.99;
const total = subtotal + deliveryFee;

const CheckoutPage = () => {
  console.log('CheckoutPage loaded');

  return (
    <div className="flex flex-col min-h-screen bg-gray-50 dark:bg-gray-900">
      <Header />
      <main className="flex-1 py-8 md:py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold tracking-tight mb-8 text-center md:text-left">Checkout</h1>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
            
            {/* Left Column: Address and Payment */}
            <div className="lg:col-span-2 space-y-8">
              <AddressSelector />
              
              <Card>
                <CardHeader>
                  <CardTitle>Payment Method</CardTitle>
                  <CardDescription>Choose how you'd like to pay for your order.</CardDescription>
                </CardHeader>
                <CardContent>
                  <RadioGroup defaultValue="card" className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <RadioGroupItem value="card" id="card" className="peer sr-only" />
                      <Label htmlFor="card" className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary cursor-pointer transition-colors">
                        <CreditCard className="mb-3 h-6 w-6" />
                        Credit Card
                      </Label>
                    </div>
                    <div>
                      <RadioGroupItem value="paypal" id="paypal" className="peer sr-only" />
                      <Label htmlFor="paypal" className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary cursor-pointer transition-colors">
                        <Wallet className="mb-3 h-6 w-6" />
                        PayPal
                      </Label>
                    </div>
                  </RadioGroup>
                </CardContent>
              </Card>
            </div>

            {/* Right Column: Order Summary */}
            <div className="lg:col-span-1">
              <Card className="sticky top-24">
                <CardHeader>
                  <CardTitle>Order Summary</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    {orderItems.map(item => (
                      <div key={item.id} className="flex items-center justify-between">
                         <div className="flex items-center gap-4">
                            <img src={item.image} alt={item.name} className="w-16 h-16 rounded-md object-cover"/>
                            <div>
                               <p className="font-medium text-sm">{item.name}</p>
                               <p className="text-sm text-muted-foreground">Qty: {item.quantity}</p>
                            </div>
                         </div>
                         <p className="font-medium text-sm">${(item.price * item.quantity).toFixed(2)}</p>
                      </div>
                    ))}
                  </div>
                  <Separator />
                  <div className="space-y-1.5">
                    <div className="flex justify-between text-sm">
                      <p className="text-muted-foreground">Subtotal</p>
                      <p>${subtotal.toFixed(2)}</p>
                    </div>
                    <div className="flex justify-between text-sm">
                      <p className="text-muted-foreground">Delivery Fee</p>
                      <p>${deliveryFee.toFixed(2)}</p>
                    </div>
                  </div>
                  <Separator />
                  <div className="flex justify-between font-bold text-base">
                    <p>Total</p>
                    <p>${total.toFixed(2)}</p>
                  </div>
                </CardContent>
                <CardFooter className="flex flex-col gap-4">
                  <div className="flex w-full items-center space-x-2">
                    <Input type="text" placeholder="Promo Code" />
                    <Button variant="outline" className="flex-shrink-0">Apply</Button>
                  </div>
                  <Button className="w-full" size="lg">Place Order</Button>
                </CardFooter>
              </Card>
            </div>

          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default CheckoutPage;