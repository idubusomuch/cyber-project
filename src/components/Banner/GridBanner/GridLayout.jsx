import React from 'react';

import Airpods from '@images/AirpodsMax.png';
import Vision from '@images/AppleVisionPro.png';
import Playstation from '@images/Playstation.png';

import GridBanner from './GridBanner';
import MacbookBanner from './MacbookBanner';

export default function GridLayout() {
  const AirpodsBanner = (
    <GridBanner
      bgColor="bg-[#ededed]"
      productImg={Airpods}
      title="Apple AirPods"
      titleBold="Max"
      description="Computational audio. Listen, it's powerful"
    />
  );

  const VisionBanner = (
    <GridBanner
      bgColor="bg-[#353535]"
      textColor="text-white"
      productImg={Vision}
      title="Apple Vision"
      titleBold="Pro"
      description="An immersive way to experience entertainment"
    />
  );

  const PlaystationBanner = (
    <GridBanner
      productImg={Playstation}
      title="Playstation"
      titleBold="5"
      description="Incredibly powerful CPUs, GPUs, and an SSD with integrated I/O will redefine your PlayStation experience."
    />
  );

  return (
    <>
      {/* pc */}
      <div className="hidden lg:grid lg:grid-cols-4 lg:grid-rows-2 lg:h-[600px]">
        <div className="lg:col-span-2 lg:row-span-1">{PlaystationBanner}</div>
        <div className="lg:col-span-2 lg:row-span-2">
          <MacbookBanner />
        </div>
        <div className="lg:col-span-1 lg:row-span-1">{AirpodsBanner}</div>
        <div className="lg:col-span-1 lg:row-span-1">{VisionBanner}</div>
      </div>

      {/* mobile */}
      <div className="flex flex-col lg:hidden">
        {AirpodsBanner}
        {VisionBanner}
        {PlaystationBanner}
        <MacbookBanner />
      </div>
    </>
  );
}
