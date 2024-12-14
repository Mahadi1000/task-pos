import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface ProductCardProps {
  name: string;
  brand: string;
  price: number;
  pieces: number;
  image: string;
}

export function ProductCard({
  name,
  brand,
  price,
  pieces,
  image,
}: ProductCardProps) {
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
          <Button className="mt-4 w-full" size="sm">
            Add to Cart
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
