import { forwardRef, ReactNode } from 'react';
import "./index.css"
interface DivProps {
  children?: ReactNode;
  type: string;
}
export type DivRef = HTMLDivElement;

const DivForRef: React.ForwardRefRenderFunction<DivRef, DivProps> = (props, ref) => {
  return (
    <div className="textArea"
      ref={ref}
    >
      {props.children}
    </div>
  );
};
export const FancyDiv = forwardRef<DivRef, DivProps>(DivForRef);
