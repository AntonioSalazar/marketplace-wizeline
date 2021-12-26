/* eslint-disable @next/next/no-img-element */
import { Footer, Navbar, BreadCrumbs, Hero } from '@components/common';
import { EthRates, WalletBar} from '@components/web3'
import { Card } from '@components/order'
import { List } from '@components/course';

export default function Home() {
  return (
    <div>
      <div className="relative bg-white overflow-hidden">
        <div className="relative max-w-7xl mx-auto px-4">
          <Navbar />
          <div className="fit">
            <Hero />
            <BreadCrumbs />
            <WalletBar />
            <EthRates />
            <Card />
            <List />
          </div>
        </div>
        <Footer />
      </div>
    </div>
  )
}