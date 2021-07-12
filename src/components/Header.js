import Button from "./Button";

const Header = ({ title }) => {
  const onClick = () => console.log("click");
  return (
    <header className="header">
      <h1>{title}</h1>
      {/* <Button color="black" text="hello" onClick={onClick} /> */}
    </header>
  );
};
Header.defaultProps = {
  title: "Time log",
};
// const headerstyling = {color:'red',backgroundColor:'black'};

export default Header;
