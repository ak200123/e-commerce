import React from 'react'
import styled from 'styled-components'
import FeatureProducts from './components/FeatureProducts'
import HeroSection from './HeroSection'
import Services from './pages/Services'
import Trusted from './pages/Trusted'

export default function Home() {
    return (
        <>
            <HeroSection name={"This is home page."} image="https://media.istockphoto.com/id/475440646/photo/young-family-in-shopping.jpg?s=612x612&w=0&k=20&c=Ef6cKPXSnPMWMzkRCsJXfNSqhoelb5IpxvRRp1krqes=" />
            <FeatureProducts />
            <Services />
            <Trusted />
        </>
    )
}

