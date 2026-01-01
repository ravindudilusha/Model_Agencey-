import { useState } from 'react';
import { ArrowLeft, Mail, KeyRound, CheckCircle, Lock } from 'lucide-react';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Label } from '../ui/label';
import { Card } from '../ui/card';

interface ForgotPasswordProps {
  navigate: (path: string) => void;
}

type Step = 'email' | 'otp' | 'newPassword' | 'success';

export default function ForgotPassword({ navigate }: ForgotPasswordProps) {
  const [step, setStep] = useState<Step>('email');
  const [email, setEmail] = useState('');
  const [otp, setOtp] = useState(['', '', '', '', '', '']);
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleEmailSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Mock sending OTP - in real app would send OTP to email
    setStep('otp');
  };

  const handleOtpChange = (index: number, value: string) => {
    if (value.length > 1) return;
    
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    // Auto-focus next input
    if (value && index < 5) {
      const nextInput = document.getElementById(`otp-${index + 1}`);
      nextInput?.focus();
    }
  };

  const handleOtpSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Mock OTP verification - in real app would verify OTP
    setStep('newPassword');
  };

  const handlePasswordSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (newPassword !== confirmPassword) {
      alert('Passwords do not match!');
      return;
    }
    // Mock password reset - in real app would update password
    setStep('success');
  };

  const handleResendOtp = () => {
    // Mock resending OTP
    setOtp(['', '', '', '', '', '']);
    alert('OTP has been resent to your email!');
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-md mx-auto">
        <Button
          variant="ghost"
          className="mb-6"
          onClick={() => navigate('/login')}
        >
          <ArrowLeft className="size-4 mr-2" />
          Back to Login
        </Button>

        <Card className="p-8">
          {/* Step 1: Enter Email */}
          {step === 'email' && (
            <>
              <div className="flex justify-center mb-6">
                <div className="size-16 bg-gray-100 rounded-full flex items-center justify-center">
                  <Mail className="size-8 text-gray-600" />
                </div>
              </div>
              
              <h1 className="text-2xl mb-2 text-center">Forgot Password?</h1>
              <p className="text-sm text-gray-600 text-center mb-6">
                Enter your email address and we'll send you an OTP to reset your password.
              </p>

              <form onSubmit={handleEmailSubmit} className="space-y-4">
                <div>
                  <Label htmlFor="email">Email Address</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>

                <Button type="submit" className="w-full bg-black hover:bg-gray-800">
                  Send OTP
                </Button>

                <div className="text-center text-sm text-gray-600">
                  Remember your password?{' '}
                  <button
                    type="button"
                    onClick={() => navigate('/login')}
                    className="text-black hover:underline"
                  >
                    Back to Login
                  </button>
                </div>
              </form>
            </>
          )}

          {/* Step 2: Enter OTP */}
          {step === 'otp' && (
            <>
              <div className="flex justify-center mb-6">
                <div className="size-16 bg-gray-100 rounded-full flex items-center justify-center">
                  <KeyRound className="size-8 text-gray-600" />
                </div>
              </div>
              
              <h1 className="text-2xl mb-2 text-center">Enter OTP</h1>
              <p className="text-sm text-gray-600 text-center mb-6">
                We've sent a 6-digit code to <strong>{email}</strong>
              </p>

              <form onSubmit={handleOtpSubmit} className="space-y-4">
                <div className="flex gap-2 justify-center">
                  {otp.map((digit, index) => (
                    <Input
                      key={index}
                      id={`otp-${index}`}
                      type="text"
                      maxLength={1}
                      className="w-12 h-12 text-center text-lg"
                      value={digit}
                      onChange={(e) => handleOtpChange(index, e.target.value)}
                      onKeyDown={(e) => {
                        if (e.key === 'Backspace' && !digit && index > 0) {
                          const prevInput = document.getElementById(`otp-${index - 1}`);
                          prevInput?.focus();
                        }
                      }}
                      required
                    />
                  ))}
                </div>

                <Button type="submit" className="w-full bg-black hover:bg-gray-800">
                  Verify OTP
                </Button>

                <div className="text-center text-sm text-gray-600">
                  Didn't receive the code?{' '}
                  <button
                    type="button"
                    onClick={handleResendOtp}
                    className="text-black hover:underline"
                  >
                    Resend OTP
                  </button>
                </div>
              </form>
            </>
          )}

          {/* Step 3: Enter New Password */}
          {step === 'newPassword' && (
            <>
              <div className="flex justify-center mb-6">
                <div className="size-16 bg-gray-100 rounded-full flex items-center justify-center">
                  <Lock className="size-8 text-gray-600" />
                </div>
              </div>
              
              <h1 className="text-2xl mb-2 text-center">Set New Password</h1>
              <p className="text-sm text-gray-600 text-center mb-6">
                Create a strong password for your account
              </p>

              <form onSubmit={handlePasswordSubmit} className="space-y-4">
                <div>
                  <Label htmlFor="newPassword">New Password</Label>
                  <Input
                    id="newPassword"
                    type="password"
                    placeholder="Enter new password"
                    value={newPassword}
                    onChange={(e) => setNewPassword(e.target.value)}
                    required
                    minLength={8}
                  />
                </div>

                <div>
                  <Label htmlFor="confirmPassword">Confirm Password</Label>
                  <Input
                    id="confirmPassword"
                    type="password"
                    placeholder="Re-enter new password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    required
                    minLength={8}
                  />
                </div>

                <div className="text-xs text-gray-600">
                  Password must be at least 8 characters long
                </div>

                <Button type="submit" className="w-full bg-black hover:bg-gray-800">
                  Reset Password
                </Button>
              </form>
            </>
          )}

          {/* Step 4: Success */}
          {step === 'success' && (
            <div className="text-center">
              <div className="flex justify-center mb-6">
                <div className="size-16 bg-green-100 rounded-full flex items-center justify-center">
                  <CheckCircle className="size-8 text-green-600" />
                </div>
              </div>

              <h1 className="text-2xl mb-2">Password Reset Successfully!</h1>
              <p className="text-sm text-gray-600 mb-6">
                Your password has been changed successfully. You can now login with your new password.
              </p>

              <Button
                className="w-full bg-black hover:bg-gray-800"
                onClick={() => navigate('/login')}
              >
                Go to Login
              </Button>
            </div>
          )}
        </Card>
      </div>
    </div>
  );
}