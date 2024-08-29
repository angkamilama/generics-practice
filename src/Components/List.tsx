{
  /* <List items={[22, "sukmit", 56, { name: "ang" }, 6, 23]} /> */
}

type ListProps<T extends number | string | object> = {
  items: T[];
};

export const List = <T extends number | string | object>({
  items,
}: ListProps<T>) => {
  return (
    <div>
      <h2>List of items</h2>
      {items.map((item, index) => (
        <div key={index}>{typeof item === "object" ? item.name : item}</div>
      ))}
    </div>
  );
};
