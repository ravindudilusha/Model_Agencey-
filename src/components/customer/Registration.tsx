import { useState } from 'react';
import { ArrowLeft, CheckCircle2 } from 'lucide-react';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Label } from '../ui/label';
import { Textarea } from '../ui/textarea';
import { Card } from '../ui/card';
import type { Page } from '../../App';

interface RegistrationProps {
  navigate: (page: Page) => void;
}

export default function CustomerRegistration({ navigate }: RegistrationProps) {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="min-h-screen bg-gray-50 py-12 px-4">
        <div className="max-w-2xl mx-auto">
          <Card className="p-8 text-center">
            <CheckCircle2 className="size-16 text-green-600 mx-auto mb-4" />
            <h1 className="text-2xl mb-4">Registration Successful!</h1>
            <p className="text-gray-600 mb-6">
              Your customer account has been created successfully. You can now browse and book models.
            </p>
            <p className="text-gray-600 mb-8">
              A confirmation email has been sent to your email address.
            </p>
            <Button onClick={() => navigate('login')}>Login to Your Account</Button>
          </Card>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4">
      <div className="max-w-3xl mx-auto">
        <Button
          variant="ghost"
          className="mb-6"
          onClick={() => navigate('landing')}
        >
          <ArrowLeft className="size-4 mr-2" />
          Back to Home
        </Button>

        <Card className="p-8">
          <h1 className="text-3xl mb-2">Customer Registration</h1>
          <p className="text-gray-600 mb-8">
            Create an account to browse full model profiles and make bookings.
          </p>

          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Personal Information */}
            <div>
              <h2 className="text-xl mb-4 pb-2 border-b">Personal Information</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="customerName">Full Name *</Label>
                  <Input
                    id="customerName"
                    required
                    placeholder="Enter your full name"
                  />
                </div>
                <div>
                  <Label htmlFor="idNumber">National ID Number *</Label>
                  <Input
                    id="idNumber"
                    required
                    placeholder="Enter your ID number"
                  />
                </div>
                <div>
                  <Label htmlFor="email">Email Address *</Label>
                  <Input
                    id="email"
                    type="email"
                    required
                    placeholder="your.email@example.com"
                  />
                </div>
                <div>
                  <Label htmlFor="telephone">Telephone Number *</Label>
                  <Input
                    id="telephone"
                    type="tel"
                    required
                    placeholder="+94 XX XXX XXXX"
                  />
                </div>
              </div>
            </div>

            {/* Company Information */}
            <div>
              <h2 className="text-xl mb-4 pb-2 border-b">Company Information</h2>
              <div className="space-y-6">
                <div>
                  <Label htmlFor="companyName">Company Name *</Label>
                  <Input
                    id="companyName"
                    required
                    placeholder="Enter your company name"
                  />
                </div>
                <div>
                  <Label htmlFor="companyAddress">Company Address *</Label>
                  <Textarea
                    id="companyAddress"
                    required
                    placeholder="Enter complete company address"
                    rows={3}
                  />
                </div>
              </div>
            </div>

            {/* Account Credentials */}
            <div>
              <h2 className="text-xl mb-4 pb-2 border-b">Account Credentials</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="username">Username *</Label>
                  <Input
                    id="username"
                    required
                    placeholder="Choose a username"
                  />
                </div>
                <div>
                  <Label htmlFor="password">Password *</Label>
                  <Input
                    id="password"
                    type="password"
                    required
                    placeholder="Choose a strong password"
                  />
                </div>
                <div className="md:col-span-2">
                  <Label htmlFor="confirmPassword">Confirm Password *</Label>
                  <Input
                    id="confirmPassword"
                    type="password"
                    required
                    placeholder="Re-enter your password"
                  />
                </div>
              </div>
            </div>

            {/* Terms and Conditions */}
            <div>
              <div className="flex items-start gap-2">
                <input type="checkbox" id="terms" required className="mt-1" />
                <Label htmlFor="terms" className="cursor-pointer">
                  I agree to the terms and conditions, and I confirm that all information provided is accurate and will be used for booking purposes only. *
                </Label>
              </div>
            </div>

            {/* Submit */}
            <div className="flex gap-4 pt-4">
              <Button type="submit" size="lg">Create Account</Button>
              <Button type="button" variant="outline" size="lg" onClick={() => navigate('landing')}>
                Cancel
              </Button>
            </div>

            <div className="text-center text-sm text-gray-600 pt-4 border-t">
              Already have an account?{' '}
              <button
                type="button"
                onClick={() => navigate('login')}
                className="text-blue-600 hover:underline"
              >
                Login here
              </button>
            </div>
          </form>
        </Card>
      </div>
    </div>
  );
}
