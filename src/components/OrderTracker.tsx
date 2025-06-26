import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ClipboardList, ChefHat, Truck, PackageCheck } from 'lucide-react';
import { cn } from '@/lib/utils';

// Define the possible states for an order
type OrderStatus = 'Order Placed' | 'In the Kitchen' | 'Out for Delivery' | 'Delivered';

// Define the props for the component
interface OrderTrackerProps {
  currentStatus: OrderStatus;
}

// Define the steps of the order process
const orderSteps = [
  { name: 'Order Placed' as const, icon: ClipboardList },
  { name: 'In the Kitchen' as const, icon: ChefHat },
  { name: 'Out for Delivery' as const, icon: Truck },
  { name: 'Delivered' as const, icon: PackageCheck },
];

const OrderTracker: React.FC<OrderTrackerProps> = ({ currentStatus }) => {
  console.log('OrderTracker loaded with status:', currentStatus);

  const currentStepIndex = orderSteps.findIndex(step => step.name === currentStatus);

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>Track Your Order</CardTitle>
      </CardHeader>
      <CardContent className="p-6">
        <div className="flex items-center justify-between">
          {orderSteps.map((step, index) => {
            const isCompleted = index < currentStepIndex;
            const isActive = index === currentStepIndex;

            return (
              <React.Fragment key={step.name}>
                <div className="flex flex-col items-center text-center">
                  <div
                    className={cn(
                      'flex h-12 w-12 items-center justify-center rounded-full border-2',
                      isCompleted ? 'bg-green-500 border-green-500 text-white' : '',
                      isActive ? 'bg-blue-500 border-blue-500 text-white' : '',
                      !isCompleted && !isActive ? 'bg-gray-100 border-gray-300 text-gray-400' : ''
                    )}
                  >
                    <step.icon className="h-6 w-6" />
                  </div>
                  <p
                    className={cn(
                      'mt-2 text-sm font-medium',
                      (isCompleted || isActive) ? 'text-gray-900' : 'text-gray-500'
                    )}
                  >
                    {step.name}
                  </p>
                </div>

                {/* Connector Line */}
                {index < orderSteps.length - 1 && (
                  <div className={cn(
                    'flex-1 h-1 mx-2 sm:mx-4',
                    isCompleted ? 'bg-green-500' : 'bg-gray-200'
                  )} />
                )}
              </React.Fragment>
            );
          })}
        </div>
      </CardContent>
    </Card>
  );
};

export default OrderTracker;