import React from 'react';

import Arrow from '@icons/24px/Arrow.svg';
import Cameras from '@icons/Cameras.svg';
import Computers from '@icons/Computers.svg';
import Gaming from '@icons/Gaming.svg';
import Headphones from '@icons/Headphones.svg';
import phones from '@icons/Phones.svg';
import SmartWatches from '@icons/SmartWatches.svg';

import CategoryCard from './CategoryCard';

export default function CategoryBanner() {
  return (
    <div className="px-8 py-12 mx-auto max-w-[1200px]">
      <div className="grid grid-cols-[1fr_auto] items-center py-5">
        <h2 className="text-[1.5em] sm:text-[2em] lg:text-[3em]">
          Browse By Category
        </h2>
        <div className="flex gap-2">
          <img
            src={Arrow}
            alt="category prev icon"
            className="transform scale-x-[-1] w-[2em] sm:w-[2.5em] lg:w-[3em]"
          />
          <img
            src={Arrow}
            alt="category next icon"
            className="w-[2em] sm:w-[2.5em] lg:w-[3em]"
          />
        </div>
      </div>
      <div className="grid grid-cols-2 gap-5 py-5 md:grid-cols-3 lg:grid-cols-6">
        <CategoryCard icon={phones} title="Phones" />
        <CategoryCard icon={SmartWatches} title="Smart Watches" />
        <CategoryCard icon={Cameras} title="Cameras" />
        <CategoryCard icon={Headphones} title="Headphones" />
        <CategoryCard icon={Computers} title="Computers" />
        <CategoryCard icon={Gaming} title="Gaming" />
      </div>
    </div>
  );
}
