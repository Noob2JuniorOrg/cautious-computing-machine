import { NavigationDesktop } from './NavigationDesktop';

export const Header = () => {
  return (
    <div className="main-header-container">
      <NavigationDesktop />
      <h1 className="p-5 font-light uppercase mt-24 w-3/5 border-2 border-solid border-white font-josefinSans text-6xl tracking-wider text-white">
        Immersive experiences that deliver
      </h1>
    </div>
  );
};
