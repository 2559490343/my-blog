import { NavLink } from 'umi';
import './index.less';
export default function Header() {
  return (
    <header>
      <div className="logo">
        <span className="B">B</span>
        <span className="L">L</span>
        <span className="O">O</span>
        <span className="G">G</span>
      </div>
      <div className="nav">
        <nav>
          <NavLink to="/visualization" activeClassName="active">
            可视化
          </NavLink>
          <NavLink to="/stylesheet" activeClassName="active">CSS</NavLink>
          <NavLink to="/javascript" activeClassName="active">JavaScript</NavLink>
          <NavLink to="/webpack" activeClassName="active">Webpack</NavLink>
          <NavLink to="/vue" activeClassName="active">Vue</NavLink>
          <NavLink to="/react" activeClassName="active">React</NavLink>
          <NavLink to="/git" activeClassName="active">Git</NavLink>
          <NavLink to="/linux" activeClassName="active">Linux</NavLink>
          <NavLink to="/rep" activeClassName="active">知识库</NavLink>
        </nav>
      </div>
    </header>
  );
}
