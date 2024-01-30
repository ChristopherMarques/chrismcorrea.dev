import { ReactNode } from "react";

interface ContainerProps {
  children: ReactNode;
}

const Container = ({ children }: ContainerProps) => {
  return (
    <div className="flex flex-row w-100 h-100 justify-end py-1.5 px-3">
      {children}
    </div>
  );
};

export default Container;
