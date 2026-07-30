import OurLawOffice from './sections/OurLawOffice';
import OurLawyers from './sections/OurLawyers';
import OurStaff from './sections/OurStaff';
import OfficeLocation from './sections/OfficeLocation';

export default function LawOffice() {
  return (
    <section className="bg-parchment">
      <OurLawOffice />
      <OurLawyers />
      <OurStaff />
      <OfficeLocation />
    </section>
  );
}
