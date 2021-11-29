import PropTypes from "prop-types";

const BaseIcon = (props: { image: string, size?: number, title?: string }) => {
  const { image, size, title } = props;

  return (
    <div>
      <img
        height={size ? size : 64}
        src={ image }
        width={size ? size : 64}
      />
      <span> {title}</span>
    </div>
  );
};

BaseIcon.propTypes = {
  image: PropTypes.string.isRequired,
  size: PropTypes.number,
  title: PropTypes.string,
};

export default BaseIcon;
