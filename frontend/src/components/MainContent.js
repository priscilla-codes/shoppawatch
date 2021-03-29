const MainContent = ({ page, children }) => {
  return <div className={'main-content ' + (page ? page : '')}>{children}</div>;
};

export default MainContent;
