import Link from 'next/link'
import React, { useEffect, useRef, useState } from 'react'
import { useRouter } from 'next/navigation';
import { RxHamburgerMenu } from 'react-icons/rx';
import { IoIosArrowDown } from 'react-icons/io';
import { IoMdClose } from 'react-icons/io';

const Navigation = ({ menuItems, scrolled }: { menuItems: any, scrolled: boolean }) => {
  const router = useRouter();
  const [isDropdownOpen, setDropdownOpen] = useState<string | null>(null);
  const [openSubmenus, setOpenSubmenus] = useState<{ [key: string]: boolean }>(
    {}
  );
  const [submenuClicked, setSubmenuClicked] = useState<{
    [key: string]: boolean;
  }>({});
  const [isMobileMenu, setIsmobileMenu] = useState<boolean>(false);

  const dropdownRef = useRef<HTMLUListElement | null>(null);

  const isMenuActive = (menu: any) => {
    const currentPath = window.location.pathname;

    if (menu.link === currentPath) {
      return true;
    }

    const leftItemsActive = menu.items_on_left?.some(
      (item: any) => item.item_link === currentPath
    );
    const rightItemsActive = menu.items_on_right?.some(
      (item: any) => item.item_link === currentPath
    );

    return leftItemsActive || rightItemsActive;
  };

  const toggleDropdown = (menu: any) => {
    if (menu.link) {
      // If the menu item has a direct link, navigate to it and close the dropdown
      router.push(menu.link);
      handleLinkClick();
    } else {
      // If the menu item has a dropdown, toggle it
      if (isDropdownOpen === menu.heading) {
        // Close the dropdown if it's already open
        setDropdownOpen(null);
        setOpenSubmenus({});
        setSubmenuClicked({});
      } else {
        // Open the dropdown and close other submenus
        setDropdownOpen(menu.heading);
        setOpenSubmenus((prev) => {
          const newSubmenus = { ...prev };
          for (const k in newSubmenus) {
            newSubmenus[k] = false;
          }
          return newSubmenus;
        });
        setSubmenuClicked((prev) => ({
          ...prev,
          [menu.heading]: false,
        }));
      }
    }

    // Open the mobile menu if it's not already open
    if (!isDropdownOpen) {
      setIsmobileMenu(true);
    }
  };

  const handleArrowClick = (menu: any) => {
    // This function is triggered when the down arrow is clicked
    if (isDropdownOpen === menu.heading) {
      // Close the dropdown if it's already open
      setDropdownOpen(null);
      setOpenSubmenus({});
      setSubmenuClicked({});
    } else {
      // Open the dropdown
      setDropdownOpen(menu.heading);
      setOpenSubmenus((prev) => {
        const newSubmenus = { ...prev };
        for (const k in newSubmenus) {
          newSubmenus[k] = false;
        }
        return newSubmenus;
      });
      setSubmenuClicked((prev) => ({
        ...prev,
        [menu.heading]: false,
      }));
    }
  };

  const handleMouseEnter = (menu: any) => {
    if (!menu.link) {
      toggleDropdown(menu);
    }
  };

  const handleMouseLeave = () => {
    setDropdownOpen(null);
  };

  const toggleSubmenu = (
    key: string,
    link: string | null,
    hasTechnology: boolean,
    menuHeading: string
  ) => {
    const formattedHeading = menuHeading.toLowerCase().replace(/\s+/g, "-");
    const finalHeading =
      formattedHeading === "what-we-do" ? "services" : formattedHeading;
    const urlHeading =
      formattedHeading === "how-we-do" ? "engagement-models" : finalHeading;

    if (key === "Technologies" || key === "Partnerships") {
      if (link) {
        const formattedLink = link.startsWith("/") ? link.slice(1) : link;
        router.push(`/${formattedLink}`);
        handleLinkClick();
      }
      return;
    }

    if (link) {
      const formattedLink = link.startsWith("/") ? link.slice(1) : link;
      router.push(`/${urlHeading}/${formattedLink}`);
      handleLinkClick();
    } else if (hasTechnology) {
      setOpenSubmenus((prev) => ({
        ...prev,
        [key]: !prev[key],
      }));
    }

    // Close the mobile menu after selecting a submenu item
    setIsmobileMenu(false);
  };

  const handleLinkClick = () => {
    setDropdownOpen(null);
    setOpenSubmenus({});
    setSubmenuClicked({});
    setIsmobileMenu(false); // Close the mobile menu when a link is clicked
  };

  const toggelMobileMenu = () => {
    setIsmobileMenu(!isMobileMenu);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setDropdownOpen(null);
        setOpenSubmenus({});
        setSubmenuClicked({});
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  function getLastItemData(menuItems: string | any[]) {
    const lastItem = menuItems[menuItems.length - 1];
    return lastItem;
  }
  const lastItemData = getLastItemData(menuItems);

  return (
    <div className="h-full flex items-center lg:gap-8 gap-4 lg:flex-row flex-row-reverse">
      <nav className="h-full flex items-center lg:justify-unset justify-end">
        <button
          onClick={toggelMobileMenu}
          className={`lg:hidden flex items-center text-2xl ${scrolled ? 'text-black dark:text-white' : 'text-white'}`}
        >
          {isMobileMenu ? <IoMdClose /> : <RxHamburgerMenu />}
        </button>
        <ul
          className={`lg:overflow-y-visible overflow-y-auto z-10 w-full lg:h-full h-[calc(100vh-100px)] absolute lg:static lg:top-0 top-[100px] lg:border-0 border-[1px] lg:border-transparent border-gray-200 lg:dark:border-transparent dark:border-gray-800 lg:left-auto lg:right-auto left-0 right-0 lg:items-center items-start lg:p-0 p-4 lg:gap-8 md:-ga-8 gap-4 lg:bg-transparent bg-white lg:dark:bg-transparent dark:bg-black flex lg:flex-row flex-col ${isMobileMenu ? "translate-x-0" : "translate-x-full"
            } lg:transform-none transition-transform duration-300`}
          ref={dropdownRef}
        >
          {menuItems.map((menu: any) => (
            <li
              key={menu.id}
              className={`lg:h-full lg:w-auto w-full lg:flex items-center 
                ${menu.heading ? 'lg:border-b-0 md:border-b-0 border-b-[1px]' : ''} 
                lg:pb-0 md:pb-0 pb-4`}
              onMouseEnter={() => handleMouseEnter(menu)}
              onMouseLeave={handleMouseLeave}
            >
              <Link
                href={menu.link || "#"}
                onClick={() => {
                  if (menu.link) {
                    router.push(menu.link);
                    handleLinkClick();
                  }
                  handleArrowClick(menu);
                }}
                className={`text-md lg:w-auto w-full text-md z-30 flex items-center lg:justify-normal justify-between gap-2 lg:hover:text-blue-500 lg:dark:text-inherit dark:text-white
      ${isMenuActive(menu) ? 'font-bold' : 'font-medium text-black'}
      ${scrolled ? 'lg:text-black lg:dark:text-white' : 'lg:text-white lg:hover:text-white'} menu-item-button`}
              >
                <span className="underline-gap">{menu.heading}</span>
                {!menu.link && !menu.item_link && (
                  <IoIosArrowDown className={`ml-2 transition-transform ${isDropdownOpen === menu.heading ? 'rotate-180' : ''}`} />
                )}
              </Link>

              {isDropdownOpen === menu.heading && !menu.link && (
                <ul
                  className={`${menu.items_on_right.length !== 0
                    ? "w-full flex lg:flex-row flex-col justify-between left-0"
                    : "small-menu left-auto right-auto"
                    } ${(!menu.items_on_left.some((submenu: any) => submenu.technology) && !menu.items_on_right.some((submenu: any) => submenu.technology)) && 'short-menu'} bg-white dark:bg-black lg:absolute lg:max-h-[100vh] md:max-h-[80vh] sm:max-h-[45vh] max-h-[70vh] overflow-y-auto left-0 right-0 top-full lg:border-gray-200 lg:border-t-[1px] lg:dark:border-gray-800 gap-8 rounded-2xl lg:p-8 p-2`}
                >
                  <ul
                    className={`${menu.items_on_left && menu.items_on_left.some((submenu: any) => submenu.technology) ? "grid md:grid-cols-2 grid-cols-1 lg:gap-8 gap-4 lg:w-[65%]" : "grid grid-cols-1 lg:gap-8 gap-4 w-[100%]"
                      }`}
                  >
                    {menu.items_on_left &&
                      menu.items_on_left.map((submenu: any) => (
                        <li
                          key={submenu.id}
                          className={`${!submenu.technology ? "relative" : "relative"}`}
                        >
                          <Link
                            href={submenu.item_link || "#"}
                            onClick={(e) => {
                              e.preventDefault();
                              toggleSubmenu(
                                submenu.item,
                                submenu.item_link,
                                !!submenu.technology,
                                menu.heading
                              );
                            }}
                            className={`${menu.items_on_left && menu.items_on_left.some((submenu: any) => submenu.technology)
                              ? "text-md text-left flex items-center gap-2 pb-4 font-semibold text-blue-500"
                              : "flex items-center gap-2 text-md text-black dark:text-white hover:text-blue-500"}`}
                          >
                            <img
                              className="w-6 h-6"
                              src={`${process.env.NEXT_PUBLIC_IMAGE_URL}${submenu.icon.data.attributes.url}`}
                              alt=""
                            />
                            <span className="underline-gap">{submenu.item}</span>
                          </Link>
                          {submenu.technology && (
                            <ul className="flex flex-col pt-2">
                              {submenu.technology.items.map((item: any, index: number) => (
                                <li
                                  key={index}
                                  className="relative text-black dark:text-white pb-4 text-md hover:text-blue-500"
                                >
                                  <Link
                                    href={`/${menu.heading.toLowerCase().replace(/\s+/g, '-').replace('what-we-do', 'services')}/${submenu.item.toLowerCase().replace(/\s+/g, '-').replace(/&-/g, '')}/${item.link}`}
                                    className="text-md"
                                    onClick={handleLinkClick}
                                  >
                                    {item.title}
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          )}
                        </li>
                      ))}
                  </ul>
                  <ul
                    className={`${menu.items_on_left && menu.items_on_left.some((submenu: any) => submenu.technology) ? "flex flex-col lg:w-[35%] w-full gap-8" : "flex flex-col w-[100%] lg:gap-8 gap-4"
                      }`}
                  >
                    {menu.items_on_right &&
                      menu.items_on_right.map((submenu: any) => {
                        let baseUrl = `/${menu.heading.toLowerCase().replace(/\s+/g, '-')}`;
                        return (
                          <li key={submenu.id} className="relative flex flex-col">
                            <Link
                              href={submenu.item_link || "#"}  // If there's a link, navigate to it; otherwise, stay at the current page
                              onClick={(e) => {
                                e.preventDefault(); // Prevent default navigation behavior
                                toggleSubmenu(
                                  submenu.item,
                                  submenu.item_link,
                                  !!submenu.technology,
                                  menu.heading
                                );
                              }}
                              className={`${menu.items_on_right && menu.items_on_right.some((submenu: any) => submenu.technology)
                                ? "text-md text-left flex items-center gap-2 pb-4 font-semibold text-blue-500"
                                : "flex items-center text-black dark:text-white gap-2 text-md hover:text-blue-500"
                                }`}
                            >
                              <img
                                className="w-6 h-6"
                                src={`${process.env.NEXT_PUBLIC_IMAGE_URL}${submenu.icon.data.attributes.url}`}
                                alt=""
                              />
                              <span className="underline-gap">{submenu.item}</span>
                            </Link>
                            {submenu.technology && (
                              <ul className="flex flex-col pt-2">
                                {submenu.technology.items.map((item: any, index: number) => {
                                  const formattedSubmenuItem = submenu.item.toLowerCase().replace(/\s+/g, '-').replace(/&-/g, '');
                                  const formattedHeading = menu.heading.toLowerCase().replace(/\s+/g, '-');
                                  const finalHeading = formattedHeading === 'what-we-do' ? 'services' : formattedHeading;
                                  const urlHeading = formattedHeading === 'how-we-do' ? 'engagement-models' : finalHeading;

                                  if (urlHeading === 'services' && submenu.item === 'Specializations' && !submenu.item_link) {
                                    baseUrl = `/${formattedSubmenuItem}/${item.link}`;
                                  } else {
                                    baseUrl += `/${formattedSubmenuItem}/${item.link}`;
                                  }

                                  return (
                                    <li key={index} className="relative text-black dark:text-white pb-4 text-md hover:text-blue-500">
                                      <Link href={baseUrl} className="text-md" onClick={handleLinkClick}>
                                        {item.title}
                                      </Link>
                                    </li>
                                  );
                                })}
                              </ul>
                            )}
                          </li>
                        );
                      })}
                  </ul>
                </ul>
              )}
            </li>
          ))}
        </ul>
      </nav>
      <div className={`border-[1px] rounded-xl lg:w-40 w-32 lg:py-4 py-2 flex items-center justify-center ${scrolled ? 'bg-transparent text-blue-500 border-blue-500 hover:bg-blue-500 hover:text-white hover:border-transparent' : 'bg-transparent text-white border-white hover:bg-white hover:text-blue-500 hover:border-blue-500'}`}>
        {/* <Button
          onClick={handelContactUs}
          text={lastItemData?.item}
          className="text-md font-medium"
        /> */}
        <Link href={lastItemData?.item_link || '#'} passHref>
          {lastItemData?.item}
        </Link>
      </div>
    </div>
  );
};

export default Navigation;