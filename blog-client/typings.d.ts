declare module '*.css';
declare module '*.less';
declare module '*.png';
declare module '*.svg' {
  export function ReactComponent(
    props: React.SVGProps<SVGSVGElement>,
  ): React.ReactElement;
  const url: string;
  export default url;
}

// 给React声明全局自定义属性
declare namespace React {
  let showLoading: () => void;
  let hideLoading: () => void;
}
