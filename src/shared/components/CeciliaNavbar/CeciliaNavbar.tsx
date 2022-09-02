import { CeciliaButton } from '../CeciliaButton/CeciliaButton';
import { useCeciliaNavbar } from './useCeciliaNavbar';

export function CeciliaNavbar() {
  const {
    data: { links },
    functions: { logOut },
  } = useCeciliaNavbar();

  return (
    <div className="grid grid-cols-12 my-4">
      <nav className="col-span-11">
        {links.map(({ href, children }) => (
          <a key={children} href={href} className="anchor-sky mr-4">
            {children}
          </a>
        ))}
      </nav>
      <div className="col-span-1">
        <CeciliaButton title="Sair" className="py-1 text-lg" onClick={logOut} />
      </div>
    </div>
  );
}
