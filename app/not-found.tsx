import Strong from '@/components/atoms/strong';

const NotFound = () => (
  <div className="absolute top-0 right-0 bottom-0 left-0 grid place-items-center">
    <Strong asChild className="items-center justify-center text-4xl md:text-6xl">
      <h1>404 - Page Not Found</h1>
    </Strong>
  </div>
);

export default NotFound;
