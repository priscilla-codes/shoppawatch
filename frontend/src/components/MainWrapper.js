const MainWrapper = ({ page, children }) => {
  return <div className={'main-wrapper ' + (page ? page : '')}>{children}</div>;
};

export default MainWrapper;
