import { Button } from "@/components/ui/button";

export default function Hero() {
    return (
        <section>
            <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-16">
                <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
                    <div className="relative h-64 overflow-hidden rounded-lg sm:h-80 lg:order-last lg:h-full">
                        <img
                            src="https://images.unsplash.com/photo-1731690415686-e68f78e2b5bd?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                            className="absolute inset-0 h-full w-full object-cover rounded"
                            alt="banner"
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

                        <Button className="mt-4 capitalize">Book your appointment!</Button>
                    </div>
                </div>
            </div>
        </section>
    );
}