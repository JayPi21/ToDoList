import Button from "./button";

const Header = ({title}) => {
  return (
    <header className='header'>
      <h1>{title}</h1>
      
     
    </header>
  );
};
Header.defaultProps = {
  title: "Time log",
};
// const headerstyling = {color:'red',backgroundColor:'black'};

export default Header;
