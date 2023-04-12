import MainBodyShocking from '@/components/shockingSale/mainBodyShocking'
import HeaderCom from '@/lib/header'
import Footer from '@/navAndFooter/footer'
import Navber from '@/navAndFooter/navber'
import React from 'react'

export default function RewardsAndGift() {
  return (
    <>
      <HeaderCom title="Rewards And Gift" />

      <main>
        <Navber />
        <MainBodyShocking />

        <Footer />
      </main>
    </>
  )
}
