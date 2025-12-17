import { useState } from 'react';
import { Calendar, MapPin, CheckCircle2, X, Check } from 'lucide-react';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Label } from '../ui/label';
import { Textarea } from '../ui/textarea';

interface BookingFormProps {
  model: any;
  onClose: () => void;
}

export default function BookingForm({ model, onClose }: BookingFormProps) {
  const [submitted, setSubmitted] = useState(false);
  const [selectedDate, setSelectedDate] = useState('');

  // Mock unavailable dates for this model (dates already booked)
  const unavailableDates = [
    '2024-12-10',
    '2024-12-15',
    '2024-12-20',
    '2024-12-25',
    '2025-01-05',
    '2025-01-12',
    '2025-01-18',
  ];

  const isDateUnavailable = (date: string) => {
    return unavailableDates.includes(date);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="text-center py-8">
        <CheckCircle2 className="size-16 text-green-600 mx-auto mb-4" />
        <h3 className="text-2xl mb-3">Booking Request Submitted!</h3>
        <p className="text-gray-600 mb-6">
          Your booking request has been received. Our admin team will review it and contact you within 24 hours to confirm the details.
        </p>
        <p className="text-gray-600 mb-8">
          You will receive an email confirmation once the request is reviewed.
        </p>
        <Button onClick={onClose}>Close</Button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6 pt-4">
      {/* Model Info */}
      <div className="bg-gray-50 rounded-lg p-4">
        <div className="grid md:grid-cols-3 gap-4 text-sm">
          <div>
            <span className="text-gray-600">Model ID:</span>
            <div>{model.id}</div>
          </div>
          <div>
            <span className="text-gray-600">Base Price:</span>
            <div>LKR {model.basePrice.toLocaleString()}</div>
          </div>
          <div>
            <span className="text-gray-600">Experience:</span>
            <div>{model.experience}</div>
          </div>
        </div>
      </div>

      {/* Model Availability Calendar */}
      <div className="border-2 border-black rounded-lg p-5">
        <h3 className="text-lg mb-3 flex items-center gap-2">
          <Calendar className="size-5" />
          Model Availability Calendar
        </h3>
        <p className="text-sm text-gray-600 mb-4">
          Please check the availability before selecting your event date. Dates marked as unavailable are already booked.
        </p>
        
        <div className="space-y-4">
          {/* Legend */}
          <div className="flex gap-4 text-sm pb-3 border-b">
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 bg-green-100 border-2 border-green-600 rounded"></div>
              <span>Available</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 bg-red-100 border-2 border-red-600 rounded"></div>
              <span>Unavailable</span>
            </div>
          </div>

          {/* Upcoming Unavailable Dates */}
          <div>
            <h4 className="mb-2">Upcoming Unavailable Dates:</h4>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
              {unavailableDates.map((date) => (
                <div key={date} className="flex items-center gap-2 p-2 bg-red-50 border border-red-200 rounded text-sm">
                  <X className="size-4 text-red-600" />
                  <span>{new Date(date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Available Dates Info */}
          <div className="bg-green-50 border border-green-200 rounded p-3">
            <div className="flex items-start gap-2">
              <Check className="size-5 text-green-600 mt-0.5" />
              <div className="text-sm text-green-900">
                All other dates are currently available for booking. Select your preferred date below in the event details section.
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Auto-filled Customer Info */}
      <div>
        <h3 className="text-lg mb-4">Your Information (Auto-filled)</h3>
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <Label htmlFor="customerName">Contact Person</Label>
            <Input id="customerName" defaultValue="John Smith" disabled />
          </div>
          <div>
            <Label htmlFor="companyName">Company Name</Label>
            <Input id="companyName" defaultValue="ABC Corporation" disabled />
          </div>
          <div>
            <Label htmlFor="customerId">ID Number</Label>
            <Input id="customerId" defaultValue="900123456V" disabled />
          </div>
          <div>
            <Label htmlFor="customerEmail">Email</Label>
            <Input id="customerEmail" type="email" defaultValue="john@abc.com" disabled />
          </div>
          <div>
            <Label htmlFor="customerPhone">Phone Number</Label>
            <Input id="customerPhone" type="tel" defaultValue="+94 77 123 4567" disabled />
          </div>
          <div>
            <Label htmlFor="companyAddress">Company Address</Label>
            <Input id="companyAddress" defaultValue="123 Main Street, Colombo" disabled />
          </div>
        </div>
      </div>

      {/* Event Details */}
      <div>
        <h3 className="text-lg mb-4">Event Details</h3>
        <div className="space-y-4">
          <div>
            <Label htmlFor="eventDate">Event Date *</Label>
            <div className="relative">
              <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 size-5 text-gray-400" />
              <Input
                id="eventDate"
                type="date"
                required
                className="pl-10"
                min={new Date().toISOString().split('T')[0]}
                value={selectedDate}
                onChange={(e) => {
                  const date = e.target.value;
                  if (isDateUnavailable(date)) {
                    alert('⚠️ This date is unavailable. The model is already booked on this date. Please select a different date from the available dates shown above.');
                    setSelectedDate('');
                  } else {
                    setSelectedDate(date);
                  }
                }}
              />
            </div>
            {selectedDate && !isDateUnavailable(selectedDate) && (
              <p className="text-sm text-green-600 mt-1 flex items-center gap-1">
                <Check className="size-4" />
                Selected date is available
              </p>
            )}
          </div>
          <div>
            <Label htmlFor="eventTime">Event Time *</Label>
            <Input
              id="eventTime"
              type="time"
              required
            />
          </div>
          <div>
            <Label htmlFor="eventLocation">Event Location *</Label>
            <div className="relative">
              <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 size-5 text-gray-400" />
              <Input
                id="eventLocation"
                required
                placeholder="Enter complete event address"
                className="pl-10"
              />
            </div>
          </div>
          <div>
            <Label htmlFor="eventType">Event Type *</Label>
            <select
              id="eventType"
              required
              className="w-full h-10 px-3 rounded-md border border-gray-300"
            >
              <option value="">Select event type</option>
              <option value="fashion_show">Fashion Show</option>
              <option value="product_launch">Product Launch</option>
              <option value="corporate_event">Corporate Event</option>
              <option value="photoshoot">Photo Shoot</option>
              <option value="commercial">Commercial / TV</option>
              <option value="other">Other</option>
            </select>
          </div>
          <div>
            <Label htmlFor="eventDuration">Expected Duration</Label>
            <Input
              id="eventDuration"
              placeholder="E.g., 4 hours"
            />
          </div>
          <div>
            <Label htmlFor="additionalDetails">Additional Details</Label>
            <Textarea
              id="additionalDetails"
              placeholder="Any specific requirements, dress code, event theme, etc."
              rows={4}
            />
          </div>
        </div>
      </div>

      {/* Pricing Info */}
      <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
        <h4 className="mb-2">Pricing Information</h4>
        <p className="text-sm text-blue-900">
          The base price is <strong>LKR {model.basePrice.toLocaleString()}</strong>. 
          The final price will be discussed and confirmed by our admin team based on your event requirements.
          You will be contacted within 24 hours to finalize the booking details.
        </p>
      </div>

      {/* Terms */}
      <div className="flex items-start gap-2">
        <input type="checkbox" id="bookingTerms" required className="mt-1" />
        <Label htmlFor="bookingTerms" className="cursor-pointer text-sm">
          I understand that this is a booking request and not a confirmed booking. 
          The admin team will contact me to confirm the details and provide payment instructions. 
          I agree to the terms and conditions. *
        </Label>
      </div>

      {/* Submit */}
      <div className="flex gap-4 pt-4 border-t">
        <Button type="submit" size="lg">Submit Booking Request</Button>
        <Button type="button" variant="outline" size="lg" onClick={onClose}>Cancel</Button>
      </div>
    </form>
  );
}
