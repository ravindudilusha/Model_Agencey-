import { useState } from 'react';
import { Lock, AlertCircle } from 'lucide-react';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Label } from '../ui/label';
import { Card } from '../ui/card';
import { Alert, AlertDescription } from '../ui/alert';

interface AdminLoginProps {
  login: (adminData?: any) => void;
}

export default function AdminLogin({ login }: AdminLoginProps) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    // Mock admin credentials
    if (username === 'admin' && password === 'admin123') {
      login({ username: 'admin', name: 'Admin User' });
    } else {
      setError('Invalid username or password');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 flex items-center justify-center px-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center size-16 bg-white rounded-full mb-4">
            <Lock className="size-8 text-black" />
          </div>
          <h1 className="text-3xl text-white mb-2">Admin Panel</h1>
          <p className="text-gray-400">Secure administrative access</p>
        </div>

        <Card className="p-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            {error && (
              <Alert variant="destructive">
                <AlertCircle className="size-4" />
                <AlertDescription>{error}</AlertDescription>
              </Alert>
            )}

            <div>
              <Label htmlFor="username">Username</Label>
              <Input
                id="username"
                type="text"
                required
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Enter admin username"
                className="mt-1"
              />
            </div>

            <div>
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter admin password"
                className="mt-1"
              />
            </div>

            <Button type="submit" className="w-full bg-black text-white hover:bg-gray-800">
              Sign In to Admin Panel
            </Button>
          </form>

          <div className="mt-6 p-4 bg-gray-50 rounded-lg">
            <p className="text-sm text-gray-600 mb-1">Demo Credentials:</p>
            <p className="text-sm"><strong>Username:</strong> admin</p>
            <p className="text-sm"><strong>Password:</strong> admin123</p>
          </div>
        </Card>

        <p className="text-center text-gray-400 text-sm mt-6">
          Admin access only • Unauthorized access is prohibited
        </p>
      </div>
    </div>
  );
}
