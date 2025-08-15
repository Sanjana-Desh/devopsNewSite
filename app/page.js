'use client';

import Spline from '@splinetool/react-spline/next';

export default function Home() {
  return (
    <main className="w-full h-screen overflow-hidden">
      <div className="w-full h-full">
        <Spline
          scene="https://prod.spline.design/Hwlcz5JZMTZgK9OQ/scene.splinecode" 
        />
      </div>
    </main>
  );
} 