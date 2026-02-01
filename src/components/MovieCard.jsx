import { StarIcon as StarIconSolid } from "@heroicons/react/24/solid";
import { StarIcon as StarIconOutline } from "@heroicons/react/24/outline";

const StarIconComponent = ({ isFilled }) => {
  const Icon = isFilled ? StarIconSolid : StarIconOutline;

  return (
    <Icon
      className={`movie-item-star-icon ${
        isFilled ? "text-yellow-400" : "text-gray-300"
      }`}
      aria-hidden="true"
    />
  );
};

const MAX_RATING = 5;

export default function MovieCard({ card }) {
  const { name, description, image, genres = [], rating } = card ?? {};

  const normalizedRating = Number.isFinite(Number(rating)) ? Number(rating) : 0;
  const filledStars = Math.max(0, Math.min(MAX_RATING, Math.round(normalizedRating)));

  return (
    <div className="justify-around  gap-2 mt-10">
      <div className="">
        <img
          src={image}
          alt={name}
          width={300}
          height={450}
          />
      </div>

      <div className="movie-item-content-wrapper">
        <div className="movie-item-title-wrapper">
          <h3 className="movie-item-title">{name}</h3>
        </div>

        <div className="movie-item-genres-wrapper">
          {genres.map((genre) => (
            <span key={genre} className="movie-item-genre-tag">
              {genre}
            </span>
          ))}
        </div>

        <div className="movie-item-description-wrapper">
          <p className="movie-item-description">{description}</p>
        </div>

        <div className="movie-item-rating-wrapper">
          <div
            className="movie-item-star-icon-wrapper"
            aria-label={`Rating: ${filledStars} out of ${MAX_RATING}`}
          >
            {Array.from({ length: MAX_RATING }).map((_, index) => {
              const isFilled = index < filledStars;
              return (
                <StarIconComponent key={`star-${index}`} isFilled={isFilled} />
              );
            })}
          </div>
          <p className="movie-item-rating-text">
            {filledStars}/{MAX_RATING}
          </p>
        </div>
      </div>
    </div>
  );
}