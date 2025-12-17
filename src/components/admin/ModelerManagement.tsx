import { useState } from 'react';
import { Search, Edit, Ban, CheckCircle, Eye } from 'lucide-react';
import { Card } from '../ui/card';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Badge } from '../ui/badge';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '../ui/dialog';
import { Label } from '../ui/label';
import { Textarea } from '../ui/textarea';

export default function ModelerManagement() {
  const [selectedModel, setSelectedModel] = useState<any>(null);
  const [editModel, setEditModel] = useState<any>(null);

  const models = [
    { 
      id: 'M001', 
      name: 'Sarah Johnson', 
      idNumber: '920123456V', 
      email: 'sarah@example.com', 
      phone: '+94 77 123 4567', 
      status: 'active', 
      basePrice: 5000, 
      rating: 4.8, 
      bookings: 47, 
      joinedDate: '2025-01-15',
      bio: 'Professional fashion and commercial model with 5+ years of experience. Specialized in runway, editorial, and brand campaigns.',
      height: '175 cm',
      weight: '58 kg',
      bust: '86 cm',
      waist: '64 cm',
      hips: '91 cm',
      shoeSize: '38',
      hairColor: 'Blonde',
      eyeColor: 'Blue',
      photo: 'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=400'
    },
    { 
      id: 'M002', 
      name: 'Emily Davis', 
      idNumber: '930234567V', 
      email: 'emily@example.com', 
      phone: '+94 71 234 5678', 
      status: 'active', 
      basePrice: 6000, 
      rating: 4.9, 
      bookings: 52, 
      joinedDate: '2025-02-20',
      bio: 'Versatile model experienced in high-fashion editorials and commercial work. Available for print, runway, and promotional events.',
      height: '178 cm',
      weight: '60 kg',
      bust: '88 cm',
      waist: '66 cm',
      hips: '93 cm',
      shoeSize: '39',
      hairColor: 'Brown',
      eyeColor: 'Green',
      photo: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=400'
    },
    { 
      id: 'M003', 
      name: 'Michael Brown', 
      idNumber: '880445789V', 
      email: 'michael@example.com', 
      phone: '+94 76 345 6789', 
      status: 'inactive', 
      basePrice: 5500, 
      rating: 4.7, 
      bookings: 35, 
      joinedDate: '2025-03-10',
      bio: 'Male model specializing in fitness, lifestyle, and commercial photography. Experience in catalog and brand ambassador work.',
      height: '185 cm',
      weight: '78 kg',
      chest: '98 cm',
      waist: '81 cm',
      hips: '95 cm',
      shoeSize: '43',
      hairColor: 'Black',
      eyeColor: 'Brown',
      photo: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400'
    },
  ];

  const toggleStatus = (model: any) => {
    const newStatus = model.status === 'active' ? 'inactive' : 'active';
    alert(`✓ Model ${model.name} has been ${newStatus === 'active' ? 'activated' : 'deactivated'} successfully.`);
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl">Modeler Management</h2>
        <div className="flex items-center gap-3">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-gray-400" />
            <Input placeholder="Search models..." className="pl-10 w-64" />
          </div>
          <select className="h-10 px-3 rounded-md border border-gray-300">
            <option>All Status</option>
            <option>Active</option>
            <option>Inactive</option>
          </select>
        </div>
      </div>

      <div className="space-y-4">
        {models.map((model) => (
          <Card key={model.id} className="p-6">
            <div className="flex items-start justify-between mb-4">
              <div>
                <h3 className="text-xl mb-1">{model.name}</h3>
                <div className="flex items-center gap-3 text-sm text-gray-600">
                  <span>ID: {model.id}</span>
                  <span>•</span>
                  <span>NIC: {model.idNumber}</span>
                </div>
              </div>
              <Badge className={model.status === 'active' ? 'bg-green-600' : 'bg-gray-600'}>
                {model.status}
              </Badge>
            </div>

            <div className="grid md:grid-cols-5 gap-4 mb-4">
              <div>
                <div className="text-sm text-gray-600">Contact</div>
                <div className="text-sm">{model.phone}</div>
                <div className="text-sm">{model.email}</div>
              </div>
              <div>
                <div className="text-sm text-gray-600">Base Price</div>
                <div className="text-sm">LKR {model.basePrice.toLocaleString()}</div>
              </div>
              <div>
                <div className="text-sm text-gray-600">Rating</div>
                <div className="text-sm">{model.rating} ★</div>
              </div>
              <div>
                <div className="text-sm text-gray-600">Total Bookings</div>
                <div className="text-sm">{model.bookings}</div>
              </div>
              <div>
                <div className="text-sm text-gray-600">Joined</div>
                <div className="text-sm">{new Date(model.joinedDate).toLocaleDateString()}</div>
              </div>
            </div>

            <div className="flex gap-3 pt-4 border-t">
              <Button variant="outline" size="sm" onClick={() => setSelectedModel(model)}>
                <Eye className="size-4 mr-2" />
                View Profile
              </Button>
              <Button variant="outline" size="sm" onClick={() => setEditModel(model)}>
                <Edit className="size-4 mr-2" />
                Edit
              </Button>
              <Button
                size="sm"
                variant={model.status === 'active' ? 'destructive' : 'default'}
                onClick={() => toggleStatus(model)}
              >
                {model.status === 'active' ? <Ban className="size-4 mr-2" /> : <CheckCircle className="size-4 mr-2" />}
                {model.status === 'active' ? 'Deactivate' : 'Activate'}
              </Button>
              <Button variant="outline" size="sm" onClick={() => alert(`✓ Password reset link has been sent to ${model.email}`)}>
                Reset Password
              </Button>
            </div>
          </Card>
        ))}
      </div>

      {/* Model Profile Modal */}
      {selectedModel && (
        <Dialog open={true} onOpenChange={() => setSelectedModel(null)}>
          <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
            <DialogHeader>
              <DialogTitle>Model Profile</DialogTitle>
            </DialogHeader>
            
            <div className="space-y-5">
              {/* Profile Header with Photo */}
              <div className="flex gap-4 pb-5 border-b">
                <div className="w-24 h-24 bg-gray-100 rounded overflow-hidden flex-shrink-0">
                  <img src={selectedModel.photo} alt={selectedModel.name} className="w-full h-full object-cover" />
                </div>
                <div className="flex-1">
                  <h3 className="mb-2">{selectedModel.name}</h3>
                  <div className="space-y-1 text-sm text-gray-600">
                    <div>Model ID: {selectedModel.id}</div>
                    <div>NIC: {selectedModel.idNumber}</div>
                    <div className="flex items-center gap-2">
                      Status: <Badge className={selectedModel.status === 'active' ? 'bg-green-600' : 'bg-gray-600'}>
                        {selectedModel.status}
                      </Badge>
                    </div>
                  </div>
                </div>
              </div>

              {/* Contact Information */}
              <div>
                <Label className="mb-2 block">Contact Information</Label>
                <div className="grid grid-cols-2 gap-4">
                  <div className="p-3 bg-gray-50 rounded">
                    <div className="text-xs text-gray-600 mb-1">Email</div>
                    <div className="text-sm">{selectedModel.email}</div>
                  </div>
                  <div className="p-3 bg-gray-50 rounded">
                    <div className="text-xs text-gray-600 mb-1">Phone</div>
                    <div className="text-sm">{selectedModel.phone}</div>
                  </div>
                </div>
              </div>

              {/* Bio */}
              <div>
                <Label className="mb-2 block">Bio</Label>
                <div className="p-3 bg-gray-50 rounded text-sm text-gray-700">
                  {selectedModel.bio}
                </div>
              </div>

              {/* Physical Measurements */}
              <div>
                <Label className="mb-2 block">Physical Measurements</Label>
                <div className="grid grid-cols-4 gap-3">
                  <div className="p-3 bg-gray-50 rounded">
                    <div className="text-xs text-gray-600 mb-1">Height</div>
                    <div className="text-sm">{selectedModel.height}</div>
                  </div>
                  <div className="p-3 bg-gray-50 rounded">
                    <div className="text-xs text-gray-600 mb-1">Weight</div>
                    <div className="text-sm">{selectedModel.weight}</div>
                  </div>
                  <div className="p-3 bg-gray-50 rounded">
                    <div className="text-xs text-gray-600 mb-1">Hair Color</div>
                    <div className="text-sm">{selectedModel.hairColor}</div>
                  </div>
                  <div className="p-3 bg-gray-50 rounded">
                    <div className="text-xs text-gray-600 mb-1">Eye Color</div>
                    <div className="text-sm">{selectedModel.eyeColor}</div>
                  </div>
                  <div className="p-3 bg-gray-50 rounded">
                    <div className="text-xs text-gray-600 mb-1">{selectedModel.bust ? 'Bust' : 'Chest'}</div>
                    <div className="text-sm">{selectedModel.bust || selectedModel.chest}</div>
                  </div>
                  <div className="p-3 bg-gray-50 rounded">
                    <div className="text-xs text-gray-600 mb-1">Waist</div>
                    <div className="text-sm">{selectedModel.waist}</div>
                  </div>
                  <div className="p-3 bg-gray-50 rounded">
                    <div className="text-xs text-gray-600 mb-1">Hips</div>
                    <div className="text-sm">{selectedModel.hips}</div>
                  </div>
                  <div className="p-3 bg-gray-50 rounded">
                    <div className="text-xs text-gray-600 mb-1">Shoe Size</div>
                    <div className="text-sm">{selectedModel.shoeSize}</div>
                  </div>
                </div>
              </div>

              {/* Performance Statistics */}
              <div>
                <Label className="mb-2 block">Performance Statistics</Label>
                <div className="grid grid-cols-3 gap-4">
                  <div className="p-3 bg-gray-50 rounded text-center">
                    <div className="text-2xl mb-1">{selectedModel.rating}</div>
                    <div className="text-xs text-gray-600">Rating ★</div>
                  </div>
                  <div className="p-3 bg-gray-50 rounded text-center">
                    <div className="text-2xl mb-1">{selectedModel.bookings}</div>
                    <div className="text-xs text-gray-600">Total Bookings</div>
                  </div>
                  <div className="p-3 bg-gray-50 rounded text-center">
                    <div className="text-2xl mb-1">LKR {selectedModel.basePrice.toLocaleString()}</div>
                    <div className="text-xs text-gray-600">Base Price</div>
                  </div>
                </div>
              </div>

              {/* Joined Date */}
              <div>
                <Label className="mb-2 block">Account Information</Label>
                <div className="p-3 bg-gray-50 rounded">
                  <div className="text-xs text-gray-600 mb-1">Joined Date</div>
                  <div className="text-sm">{new Date(selectedModel.joinedDate).toLocaleDateString()}</div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex justify-end gap-3 pt-5 border-t">
                <Button variant="outline" onClick={() => setSelectedModel(null)}>
                  Close
                </Button>
                <Button variant="outline" onClick={() => {
                  setSelectedModel(null);
                  setEditModel(selectedModel);
                }}>
                  Edit Profile
                </Button>
                <Button 
                  variant={selectedModel.status === 'active' ? 'destructive' : 'default'}
                  onClick={() => toggleStatus(selectedModel)}
                >
                  {selectedModel.status === 'active' ? 'Deactivate' : 'Activate'}
                </Button>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      )}

      {/* Edit Model Modal */}
      {editModel && (
        <Dialog open={true} onOpenChange={() => setEditModel(null)}>
          <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
            <DialogHeader>
              <DialogTitle>Edit Model Profile</DialogTitle>
            </DialogHeader>
            
            <div className="space-y-5">
              {/* Profile Header with Photo */}
              <div className="flex gap-4 pb-5 border-b">
                <div className="w-24 h-24 bg-gray-100 rounded overflow-hidden flex-shrink-0">
                  <img src={editModel.photo} alt={editModel.name} className="w-full h-full object-cover" />
                </div>
                <div className="flex-1">
                  <h3 className="mb-2">{editModel.name}</h3>
                  <div className="space-y-1 text-sm text-gray-600">
                    <div>Model ID: {editModel.id}</div>
                    <div>NIC: {editModel.idNumber}</div>
                  </div>
                </div>
              </div>

              {/* Contact Information */}
              <div>
                <Label className="mb-2 block">Contact Information</Label>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="email" className="text-xs text-gray-600 mb-1 block">Email</Label>
                    <Input id="email" type="email" defaultValue={editModel.email} />
                  </div>
                  <div>
                    <Label htmlFor="phone" className="text-xs text-gray-600 mb-1 block">Phone</Label>
                    <Input id="phone" type="tel" defaultValue={editModel.phone} />
                  </div>
                </div>
              </div>

              {/* Bio */}
              <div>
                <Label htmlFor="bio" className="mb-2 block">Bio</Label>
                <Textarea
                  id="bio"
                  defaultValue={editModel.bio}
                  rows={3}
                />
              </div>

              {/* Physical Measurements */}
              <div>
                <Label className="mb-2 block">Physical Measurements</Label>
                <div className="grid grid-cols-4 gap-3">
                  <div>
                    <Label htmlFor="height" className="text-xs text-gray-600 mb-1 block">Height</Label>
                    <Input id="height" defaultValue={editModel.height} />
                  </div>
                  <div>
                    <Label htmlFor="weight" className="text-xs text-gray-600 mb-1 block">Weight</Label>
                    <Input id="weight" defaultValue={editModel.weight} />
                  </div>
                  <div>
                    <Label htmlFor="hairColor" className="text-xs text-gray-600 mb-1 block">Hair Color</Label>
                    <Input id="hairColor" defaultValue={editModel.hairColor} />
                  </div>
                  <div>
                    <Label htmlFor="eyeColor" className="text-xs text-gray-600 mb-1 block">Eye Color</Label>
                    <Input id="eyeColor" defaultValue={editModel.eyeColor} />
                  </div>
                  <div>
                    <Label htmlFor="bust" className="text-xs text-gray-600 mb-1 block">{editModel.bust ? 'Bust' : 'Chest'}</Label>
                    <Input id="bust" defaultValue={editModel.bust || editModel.chest} />
                  </div>
                  <div>
                    <Label htmlFor="waist" className="text-xs text-gray-600 mb-1 block">Waist</Label>
                    <Input id="waist" defaultValue={editModel.waist} />
                  </div>
                  <div>
                    <Label htmlFor="hips" className="text-xs text-gray-600 mb-1 block">Hips</Label>
                    <Input id="hips" defaultValue={editModel.hips} />
                  </div>
                  <div>
                    <Label htmlFor="shoeSize" className="text-xs text-gray-600 mb-1 block">Shoe Size</Label>
                    <Input id="shoeSize" defaultValue={editModel.shoeSize} />
                  </div>
                </div>
              </div>

              {/* Pricing & Status */}
              <div>
                <Label className="mb-2 block">Pricing & Status</Label>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="basePrice" className="text-xs text-gray-600 mb-1 block">Base Price (LKR)</Label>
                    <Input id="basePrice" type="number" defaultValue={editModel.basePrice} />
                  </div>
                  <div>
                    <Label htmlFor="status" className="text-xs text-gray-600 mb-1 block">Status</Label>
                    <select id="status" className="w-full h-10 px-3 rounded-md border border-gray-300" defaultValue={editModel.status}>
                      <option value="active">Active</option>
                      <option value="inactive">Inactive</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Performance Statistics - Read Only */}
              <div>
                <Label className="mb-2 block">Performance Statistics (Read Only)</Label>
                <div className="grid grid-cols-3 gap-4">
                  <div className="p-3 bg-gray-50 rounded text-center">
                    <div className="text-2xl mb-1">{editModel.rating}</div>
                    <div className="text-xs text-gray-600">Rating ★</div>
                  </div>
                  <div className="p-3 bg-gray-50 rounded text-center">
                    <div className="text-2xl mb-1">{editModel.bookings}</div>
                    <div className="text-xs text-gray-600">Total Bookings</div>
                  </div>
                  <div className="p-3 bg-gray-50 rounded text-center">
                    <div className="text-xs text-gray-600 mb-1">Joined Date</div>
                    <div className="text-sm">{new Date(editModel.joinedDate).toLocaleDateString()}</div>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex justify-end gap-3 pt-5 border-t">
                <Button variant="outline" onClick={() => setEditModel(null)}>
                  Cancel
                </Button>
                <Button onClick={() => {
                  alert(`✓ Model profile for ${editModel.name} has been updated successfully.`);
                  setEditModel(null);
                }}>
                  Save Changes
                </Button>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      )}
    </div>
  );
}