import { useState } from 'react';
import { ChevronLeft, ChevronRight, Plus, Calendar } from 'lucide-react';
import { Button } from '../ui/button';
import { Card } from '../ui/card';
import { Badge } from '../ui/badge';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger, DialogDescription } from '../ui/dialog';
import { Input } from '../ui/input';
import { Label } from '../ui/label';
import { Textarea } from '../ui/textarea';

export default function ModelerCalendar() {
  const [currentDate, setCurrentDate] = useState(new Date(2025, 10, 1)); // November 2025
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [dateBlockType, setDateBlockType] = useState<'single' | 'range'>('single');

  // Mock bookings data
  const bookings = [
    { date: '2025-11-15', type: 'customer', event: 'Fashion Show', status: 'confirmed' },
    { date: '2025-11-20', type: 'customer', event: 'Product Launch', status: 'confirmed' },
    { date: '2025-11-25', type: 'personal', event: 'Personal Event', status: 'blocked' },
    { date: '2025-12-05', type: 'customer', event: 'Corporate Event', status: 'pending' },
  ];

  const daysInMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0).getDate();
  const firstDayOfMonth = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1).getDay();
  
  const monthNames = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"];

  const previousMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1));
  };

  const nextMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1));
  };

  const getBookingForDate = (day: number) => {
    const dateStr = `${currentDate.getFullYear()}-${String(currentDate.getMonth() + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
    return bookings.find(b => b.date === dateStr);
  };

  return (
    <div className="space-y-6">
      {/* Legend */}
      <Card className="p-4">
        <div className="flex flex-wrap gap-4 text-sm">
          <div className="flex items-center gap-2">
            <div className="size-4 rounded bg-blue-600"></div>
            <span>Customer Booking (Confirmed)</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="size-4 rounded bg-yellow-600"></div>
            <span>Pending Booking</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="size-4 rounded bg-gray-600"></div>
            <span>Personal Blocked Date</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="size-4 rounded border-2 border-gray-300"></div>
            <span>Available</span>
          </div>
        </div>
      </Card>

      {/* Calendar */}
      <Card className="p-6">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl">
            {monthNames[currentDate.getMonth()]} {currentDate.getFullYear()}
          </h2>
          <div className="flex gap-2">
            <Button variant="outline" size="sm" onClick={previousMonth}>
              <ChevronLeft className="size-4" />
            </Button>
            <Button variant="outline" size="sm" onClick={nextMonth}>
              <ChevronRight className="size-4" />
            </Button>
          </div>
        </div>

        {/* Calendar Grid */}
        <div className="grid grid-cols-7 gap-2">
          {/* Day Headers */}
          {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(day => (
            <div key={day} className="text-center py-2 text-sm text-gray-600">
              {day}
            </div>
          ))}

          {/* Empty cells for days before month starts */}
          {Array.from({ length: firstDayOfMonth }).map((_, i) => (
            <div key={`empty-${i}`} className="aspect-square"></div>
          ))}

          {/* Calendar days */}
          {Array.from({ length: daysInMonth }).map((_, i) => {
            const day = i + 1;
            const booking = getBookingForDate(day);
            
            return (
              <div
                key={day}
                className={`
                  aspect-square border-2 rounded-lg p-2 cursor-pointer transition-all
                  hover:border-blue-600
                  ${booking?.type === 'customer' && booking.status === 'confirmed' ? 'bg-blue-100 border-blue-600' : ''}
                  ${booking?.type === 'customer' && booking.status === 'pending' ? 'bg-yellow-100 border-yellow-600' : ''}
                  ${booking?.type === 'personal' ? 'bg-gray-100 border-gray-600' : ''}
                  ${!booking ? 'border-gray-300' : ''}
                `}
              >
                <div className="text-sm mb-1">{day}</div>
                {booking && (
                  <div className="text-xs truncate">{booking.event}</div>
                )}
              </div>
            );
          })}
        </div>
      </Card>

      {/* Add Personal Block */}
      <Dialog>
        <DialogTrigger asChild>
          <Button className="gap-2">
            <Plus className="size-4" />
            Block Personal Date
          </Button>
        </DialogTrigger>
        <DialogContent className="max-w-md">
          <DialogHeader>
            <DialogTitle>Block Date for Personal Event</DialogTitle>
            <DialogDescription>
              Select a single date or date range to block for personal events.
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-5 pt-4">
            {/* Date Type Selection */}
            <div>
              <Label className="mb-3 block">Select Date Type</Label>
              <div className="grid grid-cols-2 gap-3">
                <button
                  type="button"
                  onClick={() => setDateBlockType('single')}
                  className={`
                    p-4 rounded-lg border-2 transition-all text-left
                    ${dateBlockType === 'single' 
                      ? 'border-black bg-black text-white' 
                      : 'border-gray-200 hover:border-gray-300'
                    }
                  `}
                >
                  <div className="flex items-center gap-2 mb-1">
                    <Calendar className="size-4" />
                    <span className="font-medium">Single Date</span>
                  </div>
                  <p className="text-xs opacity-80">Block one specific day</p>
                </button>
                
                <button
                  type="button"
                  onClick={() => setDateBlockType('range')}
                  className={`
                    p-4 rounded-lg border-2 transition-all text-left
                    ${dateBlockType === 'range' 
                      ? 'border-black bg-black text-white' 
                      : 'border-gray-200 hover:border-gray-300'
                    }
                  `}
                >
                  <div className="flex items-center gap-2 mb-1">
                    <Calendar className="size-4" />
                    <span className="font-medium">Date Range</span>
                  </div>
                  <p className="text-xs opacity-80">Block multiple days</p>
                </button>
              </div>
            </div>

            {/* Single Date Input */}
            {dateBlockType === 'single' && (
              <div>
                <Label htmlFor="blockDate">Date</Label>
                <Input id="blockDate" type="date" className="mt-2" />
              </div>
            )}

            {/* Date Range Inputs */}
            {dateBlockType === 'range' && (
              <div className="space-y-4">
                <div>
                  <Label htmlFor="blockDateStart">Start Date</Label>
                  <Input id="blockDateStart" type="date" className="mt-2" />
                </div>
                <div>
                  <Label htmlFor="blockDateEnd">End Date</Label>
                  <Input id="blockDateEnd" type="date" className="mt-2" />
                </div>
              </div>
            )}

            {/* Reason Field */}
            <div>
              <Label htmlFor="blockReason">Reason (Optional)</Label>
              <Textarea
                id="blockReason"
                placeholder="E.g., Personal commitment, vacation, family event..."
                className="mt-2"
                rows={3}
              />
            </div>

            {/* Action Buttons */}
            <div className="flex gap-3 pt-2">
              <Button className="flex-1">
                {dateBlockType === 'single' ? 'Block Date' : 'Block Date Range'}
              </Button>
              <Button variant="outline" className="flex-1">Cancel</Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>

      {/* Upcoming Bookings */}
      <Card className="p-6">
        <h2 className="text-xl mb-4">Upcoming Bookings</h2>
        <div className="space-y-3">
          {bookings
            .filter(b => new Date(b.date) >= new Date())
            .map((booking, index) => (
              <div key={index} className="flex items-center justify-between p-4 border rounded-lg">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span>{booking.event}</span>
                    {booking.status === 'confirmed' && (
                      <Badge>Confirmed</Badge>
                    )}
                    {booking.status === 'pending' && (
                      <Badge variant="outline">Pending</Badge>
                    )}
                  </div>
                  <div className="text-sm text-gray-600">
                    {new Date(booking.date).toLocaleDateString('en-US', { 
                      weekday: 'long', 
                      year: 'numeric', 
                      month: 'long', 
                      day: 'numeric' 
                    })}
                  </div>
                </div>
                {booking.type === 'personal' && (
                  <Button variant="outline" size="sm">Remove Block</Button>
                )}
              </div>
            ))}
        </div>
      </Card>
    </div>
  );
}