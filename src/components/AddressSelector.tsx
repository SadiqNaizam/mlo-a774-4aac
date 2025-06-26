import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Home, PlusCircle } from "lucide-react";
import { toast } from "sonner";

interface Address {
  id: string;
  type: 'Home' | 'Work' | 'Other';
  street: string;
  city: string;
  state: string;
  zip: string;
}

const initialAddresses: Address[] = [
  {
    id: 'addr1',
    type: 'Home',
    street: '123 Leafy Lane',
    city: 'Greenwood',
    state: 'CA',
    zip: '90210',
  },
  {
    id: 'addr2',
    type: 'Work',
    street: '456 Business Blvd',
    city: 'Metropolis',
    state: 'NY',
    zip: '10001',
  },
];

const AddressSelector: React.FC = () => {
  console.log('AddressSelector loaded');
  const [addresses, setAddresses] = useState<Address[]>(initialAddresses);
  const [selectedAddress, setSelectedAddress] = useState<string>('addr1');
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  // States for the new address form
  const [newAddress, setNewAddress] = useState({
    street: '',
    city: '',
    state: '',
    zip: '',
    type: 'Other' as Address['type'],
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setNewAddress(prev => ({ ...prev, [name]: value }));
  };
  
  const handleAddNewAddress = (e: React.FormEvent) => {
    e.preventDefault();
    const newAddressData: Address = {
      id: `addr${Date.now()}`,
      ...newAddress,
    };
    
    setAddresses(prev => [...prev, newAddressData]);
    setSelectedAddress(newAddressData.id);
    toast.success("New address added successfully!");

    // Reset form and close dialog
    setNewAddress({ street: '', city: '', state: '', zip: '', type: 'Other' });
    setIsDialogOpen(false);
  };

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between">
        <div>
          <CardTitle>Delivery Address</CardTitle>
          <CardDescription>Select where you want your order delivered.</CardDescription>
        </div>
        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
          <DialogTrigger asChild>
            <Button variant="outline" size="sm">
              <PlusCircle className="mr-2 h-4 w-4" />
              Add New
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[425px]">
            <form onSubmit={handleAddNewAddress}>
              <DialogHeader>
                <DialogTitle>Add a New Address</DialogTitle>
                <DialogDescription>
                  Enter your new delivery address details here. Click save when you're done.
                </DialogDescription>
              </DialogHeader>
              <div className="grid gap-4 py-4">
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="street" className="text-right">
                    Street
                  </Label>
                  <Input id="street" name="street" value={newAddress.street} onChange={handleInputChange} className="col-span-3" required />
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="city" className="text-right">
                    City
                  </Label>
                  <Input id="city" name="city" value={newAddress.city} onChange={handleInputChange} className="col-span-3" required />
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="state" className="text-right">
                    State
                  </Label>
                  <Input id="state" name="state" value={newAddress.state} onChange={handleInputChange} className="col-span-3" required />
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="zip" className="text-right">
                    Zip Code
                  </Label>
                  <Input id="zip" name="zip" value={newAddress.zip} onChange={handleInputChange} className="col-span-3" required />
                </div>
              </div>
              <DialogFooter>
                <Button type="button" variant="ghost" onClick={() => setIsDialogOpen(false)}>Cancel</Button>
                <Button type="submit">Save Address</Button>
              </DialogFooter>
            </form>
          </DialogContent>
        </Dialog>
      </CardHeader>
      <CardContent>
        <RadioGroup value={selectedAddress} onValueChange={setSelectedAddress}>
          <div className="space-y-4">
            {addresses.map((address) => (
              <Label
                key={address.id}
                htmlFor={address.id}
                className={`flex items-start space-x-4 rounded-md border p-4 transition-all cursor-pointer ${selectedAddress === address.id ? 'border-primary bg-primary/5' : 'border-border'}`}
              >
                <RadioGroupItem value={address.id} id={address.id} className="mt-1" />
                <div className="flex flex-col">
                  <div className="flex items-center gap-2 mb-1">
                    <Home className="h-4 w-4 text-muted-foreground" />
                    <span className="font-semibold">{address.type}</span>
                  </div>
                  <span className="text-muted-foreground">
                    {address.street}, {address.city}, {address.state} {address.zip}
                  </span>
                </div>
              </Label>
            ))}
          </div>
        </RadioGroup>
      </CardContent>
      <CardFooter>
        <p className="text-xs text-muted-foreground">
          Selected address will be used for this order.
        </p>
      </CardFooter>
    </Card>
  );
};

export default AddressSelector;