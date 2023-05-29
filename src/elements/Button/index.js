import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const Button = (props) => {
  const {
    type,
    onClick,
    target,
    className,
    isDisabled,
    isLoading,
    isSmall,
    isLarge,
    isBlock,
    hasShadow,
    isPrimary,
    isExternal,
    href,
    children,
    style,
  } = props;

  const classNames = [className];

  if (isPrimary) classNames.push("btn-primary");
  if (isLarge) classNames.push("btn-lg");
  if (isSmall) classNames.push("btn-sm");
  if (isBlock) classNames.push("btn-block");
  if (hasShadow) classNames.push("btn-shadow");

  const onclickHandler = () => {
    if (onClick) onClick();
  };

  if (isDisabled || isLoading) {
    if (isDisabled) classNames.push("disabled");

    return (
      <span className={classNames.join(" ")} style={style}>
        {isLoading ? (
          <>
            <span className='spinner-border spinner-border-sm mx-5'></span>
            <span className='sr-only'>Loading...</span>
          </>
        ) : (
          children
        )}
      </span>
    );
  }

  if (type === "link") {
    if (isExternal) {
      return (
        <a
          href={href}
          className={classNames.join(" ")}
          style={style}
          target={target === "_blank" ? "_blank" : undefined}
          rel={target === "_blank" ? "noreferrer noopener" : undefined}>
          {children}
        </a>
      );
    } else {
      return (
        <Link
          to={href}
          className={classNames.join(" ")}
          style={style}
          onClick={onclickHandler}>
          {children}
        </Link>
      );
    }
  }

  return (
    <button
      className={classNames.join(" ")}
      style={style}
      onClick={onclickHandler}>
      {children}
    </button>
  );
};

Button.protoTypes = {
  type: PropTypes.oneOf(["button", "link"]),
  onClick: PropTypes.func,
  href: PropTypes.string,
  target: PropTypes.string,
  className: PropTypes.string,
  isDisabled: PropTypes.bool,
  isPrimary: PropTypes.bool,
  isExternal: PropTypes.bool,
  isLoading: PropTypes.bool,
  isSmall: PropTypes.bool,
  isLarge: PropTypes.bool,
  isBlock: PropTypes.bool,
  hasShadow: PropTypes.bool,
};

export default Button;
