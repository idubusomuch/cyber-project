import BottomBanner from '@components/Banner/BottomBanner';
import CategoryBanner from '@components/Banner/CategoryBanner/CategoryBanner';
import GridLayout from '@components/Banner/GridBanner/GridLayout';
import ProductsBanner from '@components/Banner/ProductsBanner';
import TopBanner from '@components/Banner/TopBanner';

function Home() {
  return (
    <div>
      <TopBanner />
      <GridLayout />
      <CategoryBanner />
      <ProductsBanner />
      <BottomBanner />
    </div>
  );
}

export default Home;
