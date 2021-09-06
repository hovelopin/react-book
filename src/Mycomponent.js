import React from 'react';

const Mycomponent = ({ name, children }) => {
  return (
    <div>
      나의 새롭고 멋진 컴포넌트 {name} <br />
      children 값은 {children} 입니다.
    </div>
  );
};

Mycomponent.defaultProps = {
  name: '기본이름'
};

export default Mycomponent;
