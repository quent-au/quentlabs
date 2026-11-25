import React from 'react';
import rawData from '../data/googleReviews.json';
import { GOOGLE_REVIEWS_URL } from '../config/business';
import { GoogleIcon } from './GoogleReviewsBadge';

type Review = {
  author: string;
  authorUrl: string | null;
  authorPhoto: string | null;
  rating: number | null;
  text: string;
  relativeTime: string;
  reviewUrl: string | null;
};

type GoogleReviewsData = {
  rating: number | null;
  userRatingCount: number;
  mapsUrl: string | null;
  reviews: Review[];
};

const data = rawData as GoogleReviewsData;
const reviews = data.reviews.filter((r) => r.text.trim());

const Stars: React.FC<{ rating: number; className?: string }> = ({ rating, className = 'h-4 w-4' }) => (
  <div className="flex gap-0.5" role="img" aria-label={`${rating} out of 5 stars`}>
    {[1, 2, 3, 4, 5].map((i) => (
      <svg key={i} viewBox="0 0 20 20" className={`${className} ${i <= Math.round(rating) ? 'text-[#FBBC05]' : 'text-gray-200'}`} fill="currentColor" aria-hidden="true">
        <path d="M10 1.5l2.6 5.3 5.9.9-4.25 4.1 1 5.85L10 14.9l-5.25 2.75 1-5.85L1.5 7.7l5.9-.9L10 1.5z" />
      </svg>
    ))}
  </div>
);

const ReviewCard: React.FC<{ review: Review }> = ({ review }) => {
  const author = review.authorUrl ? (
    <a href={review.authorUrl} target="_blank" rel="noopener noreferrer" className="hover:underline">
      {review.author}
    </a>
  ) : (
    review.author
  );

  return (
    <figure className="flex h-full flex-col rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
      <div className="flex items-center justify-between">
        {review.rating !== null && <Stars rating={review.rating} />}
        <GoogleIcon className="h-4 w-4" />
      </div>
      <blockquote className="mt-4 flex-1 whitespace-pre-line leading-relaxed text-gray-700">
        {review.text}
      </blockquote>
      <figcaption className="mt-6 flex items-center gap-3">
        {review.authorPhoto ? (
          <img
            src={review.authorPhoto}
            alt=""
            width={40}
            height={40}
            loading="lazy"
            referrerPolicy="no-referrer"
            className="h-10 w-10 rounded-full object-cover"
          />
        ) : (
          <span className="flex h-10 w-10 items-center justify-center rounded-full bg-cream font-semibold text-ink">
            {review.author.charAt(0)}
          </span>
        )}
        <div className="text-sm">
          <div className="font-semibold text-ink">{author}</div>
          {review.relativeTime && <div className="text-gray-500">{review.relativeTime}</div>}
        </div>
      </figcaption>
    </figure>
  );
};

const GoogleReviews: React.FC = () => {
  if (!reviews.length) return null;

  return (
    <section id="reviews" className="section-padding scroll-mt-16 bg-white">
      <div className="container-max">
        <div className="mb-12 flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <p className="eyebrow">Reviews</p>
            <h2 className="mt-3 text-4xl font-semibold tracking-tight text-gray-900 md:text-5xl">
              What clients say
            </h2>
            {data.rating !== null && (
              <div className="mt-5 flex items-center gap-3 text-gray-600">
                <span className="text-2xl font-semibold text-ink">{data.rating.toFixed(1)}</span>
                <Stars rating={data.rating} className="h-5 w-5" />
                <span>
                  {data.userRatingCount} {data.userRatingCount === 1 ? 'review' : 'reviews'} on Google
                </span>
              </div>
            )}
          </div>
          <a
            href={data.mapsUrl ?? GOOGLE_REVIEWS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary shrink-0"
          >
            <GoogleIcon />
            All reviews on Google
          </a>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {reviews.map((r) => (
            <ReviewCard key={`${r.author}-${r.relativeTime}`} review={r} />
          ))}
        </div>

        <p className="mt-8 flex items-center gap-2 text-sm text-gray-500">
          <GoogleIcon className="h-4 w-4" />
          Reviews from Google
        </p>
      </div>
    </section>
  );
};

export default GoogleReviews;
