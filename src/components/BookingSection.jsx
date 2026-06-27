import InfoPanel from './InfoPanel';
import BookingForm from './BookingForm';

const BookingSection = () => {
  return (
    <section id="booking" className="relative w-full min-h-[100dvh] lg:h-[100dvh] flex items-center py-12 lg:py-0 bg-cream overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center lg:items-stretch">
          <InfoPanel />
          <BookingForm />
        </div>
      </div>
    </section>
  );
};

export default BookingSection;
