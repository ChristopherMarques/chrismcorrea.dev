import Link from "next/link";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "../ui/navigation-menu";

const links = [
  { name: "who am I?", link: "/who-im-am" },
  { name: "projects", link: "/projects" },
  { name: "contact", link: "/contact" },
];

const Navbar = () => {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        {links.map((item, index) => (
          <>
            <NavigationMenuItem key={index}>
              <Link href={item.link} legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  {item.name}
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          </>
        ))}
      </NavigationMenuList>
    </NavigationMenu>
  );
};

export default Navbar;
