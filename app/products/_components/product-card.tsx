"use client"
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { addToCart } from "@/redux/slices/cart.slice";
import { useAppDispatch } from "@/hooks/store.hook";

interface ProductCardProps {
  id: number;
  name: string;
  brand: string;
  price: number;
  pieces: number;
  image: string;
}

export function ProductCard({
  id,
  name,
  brand,
  price,
  pieces,
  image,
}: ProductCardProps) {
  const dispatch = useAppDispatch();

  const handleAddToCart = () => {
    dispatch(addToCart({ id, name, brand, price, image }));
  };

  return (
    <Card className="overflow-hidden transition-colors hover:bg-accent">
      <CardContent className="p-4">
        <div className="aspect-square overflow-hidden rounded-lg">
          <Image
            src={image}
            alt={name}
            width={200}
            height={200}
            className="h-full w-full object-cover"
          />
        </div>
        <div className="mt-4">
          <h3 className="font-medium">{name}</h3>
          <p className="text-sm text-muted-foreground">{brand}</p>
          <div className="mt-2 flex items-center justify-between">
            <div className="text-sm">Retail Price €{price}</div>
            <div className="text-sm text-muted-foreground">{pieces} piece</div>
          </div>
          <Button className="mt-4 w-full" size="sm" onClick={handleAddToCart}>
            Add to Cart
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}