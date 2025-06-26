import React from 'react';

// Custom Layout Components
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

// shadcn/ui Components
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

// Icons
import { Package, Home, CreditCard, User, Pencil, Trash2 } from 'lucide-react';

// Placeholder Data
const orderHistory = [
  {
    id: 'ORDER-84521',
    date: '2024-08-15',
    total: '42.50',
    status: 'Delivered',
    restaurant: "Mama's Trattoria",
    items: [
      { name: 'Spaghetti Carbonara', quantity: 1, price: '18.00' },
      { name: 'Garlic Bread', quantity: 2, price: '6.50' },
      { name: 'Tiramisu', quantity: 1, price: '8.00' },
    ],
  },
  {
    id: 'ORDER-84199',
    date: '2024-08-10',
    total: '25.00',
    status: 'Delivered',
    restaurant: 'Sushi Express',
    items: [{ name: 'Dragon Roll', quantity: 2, price: '12.50' }],
  },
];

const savedAddresses = [
    { id: 'addr1', type: 'Home', address: '123 Maple Street, Flavor Town, USA' },
    { id: 'addr2', type: 'Work', address: '456 Oak Avenue, Gourmet City, USA' },
];

const paymentMethods = [
    { id: 'pay1', type: 'VISA', last4: '4242', expiry: '12/26' },
    { id: 'pay2', type: 'Mastercard', last4: '5555', expiry: '08/25' },
];


const ProfilePage = () => {
    console.log('ProfilePage loaded');

    return (
        <div className="flex flex-col min-h-screen bg-muted/20">
            <Header />

            <main className="flex-1 py-8 md:py-12">
                <div className="container">
                    <div className="mb-6">
                        <h1 className="text-3xl font-bold tracking-tight">Your Profile</h1>
                        <p className="text-muted-foreground">Manage your orders, addresses, and account settings.</p>
                    </div>

                    <Tabs defaultValue="order-history" className="w-full">
                        <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 h-auto">
                            <TabsTrigger value="order-history" className="py-2"><Package className="w-4 h-4 mr-2" />Order History</TabsTrigger>
                            <TabsTrigger value="saved-addresses" className="py-2"><Home className="w-4 h-4 mr-2" />Saved Addresses</TabsTrigger>
                            <TabsTrigger value="payment-methods" className="py-2"><CreditCard className="w-4 h-4 mr-2" />Payment Methods</TabsTrigger>
                            <TabsTrigger value="account-settings" className="py-2"><User className="w-4 h-4 mr-2" />Account Settings</TabsTrigger>
                        </TabsList>

                        <TabsContent value="order-history" className="mt-6">
                            <Card>
                                <CardHeader>
                                    <CardTitle>Past Orders</CardTitle>
                                    <CardDescription>Review your previous orders and track their status.</CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <Accordion type="single" collapsible className="w-full">
                                        {orderHistory.map(order => (
                                            <AccordionItem value={order.id} key={order.id}>
                                                <AccordionTrigger>
                                                    <div className="flex justify-between w-full pr-4">
                                                        <span>{order.id} - {order.restaurant}</span>
                                                        <span className="text-muted-foreground">{order.date}</span>
                                                        <span className="font-semibold">${order.total}</span>
                                                    </div>
                                                </AccordionTrigger>
                                                <AccordionContent>
                                                    <ul className="space-y-2 text-sm text-muted-foreground">
                                                        {order.items.map(item => (
                                                             <li key={item.name} className="flex justify-between">
                                                                <span>{item.quantity}x {item.name}</span>
                                                                <span>${item.price}</span>
                                                            </li>
                                                        ))}
                                                        <li className="flex justify-between font-bold text-foreground pt-2 border-t">
                                                            <span>Total</span>
                                                            <span>${order.total}</span>
                                                        </li>
                                                    </ul>
                                                </AccordionContent>
                                            </AccordionItem>
                                        ))}
                                    </Accordion>
                                </CardContent>
                            </Card>
                        </TabsContent>

                        <TabsContent value="saved-addresses" className="mt-6">
                             <Card>
                                <CardHeader>
                                    <CardTitle>Saved Addresses</CardTitle>
                                    <CardDescription>Manage your delivery addresses for faster checkout.</CardDescription>
                                </CardHeader>
                                <CardContent className="grid gap-4 md:grid-cols-2">
                                   {savedAddresses.map(addr => (
                                     <Card key={addr.id}>
                                        <CardHeader className="flex flex-row items-center justify-between pb-2">
                                            <CardTitle className="text-base font-medium">{addr.type}</CardTitle>
                                            <div className="flex gap-2">
                                                <Button variant="ghost" size="icon"><Pencil className="w-4 h-4" /></Button>
                                                <Button variant="ghost" size="icon"><Trash2 className="w-4 h-4 text-red-500" /></Button>
                                            </div>
                                        </CardHeader>
                                        <CardContent>
                                            <p className="text-sm text-muted-foreground">{addr.address}</p>
                                        </CardContent>
                                    </Card>
                                   ))}
                                </CardContent>
                                <CardFooter>
                                    <Button>Add New Address</Button>
                                </CardFooter>
                            </Card>
                        </TabsContent>

                        <TabsContent value="payment-methods" className="mt-6">
                            <Card>
                                <CardHeader>
                                    <CardTitle>Payment Methods</CardTitle>
                                    <CardDescription>Add and manage your payment methods.</CardDescription>
                                </CardHeader>
                                <CardContent className="grid gap-4 md:grid-cols-2">
                                    {paymentMethods.map(method => (
                                         <Card key={method.id}>
                                            <CardHeader className="flex flex-row items-center justify-between pb-2">
                                                <CardTitle className="text-base font-medium">{method.type}</CardTitle>
                                                 <div className="flex gap-2">
                                                    <Button variant="ghost" size="icon"><Pencil className="w-4 h-4" /></Button>
                                                    <Button variant="ghost" size="icon"><Trash2 className="w-4 h-4 text-red-500" /></Button>
                                                </div>
                                            </CardHeader>
                                            <CardContent>
                                                <p className="text-sm">**** **** **** {method.last4}</p>
                                                <p className="text-sm text-muted-foreground">Expires: {method.expiry}</p>
                                            </CardContent>
                                        </Card>
                                    ))}
                                </CardContent>
                                <CardFooter>
                                    <Button>Add New Payment Method</Button>
                                </CardFooter>
                            </Card>
                        </TabsContent>

                        <TabsContent value="account-settings" className="mt-6">
                            <Card>
                                <CardHeader>
                                    <CardTitle>Account Settings</CardTitle>
                                    <CardDescription>Update your personal details and manage your password.</CardDescription>
                                </CardHeader>
                                <CardContent className="space-y-6">
                                    <div className="space-y-2">
                                        <Label htmlFor="name">Full Name</Label>
                                        <Input id="name" defaultValue="John Doe" />
                                    </div>
                                    <div className="space-y-2">
                                        <Label htmlFor="email">Email Address</Label>
                                        <Input id="email" type="email" defaultValue="john.doe@example.com" />
                                    </div>
                                    <div className="space-y-2">
                                        <Label htmlFor="password_current">Current Password</Label>
                                        <Input id="password_current" type="password" />
                                    </div>
                                     <div className="space-y-2">
                                        <Label htmlFor="password_new">New Password</Label>
                                        <Input id="password_new" type="password" />
                                    </div>
                                </CardContent>
                                <CardFooter className="justify-between">
                                    <Button variant="destructive">Logout</Button>
                                    <Button>Save Changes</Button>
                                </CardFooter>
                            </Card>
                        </TabsContent>
                    </Tabs>
                </div>
            </main>

            <Footer />
        </div>
    );
};

export default ProfilePage;