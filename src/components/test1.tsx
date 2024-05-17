import useMenuStore from "@/store/menuStore";

export const Test1 = () => {
  const { setCurrentMenu } = useMenuStore();
  return (
    <div
      onClick={() => {
        setCurrentMenu("전역상태");
      }}
    >
      테스트
    </div>
  );
};
