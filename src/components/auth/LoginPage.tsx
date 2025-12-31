import { useState } from 'react';
import { ArrowLeft } from 'lucide-react';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Label } from '../ui/label';
import { Card } from '../ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../ui/tabs';
import type { UserRole } from '../../App';

interface LoginPageProps {
  navigate: (path: string) => void;
  login: (role: UserRole, userData?: any) => void;
  currentPage: string;
  isLoggedIn: boolean;
  userRole: UserRole;
  logout: () => void;
}

export default function LoginPage({ navigate, login }: LoginPageProps) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (role: UserRole) => {
    // Mock login - in real app would validate credentials
    login(role, { username });
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-md mx-auto">
        <Button
          variant="ghost"
          className="mb-6"
          onClick={() => navigate('/')}
        >
          <ArrowLeft className="size-4 mr-2" />
          Back
        </Button>

        <Card className="p-8">
          <h1 className="text-2xl mb-6 text-center">Login</h1>
          
          <Tabs defaultValue="modeler">
            <TabsList className="grid w-full grid-cols-2 mb-6">
              <TabsTrigger value="modeler">Model</TabsTrigger>
              <TabsTrigger value="customer">Customer</TabsTrigger>
            </TabsList>

            <TabsContent value="modeler">
              <form onSubmit={(e) => { e.preventDefault(); handleLogin('modeler'); }} className="space-y-4">
                <div>
                  <Label htmlFor="modeler-username">Username (ID Number)</Label>
                  <Input
                    id="modeler-username"
                    placeholder="Enter your ID number"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                  />
                </div>
                <div>
                  <Label htmlFor="modeler-password">Password</Label>
                  <Input
                    id="modeler-password"
                    type="password"
                    placeholder="Enter password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
                <Button type="submit" className="w-full">Login as Model</Button>
                <div className="text-center text-sm">
                  <a href="#" className="text-blue-600 hover:underline">Forgot password?</a>
                </div>
                <div className="text-center text-sm text-gray-600">
                  Don't have an account?{' '}
                  <button
                    type="button"
                    onClick={() => navigate('/modeler/request')}
                    className="text-blue-600 hover:underline"
                  >
                    Apply now
                  </button>
                </div>
              </form>
            </TabsContent>

            <TabsContent value="customer">
              <form onSubmit={(e) => { e.preventDefault(); handleLogin('customer'); }} className="space-y-4">
                <div>
                  <Label htmlFor="customer-username">Username</Label>
                  <Input
                    id="customer-username"
                    placeholder="Enter username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                  />
                </div>
                <div>
                  <Label htmlFor="customer-password">Password</Label>
                  <Input
                    id="customer-password"
                    type="password"
                    placeholder="Enter password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
                <Button type="submit" className="w-full">Login as Customer</Button>
                <div className="text-center text-sm">
                  <a href="#" className="text-blue-600 hover:underline">Forgot password?</a>
                </div>
                <div className="text-center text-sm text-gray-600">
                  Don't have an account?{' '}
                  <button
                    type="button"
                    onClick={() => navigate('/customer/registration')}
                    className="text-blue-600 hover:underline"
                  >
                    Register here
                  </button>
                </div>
              </form>
            </TabsContent>
          </Tabs>
        </Card>
      </div>
    </div>
  );
}