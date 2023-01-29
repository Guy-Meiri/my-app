import { forwardRef, ReactNode } from 'react';

interface DivProps {
  children?: ReactNode;
  type: string;
}
export type DivRef = HTMLDivElement;

const DivForRef: React.ForwardRefRenderFunction<DivRef, DivProps> = (props, ref) => {
  console.log(`type from props: ${props.type}`);
  return (
    <div
      style={{
        margin: '40px',
        border: '1px solid black',
        maxHeight: '50px',
        overflowX: 'hidden',
        overflowY: 'auto',
        width: '100px',
        minHeight: '40px',
      }}
      ref={ref}
    >
      {props.children}
    </div>
  );
};
export const FancyDiv = forwardRef<DivRef, DivProps>(DivForRef);
