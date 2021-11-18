import PropTypes from "prop-types";

const BaseIcon = (props: { name: string }) => {
  const { name } = props;
  // TODO Raduan: make an exception for ton.svg, and load it locally; you can find brand assets here https://ton.org/brand-assets.

  return (
    <div>
      <img
        src={
          require(`../node_modules/cryptocurrency-icons/svg/color/${name}.svg`)
            .default.src
        }
      />
    </div>
  );
};

BaseIcon.propTypes = {
  name: PropTypes.string.isRequired,
};

export default BaseIcon;
