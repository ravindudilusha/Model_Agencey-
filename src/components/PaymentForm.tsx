import { useState } from 'react';
import { Upload, CheckCircle2 } from 'lucide-react';

export function PaymentForm() {
  const [modelId, setModelId] = useState('');
  const [paymentSlip, setPaymentSlip] = useState<File | null>(null);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setPaymentSlip(e.target.files[0]);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen flex items-center justify-center px-4">
        <div className="w-full max-w-md bg-white rounded-2xl shadow-sm p-8 text-center">
          <div className="flex justify-center mb-6">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
              <CheckCircle2 className="w-10 h-10 text-green-600" />
            </div>
          </div>
          <h2 className="mb-3">Payment Submitted Successfully</h2>
          <p className="text-muted-foreground mb-6">
            Your payment slip has been uploaded and is being processed. You will receive a confirmation shortly.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-sm p-8">
        <h2 className="text-center mb-6">Payment Submission</h2>

        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Model ID Input */}
          <div>
            <label htmlFor="modelId" className="block mb-2">
              ID Number
            </label>
            <input
              id="modelId"
              type="text"
              value={modelId}
              onChange={(e) => setModelId(e.target.value)}
              placeholder="Enter your ID Number"
              className="w-full px-4 py-3 bg-input-background rounded-lg border-none focus:outline-none focus:ring-2 focus:ring-gray-300"
              required
            />
          </div>

          {/* Payment Slip Upload */}
          <div>
            <label htmlFor="paymentSlip" className="block mb-2">
              Payment Slip
            </label>
            <div className="relative">
              <input
                id="paymentSlip"
                type="file"
                onChange={handleFileChange}
                accept="image/*,.pdf"
                className="hidden"
                required
              />
              <label
                htmlFor="paymentSlip"
                className="w-full px-4 py-3 bg-input-background rounded-lg border-2 border-dashed border-gray-300 flex items-center justify-center gap-3 cursor-pointer hover:bg-gray-100 transition-colors"
              >
                <Upload className="w-5 h-5 text-gray-500" />
                <span className="text-gray-600">
                  {paymentSlip ? paymentSlip.name : 'Upload payment slip (JPG, PNG, PDF)'}
                </span>
              </label>
            </div>
            {paymentSlip && (
              <p className="mt-2 text-sm text-green-600">
                ✓ File selected: {paymentSlip.name}
              </p>
            )}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-black text-white py-3 rounded-lg hover:bg-gray-800 transition-colors mt-6"
          >
            Submit Payment
          </button>
        </form>
      </div>
    </div>
  );
}