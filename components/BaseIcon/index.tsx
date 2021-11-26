import PropTypes from "prop-types";

const BaseIcon = (props: { image: string }) => {
  const { image } = props;

  return (
    <div>
      <img
        height={64}
        src={ image }
        width={64}
      />
    </div>
  );
};

BaseIcon.propTypes = {
  image: PropTypes.string.isRequired,
};

export default BaseIcon;
