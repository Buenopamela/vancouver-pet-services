import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: '/listings/yaletown-pet-hotel',
        destination: '/listings/jet-pet-resort-olympic-village-vancouver',
        permanent: true,
      },
      {
        source: '/listings/burnaby-pet-care',
        destination: '/listings/metro-dogs-daycare-grooming-burnaby',
        permanent: true,
      },
      {
        source: '/listings/happy-paws-dog-walking',
        destination: '/listings/paws-at-play-dog-walking-vancouver',
        permanent: true,
      },
      {
        source: '/listings/north-van-grooming',
        destination: '/listings/golden-pet-services-north-vancouver',
        permanent: true,
      },
      {
        source: '/listings/downtown-dog-walks',
        destination: '/listings/snoop-troop-dog-walking-downtown-vancouver',
        permanent: true,
      },
      {
        source: '/listings/mount-pleasant-walkers',
        destination: '/listings/sit-stay-sparkle-mount-pleasant-vancouver',
        permanent: true,
      },
      {
        source: '/listings/west-end-pet-sitting',
        destination: '/listings/woof-and-purr-west-end-vancouver',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
