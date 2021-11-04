import { withRouter, NavLink } from 'umi';
import { ReactNode } from 'react';
import './index.less';

type linkType = {
  to: string;
  label: string;
};
interface navLinkArray {
  map(arg0: (link: linkType) => JSX.Element): ReactNode;
  [propName: number]: linkType;
}
interface navList {
  [propName: string]: navLinkArray;
}

export default withRouter(function Aside(props) {
  const { pathname } = props.location;
  const path: string = '/' + pathname.split('/')[1];
  const navList: navList = {
    '/visualization': [
      {
        label: 'echarts',
        to: '/visualization/echarts',
      },
      {
        label: 'AntV/L7',
        to: '/visualization/AntVL7',
      },
      {
        label: 'three.js',
        to: '/visualization/threejs',
      },
    ],
    '/stylesheet': [
      {
        label: 'css的精彩世界',
        to: '/stylesheet/world',
      },
    ],
    '/javascript': [
      {
        label: '数据类型',
        to: '/javascript/dataYype',
      },
      {
        label: '作用域以及闭包机制',
        to: '/javascript/closure',
      },
      {
        label: '算法',
        to: '/javascript/algorithm',
      },
      {
        label: '高阶编程',
        to: '/javascript/highOrder',
      },
      {
        label: '封装工具包',
        to: '/javascript/tools',
      },
      {
        label: '面向对象',
        to: '/javascript/oop',
      },
      {
        label: 'Promise',
        to: '/javascript/promise',
      },
      {
        label: 'HTTP网络层',
        to: '/javascript/http',
      },
    ],
    '/webpack': [
      {
        label: '配置选项',
        to: '/webpack/config',
      },
      {
        label: '底层原理',
        to: '/webpack/principle',
      },
      {
        label: '性能优化',
        to: '/webpack/performance',
      },
    ],
    '/vue': [
      {
        label: 'vue2的底层原理',
        to: '/vue/vue2',
      },
      {
        label: 'vue3实践',
        to: '/vue/vue3',
      },
      {
        label: 'vue3的底层原理',
        to: '/vue/Vue3Principle',
      },
    ],
    '/react': [
      {
        label: 'hooks',
        to: '/react/hooks',
      },
      {
        label: '底层原理',
        to: '/react/principle',
      },
    ],
    '/gitDir': [
      {
        label: '常用命令',
        to: '/gitDir/commands',
      },
    ],
    '/linux': [
      {
        label: '常用命令',
        to: '/linux/commands',
      },
      {
        label: '部署服务器实践',
        to: '/linux/deploy',
      },
    ],
    '/rep': [
      {
        label: '前端知识图谱',
        to: '/rep/graph',
      },
      {
        label: '常用文章地址',
        to: '/rep/commonlyAddress',
      },
    ],
  };
  return (
    <aside>
      <nav>
        {navList[path].map((link: linkType) => (
          <NavLink to={link.to} key={link.to}>
            {link.label}
          </NavLink>
        ))}
      </nav>
    </aside>
  );
});
