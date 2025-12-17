import { useState } from 'react';
import { Star, X } from 'lucide-react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '../ui/dialog';
import { Button } from '../ui/button';
import { Label } from '../ui/label';
import { Textarea } from '../ui/textarea';

interface RatingModalProps {
  isOpen: boolean;
  onClose: () => void;
  bookingId: string;
  modelName: string;
  eventName: string;
  onSubmit: (rating: number, review: string) => void;
}

export default function RatingModal({ 
  isOpen, 
  onClose, 
  bookingId, 
  modelName, 
  eventName,
  onSubmit 
}: RatingModalProps) {
  const [rating, setRating] = useState(0);
  const [hoveredRating, setHoveredRating] = useState(0);
  const [review, setReview] = useState('');

  const handleSubmit = () => {
    if (rating === 0) {
      alert('Please select a rating');
      return;
    }
    onSubmit(rating, review);
    // Reset form
    setRating(0);
    setReview('');
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-md">
        <DialogHeader>
          <DialogTitle>Rate Your Experience</DialogTitle>
          <DialogDescription>
            Share your experience with {modelName} for {eventName}
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-6 pt-4">
          {/* Star Rating */}
          <div>
            <Label className="mb-3 block">Overall Rating</Label>
            <div className="flex items-center gap-2">
              {[1, 2, 3, 4, 5].map((star) => (
                <button
                  key={star}
                  type="button"
                  onClick={() => setRating(star)}
                  onMouseEnter={() => setHoveredRating(star)}
                  onMouseLeave={() => setHoveredRating(0)}
                  className="transition-transform hover:scale-110"
                >
                  <Star
                    className={`size-10 transition-colors ${
                      star <= (hoveredRating || rating)
                        ? 'fill-yellow-400 text-yellow-400'
                        : 'text-gray-300'
                    }`}
                  />
                </button>
              ))}
              {rating > 0 && (
                <span className="ml-2 text-lg">
                  {rating === 1 && '😞 Poor'}
                  {rating === 2 && '😐 Fair'}
                  {rating === 3 && '🙂 Good'}
                  {rating === 4 && '😊 Very Good'}
                  {rating === 5 && '🤩 Excellent'}
                </span>
              )}
            </div>
          </div>

          {/* Review Text */}
          <div>
            <Label htmlFor="review" className="mb-2 block">
              Write a Review (Optional)
            </Label>
            <Textarea
              id="review"
              placeholder="Share details about your experience, the model's professionalism, punctuality, and overall performance..."
              value={review}
              onChange={(e) => setReview(e.target.value)}
              rows={5}
              className="resize-none"
            />
            <p className="text-xs text-gray-500 mt-2">
              Your review helps other customers and improves our service
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-3 pt-2">
            <Button
              variant="outline"
              onClick={onClose}
              className="flex-1"
            >
              Cancel
            </Button>
            <Button
              onClick={handleSubmit}
              disabled={rating === 0}
              className="flex-1 bg-black hover:bg-gray-800"
            >
              Submit Rating
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
