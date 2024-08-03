'use client'
import { useRouter } from 'next/navigation';

export default function LoginPage() {
  const router = useRouter();

  const handleExploreClick = () => {
    router.push('/home');
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="p-6 bg-white rounded-lg shadow-lg">
        <h1 className="text-2xl font-semibold mb-4">Login</h1>
        <button
          onClick={handleExploreClick}
          className="w-full py-2 px-4 bg-blue-500 text-white rounded-lg"
        >
          Explore
        </button>
      </div>
    </div>
  );
}
