"use client";
import { SwipeableButton } from "react-swipeable-button";
import { useRouter } from "next/navigation";

export default function Swipe() {
  const router = useRouter();

  const onSuccess = () => {
    router.push("/page2");
  };

  return (
    <div className="mt-4 mb-10">
      <SwipeableButton
        onSuccess={onSuccess}
        text="Swipe for track all!"
        text_unlocked="Health is wealth"
        color="#E707FA"
        style={{ maxWidth: "600px", maxHeight: "300px" }}
      />
    </div>
  );
}
