'use client';

import { useState } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export interface CarouselImage {
    src: string;
    alt: string;
    title?: string;
    subtitle?: string;
}

interface ImageCarouselProps {
    images: CarouselImage[];
}

export default function ImageCarousel({ images }: ImageCarouselProps) {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextImage = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    const prevImage = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    };

    if (!images || images.length === 0) return null;

    return (
        <div className="relative w-full h-[400px] md:h-[600px] bg-[#111] overflow-hidden group mb-12 border border-gray-200">
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent z-10 pointer-events-none" />

            <Image
                src={images[currentIndex].src}
                alt={images[currentIndex].alt}
                fill
                className="object-cover transition-opacity duration-500"
            />

            {(images[currentIndex].title || images[currentIndex].subtitle) && (
                <div className="absolute bottom-8 left-8 z-20">
                    {images[currentIndex].title && (
                        <h4 className="text-white font-heading text-lg md:text-xl uppercase tracking-widest">{images[currentIndex].title}</h4>
                    )}
                    {images[currentIndex].subtitle && (
                        <p className="text-gray-400 font-body text-xs md:text-sm mt-2">{images[currentIndex].subtitle}</p>
                    )}
                </div>
            )}

            {/* Controls */}
            {images.length > 1 && (
                <>
                    <button
                        onClick={prevImage}
                        className="absolute left-4 top-1/2 -translate-y-1/2 z-30 p-2 bg-black/50 text-white hover:bg-black/80 transition-colors opacity-0 group-hover:opacity-100"
                        aria-label="Previous Image"
                    >
                        <ChevronLeft className="w-6 h-6 md:w-8 md:h-8" />
                    </button>
                    <button
                        onClick={nextImage}
                        className="absolute right-4 top-1/2 -translate-y-1/2 z-30 p-2 bg-black/50 text-white hover:bg-black/80 transition-colors opacity-0 group-hover:opacity-100"
                        aria-label="Next Image"
                    >
                        <ChevronRight className="w-6 h-6 md:w-8 md:h-8" />
                    </button>

                    {/* Dots */}
                    <div className="absolute bottom-4 right-8 z-30 flex gap-2">
                        {images.map((_, idx) => (
                            <button
                                key={idx}
                                onClick={() => setCurrentIndex(idx)}
                                className={`w-2 h-2 rounded-full transition-all duration-300 ${idx === currentIndex ? 'bg-white w-4' : 'bg-white/40 hover:bg-white/60'
                                    }`}
                                aria-label={`Go to slide ${idx + 1}`}
                            />
                        ))}
                    </div>
                </>
            )}
        </div>
    );
}
