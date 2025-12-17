import { useState } from 'react';
import { ArrowLeft, Upload, CheckCircle2 } from 'lucide-react';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Label } from '../ui/label';
import { Textarea } from '../ui/textarea';
import { Card } from '../ui/card';
import { Checkbox } from '../ui/checkbox';
import type { Page } from '../../App';

interface RequestFormProps {
  navigate: (page: Page) => void;
}

export default function ModelerRequestForm({ navigate }: RequestFormProps) {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    dob: '',
    idNumber: '',
    age: '',
    gender: '',
    contactNo: '',
    whatsappNo: '',
    email: '',
    address: '',
    occupation: '',
    parentContact: '',
    height: '',
    weight: '',
    chest: '',
    shoulder: '',
    waist: '',
    shoeSize: '',
    skinColour: '',
    eyeColour: '',
    hairColour: '',
    talents: '',
    hasExperience: false,
    trainingPlace: '',
    modelingTypes: [] as string[],
    links: ''
  });

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

  const handleModelingTypeChange = (type: string, checked: boolean) => {
    if (checked) {
      setFormData({ ...formData, modelingTypes: [...formData.modelingTypes, type] });
    } else {
      setFormData({ ...formData, modelingTypes: formData.modelingTypes.filter(t => t !== type) });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.modelingTypes.length === 0) {
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
            <h1 className="text-2xl mb-4">Application Submitted Successfully!</h1>
            <p className="text-gray-600 mb-6">
              Thank you for your interest in joining our platform. Your application has been received and will be reviewed within 24 hours.
            </p>
            <p className="text-gray-600 mb-8">
              You will receive an email notification once your application has been reviewed.
            </p>
            <div className="flex gap-4 justify-center">
              <Button onClick={() => navigate('landing')}>Back to Home</Button>
              <Button variant="outline" onClick={() => navigate('login')}>Login</Button>
            </div>
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
          onClick={() => navigate('landing')}
        >
          <ArrowLeft className="size-4 mr-2" />
          Back to Home
        </Button>

        <Card className="p-8">
          <h1 className="text-3xl mb-2">Model Application Form</h1>
          <p className="text-gray-600 mb-8">
            Fill in your details to apply to become a verified model on our platform.
          </p>

          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Personal Information */}
            <div>
              <h2 className="text-xl mb-4 pb-2 border-b">Personal Information</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="name">Full Name *</Label>
                  <Input
                    id="name"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  />
                </div>
                <div>
                  <Label htmlFor="dob">Date of Birth *</Label>
                  <Input
                    id="dob"
                    type="date"
                    required
                    value={formData.dob}
                    onChange={(e) => setFormData({ ...formData, dob: e.target.value })}
                  />
                </div>
                <div>
                  <Label htmlFor="idNumber">National ID Number *</Label>
                  <Input
                    id="idNumber"
                    required
                    value={formData.idNumber}
                    onChange={(e) => setFormData({ ...formData, idNumber: e.target.value })}
                  />
                </div>
                <div>
                  <Label htmlFor="age">Age *</Label>
                  <Input
                    id="age"
                    type="number"
                    required
                    value={formData.age}
                    onChange={(e) => setFormData({ ...formData, age: e.target.value })}
                  />
                </div>
                <div>
                  <Label htmlFor="gender">Gender *</Label>
                  <select
                    id="gender"
                    required
                    className="w-full h-10 px-3 rounded-md border border-gray-300"
                    value={formData.gender}
                    onChange={(e) => setFormData({ ...formData, gender: e.target.value })}
                  >
                    <option value="">Select gender</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div>
                  <Label htmlFor="contactNo">Contact Number *</Label>
                  <Input
                    id="contactNo"
                    type="tel"
                    required
                    value={formData.contactNo}
                    onChange={(e) => setFormData({ ...formData, contactNo: e.target.value })}
                  />
                </div>
                <div>
                  <Label htmlFor="whatsappNo">WhatsApp Number *</Label>
                  <Input
                    id="whatsappNo"
                    type="tel"
                    required
                    value={formData.whatsappNo}
                    onChange={(e) => setFormData({ ...formData, whatsappNo: e.target.value })}
                  />
                </div>
                <div>
                  <Label htmlFor="email">Email Address *</Label>
                  <Input
                    id="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  />
                </div>
                <div className="md:col-span-2">
                  <Label htmlFor="address">Address *</Label>
                  <Textarea
                    id="address"
                    required
                    value={formData.address}
                    onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                  />
                </div>
                <div>
                  <Label htmlFor="occupation">Occupation</Label>
                  <Input
                    id="occupation"
                    value={formData.occupation}
                    onChange={(e) => setFormData({ ...formData, occupation: e.target.value })}
                  />
                </div>
                <div>
                  <Label htmlFor="parentContact">Parent/Guardian Contact</Label>
                  <Input
                    id="parentContact"
                    type="tel"
                    value={formData.parentContact}
                    onChange={(e) => setFormData({ ...formData, parentContact: e.target.value })}
                  />
                </div>
              </div>
            </div>

            {/* Body Measurements */}
            <div>
              <h2 className="text-xl mb-4 pb-2 border-b">Body Measurements</h2>
              <div className="grid md:grid-cols-3 gap-6">
                <div>
                  <Label htmlFor="height">Height (cm) *</Label>
                  <Input
                    id="height"
                    type="number"
                    required
                    value={formData.height}
                    onChange={(e) => setFormData({ ...formData, height: e.target.value })}
                  />
                </div>
                <div>
                  <Label htmlFor="weight">Weight (kg) *</Label>
                  <Input
                    id="weight"
                    type="number"
                    required
                    value={formData.weight}
                    onChange={(e) => setFormData({ ...formData, weight: e.target.value })}
                  />
                </div>
                <div>
                  <Label htmlFor="chest">Chest (inches)</Label>
                  <Input
                    id="chest"
                    type="number"
                    value={formData.chest}
                    onChange={(e) => setFormData({ ...formData, chest: e.target.value })}
                  />
                </div>
                <div>
                  <Label htmlFor="shoulder">Shoulder (inches)</Label>
                  <Input
                    id="shoulder"
                    type="number"
                    value={formData.shoulder}
                    onChange={(e) => setFormData({ ...formData, shoulder: e.target.value })}
                  />
                </div>
                <div>
                  <Label htmlFor="waist">Waist (inches)</Label>
                  <Input
                    id="waist"
                    type="number"
                    value={formData.waist}
                    onChange={(e) => setFormData({ ...formData, waist: e.target.value })}
                  />
                </div>
                <div>
                  <Label htmlFor="shoeSize">Shoe Size</Label>
                  <Input
                    id="shoeSize"
                    value={formData.shoeSize}
                    onChange={(e) => setFormData({ ...formData, shoeSize: e.target.value })}
                  />
                </div>
              </div>
            </div>

            {/* Physical Features */}
            <div>
              <h2 className="text-xl mb-4 pb-2 border-b">Physical Features</h2>
              <div className="grid md:grid-cols-3 gap-6">
                <div>
                  <Label htmlFor="skinColour">Skin Colour *</Label>
                  <Input
                    id="skinColour"
                    required
                    value={formData.skinColour}
                    onChange={(e) => setFormData({ ...formData, skinColour: e.target.value })}
                  />
                </div>
                <div>
                  <Label htmlFor="eyeColour">Eye Colour</Label>
                  <Input
                    id="eyeColour"
                    value={formData.eyeColour}
                    onChange={(e) => setFormData({ ...formData, eyeColour: e.target.value })}
                  />
                </div>
                <div>
                  <Label htmlFor="hairColour">Hair Colour</Label>
                  <Input
                    id="hairColour"
                    value={formData.hairColour}
                    onChange={(e) => setFormData({ ...formData, hairColour: e.target.value })}
                  />
                </div>
              </div>
            </div>

            {/* Experience & Skills */}
            <div>
              <h2 className="text-xl mb-4 pb-2 border-b">Experience & Skills</h2>
              <div className="space-y-6">
                <div>
                  <Label htmlFor="talents">Talents & Special Skills</Label>
                  <Textarea
                    id="talents"
                    placeholder="E.g., Dancing, Singing, Acting, Sports..."
                    value={formData.talents}
                    onChange={(e) => setFormData({ ...formData, talents: e.target.value })}
                  />
                </div>
                <div className="flex items-center gap-2">
                  <Checkbox
                    id="hasExperience"
                    checked={formData.hasExperience}
                    onCheckedChange={(checked) => setFormData({ ...formData, hasExperience: checked as boolean })}
                  />
                  <Label htmlFor="hasExperience">I have modeling experience</Label>
                </div>
                {formData.hasExperience && (
                  <div>
                    <Label htmlFor="trainingPlace">Where did you train?</Label>
                    <Input
                      id="trainingPlace"
                      value={formData.trainingPlace}
                      onChange={(e) => setFormData({ ...formData, trainingPlace: e.target.value })}
                    />
                  </div>
                )}
                <div>
                  <Label>Modeling Interests</Label>
                  <div className="mt-2 space-y-2">
                    {modelingTypes.map(type => (
                      <div key={type} className="flex items-center gap-2">
                        <Checkbox
                          id={type}
                          checked={formData.modelingTypes.includes(type)}
                          onCheckedChange={(checked) => handleModelingTypeChange(type, checked as boolean)}
                        />
                        <Label htmlFor={type}>{type}</Label>
                      </div>
                    ))}
                  </div>
                </div>
                <div>
                  <Label htmlFor="links">Links to Events/Models Pages</Label>
                  <Textarea
                    id="links"
                    placeholder="Provide links that prove you identify as a model"
                    value={formData.links}
                    onChange={(e) => setFormData({ ...formData, links: e.target.value })}
                  />
                </div>
              </div>
            </div>

            {/* File Uploads */}
            <div>
              <h2 className="text-xl mb-4 pb-2 border-b">Documents & Photos</h2>
              <div className="space-y-6">
                <div>
                  <Label>National ID Photos *</Label>
                  <div className="grid md:grid-cols-2 gap-4 mt-2">
                    <div className="border-2 border-dashed rounded-lg p-6 text-center hover:border-blue-600 cursor-pointer transition-colors">
                      <Upload className="size-8 mx-auto mb-2 text-gray-400" />
                      <p className="text-sm">Upload ID Front</p>
                    </div>
                    <div className="border-2 border-dashed rounded-lg p-6 text-center hover:border-blue-600 cursor-pointer transition-colors">
                      <Upload className="size-8 mx-auto mb-2 text-gray-400" />
                      <p className="text-sm">Upload ID Back</p>
                    </div>
                  </div>
                </div>
                <div>
                  <Label>Professional Photos *</Label>
                  <p className="text-sm text-gray-600 mb-2">Upload at least 3 professional modeling photos</p>
                  <div className="border-2 border-dashed rounded-lg p-8 text-center hover:border-blue-600 cursor-pointer transition-colors">
                    <Upload className="size-12 mx-auto mb-2 text-gray-400" />
                    <p>Click to upload or drag and drop</p>
                    <p className="text-sm text-gray-500 mt-1">PNG, JPG up to 10MB each</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Submit */}
            <div className="flex gap-4 pt-4">
              <Button type="submit" size="lg">Submit Application</Button>
              <Button type="button" variant="outline" size="lg" onClick={() => navigate('landing')}>
                Cancel
              </Button>
            </div>
          </form>
        </Card>
      </div>
    </div>
  );
}