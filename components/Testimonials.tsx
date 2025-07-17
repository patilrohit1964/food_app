import { Star } from "lucide-react";
import React from "react";

type Props = {};

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
          <div className="bg-background p-6 rounded-lg shadow-sm">
            <div className="flex mb-4">
              {[
                ...Array(5).map((el, i) => (
                  <Star
                    className={`h-5 w-5 ${
                      i < "item.rating"
                        ? "fill-yellow-400 text-yellow-400"
                        : "text-muted-foreground"
                    }`}
                  />
                )),
              ]}
            </div>
            <p></p>
          </div>
        </div>
      </div>
    </section>
  );
}
