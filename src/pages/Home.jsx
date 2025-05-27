import BottomBanner from '@components/Banner/BottomBanner';
import CategoryBanner from '@components/Banner/CategoryBanner/CategoryBanner';
import GridLayout from '@components/Banner/GridBanner/GridLayout';
import TopBanner from '@components/Banner/TopBanner';

function Home() {
  return (
    <div>
      <TopBanner />
      <GridLayout />
      <CategoryBanner />
      <BottomBanner />
    </div>
  );
}

export default Home;
