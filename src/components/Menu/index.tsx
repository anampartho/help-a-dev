import MenuItem from "./MenuItem";

const Menu = () => {
  return (
    <ul className="space-y-2 font-medium">
      <MenuItem name="URL Encoder" href="#url-encoder" />
      <MenuItem name="Password Generator" href="#password-generator" />
    </ul>
  );
};

export default Menu;
