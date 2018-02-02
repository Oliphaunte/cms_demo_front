import React from 'react'

import { Gallery, Gallery_Slider } from "@/app/components/organisms/home"

const Home = () => (
  <main className="t__home-page">
    <Gallery_Slider></Gallery_Slider>

    <section>
      <Gallery></Gallery>
    </section>
  </main>
)

export default Home