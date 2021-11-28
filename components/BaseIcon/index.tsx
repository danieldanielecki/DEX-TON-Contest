import PropTypes from "prop-types";

const BaseIcon = (props: { image: string, size?: number }) => {
  const { image, size } = props;

  return (
    <div>
      <img
        height={size ? size : 64}
        src={ image }
        width={size ? size : 64}
      />
    </div>
  );
};

BaseIcon.propTypes = {
  image: PropTypes.string.isRequired,
  size: PropTypes.number,
};

export default BaseIcon;
