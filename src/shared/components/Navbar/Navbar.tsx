import { Button } from '../Button/Button';
import { useNavbar } from './hooks/useNavbar';

export function Navbar() {
  const {
    data: { links },
    functions: { logOut },
  } = useNavbar();

  return (
    <div className="flex items-center">
      <nav className="grow">
        {links.map(({ href, children }) => (
          <a
            key={href}
            href={href}
            className="text-xl leading-4 font-medium mr-4 hover:text-sky-950 hover:drop-shadow-lg transition-all"
          >
            {children}
          </a>
        ))}
      </nav>
      <Button className="text-lg" variants="slide" onClick={logOut}>
        Sair
      </Button>
    </div>
  );
}
