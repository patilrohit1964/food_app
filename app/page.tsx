import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen overflow-hidden">
      <main className="flex-1">
        <section className="relative h-[80vh] max-h-[800px]">
          <div className="absolute inset-0 bg-black/50 z-10">
            <Image
              src={"/res.jpeg"}
              alt="hero image"
              fill
              className="object-cover"
            />
            <div className="container relative z-20 h-full flex flex-col justify-center items-start text-white mx-4">
              <h1 className="text-4xl md:text-6xl font-bold mb-4">
                Authentic flavour, <br /> <span>Exceptional</span> Dinning
              </h1>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
