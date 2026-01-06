import React from 'react';
import { Review } from '../types';

const StarIcon: React.FC = () => (
    <svg className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
    </svg>
);

const ReviewCard: React.FC<{ review: Review }> = ({ review }) => (
    <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 flex flex-col shadow-lg border border-gray-200/50">
        <div className="flex mb-4">
            {[...Array(5)].map((_, i) => <StarIcon key={i} />)}
        </div>
        <h3 className="text-xl font-semibold text-gray-800 mb-4">"{review.quote}"</h3>
        <p className="text-gray-500 mt-auto">{review.author}</p>
    </div>
);


const Reviews: React.FC = () => {
    const reviews: Review[] = [
        { quote: "A game changer for travelers", author: "Chicagosnow1" },
        { quote: "No more roaming costs or buying extra eSIMs", author: "nnnoah25" },
        { quote: "Legitimately the best carrier experience", author: "r_x_rx" }
    ];

    return (
        <section className="py-20 lg:py-32 bg-[#F7F4FA]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-6xl font-bold tracking-tighter text-gray-900">They love it, so will you</h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {reviews.map((review, index) => (
                        <ReviewCard key={index} review={review} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Reviews;
