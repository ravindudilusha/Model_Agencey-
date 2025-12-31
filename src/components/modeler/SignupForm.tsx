import { ArrowLeft, Upload, CheckCircle2, X } from 'lucide-react';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Label } from '../ui/label';
import { Card } from '../ui/card';
import { Alert, AlertDescription } from '../ui/alert';
import { Badge } from '../ui/badge';

interface SignupFormProps {
  navigate: (path: string) => void;
  currentPage: string;
  isLoggedIn: boolean;
  userRole: string;
  logout: () => void;
}

export default function ModelerSignupForm({ navigate }: SignupFormProps) {
  const [submitted, setSubmitted] = useState(false);
  const [referenceNumber, setReferenceNumber] = useState('');
  const [selectedModelingTypes, setSelectedModelingTypes] = useState<string[]>([]);

  const modelingTypes = [
    'FASHION MODELING',
    'COMMERCIAL MODELING',
    'RUNWAY MODELING',
    'SWIM WEAR MODELING',
    'PARTS MODELING',
    'HIGH FASHION MODELING',
    'FIT MODELING',
    'FITNESS MODELING',
    'PLUS SIZE MODELING'
  ];

  const handleModelingTypeSelect = (type: string) => {
    if (selectedModelingTypes.includes(type)) {
      setSelectedModelingTypes(selectedModelingTypes.filter(t => t !== type));
    } else {
      setSelectedModelingTypes([...selectedModelingTypes, type]);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (selectedModelingTypes.length === 0) {
      alert('Please select at least one modeling type');
      return;
    }
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="min-h-screen bg-gray-50 py-12 px-4">
        <div className="max-w-2xl mx-auto">
          <Card className="p-8 text-center">
            <CheckCircle2 className="size-16 text-green-600 mx-auto mb-4" />
            <h1 className="text-2xl mb-4">Signup Submitted Successfully!</h1>
            <p className="text-gray-600 mb-6">
              Your signup form and payment details have been received. Our admin team will verify your information within 24 hours.
            </p>
            <p className="text-gray-600 mb-8">
              You will receive an email with your username and temporary password once verified.
            </p>
            <p className="text-gray-600 mb-4">
              Already have a request ID? Great! You can now log in using your credentials.
            </p>
            <Button onClick={() => navigate('/')}>Back to Home</Button>
          </Card>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4">
      <div className="max-w-4xl mx-auto">
        <Button
          variant="ghost"
          className="mb-6"
          onClick={() => navigate('/')}
        >
          <ArrowLeft className="size-4 mr-2" />
          Back to Home
        </Button>

        <Card className="p-8">
          <h1 className="text-3xl mb-2">Model Signup Form</h1>
          <p className="text-gray-600 mb-6">
            Complete your registration after receiving approval and making payment.
          </p>

          <Alert className="mb-8">
            <AlertDescription>
              <strong>Important:</strong> You must have received an acceptance email with a reference number and completed the payment before filling this form.
            </AlertDescription>
          </Alert>

          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Payment Information */}
            <div>
              <h2 className="text-xl mb-4 pb-2 border-b">Payment Information</h2>
              <div className="space-y-6">
                <div>
                  <Label htmlFor="referenceNumber">Reference Number *</Label>
                  <Input
                    id="referenceNumber"
                    required
                    placeholder="Enter the reference number from your approval email"
                    value={referenceNumber}
                    onChange={(e) => setReferenceNumber(e.target.value)}
                  />
                  <p className="text-sm text-gray-600 mt-1">
                    This was provided in your acceptance email
                  </p>
                </div>
                <div>
                  <Label htmlFor="planSelected">Selected Plan *</Label>
                  <select
                    id="planSelected"
                    required
                    className="w-full h-10 px-3 rounded-md border border-gray-300"
                  >
                    <option value="">Select your plan</option>
                    <option value="basic">Basic - $99/year</option>
                    <option value="professional">Professional - $199/year</option>
                    <option value="premium">Premium - $349/year</option>
                  </select>
                </div>
                <div>
                  <Label>Payment Slip Upload *</Label>
                  <p className="text-sm text-gray-600 mb-2">
                    Upload your payment receipt/slip as proof of payment
                  </p>
                  <div className="border-2 border-dashed rounded-lg p-8 text-center hover:border-blue-600 cursor-pointer transition-colors">
                    <Upload className="size-12 mx-auto mb-2 text-gray-400" />
                    <p>Click to upload payment slip</p>
                    <p className="text-sm text-gray-500 mt-1">PNG, JPG, PDF up to 5MB</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Account Credentials */}
            <div>
              <h2 className="text-xl mb-4 pb-2 border-b">Account Setup</h2>
              <Alert className="mb-4">
                <AlertDescription>
                  Your username will be your National ID Number (auto-generated by system).
                  A temporary password will be sent to your email after verification.
                </AlertDescription>
              </Alert>
              <div className="grid md:grid-cols-2 gap-6">
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
                  <Label htmlFor="confirmEmail">Confirm Email *</Label>
                  <Input
                    id="confirmEmail"
                    type="email"
                    required
                    placeholder="Confirm your email"
                  />
                </div>
              </div>
            </div>

            {/* Personal Information */}
            <div>
              <h2 className="text-xl mb-4 pb-2 border-b">Confirm Personal Information</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="fullName">Full Name *</Label>
                  <Input id="fullName" required />
                </div>
                <div>
                  <Label htmlFor="idNumber">National ID Number *</Label>
                  <Input id="idNumber" required />
                </div>
                <div>
                  <Label htmlFor="dob">Date of Birth *</Label>
                  <Input id="dob" type="date" required />
                </div>
                <div>
                  <Label htmlFor="contactNo">Contact Number *</Label>
                  <Input id="contactNo" type="tel" required />
                </div>
              </div>
            </div>

            {/* ID Document Upload */}
            <div>
              <h2 className="text-xl mb-4 pb-2 border-b">ID Documents</h2>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <Label>ID Front Photo *</Label>
                  <div className="mt-2 border-2 border-dashed rounded-lg p-6 text-center hover:border-blue-600 cursor-pointer transition-colors">
                    <Upload className="size-8 mx-auto mb-2 text-gray-400" />
                    <p className="text-sm">Upload ID Front</p>
                  </div>
                </div>
                <div>
                  <Label>ID Back Photo *</Label>
                  <div className="mt-2 border-2 border-dashed rounded-lg p-6 text-center hover:border-blue-600 cursor-pointer transition-colors">
                    <Upload className="size-8 mx-auto mb-2 text-gray-400" />
                    <p className="text-sm">Upload ID Back</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Professional Photos */}
            <div>
              <h2 className="text-xl mb-4 pb-2 border-b">Professional Photos</h2>
              <p className="text-gray-600 mb-4">
                Upload your best professional modeling photos (minimum 3, maximum 10)
              </p>
              <div className="border-2 border-dashed rounded-lg p-8 text-center hover:border-blue-600 cursor-pointer transition-colors">
                <Upload className="size-12 mx-auto mb-2 text-gray-400" />
                <p>Click to upload multiple photos</p>
                <p className="text-sm text-gray-500 mt-1">PNG, JPG up to 10MB each</p>
              </div>
            </div>

            {/* Modeling Types */}
            <div>
              <h2 className="text-xl mb-4 pb-2 border-b">Modeling Types</h2>
              <p className="text-gray-600 mb-4">
                Select the modeling types you are interested in
              </p>
              <div className="grid md:grid-cols-3 gap-4">
                {modelingTypes.map(type => (
                  <div key={type} className="flex items-center">
                    <input
                      type="checkbox"
                      id={type}
                      checked={selectedModelingTypes.includes(type)}
                      onChange={() => handleModelingTypeSelect(type)}
                      className="mr-2"
                    />
                    <Label htmlFor={type} className="cursor-pointer">
                      {type}
                    </Label>
                  </div>
                ))}
              </div>
            </div>

            {/* Terms and Conditions */}
            <div>
              <div className="flex items-start gap-2">
                <input type="checkbox" id="terms" required className="mt-1" />
                <Label htmlFor="terms" className="cursor-pointer">
                  I agree to the terms and conditions, and I confirm that all information provided is accurate. I understand that I cannot sign up without completing the payment. *
                </Label>
              </div>
            </div>

            {/* Submit */}
            <div className="flex gap-4 pt-4">
              <Button type="submit" size="lg">Submit Signup</Button>
              <Button type="button" variant="outline" size="lg" onClick={() => navigate('/')}>
                Cancel
              </Button>
            </div>
          </form>
        </Card>
      </div>
    </div>
  );
}