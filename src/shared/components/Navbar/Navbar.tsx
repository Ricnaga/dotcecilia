import { Bars3Icon } from '@heroicons/react/20/solid';
import { Button } from '../Button/Button';
import { Drawer } from '../Drawer/Drawer';
import { IconButton } from '../IconButton/IconButton';
import { useNavbar } from './hooks/useNavbar';

export function Navbar() {
  const {
    data: { links, menuIsOpen },
    functions: { logOut, setMenuAsOpen },
  } = useNavbar();

  return (
    <div>
      <div className="hidden sm:flex items-center">
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
        <Button variants="slide" onClick={logOut}>
          Sair
        </Button>
      </div>
      <div className="sm:hidden flex justify-end">
        <IconButton onClick={() => setMenuAsOpen((state) => !state)}>
          <Bars3Icon width={24} />
        </IconButton>
      </div>
      <Drawer
        isOpen={menuIsOpen}
        onClose={() => setMenuAsOpen((state) => !state)}
      >
        <div className="h-full w-full">
          <nav className="flex flex-col gap-10 mt-20 justify-between h-full">
            {links.map(({ href, children }) => (
              <a
                key={href}
                href={href}
                className="text-center text-5xl leading-4 font-medium mr-4 hover:text-sky-950 hover:drop-shadow-lg transition-all mb-10"
              >
                {children}
              </a>
            ))}
          </nav>
          <Button variants="center" className="w-full mt-10" onClick={logOut}>
            Sair
          </Button>
        </div>
      </Drawer>
    </div>
  );
}
