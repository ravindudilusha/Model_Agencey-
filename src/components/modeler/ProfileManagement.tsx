import { Upload, User } from 'lucide-react';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Label } from '../ui/label';
import { Textarea } from '../ui/textarea';
import { Card } from '../ui/card';
import { ImageWithFallback } from '../figma/ImageWithFallback';

export default function ProfileManagement() {
  return (
    <div className="space-y-6">
      {/* Profile & Cover Photos */}
      <Card className="p-6">
        <h2 className="text-xl mb-6">Profile Photos</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <Label>Profile Picture</Label>
            <div className="mt-2 flex items-center gap-4">
              <div className="size-24 rounded-full bg-gray-200 flex items-center justify-center overflow-hidden">
                <User className="size-12 text-gray-400" />
              </div>
              <div>
                <Button variant="outline" size="sm">
                  <Upload className="size-4 mr-2" />
                  Change
                </Button>
                <p className="text-xs text-gray-600 mt-2">Max 5MB, JPG or PNG</p>
              </div>
            </div>
          </div>
          <div>
            <Label>Cover Photo</Label>
            <div className="mt-2">
              <div className="h-32 rounded-lg bg-gray-200 flex items-center justify-center">
                <div className="text-center">
                  <Upload className="size-8 mx-auto mb-2 text-gray-400" />
                  <p className="text-sm text-gray-600">Click to upload cover</p>
                </div>
              </div>
              <p className="text-xs text-gray-600 mt-2">Recommended: 1200x400px</p>
            </div>
          </div>
        </div>
      </Card>

      {/* Personal Info */}
      <Card className="p-6">
        <h2 className="text-xl mb-6">Personal Information</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <Label htmlFor="fullName">Full Name</Label>
            <Input id="fullName" defaultValue="Sarah Johnson" disabled />
          </div>
          <div>
            <Label htmlFor="idNumber">ID Number</Label>
            <Input id="idNumber" defaultValue="920123456V" disabled />
          </div>
          <div>
            <Label htmlFor="email">Email</Label>
            <Input id="email" type="email" defaultValue="sarah@example.com" />
          </div>
          <div>
            <Label htmlFor="phone">Contact Number</Label>
            <Input id="phone" type="tel" defaultValue="+94 77 123 4567" />
          </div>
          <div>
            <Label htmlFor="whatsapp">WhatsApp Number</Label>
            <Input id="whatsapp" type="tel" defaultValue="+94 77 123 4567" />
          </div>
          <div>
            <Label htmlFor="dob">Date of Birth</Label>
            <Input id="dob" type="date" defaultValue="1992-05-15" disabled />
          </div>
        </div>
      </Card>

      {/* Body Measurements */}
      <Card className="p-6">
        <h2 className="text-xl mb-6">Body Measurements</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div>
            <Label htmlFor="height">Height (cm)</Label>
            <Input id="height" type="number" defaultValue="175" />
          </div>
          <div>
            <Label htmlFor="weight">Weight (kg)</Label>
            <Input id="weight" type="number" defaultValue="58" />
          </div>
          <div>
            <Label htmlFor="chest">Chest (inches)</Label>
            <Input id="chest" type="number" defaultValue="34" />
          </div>
          <div>
            <Label htmlFor="shoulder">Shoulder (inches)</Label>
            <Input id="shoulder" type="number" defaultValue="38" />
          </div>
          <div>
            <Label htmlFor="waist">Waist (inches)</Label>
            <Input id="waist" type="number" defaultValue="26" />
          </div>
          <div>
            <Label htmlFor="shoeSize">Shoe Size</Label>
            <Input id="shoeSize" defaultValue="7" />
          </div>
        </div>
      </Card>

      {/* Physical Features */}
      <Card className="p-6">
        <h2 className="text-xl mb-6">Physical Features</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div>
            <Label htmlFor="skinColour">Skin Colour</Label>
            <Input id="skinColour" defaultValue="Fair" />
          </div>
          <div>
            <Label htmlFor="eyeColour">Eye Colour</Label>
            <Input id="eyeColour" defaultValue="Brown" />
          </div>
          <div>
            <Label htmlFor="hairColour">Hair Colour</Label>
            <Input id="hairColour" defaultValue="Black" />
          </div>
        </div>
      </Card>

      {/* Skills & Experience */}
      <Card className="p-6">
        <h2 className="text-xl mb-6">Skills & Experience</h2>
        <div className="space-y-6">
          <div>
            <Label htmlFor="talents">Talents & Skills</Label>
            <Textarea
              id="talents"
              defaultValue="Professional dancing, runway experience, commercial modeling"
              rows={4}
            />
          </div>
          <div>
            <Label htmlFor="bio">Professional Bio</Label>
            <Textarea
              id="bio"
              placeholder="Write a brief bio about yourself..."
              rows={4}
            />
            <p className="text-sm text-gray-600 mt-1">This will be visible to customers</p>
          </div>
        </div>
      </Card>

      {/* Base Price */}
      <Card className="p-6">
        <h2 className="text-xl mb-6">Pricing</h2>
        <div className="max-w-md">
          <Label htmlFor="basePrice">Base Price (per event)</Label>
          <Input id="basePrice" type="number" defaultValue="5000" />
          <p className="text-sm text-gray-600 mt-1">This is your starting price. Final price may be negotiated with customer.</p>
        </div>
      </Card>

      {/* Save Button */}
      <div className="flex gap-4">
        <Button size="lg">Save Changes</Button>
        <Button variant="outline" size="lg">Cancel</Button>
      </div>
    </div>
  );
}
