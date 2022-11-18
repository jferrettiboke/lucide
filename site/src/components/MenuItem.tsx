import {Link, LinkProps} from '@chakra-ui/react';
import { useRouter } from 'next/router';
import NextLink from 'next/link';
import {MenuItemData} from "../types";

interface MenuItemProps extends LinkProps {
  menuName: string,
  menuItem: MenuItemData,
}

const MenuItem = ({menuName, menuItem, ...rest}: MenuItemProps) => {
  const router = useRouter();
  const menuLinkIsActive = (currentPath, href) => currentPath.startsWith(href);
  if (menuItem.isExternal) {
    return (
      <Link
        href={menuItem.href}
        isExternal
        marginRight={6}
        key={menuName + '_' + menuItem.name}
        {...rest}
      >
        {menuItem.name}
      </Link>
    );
  }
  return (
    <NextLink href={menuItem.href}
              passHref
              key={menuName + '_' + menuItem.name}
    >
      <Link marginRight={6}
            {...rest}
            color={menuLinkIsActive(router.asPath, menuItem.href) ? 'brand.500' : 'inherit'}
      >
        {menuItem.name}
      </Link>
    </NextLink>
  );
};

export default MenuItem;
