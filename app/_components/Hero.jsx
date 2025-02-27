import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Hero() {
    return (
        <section>
            <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-16">
                <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
                    <div className="relative h-64 overflow-hidden rounded-lg sm:h-80 lg:order-last lg:h-full">
                        <Image
                            src="/banner-hero.jpg"
                            className="absolute inset-0 h-full w-full object-cover 
                            rounded-3xl"
                            alt="banner"
                            width={800}
                            height={800}
                        />
                    </div>

                    <div className="sm:py-12 lg:py-24">
                        <h2 className="lg:text-5xl sm:text-2xl font-bold capitalize text-gray-900">
                            Lorem ipsum dolor
                        </h2>

                        <p className="mt-4 text-gray-700 lg:text-lg">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur doloremque saepe
                            architecto maiores repudiandae amet perferendis repellendus, reprehenderit voluptas
                            sequi.
                        </p>

                        <Button className="mt-4 capitalize">
                            Book your appointment!
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    );
}