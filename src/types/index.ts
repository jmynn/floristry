export type TypeNavbarLink = {
  href: `/${string}`;
  label: string;
};

export type TypeService = {
  id: `0${number}`;
  title: string;
  image: `/${string}`;
};

export type TypeComposition = `/${'compositions' | 'catalog'}/${string}`;
export type TypeGift = Record<'id' | 'value', number> & {
  background?: `#${string}`;
};
