import styles from "./styles.module.scss";
import useToggleAlert from "../../hooks/useToggleAlert";
import PropTypes from "prop-types";

const BaseDialog = (props: {
  onOpenDialog: boolean;
  summary: string;
  title: string;
  BaseButton: any;
}) => {
  const { onOpenDialog, summary, title, BaseButton } = props;
  const [isOpened, setIsOpened] = useToggleAlert(onOpenDialog);

  return (
    <div>
      {isOpened && (
        <div className={styles.backdrop}>
          <div className={styles.dialog}>
            <div className={styles.menu}>
              <a
                href="#modal-closed"
                className={styles.link_to_close_dialog}
                onClick={() => setIsOpened(false)}
              ></a>
            </div>
            <div className={styles.header}>
              <h2>{title}</h2>
            </div>
            <section>
              <p>{summary}</p>
              <div className={styles.button} onClick={() => setIsOpened(false)}>
                {BaseButton}
              </div>
            </section>
          </div>
        </div>
      )}
    </div>
  );
};

BaseDialog.propTypes = {
  onOpenDialog: PropTypes.bool.isRequired,
  summary: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  BaseButton: PropTypes.object,
};

export default BaseDialog;
