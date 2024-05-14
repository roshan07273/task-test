"use client";
import { SwipeableButton } from "react-swipeable-button";
import { useRouter } from "next/navigation";

export default function App() {
  const router = useRouter();

  const onSuccess = () => {
    router.push("/page1");
  };

  return (
    <div className="sm md:w-[600px] h-[300px] bg-black-400">
      <SwipeableButton
        onSuccess={onSuccess}
        text="Swipe here!"
        text_unlocked="Health is wealth"
        color="#16362d"
      />
    </div>
  );
}
