import { cn } from "@/lib/utils";
import AnimatedGridPattern from "@/components/ui/animated-grid-pattern";

export default function WishlistHeader() {
  return (
    <div className="relative flex flex-col items-center justify-center h-[400px] w-full overflow-hidden rounded-lg border bg-background px-4 py-16 md:h-[500px] md:px-20 md:py-20 md:shadow-xl">
      <p className="z-10 text-4xl sm:text-5xl font-medium tracking-tighter text-center text-black dark:text-white">
        Your Wishlist
      </p>
      <span className="z-10 mt-4 text-base sm:text-lg md:text-xl max-w-3xl text-center leading-relaxed text-gray-600 dark:text-gray-300">
        Keep track of products you love and get notified about price drops or availability. Your personal shopping assistant is here to help you make informed decisions and never miss a great deal.
      </span>
      <AnimatedGridPattern
      numSquares={30}
      maxOpacity={0.1}
      duration={3}
      repeatDelay={1}
      className={cn(
        "[mask-image:radial-gradient(500px_circle_at_center,white,transparent)]",
        "inset-x-0 inset-y-[-30%] h-[200%] skew-y-12",
      )} />
    </div>
  );
}