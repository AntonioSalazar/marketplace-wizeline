import { BreadCrumbs, Hero } from '@components/common';
import { EthRates, WalletBar} from '@components/web3'
import { Card } from '@components/order'
import { List } from '@components/course';
import { Layout } from '@components/layout';

export default function Home() {
  return (
    <Layout>
      <Hero />
      <BreadCrumbs />
      <WalletBar />
      <EthRates />
      <Card />
      <List />
    </Layout>
  )
}