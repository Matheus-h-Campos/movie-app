import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import type { Movie } from '../typings';
import { baseUrl } from '../constants/movie';
import { FaPlay } from 'react-icons/fa';
import { PlayIcon } from '@heroicons/react/24/solid';
import { InformationCircleIcon } from '@heroicons/react/24/solid';

interface Props {
  netflixOriginals: Movie[];
}

export default function Banner({ netflixOriginals }: Props) {
  const [movie, setMovie] = useState<Movie | null>(null);

  useEffect(() => {
    setMovie(
      netflixOriginals[Math.floor(Math.random() * netflixOriginals.length)]
    );
  }, [netflixOriginals]);
  console.log(movie);

  return (
    <section className="flex flex-col space-y-2 py-16 md:space-y-4 lg:h-[65vh] lg:justify-end lg:pb-12">
      <div className="absolute top-0 left-0 -z-10 h-[95vh] w-screen">
        <Image
          src={`${baseUrl}${movie?.backdrop_path || movie?.poster_path}`}
          alt=""
          layout="fill"
          objectFit="cover"
        />
      </div>
      <h1 className="text-2xl lg-text-7xl md:text-4xl font-bold">
        {movie?.title || movie?.name || movie?.original_name}
      </h1>
      <p className="max-w-xs text-shadow-md text-xs md:max-w-lg md:text-lg lg:max-w-2xl lg:text-2xl">
        {movie?.overview}
      </p>

      <div className="flex space-x-3">
        <button className="bannerButton bg-white text-black">
          <PlayIcon className="h-4 w-4 text-black md:w-7 md:h-7" /> Play
        </button>
        <button className="bannerButton bg-[gray]/70">
          More Info <InformationCircleIcon className="h-4 w-4 md:w-7 md:h-7" />
        </button>
      </div>
    </section>
  );
}
