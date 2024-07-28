import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <h1 className="text-6xl font-bold text-neutral-900 dark:text-neutral-50">404 - Page Not Found</h1>
      <div className="mt-14">
        <Link href="/">
          <Button variant="default">Go back home</Button>
        </Link>
      </div>
    </div>
  );
}
