import { Star } from "lucide-react";
import React from "react";

type Props = {};

const testimonials = [
  {
    name: "Alice Johnson",
    rating: 5,
    comment:
      "The food was absolutely delicious and the service was outstanding!",
    avatar: "/public/res.jpeg",
  },
  {
    name: "Bob Smith",
    rating: 4,
    comment: "Great atmosphere and tasty dishes. Will definitely come back.",
    avatar: "/public/globe.svg",
  },
  {
    name: "Carol Lee",
    rating: 5,
    comment: "A wonderful experience from start to finish. Highly recommended!",
    avatar: "/public/vercel.svg",
  },
];

export default function Testimonials(props: Props) {
  return (
    <section className="container mx-auto py-16 bg-secondary/10">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">What our Guest Say</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Don't just take our word for it - hear from our satisfied customers
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-background p-6 rounded-lg shadow-lg">
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`h-5 w-5 ${
                      i < testimonial.rating
                        ? "fill-yellow-400 text-yellow-400"
                        : "text-muted-foreground"
                    }`}
                  />
                ))}
              </div>
              <p className="text-muted-foreground">{testimonial.comment}</p>
              <p className="text-sm font-medium mt-4">{testimonial.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
