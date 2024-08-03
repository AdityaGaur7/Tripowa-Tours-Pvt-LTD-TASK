export default function BottomMenuBar() {
    return (
      <div className="fixed bottom-0 left-0 w-full bg-blue-500 text-white flex justify-around items-center py-2">
        <a href="/home" className="text-lg">Home</a>
        <a href="/explore" className="text-lg">Explore</a>
      </div>
    );
  }
  