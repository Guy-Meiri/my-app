import { forwardRef, ReactNode } from 'react';
import "./index.css"
interface DivProps {
  children?: ReactNode;
  type: string;
}
export type DivRef = HTMLDivElement;

const KeywordListRef: React.ForwardRefRenderFunction<DivRef, DivProps> = (props, ref) => {
  return (
    <div className="flex2">
      <h6>Keyword List</h6>
      <div className="textArea"
        ref={ref}
      >
        {props.children}
      </div>
    </div>
  );
};
export const KeywordList = forwardRef<DivRef, DivProps>(KeywordListRef);
